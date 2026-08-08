import { getCollection } from "astro:content";
import { compareNewest, plainText, slugFor } from "../lib/entries";
import { searchText } from "../lib/search";

export async function GET() {
  const entries = (await getCollection("entries")).sort(compareNewest);
  return Response.json(
    entries.map((entry) => ({
      slug: slugFor(entry),
      search: searchText([
        entry.data.title,
        entry.data.type,
        ...entry.data.tags,
        plainText(entry.body ?? ""),
      ]),
    })),
    {
      headers: {
        "Cache-Control": "public, max-age=300",
      },
    },
  );
}
