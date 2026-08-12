# Contributing

This repository accepts useful summaries of public sources.

## Content

- Write the summary in your own words.
- Link the canonical source and keep one source per entry.
- Do not commit full articles, full transcripts, screenshots, media, private
  material, personal data, or credentials.
- Reuse lowercase kebab-case tags where possible.
- Improve an existing entry when its normalized source URL already exists.

Single-source intakes may be published directly to `main` with the
[`uinaf-intake`](skills/uinaf-intake/SKILL.md) skill. Use a pull request for
bulk imports, schema changes, site code, and skill changes.

## Verification

```bash
pnpm install
pnpm run verify
```

Use Conventional Commit subjects. Never force-push `main`.
