# Agent instructions

`entries/` is the canonical public intake library. Follow
[`skills/uinaf-intake/SKILL.md`](skills/uinaf-intake/SKILL.md) for normal
single-source capture.

- Keep one public source per entry.
- Entry bodies are an overview plus labeled `## Key takeaways`.
- Never publish private material, credentials, personal data, full articles,
  full transcripts, screenshots, or media.
- Preserve existing filenames because they are public URLs.
- Do not bypass duplicate-source, schema, formatting, build, or link checks.
- Publish normal intake through signed direct commits to `main`.
- Use pull requests for bulk imports, schema, site, CI, and skill changes.
- Never force-push `main`.

Run `pnpm run verify` before structural commits.
It runs only affected Mise lanes; use `pnpm run verify:full` to force the full
graph. CI forces the same graph so deletions and renames cannot rely on local
timestamp freshness.

## Runner

- Mise owns the verification graph and is a required runner prerequisite. pnpm
  runs each lane. Node is pinned in `.node-version` and `.tool-versions`.
- `pnpm run build` fetches brand artwork and the Berkeley Mono face from
  `cdn.uinaf.dev` into an ignored `.brand-cache/`. Allow egress to that host, or
  seed `.brand-cache/` first; the failure names the exact file to seed.
- `astro dev` is one server per checkout. A second `pnpm run dev` in the same
  directory reuses the first and still exits 0, so give each concurrent task its
  own worktree and set `PORT` when the default is taken.
