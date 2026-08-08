# Skill release

The product-owned agent skill lives at `skills/uinaf-intake/`. Tessl plugin
SemVer is the `version` field in `skills/uinaf-intake/.tessl-plugin/plugin.json`.

## CI

| Event                                                  | Workflow                                                | What runs                                                                                            |
| ------------------------------------------------------ | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| PR touching `skills/uinaf-intake/**`                   | [Lint skill](../.github/workflows/lint-skill.yml)       | Free `tessl plugin lint` (no token)                                                                  |
| Push to `main` touching the skill (or manual dispatch) | [Publish skill](../.github/workflows/publish-skill.yml) | Lint via `uinaf/tessl-publish-action` (`review-mode: lint`) → Tessl registry publish → install smoke |

Publish uses GitHub Environment `skill-release` with secret `TESSL_TOKEN`
(workspace-scoped Tessl `publisher` role). Pull-request jobs stay secretless.

Bump the manifest version when the skill should ship a new immutable release.
`version-strategy: manifest` publishes that exact version and treats an
already-published version as an idempotent retry. The smoke script
(`scripts/verify-published-skill.sh`) strict-installs the published tile into a
clean Codex project and checks discovery.

Cloud Tessl review is not part of this path. Do not set `review-mode: review`
on the publish action while the org is credit-limited.

## Local

```bash
bun run skill:lint
```

Requires the Tessl CLI on `PATH`. Local lint does not publish.
