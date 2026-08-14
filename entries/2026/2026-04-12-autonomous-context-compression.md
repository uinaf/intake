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

Context compression becomes an agent-called tool instead of a harness firing at a token threshold, so compaction happens between tasks rather than mid-subtask.

## Key takeaways

- **Agent-triggered**: Agents call a dedicated tool to compress when it is strategically appropriate—between tasks or before large inputs.
- **Not a threshold**: Compression is no longer a harness policy that fires at a fixed token limit.
- **Mid-task failure**: Reactive-at-limit compaction can interrupt an agent mid-subtask and corrupt in-flight reasoning state; this design aims to eliminate that.
