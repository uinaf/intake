import type { APIRoute } from "astro";
import { png, siteCard } from "../og/card";
import { site } from "../constants";

export const GET: APIRoute = async () => {
  const card = await siteCard({
    kicker: site.name,
    title: "things worth keeping.",
    sub: new URL(site.url).host,
  });

  return new Response(await png(card), {
    /* Static build: only the body is written to disk, so headers set here are
       inert. Caching for /og.png belongs in the edge config. */
    headers: { "content-type": "image/png" },
  });
};
