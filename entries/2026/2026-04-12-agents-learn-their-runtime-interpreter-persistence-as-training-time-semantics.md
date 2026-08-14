---
title: "Agents Learn Their Runtime: Interpreter Persistence as Training-Time Semantics"
source: https://arxiv.org/abs/2603.01209
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - design-primitives
  - agent-loop
  - arxiv
---

A controlled experiment that treats interpreter state persistence as its own training variable, and shows a large penalty when runtime persistence disagrees with training-time semantics.

## Key takeaways

- **Isolated variable**: Interpreter state persistence is studied as an independent training-time factor.
- **Missing state**: If the model expects persisted state the runtime does not keep, the result is about 80% missing-variable errors.
- **Redundant recompute**: If the model expects to recompute state the runtime already has, token overhead is about 3.5×.
- **Match the mode**: The harness finding is to match runtime persistence to the model's training-time semantics.
