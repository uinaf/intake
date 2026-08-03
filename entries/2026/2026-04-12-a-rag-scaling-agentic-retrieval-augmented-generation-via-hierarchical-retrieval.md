---
title: "A-RAG: Scaling Agentic Retrieval-Augmented Generation via Hierarchical Retrieval Interfaces"
source: https://arxiv.org/abs/2602.03442
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - design-primitives
  - context-delivery-and-compaction
  - agent-loop
  - context-engineering
  - tools
  - evals
  - arxiv
---

- Reframes RAG as a harness tool-design problem: instead of injecting retrieved documents into context at pipeline time, expose three retrieval tools (keyword search, semantic search, chunk read) and let the agent pull information incrementally as each reasoning step requires it.
- The key harness decision is architectural — retrieval becomes a tool call in the agent loop, not a preprocessing step — which means the agent's reasoning can adaptively narrow scope rather than processing everything injected upfront.
- Use it under Design Primitives / Context Delivery & Compaction when designing or comparing harness choices.
