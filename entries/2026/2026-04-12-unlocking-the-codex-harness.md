---
title: OpenAI - Unlocking the Codex Harness
source: https://openai.com/index/unlocking-the-codex-harness
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - coding-agents
  - protocols
  - openai
---

The interesting part of Codex is the protocol, not the UI. Item, Turn, and Thread explain why serious agent clients need a harness-native transport instead of raw chat messages.

## Key takeaways

- **Protocol first**: Item, Turn, and Thread are the reason a purpose-built transport exists.
- **Beyond MCP**: Approval flows, streaming diffs, persistence, and resumability become protocol problems that MCP alone does not cover well.
- **Runtime reference**: Useful when designing agent runtimes or explaining why a harness layer exists at all.
