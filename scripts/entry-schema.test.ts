import { afterEach, describe, expect, test } from "bun:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseEntry } from "./entry-schema";

const temporaryDirectories: Array<string> = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((path) => rm(path, { recursive: true })));
});

describe("parseEntry", () => {
  test("preserves the source position of a trimmed body", async () => {
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

    expect(entry.body).toBe("Body text");
    expect(entry.bodyStartLine).toBe(9);
    expect(entry.bodyStartColumn).toBe(3);
  });
});
