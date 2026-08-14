---
title: Extended Thinking — Claude API Docs
source: https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - agent-loop
  - tools
  - anthropic-docs
---

The harness-critical Claude API reference for wiring extended thinking into tool-use loops.

## Key takeaways

- **Reasoning budget**: `budget_tokens` controls reasoning depth per turn.
- **Preserve thinking blocks**: Thinking blocks must be preserved when passing tool results back; omitting them silently breaks multi-step reasoning.
- **No mid-turn switch**: Thinking mode cannot change mid-turn.
- **Before wiring**: Essential before wiring extended thinking into any tool-use loop.
