import { spawnSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseEntry } from "./entry-schema.ts";

const repo = "uinaf/intake";
const bot = "glitch418x[bot]";
const mutation = `mutation($input: CreateCommitOnBranchInput!) {
  createCommitOnBranch(input: $input) { commit { oid } }
}`;

export interface CommandResult {
  status: number | null;
  stdout: string;
  diagnostics?: string;
}
export type Run = (command: string, args: string[], cwd: string, input?: string) => CommandResult;

// Only the credential helper and gh-app-auth may supply authentication. In particular,
// do not inherit gh's token/debug overrides or Git's tracing/config overrides.
export const run: Run = (command, args, cwd, input) => {
  const env: NodeJS.ProcessEnv = {};
  for (const key of [
    "PATH",
    "HOME",
    "TMPDIR",
    "XDG_CONFIG_HOME",
    "XDG_DATA_HOME",
    "PNPM_HOME",
    "MISE_DATA_DIR",
    "MISE_CONFIG_DIR",
    "NODE_EXTRA_CA_CERTS",
    "NODE_USE_ENV_PROXY",
    "SSL_CERT_FILE",
    "SSL_CERT_DIR",
    "CURL_CA_BUNDLE",
    "HTTPS_PROXY",
    "HTTP_PROXY",
    "ALL_PROXY",
    "NO_PROXY",
    "https_proxy",
    "http_proxy",
    "all_proxy",
    "no_proxy",
  ]) {
    if (process.env[key]) env[key] = process.env[key];
  }
  env.GIT_TERMINAL_PROMPT = "0";
  if (command === "pnpm") env.MISE_TRUSTED_CONFIG_PATHS = cwd;
  const result = spawnSync(command, args, {
    cwd,
    input,
    env,
    encoding: "utf8",
    timeout: 300_000,
    maxBuffer: 16 * 1024 * 1024,
  });
  return {
    status: result.status,
    stdout: result.stdout ?? "",
    diagnostics: sanitizeDiagnostics(
      [result.stdout, result.stderr, result.error?.message].filter(Boolean).join("\n"),
    ).slice(-8000),
  };
};

function sanitizeDiagnostics(value: string): string {
  return value
    .replace(/(https?:\/\/)[^\s/@]+:[^\s/@]+@/gi, "$1[redacted]@")
    .replace(/(authorization["'\s:=]+)(?:bearer|basic)\s+[^\s,}\]]+/gi, "$1[redacted]")
    .replace(/\b(?:gh[pousr]_[A-Za-z0-9_]+|github_pat_[A-Za-z0-9_]+)\b/g, "[redacted]")
    .replace(/(authorization|token|password|secret)(["'\s:=]+)[^\s,}\]]+/gi, "$1$2[redacted]");
}

function object(value: unknown): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value));
}
function json(text: string): Record<string, unknown> {
  try {
    return object(JSON.parse(text));
  } catch {
    return {};
  }
}
function apiDiagnostics(response: CommandResult): string {
  const errors = json(response.stdout).errors;
  const reasons = Array.isArray(errors)
    ? errors.flatMap((error) => {
        const { type, message } = object(error);
        return [type, message].filter((value) => typeof value === "string").join(": ") || [];
      })
    : [];
  const details = sanitizeDiagnostics(
    [...reasons, response.diagnostics].filter(Boolean).join("\n"),
  ).slice(-8000);
  return `GitHub API exit ${response.status ?? "unavailable/timeout"}${details ? `\n${details}` : ""}`;
}
function oid(value: unknown): string {
  if (typeof value !== "string" || !/^[a-f0-9]{40}$/.test(value))
    throw new Error("API returned a missing or invalid commit ID");
  return value;
}

export async function publish(
  repository: string,
  draft: string,
  entryPath: string,
  execute: Run = run,
): Promise<string> {
  if (!/^entries\/(\d{4})\/\1-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(entryPath)) {
    throw new Error("entry path must match entries/YYYY/YYYY-MM-DD-slug.md");
  }
  repository = resolve(repository);
  const content = readFileSync(resolve(draft), "utf8");
  function command(program: string, args: string[], cwd = repository, input?: string): string {
    const result = execute(program, args, cwd, input);
    if (result.status !== 0)
      throw new Error(
        `${program} ${args[0]} failed (${args[1] ?? "command"}, exit ${result.status ?? "unavailable/timeout"}); check prerequisites, authentication, and repository validation${result.diagnostics ? `\n${result.diagnostics}` : ""}`,
      );
    return result.stdout.trimEnd();
  }
  const origin = command("git", ["remote", "get-url", "origin"]);
  if (
    !["https://github.com/uinaf/intake.git", "https://github.com/uinaf/intake"].includes(origin)
  ) {
    throw new Error("origin must use HTTPS for the canonical github.com/uinaf/intake repository");
  }
  function api(endpoint: string, input?: unknown): CommandResult {
    return execute(
      "gh",
      [
        "app-auth",
        "exec",
        "--repo",
        `github.com/${repo}`,
        "--",
        "gh",
        "api",
        "--hostname",
        "github.com",
        endpoint,
        ...(input === undefined ? ["--method", "GET"] : ["--input", "-"]),
      ],
      repository,
      input === undefined ? undefined : JSON.stringify(input),
    );
  }
  const identity = api("graphql", { query: "query { viewer { login } }" });
  const identityBody = json(identity.stdout);
  const identityErrors = identityBody.errors;
  if (
    identity.status !== 0 ||
    object(object(identityBody.data).viewer).login !== bot ||
    (identityErrors != null && (!Array.isArray(identityErrors) || identityErrors.length > 0))
  ) {
    throw new Error(`authentication failed: gh app-auth must select ${bot} for github.com/${repo}`);
  }
  function fetchHead(): string {
    command("git", ["fetch", "origin", "main"]);
    return oid(command("git", ["rev-parse", "FETCH_HEAD"]));
  }
  const scratch = mkdtempSync(join(tmpdir(), "uinaf-intake-"));
  const worktree = join(scratch, "worktree");
  let attached = false;
  let original: string | undefined;
  let initial = true;
  let writeAttempted = false;
  const message = `content(intake): publish ${basename(entryPath, ".md")}\n\nIntake-Publication: ${randomUUID()}`;
  try {
    for (let attempt = 1; attempt <= 3; attempt++) {
      const head = fetchHead();
      if (attached) {
        command("git", ["worktree", "remove", "--force", worktree]);
        attached = false;
      }
      command("git", ["worktree", "add", "--detach", worktree, head]);
      attached = true;
      const target = join(worktree, entryPath);
      const tracked = command("git", ["ls-tree", head, "--", entryPath]);
      if (tracked && !tracked.startsWith("100644 blob "))
        throw new Error("entry must be a regular Markdown file");
      const existing = tracked ? readFileSync(target, "utf8") : undefined;
      if (initial) {
        original = existing;
        initial = false;
      } else if (existing !== original)
        throw new Error("concurrent entry edit: merge the latest entry deliberately and rerun");
      // Reject changed source/date instead of silently rewriting the user's draft.
      const previous = existing === undefined ? undefined : await parseEntry(target, worktree);
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, content);
      const proposed = await parseEntry(target, worktree);
      if (
        previous &&
        (previous.data.saved !== proposed.data.saved ||
          previous.data.source !== proposed.data.source)
      ) {
        throw new Error("existing-entry updates must preserve the original saved date and source");
      }
      command("pnpm", ["install", "--frozen-lockfile"], worktree);
      command("pnpm", ["run", "check:entries"], worktree);
      command("git", ["add", "--", entryPath], worktree);
      command("pnpm", ["run", "verify"], worktree);
      if (existing === content) return "entry is unchanged (no publication)";
      const tree = oid(command("git", ["write-tree"], worktree));
      writeAttempted = true;
      const response = api("graphql", {
        query: mutation,
        variables: {
          input: {
            branch: { repositoryNameWithOwner: repo, branchName: "main" },
            expectedHeadOid: head,
            message: { headline: message.split("\n")[0], body: message.split("\n\n")[1] },
            fileChanges: {
              additions: [{ path: entryPath, contents: Buffer.from(content).toString("base64") }],
            },
          },
        },
      });
      const body = json(response.stdout);
      const result = object(object(body.data).createCommitOnBranch);
      let published = object(result.commit).oid;
      const fresh = fetchHead();
      command("git", ["merge-base", "--is-ancestor", head, fresh]);
      // A clientMutationId is not an idempotency key. Reconcile transport errors,
      // partial responses, and missing IDs using our unique message and exact tree.
      if (!published) {
        const commits = command("git", [
          "rev-list",
          "--first-parent",
          "--max-count=101",
          `${head}..${fresh}`,
        ])
          .split("\n")
          .filter(Boolean);
        for (const candidate of commits.slice(0, 100)) {
          if (command("git", ["show", "-s", "--format=%B", candidate]) === message) {
            if (published)
              throw new Error(
                "multiple matching publications; inspect remote history before rerunning",
              );
            published = candidate;
          }
        }
        if (!published) {
          const errors = body.errors;
          const stale =
            response.status !== null &&
            Array.isArray(errors) &&
            errors.length === 1 &&
            object(errors[0]).type === "STALE_DATA" &&
            result.commit == null;
          if (stale && fresh !== head && commits.length <= 100) {
            if (attempt === 3)
              throw new Error("concurrent branch updates: retry limit reached after 3 attempts");
            continue;
          }
          throw new Error(
            `API publication failed or outcome is ambiguous; inspect remote history before rerunning (no write retried)\n${apiDiagnostics(response)}`,
          );
        }
      }
      const sha = oid(published);
      if (
        command("git", ["show", "-s", "--format=%P", sha]) !== head ||
        command("git", ["show", "-s", "--format=%T", sha]) !== tree ||
        command("git", ["show", "-s", "--format=%B", sha]) !== message
      ) {
        throw new Error(`publication ${sha} does not match the validated change`);
      }
      command("git", ["merge-base", "--is-ancestor", sha, fresh]);
      if (
        command("git", ["rev-parse", `${fresh}:${entryPath}`]) !==
        command("git", ["rev-parse", `${sha}:${entryPath}`])
      )
        throw new Error(`publication ${sha} was superseded; inspect the remote entry`);
      const verification = api(`repos/${repo}/commits/${sha}`);
      const commit = json(verification.stdout);
      const signature = object(object(commit.commit).verification);
      if (
        verification.status !== 0 ||
        commit.sha !== sha ||
        object(commit.author).login !== bot ||
        signature.verified !== true ||
        signature.reason !== "valid" ||
        typeof signature.signature !== "string" ||
        !signature.signature ||
        typeof signature.payload !== "string" ||
        !signature.payload
      ) {
        throw new Error(
          `signature verification failed for ${sha}; the remote may already contain this commit, do not republish`,
        );
      }
      return `published ${sha}\nhttps://github.com/${repo}/commit/${sha}\nhttps://intake.uinaf.dev/${basename(entryPath, ".md")}/`;
    }
    throw new Error("publication retry limit reached");
  } catch (error) {
    if (writeAttempted)
      throw new Error(
        `${error instanceof Error ? error.message : "publication failed"}\nA write was attempted. Inspect origin/main before rerunning.`,
      );
    throw error;
  } finally {
    if (attached) {
      const removed = execute("git", ["worktree", "remove", "--force", worktree], repository);
      if (removed.status !== 0) {
        console.error(`temporary worktree cleanup failed: ${worktree}`);
      } else {
        attached = false;
      }
    }
    if (!attached) rmSync(scratch, { recursive: true, force: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [repository, draft, entryPath] = process.argv.slice(2);
  if (!repository || !draft || !entryPath || process.argv.length !== 5) {
    console.error(
      "usage: node scripts/publish-entry.ts <repository> <draft.md> <entries/YYYY/YYYY-MM-DD-slug.md>",
    );
    process.exitCode = 2;
  } else {
    try {
      console.log(await publish(repository, draft, entryPath));
    } catch (error) {
      console.error(error instanceof Error ? error.message : "publication failed");
      process.exitCode = 1;
    }
  }
}
