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

MIT-licensed conservative maintenance bot for OpenClaw repos. It reviews issues and PRs on a schedule and on exact events, keeps one durable comment per item, and runs guarded repair or automerge lanes.

## Key takeaways

- **Review versus apply**: Codex judges in a read-only sandbox and never holds write credentials during review. Apply re-fetches live GitHub state before close, comment, or merge.
- **Comment contract**: One marker-backed public comment edited in place, with hidden verdict, action, and head-SHA markers, instead of spam threads.
- **Control plane**: GitHub App webhook, fast ack, leased queue on a Cloudflare Durable Object, executor (often GitHub Actions), and publish records to a Worker or R2. The dashboard is observability-only.
- **Maintainer commands**: `@clawsweeper review`, `fix`, `autofix`, `automerge`, and advisory labels. The hosted instance is not a free public review SaaS; fork to self-host.
- **Brain and mutations**: Codex is the judge; mutations are deterministic TypeScript with short-lived GitHub App tokens.
