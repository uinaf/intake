import { entryFiles, entryTypes, normalizeSource, parseEntry } from "./entry-schema";

const errors: Array<string> = [];
const sources = new Map<string, string>();
const paths = await entryFiles();

for (const path of paths) {
  try {
    const entry = await parseEntry(path);
    const { data, body } = entry;
    if (typeof data.title !== "string" || data.title.trim().length === 0) {
      errors.push(`${path}: title must be a non-empty string`);
    }
    if (typeof data.source !== "string") {
      errors.push(`${path}: source must be a URL string`);
    } else {
      const source = new URL(data.source);
      if (!["http:", "https:"].includes(source.protocol)) {
        errors.push(`${path}: source must use http or https`);
      }
      const normalized = normalizeSource(data.source);
      const duplicate = sources.get(normalized);
      if (duplicate) errors.push(`${path}: duplicates normalized source from ${duplicate}`);
      sources.set(normalized, path);
    }
    if (typeof data.saved !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data.saved)) {
      errors.push(`${path}: saved must be YYYY-MM-DD`);
    } else {
      const expectedPrefix = `entries/${data.saved.slice(0, 4)}/${data.saved}-`;
      const filename = entry.path.split("/").at(-1) ?? "";
      if (
        !entry.path.startsWith(expectedPrefix) ||
        !/^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(filename)
      ) {
        errors.push(`${path}: expected entries/YYYY/YYYY-MM-DD-kebab-case.md matching saved`);
      }
    }
    if (!entryTypes.includes(data.type)) {
      errors.push(`${path}: type must be one of ${entryTypes.join(", ")}`);
    }
    if (!Array.isArray(data.tags) || data.tags.length === 0) {
      errors.push(`${path}: tags must be a non-empty array`);
    } else {
      const seen = new Set<string>();
      for (const tag of data.tags) {
        if (typeof tag !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tag)) {
          errors.push(`${path}: invalid tag ${JSON.stringify(tag)}`);
        }
        if (seen.has(tag)) errors.push(`${path}: duplicate tag ${tag}`);
        seen.add(tag);
      }
    }
    if (
      typeof data.intaked_by !== "string" ||
      !/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(data.intaked_by)
    ) {
      errors.push(`${path}: intaked_by must be a GitHub username`);
    }
    if (body.length < 80) errors.push(`${path}: body is too short to be a useful summary`);
  } catch (error) {
    errors.push(`${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`validated ${paths.length} entries with ${sources.size} unique sources`);
