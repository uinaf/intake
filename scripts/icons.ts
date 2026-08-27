/**
 * Regenerates the favicon set and the small display marks from the computer
 * artwork. Run with `pnpm run icons` when the artwork changes. The outputs are
 * committed, so builds and deploys never depend on the CDN being reachable.
 */

import { writeFileSync } from "node:fs";
import pngToIco from "png-to-ico";
import sharp from "sharp";
import { brandAsset } from "../src/og/brand.ts";

const PUBLIC = new URL("../public/", import.meta.url);

const source = await brandAsset("uinaf-computer.png");
const render = (size: number) =>
  sharp(source).resize(size, size, { fit: "cover" }).png({ compressionLevel: 9 }).toBuffer();

const written: Array<string> = [];
const emit = async (name: string, size: number) => {
  writeFileSync(new URL(name, PUBLIC), await render(size));
  written.push(name);
};

for (const size of [16, 32, 48, 192, 512]) await emit(`favicon-${size}.png`, size);
await emit("apple-touch-icon.png", 180);

/* Display marks at 2x their layout box: 24px in the header, 120px on the 404. */
await emit("mark-48.png", 48);
await emit("mark-240.png", 240);

/* The .ico packs the three small sizes so old browsers pick their best fit. */
const ico = await pngToIco(await Promise.all([16, 32, 48].map(render)));
writeFileSync(new URL("favicon.ico", PUBLIC), ico);
written.push("favicon.ico");

console.info(`[icons] wrote ${written.join(", ")}`);
