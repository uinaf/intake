import { getCollection } from "astro:content";
import { compareNewest, excerptFor, plainText, savedDate, slugFor } from "../lib/entries";

export async function GET() {
  const entries = (await getCollection("entries")).sort(compareNewest);
  return Response.json(
    entries.map((entry) => ({
      slug: slugFor(entry),
      title: entry.data.title,
      source: entry.data.source,
      saved: savedDate(entry),
      type: entry.data.type,
      tags: entry.data.tags,
      excerpt: excerptFor(entry),
      search: [entry.data.title, entry.data.type, ...entry.data.tags, plainText(entry.body ?? "")]
        .join(" ")
        .toLocaleLowerCase(),
    })),
    {
      headers: {
        "Cache-Control": "public, max-age=300",
      },
    },
  );
}
