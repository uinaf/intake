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

Self-hosted GitHub App for AI PR review built on Cloudflare Workers: queue-backed jobs, multi-provider LLM routing, inline findings, check runs, and a GitHub OAuth dashboard for inspecting runs.

## Key takeaways

- Flow: webhook verify → load repo settings → enqueue on Cloudflare Queues → consume job → fetch diff → call configured model provider → post inline + summary review / checks.
- Product surface matches what a custom bot needs beyond logs: GitHub OAuth dashboard for jobs, history, model routing, failed queue runs, per-repo rules (labels, skip globs, custom prompts).
- Diff-oriented LLM review (not a full coding-agent sandbox)—complementary to Amplitude/OpenReview "agent in container" designs.
- Strong reference for orchestrator + dashboard on the same Cloudflare deploy; weaker reference for Cursor SDK local execution inside Sandboxes.
