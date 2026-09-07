# Publishing

Run `scripts/publish-entry.ts` directly with Node from the canonical checkout.
First run `pnpm install --frozen-lockfile` in that checkout, including dev
dependencies: the publisher imports the repository's YAML entry parser before
creating its validation worktree. The worktree install does not bootstrap the
calling checkout.
It accepts the repository, draft file, and entry path as its three arguments.
Update the checkout as well as installed skill copies when adopting a publisher
repair.

## Authentication and signing

The consuming runtime's documented identity is `glitch418x[bot]`. Its owning
[GitHub App runbook](https://github.com/uinaf/glitch-workspace/blob/main/docs/runbooks/github-app-git.md)
defines repository-scoped authentication. The publisher invokes
`gh app-auth exec --repo github.com/uinaf/intake -- gh api` and verifies the
authenticated identity before any write. It does not fall back to a human
login, accept token arguments, or manage keys or runtime configuration.

GitHub's [installation authentication documentation](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)
defines installation-token access. Authentication alone does not sign a local
commit. The publisher uses
[`createCommitOnBranch`](https://docs.github.com/en/graphql/reference/commits#createcommitonbranch),
whose signing support is explicit, without custom author, committer, or signature
fields. GitHub's [bot signature requirements](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#signature-verification-for-bots)
require App/bot authentication and no such overrides.

The commit readback must identify the expected App author and include
`verification.verified: true`, reason `valid`, and nonempty signature and payload.
The fetched remote history must contain the commit with the expected parent,
tree, and message, and still contain the published entry. Missing verification
is failure, even if the write already landed. Do not republish to fix signing.

## Validation and concurrency

Each attempt uses a detached temporary worktree from fresh `origin/main`,
installs locked dependencies, and runs `pnpm run check:entries` and
`pnpm run verify`. The existing validator owns schema and normalized-source
deduplication; the verification graph covers formatting, build, and internal
links. Builds need access to `cdn.uinaf.dev` or a seeded brand cache.
The validation process trusts only its temporary checkout through
`MISE_TRUSTED_CONFIG_PATHS`; it does not change persistent Mise trust settings.
TLS certificate and proxy settings are retained. Failure diagnostics redact
common credential fields and token formats.

Keep the original filename, saved date, and source when updating an entry.
Changed dates or sources fail rather than being silently rewritten. Identical
content produces no commit and is reported as unchanged, not a new publication.

`expectedHeadOid` makes each API write conditional on the validated head.
Only an explicit stale-head rejection with a newly fetched head permits a
retry, with three total write attempts. Changes to the target entry stop the
retry; duplicates introduced elsewhere fail fresh validation. There is no
rebase, force-push, or branch overwrite.

A unique `Intake-Publication` commit trailer supports readback after missing,
malformed, or lost responses. It is not an API idempotency key. Reconciliation
examines at most 100 commits on the first-parent history since the attempted
base. An unproven outcome stops without another write. Inspect remote history
and signature verification before deciding whether to rerun; do not infer
failure from a timeout alone. A post-write readback or validation failure can
leave a remote commit present and is reported as an error without rollback.

Success proves GitHub publication, not completion of the asynchronous site
deployment. The caller's branch and working files are not advanced or reset.

## Refresh after integration

This repair requires review and integration before consumers adopt it. Once it
is on `main`, fast-forward the registered `uinaf/intake` checkout with
`git pull --ff-only`. In the consuming workspace, run its declared
`pnpm run skills:sync` workflow to rematerialize `uinaf-intake`; run GitHub
commands through that workspace's App contract. Machine-global installations
use their profile-owned `mise run agents:update` workflow instead. Do not patch
generated installed copies or change authentication configuration as part of
refreshing this skill.
