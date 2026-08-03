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

- The harness-critical reference for integrating extended thinking into agent loops: `budget_tokens` controls reasoning depth per turn, thinking blocks **must be preserved** when passing tool results back (omitting them silently breaks multi-step reasoning), and thinking mode cannot change mid-turn.
- Essential before wiring extended thinking into any tool-use loop.
- Use it under Design Primitives / Agent Loop when designing or comparing harness choices.
