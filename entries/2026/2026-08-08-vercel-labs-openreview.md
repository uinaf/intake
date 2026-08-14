---
title: "OpenReview: Vercel Labs self-hosted AI PR review bot"
source: https://github.com/vercel-labs/openreview
saved: 2026-08-08
type: article
tags:
  - code-review
  - coding-agents
  - agents
  - architecture
  - github
---

Open-source, self-hosted GitHub App for on-demand PR reviews. It runs Claude in an isolated Vercel Sandbox with a full repo checkout so the agent can run linters, formatters, and tests, not just summarize a diff.

## Key takeaways

- **Mention trigger**: `@openreview` on a PR, handled through a Chat SDK webhook. Deploy on Vercel with a GitHub App and an Anthropic key.
- **Vercel stack**: Next.js, Vercel Workflow for durable execution, Vercel Sandbox, AI SDK, and Octokit — the same topology as Workers, Workflows, and Sandbox on another cloud.
- **Sandbox tools**: Differentiator versus diff-only bots is tool use against a real checkout.
- **Product shape**: Useful reference for mention-triggered review UX and an agent-in-a-box review bot.
