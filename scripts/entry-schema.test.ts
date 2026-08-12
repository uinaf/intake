import assert from "node:assert/strict";
import { afterEach, describe, test } from "node:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseEntry } from "./entry-schema.ts";

const temporaryDirectories: Array<string> = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((path) => rm(path, { recursive: true })));
});

describe("parseEntry", () => {
  test("trims blank lines without removing content indentation", async () => {
    const directory = await mkdtemp(join(tmpdir(), "intake-entry-schema-"));
    temporaryDirectories.push(directory);
    const path = join(directory, "entry.md");
    await writeFile(
      path,
      [
        "---",
        "title: Example",
        "source: https://example.com",
        "saved: 2026-08-08",
        "type: article",
        "tags: [example]",
        "---",
        "",
        "  Body text",
        "",
      ].join("\n"),
    );

    const entry = await parseEntry(path, directory);

    assert.equal(entry.body, "  Body text");
    assert.equal(entry.bodyStartLine, 9);
    assert.equal(entry.bodyStartColumn, 1);
  });
});
