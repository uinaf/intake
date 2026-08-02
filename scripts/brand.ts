/**
 * Brand artwork lives in cdn-uinaf-dev, not here. Generators fetch what they
 * need on demand and cache it outside the tree, so this repo carries only the
 * derived outputs it actually serves.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { existsSync } from "node:fs";

const CDN = "https://cdn.uinaf.dev/images/";
const CACHE = new URL("../.brand-cache/", import.meta.url);

export async function brandAsset(name: string): Promise<Buffer> {
  const cached = new URL(name, CACHE);
  if (existsSync(cached)) return readFileSync(cached);

  const response = await fetch(`${CDN}${name}`);
  if (!response.ok) {
    throw new Error(`[brand] ${CDN}${name} → ${response.status} ${response.statusText}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  mkdirSync(CACHE, { recursive: true });
  writeFileSync(cached, bytes);
  return bytes;
}
