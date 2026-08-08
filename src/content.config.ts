import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const entryTypes = ["article", "video", "tweet", "podcast", "paper", "research"] as const;
export type EntryType = (typeof entryTypes)[number];

const entries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./entries" }),
  schema: z.object({
    title: z.string().min(1),
    source: z.url(),
    saved: z.coerce.date(),
    type: z.enum(entryTypes),
    tags: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).min(1),
  }),
});

export const collections = { entries };
