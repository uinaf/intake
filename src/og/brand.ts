/**
 * Brand artwork and the Berkeley Mono face live in cdn-uinaf-dev, not here:
 * this repo is public and the font is licensed, so it must not be vendored.
 * Assets are fetched on demand and cached outside the tree.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const CDN = "https://cdn.uinaf.dev/";
/* Resolved from the project root, not `import.meta.url`: this module is bundled
   into dist/.prerender at build time, which moves it away from src. */
const CACHE = resolve(process.cwd(), ".brand-cache");

/** satori reads neither woff2 nor variable outlines — hence the static face. */
export const FONT_PATH = "fonts/berkeley-mono/static/berkeley-mono-regular.woff";
export const imagePath = (name: string) => `images/${name}`;

async function fetchAsset(path: string): Promise<Buffer> {
  const cached = join(CACHE, path.replaceAll("/", "_"));
  if (existsSync(cached)) return readFileSync(cached);

  const response = await fetch(`${CDN}${path}`);
  if (!response.ok) {
    throw new Error(`[brand] ${CDN}${path} → ${response.status} ${response.statusText}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  mkdirSync(CACHE, { recursive: true });
  writeFileSync(cached, bytes);
  return bytes;
}

export function brandAsset(name: string): Promise<Buffer> {
  return fetchAsset(imagePath(name));
}

export function brandFont(): Promise<Buffer> {
  return fetchAsset(FONT_PATH);
}
