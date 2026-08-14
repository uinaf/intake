---
title: Build Custom PR Agents on Cloudflare for Pennies
source: https://x.com/_bgiori/status/2031412763902534069
saved: 2026-03-10
type: tweet
tags:
  - agents
  - infrastructure
  - code-review
  - cloudflare
  - coding-agents
  - architecture
---

Brian Giori built custom PR agents on Cloudflare for pennies instead of paying for hosted GitHub agent actions. Bugbot-style UX: the agent pushes a branch and posts a one-click merge comment.

## Key takeaways

- **Stack**: Workers to Workflows to Sandbox to Flue to OpenCode inside the sandbox.
- **Skill-agnostic**: Prepare, review, publish; swap skill markdown and result schema for a different agent.
- **Typed output**: Structured schemas (Valibot) so results pipe into GitHub APIs without NLP parsing.
- **Two-phase**: Prepare/publish keeps humans in control, detects stale PRs, and leaves real commits on named branches.
- **Safety**: Hashed capability tokens, scoped proxies so the agent never sees raw tokens, auto-invalidation when PR head changes.
- **Retrigger**: `@amplitude track` re-runs on the latest head SHA.
