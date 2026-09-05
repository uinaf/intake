import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { site } from "../src/constants.ts";

test("built links resolve local pages and tracked repository sources", async () => {
  const directory = await mkdtemp(join(tmpdir(), "intake-links-"));
  try {
    execFileSync("git", ["init", "--quiet", directory]);
    await mkdir(join(directory, "entries"));
    await mkdir(join(directory, "dist"));
    await writeFile(join(directory, "entries", "example.md"), "Example");
    await writeFile(join(directory, "entries", "untracked.md"), "Untracked");
    execFileSync("git", ["add", "entries/example.md"], { cwd: directory });
    const source = `${site.repository}/blob/main/entries/`;
    const check = async (href: string) => {
      await writeFile(join(directory, "dist", "index.html"), `<a href="${href}">link</a>`);
      return spawnSync(
        process.execPath,
        [fileURLToPath(new URL("./check-links.ts", import.meta.url))],
        {
          cwd: directory,
          encoding: "utf8",
        },
      );
    };

    for (const href of [
      `${source}example.md`,
      `${source}example%2Emd#heading`,
      "/",
      "https://example.com/unavailable",
      "https://github.com/other/repo/blob/main/missing.md",
    ]) {
      const result = await check(href);
      assert.equal(result.status, 0, result.stderr);
    }
    for (const href of [
      `${site.repository}/blob/main/`,
      `${site.repository}/blob/main/#heading`,
      `${site.repository}/blob/main/?plain=1`,
      `${source}example`,
      `${source}untracked.md`,
      `${source}missing.md`,
      `${source}%invalid`,
    ]) {
      const result = await check(href);
      assert.equal(result.status, 1, href);
      assert.match(result.stderr, /missing tracked source/);
    }
    const missingPage = await check("/missing/");
    assert.equal(missingPage.status, 1);
    assert.match(missingPage.stderr, /missing \/missing\//);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
