---
title: "Codra: self-hosted AI PR review on Cloudflare Workers"
source: https://github.com/devarshishimpi/codra
saved: 2026-08-08
type: article
tags:
  - code-review
  - cloudflare
  - agents
  - github
  - architecture
---

Self-hosted GitHub App for AI PR review on Cloudflare Workers: queue-backed jobs, multi-provider LLM routing, inline findings, check runs, and a GitHub OAuth dashboard.

## Key takeaways

- **Job flow**: Verify the webhook, load repo settings, enqueue on Cloudflare Queues, fetch the diff, call the configured model, and post inline plus summary review or checks.
- **Dashboard**: GitHub OAuth UI for jobs, history, model routing, failed queue runs, and per-repo rules such as labels, skip globs, and custom prompts.
- **Diff review**: LLM review of the diff, not a full coding-agent sandbox — complementary to agent-in-container designs.
- **Orchestrator reference**: Strong example of orchestrator plus dashboard on one Cloudflare deploy; weaker as a guide to in-sandbox coding-agent execution.
