---
title: "Compaction: Claude API Docs"
source: https://platform.claude.com/docs/en/build-with-claude/compaction
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - context-delivery-and-compaction
  - context-engineering
  - compaction
  - evals
  - workflows
  - anthropic-docs
---

Anthropic's reference for server-side context compaction: automatically summarizing older context when approaching the window limit.

## Key takeaways

- **Server-side compaction**: Automatically summarizes older context as the window fills.
- **Token savings**: Reduced token consumption by 84% in a 100-turn web search eval.
- **Longer workflows**: Lets agents complete workflows that would otherwise hit context limits.
