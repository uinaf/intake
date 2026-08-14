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
---

A Focus Agent architecture that lets the model decide when to consolidate history into a persistent Knowledge block and prune raw context, instead of applying a harness token policy.

## Key takeaways

- **Model-controlled compression**: The agent chooses when to consolidate interaction history into a Knowledge block and prune raw context.
- **Policy shift**: Compression moves from a harness-enforced token budget to a model-controlled action.
- **Reported result**: 22.7% token reduction with no accuracy loss on long-horizon tasks, because the preserved unit is semantically coherent knowledge.
