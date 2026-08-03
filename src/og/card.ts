/**
 * The share card, as a satori element tree. Values come from the same design
 * tokens the site uses, so the card cannot drift from the pages it represents.
 */

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import sharp from "sharp";
import { brandAsset, brandFont } from "./brand";

export const CARD = { width: 1200, height: 630 } as const;

const color = {
  bg: "#0a0a0a",
  fg: "#e5e5e5",
  subtle: "#525252",
  line: "#262626",
  frame: "#171717",
} as const;

const TRACKING_CAPS = "0.08em";
const INSET = 28;
const MARK = 400;

type Style = Record<string, string | number>;
type Node = { type: string; props: Record<string, unknown> };

const box = (style: Style, children?: Array<Node> | string): Node => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children },
});

/* satori has no `inset` shorthand — each side must be named. */
const sides = { top: INSET, right: INSET, bottom: INSET, left: INSET } as const;

/**
 * Corner ticks — 9×1 and 1×9 crosses on each corner. The site draws these with
 * a pseudo-element; satori has none, so they are eight positioned rectangles.
 */
function ticks(): Array<Node> {
  const bar = (style: Style) => box({ position: "absolute", background: color.subtle, ...style });
  return [
    bar({ width: 9, height: 1, left: -5, top: -1 }),
    bar({ width: 1, height: 9, left: -1, top: -5 }),
    bar({ width: 9, height: 1, right: -5, top: -1 }),
    bar({ width: 1, height: 9, right: -1, top: -5 }),
    bar({ width: 9, height: 1, left: -5, bottom: -1 }),
    bar({ width: 1, height: 9, left: -1, bottom: -5 }),
    bar({ width: 9, height: 1, right: -5, bottom: -1 }),
    bar({ width: 1, height: 9, right: -1, bottom: -5 }),
  ];
}

/** Downscaled once so satori embeds a 400px mark, not the lossless original. */
async function mark(): Promise<string> {
  const buffer = await sharp(await brandAsset("uinaf-computer.png"))
    .resize(MARK, MARK, { fit: "cover" })
    .png()
    .toBuffer();
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export async function siteCard(options: { kicker: string; title: string; sub: string }) {
  const image = await mark();

  return box(
    {
      width: CARD.width,
      height: CARD.height,
      position: "relative",
      background: color.bg,
      fontFamily: "Berkeley Mono",
      color: color.fg,
    },
    [
      box({ position: "absolute", ...sides }, [
        box({
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: `1px solid ${color.line}`,
        }),
        ...ticks(),
      ]),
      box({ position: "absolute", ...sides, alignItems: "center", gap: 64, padding: "0 72px" }, [
        box({ flex: 1, flexDirection: "column", gap: 24, minWidth: 0 }, [
          box(
            {
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: TRACKING_CAPS,
              color: color.subtle,
            },
            options.kicker,
          ),
          box({ fontSize: 64, lineHeight: 1.2, letterSpacing: "-0.01em" }, options.title),
          box({ fontSize: 22, color: color.subtle }, options.sub),
        ]),
        {
          type: "img",
          props: {
            src: image,
            width: MARK,
            height: MARK,
            style: { border: `1px solid ${color.frame}`, flexShrink: 0 },
          },
        },
      ]),
    ],
  );
}

/** Renders a satori element tree to PNG bytes, ready to hand to a Response. */
export async function png(element: unknown): Promise<ArrayBuffer> {
  const svg = await satori(element as Parameters<typeof satori>[0], {
    ...CARD,
    fonts: [{ name: "Berkeley Mono", data: await brandFont(), weight: 400, style: "normal" }],
  });

  const rendered = new Resvg(svg, { fitTo: { mode: "width", value: CARD.width } }).render().asPng();

  /* Copied into a plain ArrayBuffer so it satisfies BodyInit. */
  const bytes = new ArrayBuffer(rendered.byteLength);
  new Uint8Array(bytes).set(rendered);
  return bytes;
}
