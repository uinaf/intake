---
title: Cloudflare Sandbox tutorial — build a code review bot
source: https://developers.cloudflare.com/sandbox/tutorials/code-review-bot/
saved: 2026-08-08
type: article
tags:
  - cloudflare
  - code-review
  - coding-agents
  - agents
  - infrastructure
---

Official Cloudflare tutorial: GitHub webhook Worker clones a PR into a Sandbox, asks Claude to analyze changed files, and posts a PR comment. Minimal skeleton for Sandbox-hosted review bots.

## Key takeaways

- Pattern: verify `x-hub-signature-256` → on `pull_request` opened/reopened → `ctx.waitUntil(review)` → `getSandbox` → clone → compare commits → model → `issues.createComment`.
- Uses PAT + Anthropic in the tutorial; production should move to a GitHub App and prefer egress credential injection over embedding tokens in clone URLs.
- Good bootstrap for lifecycle and webhook plumbing; not a product bot (no durable comment contract, no queue/dashboard, no structured inline reviews, no re-review commands).
- Natural upgrade path for a Cursor-based bot: same Sandbox clone step, replace Claude one-shot with `@cursor/sdk` local against `/workspace/repo`, keep Worker as orchestrator/publisher.
