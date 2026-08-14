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

A harness-design take on RAG: expose keyword search, semantic search, and chunk read as tools so the agent pulls information incrementally instead of ingesting a pre-stuffed context.

## Key takeaways

- **Three retrieval tools**: Keyword search, semantic search, and chunk read replace pipeline-time document injection.
- **Tool-call retrieval**: Retrieval becomes a step in the agent loop, not a preprocessing stage.
- **Adaptive scope**: The agent can narrow what it reads as reasoning proceeds instead of processing everything injected up front.
