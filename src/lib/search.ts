export const maxSearchCharacters = 2_048;

export interface SearchIndexEntry {
  search: string;
  slug: string;
}

export function searchText(parts: Array<string>): string {
  return parts.join(" ").replace(/\s+/g, " ").trim().toLowerCase().slice(0, maxSearchCharacters);
}

export function parseSearchIndex(value: unknown): Record<string, string> {
  if (!Array.isArray(value)) throw new Error("search index must be an array");
  const entries = value.map((entry) => {
    if (
      typeof entry !== "object" ||
      entry === null ||
      !("slug" in entry) ||
      typeof entry.slug !== "string" ||
      !("search" in entry) ||
      typeof entry.search !== "string"
    ) {
      throw new Error("search index contains an invalid entry");
    }
    return [entry.slug, entry.search] as const;
  });
  return Object.fromEntries(entries);
}

export function createSearchIndexLoader(
  load: () => Promise<unknown>,
): () => Promise<Record<string, string>> {
  let pending: Promise<Record<string, string>> | undefined;
  return () => {
    pending ??= load()
      .then(parseSearchIndex)
      .catch((error: unknown) => {
        pending = undefined;
        throw error;
      });
    return pending;
  };
}
