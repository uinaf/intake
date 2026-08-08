![](https://uinaf.dev/og/banner/intake.png)

# uinaf/intake

A public library of things worth keeping.

Each entry is an agent-written summary of a public source. Markdown in
[`entries/`](entries) is canonical and publishes to
[`intake.uinaf.dev`](https://intake.uinaf.dev).

## Entry schema

```yaml
title: A useful source title
source: https://example.com/original
saved: 2026-07-26
type: article
tags:
  - agent-engineering
```

Entries live at `entries/YYYY/YYYY-MM-DD-kebab-case.md`. The filename becomes
the permanent public URL.

## Development

```bash
bun install
bun run dev
bun run verify
```

The site uses Astro, TypeScript, Tailwind CSS, Berkeley Mono, and the current
visual language of [`uinaf.dev`](https://uinaf.dev). Cloudflare Pages deploys
the static build from `main`.

Brand artwork and the Berkeley Mono face are licensed and stay in
`cdn-uinaf-dev`; builds fetch what they need into an ignored `.brand-cache/`.
The share card at `/og.png` is generated per build, while the favicon set is
committed — rerun `bun run icons` when the artwork changes.

## Agent skill

The product-owned [`uinaf-intake`](skills/uinaf-intake/SKILL.md) skill handles
single-source capture, validation, signed commits, and safe direct publishing.
Bulk imports and structural changes use pull requests.

Tessl publication (free lint gate, registry publish, install smoke) is documented
in [Skill release](docs/skill-release.md).

## License

[MIT](LICENSE)
