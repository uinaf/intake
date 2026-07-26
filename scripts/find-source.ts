import { entryFiles, normalizeSource, parseEntry } from "./entry-schema";

const source = process.argv[2];
if (!source) {
  console.error("usage: bun run intake:find -- <source-url>");
  process.exit(2);
}

const target = normalizeSource(source);
const matches: Array<string> = [];
for (const path of await entryFiles()) {
  const entry = await parseEntry(path);
  if (normalizeSource(entry.data.source) === target) matches.push(entry.path);
}

if (matches.length === 0) process.exit(1);
console.log(matches.join("\n"));
