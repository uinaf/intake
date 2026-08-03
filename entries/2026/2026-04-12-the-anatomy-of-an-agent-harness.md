---
title: The Anatomy of an Agent Harness
source: https://blog.langchain.com/the-anatomy-of-an-agent-harness
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - foundations
  - context-engineering
  - compaction
  - memory
  - langchain
---

- LangChain's structural breakdown of the five primitives that compose a harness: filesystem (durable state + agent collaboration surface), code execution (autonomous problem-solving without pre-designed solutions), sandbox (isolation + verification), memory (cross-session persistence), and context management (compaction against "context rot").
- The co-evolution warning — models trained with specific harnesses can become overfitted to those designs — explains why harness architecture choices have lasting consequences beyond the immediate task.
- Useful as a foundations reference when building or auditing agent scaffolding.
