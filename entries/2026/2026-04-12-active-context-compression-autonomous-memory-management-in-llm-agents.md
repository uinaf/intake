---
title: "Active Context Compression: Autonomous Memory Management in LLM Agents"
source: https://arxiv.org/abs/2601.07190
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - design-primitives
  - context-delivery-and-compaction
  - context-engineering
  - context-compression
  - memory
  - arxiv
intaked_by: glitch418x
---

# Active Context Compression: Autonomous Memory Management in LLM Agents

- Proposes a "Focus Agent" architecture where the agent autonomously decides when to consolidate interaction history into a persistent Knowledge block and prune raw context — shifting compression from a harness-enforced policy to a model-controlled action.
- Produces 22.7% token reduction with no accuracy loss on long-horizon tasks; the core contribution is making the compression unit semantically coherent (the agent decides what knowledge is worth preserving) rather than mechanically token-budget-driven.
- Use it under Design Primitives / Context Delivery & Compaction when designing or comparing harness choices.
