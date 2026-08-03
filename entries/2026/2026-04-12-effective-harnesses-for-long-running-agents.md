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

- Long-running agents need clean session boundaries plus durable handoff artifacts. Otherwise each new context window behaves like mild amnesia.
- The initializer-agent pattern is useful: do expensive setup once, then let implementation sessions inherit a prepared workspace.
- If a task will span multiple contexts, design the handoff first.
