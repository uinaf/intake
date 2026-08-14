---
title: Anthropic - Effective Harnesses for Long-Running Agents
source: https://anthropic.com/engineering/effective-harnesses-for-long-running-agents
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - long-running-agents
  - anthropic
  - coding-agents
---

Anthropic on long-running agents: clean session boundaries and durable handoff artifacts so new windows do not behave like mild amnesia.

## Key takeaways

- **Session boundaries**: Without clean boundaries and durable handoff artifacts, each new context window behaves like mild amnesia.
- **Initializer agent**: Do expensive setup once, then let implementation sessions inherit a prepared workspace.
- **Design the handoff**: If a task will span multiple contexts, design the handoff first.
