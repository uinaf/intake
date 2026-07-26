import type { CollectionEntry } from "astro:content";

export type IntakeEntry = CollectionEntry<"entries">;

export function slugFor(entry: IntakeEntry): string {
  const filename = entry.id.split("/").at(-1) ?? entry.id;
  return filename.replace(/\.md$/, "");
}

export function savedDate(entry: IntakeEntry): string {
  return entry.data.saved.toISOString().slice(0, 10);
}

export function compareNewest(first: IntakeEntry, second: IntakeEntry): number {
  return (
    second.data.saved.getTime() - first.data.saved.getTime() ||
    slugFor(first).localeCompare(slugFor(second))
  );
}

export function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/[*_~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function excerptFor(entry: IntakeEntry, maxLength = 220): string {
  const text = plainText(entry.body ?? "");
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
}
