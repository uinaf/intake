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

Official Cloudflare tutorial: a GitHub webhook Worker clones a PR into a Sandbox, asks Claude to analyze changed files, and posts a comment. A minimal skeleton, not a product bot.

## Key takeaways

- **Webhook path**: Verify `x-hub-signature-256`, handle `pull_request` opened or reopened, `getSandbox`, clone, compare commits, call the model, and comment.
- **Tutorial credentials**: Uses a PAT and Anthropic in the sample. Production should move to a GitHub App and inject credentials on egress instead of embedding tokens in clone URLs.
- **Missing product pieces**: No durable comment contract, queue, dashboard, structured inline reviews, or re-review commands.
- **Upgrade shape**: Keep the Worker as orchestrator and publisher; replace the one-shot model call with a coding agent against the sandbox checkout.
