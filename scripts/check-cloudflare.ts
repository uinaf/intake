import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const host = "127.0.0.1";
const port = await availablePort();
const origin = `http://${host}:${port}`;
const executable = join(
  process.cwd(),
  "node_modules",
  ".bin",
  process.platform === "win32" ? "wrangler.cmd" : "wrangler",
);
const child = spawn(executable, ["dev", "--ip", host, "--port", String(port)], {
  env: { ...process.env, WRANGLER_SEND_METRICS: "false" },
  stdio: ["ignore", "pipe", "pipe"],
});
const output = collectOutput(child);

try {
  const home = await waitForResponse(`${origin}/`);
  expect(home.status, 200, "homepage status");
  expectHeader(home, "content-security-policy", "script-src 'self'");
  expectHeader(home, "permissions-policy", "camera=()");
  expectHeader(home, "referrer-policy", "strict-origin-when-cross-origin");
  expectHeader(home, "strict-transport-security", "max-age=31536000");
  expectHeader(home, "x-content-type-options", "nosniff");
  expectHeader(home, "x-frame-options", "DENY");

  const html = await home.text();
  if (/<script(?![^>]*\bsrc=)[^>]*>/i.test(html)) {
    throw new Error("homepage contains an inline script that the CSP would block");
  }
  const stylesheet = html.match(/href="(\/_astro\/[^"]+\.css)"/)?.[1];
  if (!stylesheet) throw new Error("homepage did not reference a fingerprinted stylesheet");
  expectHeader(
    await fetch(`${origin}${stylesheet}`),
    "cache-control",
    "max-age=31556952, immutable",
  );

  const index = await fetch(`${origin}/index.json`);
  expect(index.status, 200, "search index status");
  expectHeader(index, "cache-control", "max-age=300, must-revalidate");

  const missing = await fetch(`${origin}/__cloudflare_contract_missing__`);
  expect(missing.status, 404, "missing route status");
  if (!(await missing.text()).includes("browse the intake")) {
    throw new Error("missing route did not serve the generated 404 page");
  }

  console.log("checked Cloudflare headers, caching, and 404 routing");
} finally {
  await stop(child);
}

async function availablePort(): Promise<number> {
  const server = createServer();
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, host, resolve);
  });
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("could not allocate a local port");
  await new Promise<void>((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
  return address.port;
}

function collectOutput(childProcess: typeof child): () => string {
  let value = "";
  for (const stream of [childProcess.stdout, childProcess.stderr]) {
    stream.setEncoding("utf8");
    stream.on("data", (chunk: string) => {
      value = `${value}${chunk}`.slice(-8_000);
    });
  }
  return () => value;
}

async function waitForResponse(url: string): Promise<Response> {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (child.exitCode !== null) {
      throw new Error(`wrangler dev exited with ${child.exitCode}\n${output()}`);
    }
    try {
      return await fetch(url);
    } catch {
      await delay(50);
    }
  }
  throw new Error(`wrangler dev did not become ready\n${output()}`);
}

function expect(actual: number, expected: number, label: string): void {
  if (actual !== expected) throw new Error(`${label}: expected ${expected}, received ${actual}`);
}

function expectHeader(response: Response, name: string, expected: string): void {
  const actual = response.headers.get(name);
  if (!actual?.includes(expected)) {
    throw new Error(
      `${name}: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`,
    );
  }
}

async function stop(childProcess: typeof child): Promise<void> {
  if (childProcess.exitCode !== null) return;
  childProcess.kill("SIGTERM");
  await Promise.race([
    new Promise<void>((resolve) => childProcess.once("exit", () => resolve())),
    delay(2_000).then(() => {
      childProcess.kill("SIGKILL");
    }),
  ]);
}
