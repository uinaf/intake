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

/** Satori reads neither WOFF2 nor variable outlines. Use the static face. */
export const FONT_PATH = "fonts/berkeley-mono/static/berkeley-mono-regular.woff";
export const imagePath = (name: string) => `images/${name}`;

const unreachable = (cached: string, cause: unknown) =>
  new Error(
    `[brand] cannot reach ${CDN}: allow the runner egress to ${new URL(CDN).host}, ` +
      `or seed ${cached} before building.`,
    { cause },
  );

async function fetchAsset(path: string): Promise<Buffer> {
  const cached = join(CACHE, path.replaceAll("/", "_"));
  if (existsSync(cached)) return readFileSync(cached);

  let response: Response;
  try {
    response = await fetch(`${CDN}${path}`);
  } catch (cause) {
    throw unreachable(cached, cause);
  }

  if (!response.ok) {
    throw new Error(`[brand] ${CDN}${path} → ${response.status} ${response.statusText}`);
  }

  let bytes: Buffer;
  try {
    bytes = Buffer.from(await response.arrayBuffer());
  } catch (cause) {
    throw unreachable(cached, cause);
  }

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
