import { readFile, stat } from "node:fs/promises";
import { maxSearchCharacters, parseSearchIndex } from "../src/lib/search.ts";

const path = "dist/index.json";
const maxBytes = 512 * 1_024;
const bytes = (await stat(path)).size;
if (bytes > maxBytes) {
  throw new Error(`${path} is ${bytes} bytes; budget is ${maxBytes} bytes`);
}

const value: unknown = JSON.parse(await readFile(path, "utf8"));
parseSearchIndex(value);
if (!Array.isArray(value)) throw new Error(`${path} must contain an array`);
for (const entry of value) {
  if (typeof entry !== "object" || entry === null) throw new Error(`${path} has an invalid entry`);
  const keys = Object.keys(entry).sort();
  if (keys.join(",") !== "search,slug") {
    throw new Error(`${path} entries must contain only slug and search`);
  }
  if (typeof entry.search !== "string" || entry.search.length > maxSearchCharacters) {
    throw new Error(`${path} contains search text above ${maxSearchCharacters} characters`);
  }
}

console.log(`checked search index budget: ${bytes} of ${maxBytes} bytes`);
