# Agent instructions

`entries/` is the canonical public intake library. Follow
[`skills/uinaf-intake/SKILL.md`](skills/uinaf-intake/SKILL.md) for normal
single-source capture.

- Keep one public source per entry.
- Never publish private material, credentials, personal data, full articles,
  full transcripts, screenshots, or media.
- Preserve existing filenames because they are public URLs.
- Do not bypass duplicate-source, schema, formatting, build, or link checks.
- Publish normal intake through signed direct commits to `main`.
- Use pull requests for bulk imports, schema, site, CI, and skill changes.
- Never force-push `main`.

Run `bun run verify` before structural commits.
