import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { parseDocument } from "yaml";

export const entryTypes = ["article", "video", "tweet", "podcast", "paper", "research"] as const;
export type EntryType = (typeof entryTypes)[number];

export interface EntryDocument {
  path: string;
  body: string;
  data: {
    title: string;
    source: string;
    saved: string;
    type: EntryType;
    tags: Array<string>;
    intaked_by: string;
  };
}

const requiredFields = ["title", "source", "saved", "type", "tags", "intaked_by"] as const;
const trackingParameters = new Set([
  "fbclid",
  "gclid",
  "dclid",
  "msclkid",
  "mc_cid",
  "mc_eid",
  "igshid",
  "ref_src",
]);

export function normalizeSource(source: string): string {
  const url = new URL(source);
  url.hash = "";
  url.hostname = url.hostname.toLowerCase().replace(/^www\./, "");
  if (url.hostname === "twitter.com" || url.hostname === "mobile.twitter.com") {
    url.hostname = "x.com";
  }
  const queryKeys: Array<string> = [];
  url.searchParams.forEach((_, key) => queryKeys.push(key));
  for (const key of queryKeys) {
    const normalizedKey = key.toLowerCase();
    const hostTrackingParameter =
      (url.hostname === "x.com" && (normalizedKey === "s" || normalizedKey === "t")) ||
      (url.hostname === "youtube.com" && normalizedKey === "si");
    if (
      normalizedKey.startsWith("utm_") ||
      trackingParameters.has(normalizedKey) ||
      hostTrackingParameter
    ) {
      url.searchParams.delete(key);
    }
  }
  url.searchParams.sort();
  if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/+$/, "");
  return url.toString();
}

export async function entryFiles(root = "entries"): Promise<Array<string>> {
  const files: Array<string> = [];

  async function visit(directory: string): Promise<void> {
    for (const item of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, item.name);
      if (item.isDirectory()) await visit(path);
      if (item.isFile() && item.name.endsWith(".md")) files.push(path);
    }
  }

  await visit(root);
  return files.sort();
}

export async function parseEntry(path: string, root = process.cwd()): Promise<EntryDocument> {
  const text = await readFile(path, "utf8");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("missing YAML frontmatter");
  const document = parseDocument(match[1] ?? "");
  if (document.errors.length > 0) {
    throw new Error(document.errors[0]?.message ?? "invalid YAML");
  }
  const value = document.toJS() as Record<string, unknown>;
  const keys = Object.keys(value);
  const missing = requiredFields.filter((field) => !keys.includes(field));
  const extra = keys.filter(
    (field) => !requiredFields.includes(field as (typeof requiredFields)[number]),
  );
  if (missing.length > 0) throw new Error(`missing fields: ${missing.join(", ")}`);
  if (extra.length > 0) throw new Error(`unexpected fields: ${extra.join(", ")}`);

  return {
    path: relative(root, path).split(sep).join("/"),
    body: match[2]?.trim() ?? "",
    data: value as unknown as EntryDocument["data"],
  };
}
