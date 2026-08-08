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

Run `bun run verify` before structural commits. For skill package changes, also
run `bun run skill:lint` (requires Tessl CLI on `PATH`; free plugin lint only,
no cloud review). CI runs the same lint on skill-path PRs and `main` pushes.

## Runner

- Bun runs every script. Its version is pinned in `.tool-versions`; Node is
  pinned in `.node-version`.
- `bun run build` fetches brand artwork and the Berkeley Mono face from
  `cdn.uinaf.dev` into an ignored `.brand-cache/`. Allow egress to that host, or
  seed `.brand-cache/` first — the failure names the exact file to seed.
- `astro dev` is one server per checkout. A second `bun run dev` in the same
  directory reuses the first and still exits 0, so give each concurrent task its
  own worktree and set `PORT` when the default is taken.
