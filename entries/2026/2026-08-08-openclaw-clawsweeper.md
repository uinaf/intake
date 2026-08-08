---
title: "ClawSweeper: OpenClaw's MIT maintainer review and repair bot"
source: https://github.com/openclaw/clawsweeper
saved: 2026-08-08
type: article
tags:
  - code-review
  - coding-agents
  - agents
  - architecture
  - github
---

Open-source (MIT) conservative maintenance bot for OpenClaw repositories. Reviews issues/PRs on a schedule and on exact events, syncs one durable comment per item, and runs guarded repair/automerge lanes. Brain is Codex; mutations are deterministic TypeScript with short-lived GitHub App tokens.

## Key takeaways

- **Review vs apply split**: Codex judges in a read-only sandbox and never holds write credentials during review; apply re-fetches live GitHub state before any close/comment/merge.
- **Comment contract**: one marker-backed public comment edited in place (hidden verdict/action/head-SHA markers) instead of spam threads; status placeholder → final review.
- **Control plane**: GitHub App webhook → fast ack → leased queue (Cloudflare DO) → executor (often GitHub Actions) → publish records to Worker/R2; dashboard is observability-only.
- Maintainer commands (`@clawsweeper review|fix|autofix|automerge`, etc.) and advisory labels; production targets are OpenClaw repos—hosted instance is not a free public review SaaS (fork to self-host).
- Steal for a uinaf PR bot: App + durable comment + model/mutation separation + queue/dashboard. Do not fork Codex/GHA/CrabFleet or OpenClaw close-policy machinery wholesale.
