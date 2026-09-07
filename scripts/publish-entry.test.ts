import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, test } from "node:test";
import { publish, run, type CommandResult, type Run } from "./publish-entry.ts";

const entryPath = "entries/2026/2026-09-07-example.md";
const directories: string[] = [];
const validator = fileURLToPath(new URL("./validate-entries.ts", import.meta.url));
const document = (body = "Original", source = "https://example.com/source") => `---
title: Example
source: ${source}
saved: 2026-09-07
type: article
tags: [example]
---

${body} overview explains the article's practical implications and the evidence supporting its conclusions.

## Key takeaways

- **Evidence**: Keep conclusions grounded in observations and preserve the context needed to interpret them.
- **Context**: Retain the assumptions that constrain the conclusions and their practical application.
- **Action**: Verify results before publishing a change and retain recoverable input when a check fails.
`;

afterEach(() => {
  for (const directory of directories.splice(0))
    rmSync(directory, { recursive: true, force: true });
});

function git(cwd: string, ...args: string[]): CommandResult {
  const result = spawnSync(
    "git",
    [
      "-c",
      "commit.gpgsign=false",
      "-c",
      "core.hooksPath=/dev/null",
      "-c",
      "user.name=Offline Test",
      "-c",
      "user.email=offline@example.invalid",
      ...args,
    ],
    {
      cwd,
      encoding: "utf8",
      env: {
        PATH: process.env.PATH,
        HOME: cwd,
        GIT_CONFIG_NOSYSTEM: "1",
        GIT_CONFIG_GLOBAL: "/dev/null",
      },
    },
  );
  return { status: result.status, stdout: result.stdout };
}
function checkedGit(cwd: string, ...args: string[]): string {
  const result = git(cwd, ...args);
  assert.equal(result.status, 0, `git ${args.join(" ")}`);
  return result.stdout.trimEnd();
}
function write(root: string, path: string, content: string) {
  mkdirSync(dirname(join(root, path)), { recursive: true });
  writeFileSync(join(root, path), content);
}
function reply(value: unknown, status = 0): CommandResult {
  return { status, stdout: JSON.stringify(value) };
}

type Signature = { verified: boolean; reason: string; signature?: string; payload?: string };
function fixture(existing?: string) {
  const root = mkdtempSync(join(tmpdir(), "intake-publish-test-"));
  directories.push(root);
  const remote = join(root, "remote");
  const local = join(root, "local");
  mkdirSync(remote);
  checkedGit(remote, "init", "--initial-branch=main");
  write(remote, "README.md", "Offline publication fixture\n");
  if (existing) write(remote, entryPath, existing);
  checkedGit(remote, "add", ".");
  checkedGit(remote, "commit", "-m", "Initial fixture");
  checkedGit(root, "clone", remote, local);
  const draft = join(root, "draft.md");
  writeFileSync(draft, document("Updated"));
  const initial = checkedGit(remote, "rev-parse", "HEAD");
  const state = {
    writes: 0,
    validations: 0,
    checks: [] as string[],
    failingLane: undefined as string | undefined,
    identity: reply({ data: { viewer: { login: "glitch418x[bot]" } } }),
    apiFailure: undefined as CommandResult | undefined,
    ambiguous: false,
    signature: {
      verified: true,
      reason: "valid",
      signature: "mock-signature",
      payload: "mock-payload",
    } as Signature,
    verificationStatus: 0,
    beforeWrite: (_attempt: number) => {},
    afterWrite: () => {},
  };
  function commit(path: string, content: string, message = "Concurrent change") {
    write(remote, path, content);
    checkedGit(remote, "add", "--", path);
    checkedGit(remote, "commit", "-m", message);
    return checkedGit(remote, "rev-parse", "HEAD");
  }
  const execute: Run = (command, args, cwd, input) => {
    if (command === "git") {
      assert.ok(!args.includes("push"), "publication must never push");
      if (args.join(" ") === "remote get-url origin")
        return { status: 0, stdout: "https://github.com/uinaf/intake.git" };
      return git(cwd, ...args);
    }
    if (command === "pnpm") {
      state.checks.push(args.join(" "));
      if (state.failingLane === args.join(" ")) return { status: 1, stdout: "" };
      if (args.join(" ") === "run check:entries") {
        state.validations++;
        const result = spawnSync(process.execPath, [validator], { cwd, encoding: "utf8" });
        return { status: result.status, stdout: result.stdout };
      }
      if (args.join(" ") === "run verify") {
        write(
          cwd,
          "dist/index.html",
          `<a href="https://github.com/uinaf/intake/blob/main/${entryPath}">Source</a>`,
        );
        const result = spawnSync(
          process.execPath,
          [fileURLToPath(new URL("./check-links.ts", import.meta.url))],
          { cwd, encoding: "utf8" },
        );
        return { status: result.status, stdout: result.stdout, diagnostics: result.stderr };
      }
      return { status: 0, stdout: "" };
    }
    assert.equal(command, "gh");
    assert.deepEqual(args.slice(0, 9), [
      "app-auth",
      "exec",
      "--repo",
      "github.com/uinaf/intake",
      "--",
      "gh",
      "api",
      "--hostname",
      "github.com",
    ]);
    if (args[9]?.startsWith("repos/")) {
      const sha = args[9].split("/").at(-1);
      return reply(
        { sha, author: { login: "glitch418x[bot]" }, commit: { verification: state.signature } },
        state.verificationStatus,
      );
    }
    const request = JSON.parse(input ?? "{}");
    if (!request.variables) return state.identity;
    state.writes++;
    state.beforeWrite(state.writes);
    if (state.apiFailure) return state.apiFailure;
    const change = request.variables.input;
    const head = checkedGit(remote, "rev-parse", "HEAD");
    if (change.expectedHeadOid !== head) return reply({ errors: [{ type: "STALE_DATA" }] }, 1);
    assert.deepEqual(change.branch, {
      repositoryNameWithOwner: "uinaf/intake",
      branchName: "main",
    });
    assert.equal(change.fileChanges.additions.length, 1);
    assert.equal(change.author, undefined);
    const addition = change.fileChanges.additions[0];
    const sha = commit(
      addition.path,
      Buffer.from(addition.contents, "base64").toString("utf8"),
      `${change.message.headline}\n\n${change.message.body}`,
    );
    state.afterWrite();
    return state.ambiguous
      ? { status: null, stdout: "connection interrupted" }
      : reply({ data: { createCommitOnBranch: { commit: { oid: sha } } } });
  };
  return {
    root,
    remote,
    local,
    draft,
    initial,
    state,
    commit,
    publish: () => publish(local, draft, entryPath, execute),
    head: () => checkedGit(remote, "rev-parse", "HEAD"),
  };
}

test("publishes a new entry and verifies its remote commit", async () => {
  const f = fixture();
  const result = await f.publish();
  assert.match(result, new RegExp(`published ${f.head()}`));
  assert.equal(readFileSync(join(f.remote, entryPath), "utf8"), document("Updated"));
  assert.equal(f.state.writes, 1);
  assert.deepEqual(f.state.checks, [
    "install --frozen-lockfile",
    "run check:entries",
    "run verify",
  ]);
  assert.equal(checkedGit(f.local, "status", "--porcelain"), "");
});

test("accepts a successful identity response with an empty errors array", async () => {
  const f = fixture();
  f.state.identity = reply({ data: { viewer: { login: "glitch418x[bot]" } }, errors: [] });
  assert.match(await f.publish(), /published [a-f0-9]{40}/);
  assert.equal(f.state.writes, 1);
});

test("updates an existing entry while preserving its saved date", async () => {
  const f = fixture(document());
  await f.publish();
  assert.equal(readFileSync(join(f.remote, entryPath), "utf8"), document("Updated"));
  assert.equal(checkedGit(f.remote, "rev-list", "--count", `${f.initial}..HEAD`), "1");
});

for (const [name, content] of [
  ["saved date", document("Updated").replace("saved: 2026-09-07", "saved: 2026-09-08")],
  ["source", document("Updated", "https://example.com/other")],
  ["source tracking parameters", document("Updated", "https://example.com/source?utm_source=test")],
]) {
  test(`rejects changing an existing entry's ${name}`, async () => {
    const f = fixture(document());
    writeFileSync(f.draft, content ?? "");
    await assert.rejects(f.publish(), /preserve the original saved date and source/);
    assert.equal(f.state.writes, 0);
    assert.equal(f.head(), f.initial);
  });
}

test("validation failure performs no remote write", async () => {
  const f = fixture();
  writeFileSync(f.draft, document().replace("tags: [example]", "tags: []"));
  await assert.rejects(f.publish(), /pnpm run failed/);
  assert.equal(f.state.writes, 0);
  assert.equal(f.head(), f.initial);
});

test("duplicate normalized source is rejected before publication", async () => {
  const f = fixture();
  f.commit(
    "entries/2026/2026-09-07-other.md",
    document("Other", "https://www.example.com/source?utm_source=test"),
  );
  const head = f.head();
  await assert.rejects(f.publish(), /pnpm run failed/);
  assert.equal(f.state.writes, 0);
  assert.equal(f.head(), head);
});

test("retries a concurrent unrelated change with fresh validation", async () => {
  const f = fixture();
  f.state.beforeWrite = (attempt) => {
    if (attempt === 1) f.commit("concurrent.md", "Keep this\n");
  };
  await f.publish();
  assert.equal(f.state.writes, 2);
  assert.equal(f.state.validations, 2);
  assert.equal(readFileSync(join(f.remote, "concurrent.md"), "utf8"), "Keep this\n");
});

test("bounded retries stop after three competing branch updates", async () => {
  const f = fixture();
  f.state.beforeWrite = (attempt) => {
    f.commit("concurrent.md", `Revision ${attempt}\n`);
  };
  await assert.rejects(f.publish(), /retry limit reached after 3 attempts/);
  assert.equal(f.state.writes, 3);
  assert.equal(f.state.validations, 3);
  assert.equal(checkedGit(f.remote, "ls-tree", "HEAD", "--", entryPath), "");
});

test("a concurrent edit of the entry is never overwritten", async () => {
  const f = fixture(document());
  f.state.beforeWrite = () => {
    f.commit(entryPath, document("Concurrent"));
  };
  await assert.rejects(f.publish(), /concurrent entry edit/);
  assert.equal(f.state.writes, 1);
  assert.equal(readFileSync(join(f.remote, entryPath), "utf8"), document("Concurrent"));
});

test("fresh validation rejects a concurrently introduced duplicate", async () => {
  const f = fixture();
  f.state.beforeWrite = () => {
    f.commit("entries/2026/2026-09-07-other.md", document("Concurrent"));
  };
  await assert.rejects(f.publish(), /pnpm run failed/);
  assert.equal(f.state.writes, 1);
  assert.equal(f.state.validations, 2);
});

for (const identity of [
  reply({}, 1),
  reply({ data: { viewer: { login: "unexpected-user" } } }),
  reply({ errors: [{ message: "Unavailable" }] }),
]) {
  test(`authentication rejects invalid identity (${identity.stdout}, status ${identity.status})`, async () => {
    const f = fixture();
    f.state.identity = identity;
    await assert.rejects(f.publish(), /authentication failed/);
    assert.equal(f.state.writes, 0);
    assert.equal(f.head(), f.initial);
  });
}

for (const response of [
  reply({ errors: [{ type: "FORBIDDEN" }] }, 1),
  { status: null, stdout: "" },
  reply({}),
]) {
  test(`API failure or unknown outcome never blindly retries (${response.status}, ${response.stdout})`, async () => {
    const f = fixture();
    f.state.apiFailure = response;
    await assert.rejects(f.publish(), /outcome is ambiguous/);
    assert.equal(f.state.writes, 1);
    assert.equal(f.head(), f.initial);
  });
}

for (const signature of [
  { verified: false, reason: "unsigned" },
  { verified: true, reason: "invalid", signature: "mock", payload: "mock" },
  { verified: true, reason: "valid" },
  { verified: true, reason: "valid", signature: "mock" },
]) {
  test(`missing or invalid signature fails after one write (${JSON.stringify(signature)})`, async () => {
    const f = fixture();
    f.state.signature = signature;
    await assert.rejects(f.publish(), /signature verification failed.*remote may already contain/s);
    assert.equal(f.state.writes, 1);
    assert.notEqual(f.head(), f.initial);
  });
}

test("verification API errors cannot report success", async () => {
  const f = fixture();
  f.state.verificationStatus = 1;
  await assert.rejects(f.publish(), /signature verification failed/);
  assert.equal(f.state.writes, 1);
});

test("reconciles an ambiguous successful response without publishing twice", async () => {
  const f = fixture();
  f.state.ambiguous = true;
  f.state.afterWrite = () => {
    f.commit("concurrent.md", "Later unrelated change\n");
  };
  assert.match(await f.publish(), /published [a-f0-9]{40}/);
  assert.equal(f.state.writes, 1);
  assert.equal(checkedGit(f.remote, "rev-list", "--count", `${f.initial}..HEAD`), "2");
});

test("fails when remote publication was superseded before verification", async () => {
  const f = fixture();
  f.state.afterWrite = () => {
    f.commit(entryPath, document("Superseded"));
  };
  await assert.rejects(f.publish(), /was superseded/);
  assert.equal(f.state.writes, 1);
});

test("unchanged entry validates without creating another commit", async () => {
  const f = fixture(document("Updated"));
  assert.equal(await f.publish(), "entry is unchanged (no publication)");
  assert.equal(f.state.writes, 0);
  assert.equal(f.state.validations, 1);
  assert.equal(f.head(), f.initial);
});

test("command runner strips credential overrides and debug environment", () => {
  const previous = process.env.GH_DEBUG;
  process.env.GH_DEBUG = "api";
  try {
    const result = run(
      process.execPath,
      [
        "-e",
        "console.log(JSON.stringify(Object.keys(process.env).filter(key => /^(GH_TOKEN|GITHUB_TOKEN|GH_DEBUG|GIT_TRACE.*|GIT_CONFIG.*)$/.test(key))))",
      ],
      process.cwd(),
    );
    assert.equal(result.status, 0);
    assert.deepEqual(JSON.parse(result.stdout), []);
  } finally {
    if (previous === undefined) delete process.env.GH_DEBUG;
    else process.env.GH_DEBUG = previous;
  }
});

test("command runner preserves TLS configuration and reports stderr", () => {
  const previous = process.env.NO_PROXY;
  process.env.NO_PROXY = "example.invalid";
  try {
    const result = run(
      process.execPath,
      ["-e", "console.error(process.env.NO_PROXY); process.exit(1)"],
      process.cwd(),
    );
    assert.equal(result.status, 1);
    assert.match(result.diagnostics ?? "", /example.invalid/);
  } finally {
    if (previous === undefined) delete process.env.NO_PROXY;
    else process.env.NO_PROXY = previous;
  }
});

test("verification failure performs no remote write", async () => {
  const f = fixture();
  f.state.failingLane = "run verify";
  await assert.rejects(f.publish(), /pnpm run failed/);
  assert.equal(f.state.validations, 1);
  assert.equal(f.state.writes, 0);
  assert.equal(f.head(), f.initial);
});

const cli = fileURLToPath(new URL("./publish-entry.ts", import.meta.url));

test("TypeScript CLI rejects incorrect argument counts with exit status 2", () => {
  for (const args of [[], ["one"], ["one", "two"], ["one", "two", "three", "four"]]) {
    const result = spawnSync(process.execPath, [cli, ...args], {
      encoding: "utf8",
      env: { PATH: dirname(process.execPath) },
    });
    assert.equal(result.status, 2);
    assert.match(result.stderr, /usage: node scripts\/publish-entry.ts/);
    assert.equal(result.stdout, "");
  }
});

test("TypeScript CLI reports invalid entry paths without publication", () => {
  const result = spawnSync(
    process.execPath,
    [cli, "unused checkout", "unused draft.md", "../invalid.md"],
    {
      encoding: "utf8",
      env: { PATH: dirname(process.execPath) },
    },
  );
  assert.equal(result.status, 1);
  assert.match(result.stderr, /entry path must match/);
  assert.equal(result.stdout, "");
});
