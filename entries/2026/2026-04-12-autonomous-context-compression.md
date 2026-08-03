---
title: Autonomous Context Compression
source: https://blog.langchain.com/autonomous-context-compression
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - context-delivery-and-compaction
  - context-engineering
  - compaction
  - context-compression
  - tools
  - langchain
---

- Shifts context compression from harness-controlled (compacting at a fixed token threshold) to agent-controlled: agents call a dedicated tool to trigger compression when strategically appropriate — between tasks or before consuming large inputs.
- Eliminates the failure mode where reactive-at-limit compaction interrupts agents mid-subtask and corrupts in-flight reasoning state.
- Use it under Design Primitives / Context Delivery & Compaction when designing or comparing harness choices.
