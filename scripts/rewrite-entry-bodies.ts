import { readFile, writeFile } from "node:fs/promises";
import { entryBodyIssues } from "../src/lib/entry-body.ts";
import { rewriteEntryBody } from "../src/lib/rewrite-entry-body.ts";
import { entryFiles, parseEntry } from "./entry-schema.ts";
import { markdownSafetyIssues } from "./markdown-safety.ts";

const apply = process.argv.includes("--apply");
const paths = await entryFiles();
const failures: Array<string> = [];
let rewrittenCount = 0;

for (const path of paths) {
  const entry = await parseEntry(path);
  const rewritten = rewriteEntryBody(entry.body);
  const issues = [
    ...entryBodyIssues(rewritten),
    ...markdownSafetyIssues(rewritten).map((issue) => issue.message),
  ];
  if (rewritten.length < 80) issues.push("body is too short to be a useful summary");
  if (issues.length > 0) {
    failures.push(`${path}: ${issues.join("; ")}`);
    continue;
  }
  rewrittenCount += 1;
  if (!apply) continue;
  const original = await readFile(path, "utf8");
  const frontmatter = original.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  if (!frontmatter) throw new Error(`${path}: missing YAML frontmatter`);
  const next = `${frontmatter[0]}\n${rewritten.endsWith("\n") ? rewritten : `${rewritten}\n`}`;
  if (next !== original) await writeFile(path, next);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  console.error(`\n${failures.length} entries still fail; ${rewrittenCount} would pass`);
  process.exit(1);
}

console.log(`${apply ? "rewrote" : "dry-run passed"} ${rewrittenCount} entries`);
