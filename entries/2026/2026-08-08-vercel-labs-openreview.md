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

Open-source, self-hosted GitHub App for on-demand PR reviews. Runs Claude in an isolated Vercel Sandbox with full repo access so the agent can run linters, formatters, and tests—not just summarize a diff.

## Key takeaways

- Trigger model: mention `@openreview` on a PR (Chat SDK webhook handling); deploy on Vercel with a GitHub App + Anthropic key.
- Stack: Next.js, Vercel Workflow (durable execution), Vercel Sandbox, AI SDK, Octokit—parallel to Cloudflare Workers/Workflows/Sandbox topology on a different cloud.
- Differentiator vs diff-only bots: sandboxed tool use against a real checkout.
- Useful reference for mention-triggered review UX and "agent in a box" product shape; brain and host differ from a Cursor-SDK-on-Cloudflare design.
