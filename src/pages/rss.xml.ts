import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../constants";
import { compareNewest, excerptFor, slugFor } from "../lib/entries";

export async function GET(context: { site?: URL }) {
  const entries = (await getCollection("entries")).sort(compareNewest);
  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? new URL(site.url),
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: excerptFor(entry),
      pubDate: entry.data.saved,
      link: `/${slugFor(entry)}/`,
      categories: [entry.data.type, ...entry.data.tags],
    })),
  });
}
