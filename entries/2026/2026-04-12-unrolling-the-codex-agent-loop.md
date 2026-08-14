---
title: Unrolling the Codex Agent Loop
source: https://openai.com/index/unrolling-the-codex-agent-loop
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - coding-agents
  - agent-loop
  - openai
---

Codex is a turn protocol, not a prompt wrapper. Every step ends with an assistant message or a tool call that feeds the next turn.

## Key takeaways

- **Turn protocol**: Each step either finishes with an assistant message or emits a tool call that becomes the next turn.
- **Prompt tax**: Exact-prefix caching and compaction are core harness mechanics once turns accumulate, not optional optimizations.
- **Four stages**: Observe, plan, act, verify. Burying one of those stages makes failures harder to debug.
