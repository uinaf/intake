---
title: Compaction — Claude API Docs
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
intaked_by: glitch418x
---

# Compaction — Claude API Docs

- Anthropic's reference for server-side context compaction: automatically summarizes older context when approaching the window limit.
- Reduced token consumption by 84% in a 100-turn web search eval while allowing agents to complete workflows that would otherwise hit context limits.
- Use it under Design Primitives / Context Delivery & Compaction when designing or comparing harness choices.
