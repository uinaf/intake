---
title: Prompt Caching — Claude API Docs
source: https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - context-delivery-and-compaction
  - tools
  - anthropic-docs
---

The most effective harness-level cost lever: cache repeated system prompts, tool definitions, and long documents across requests.

## Key takeaways

- **Harness cost lever**: Cache repeated system prompts, tool definitions, and long documents across requests.
- **Cache breakpoints**: Explains where to place `cache_control` breakpoints for maximum reuse across multi-turn agent sessions.
- **Context delivery comparison**: Use it when designing or comparing harness choices around context delivery and compaction.
