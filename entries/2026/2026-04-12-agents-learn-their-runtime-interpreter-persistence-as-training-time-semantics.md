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

# Agents Learn Their Runtime: Interpreter Persistence as Training-Time Semantics

- Controlled experiment isolating interpreter state persistence as an independent training variable.
- The harness finding: mismatching your runtime persistence mode to the model's training-time semantics produces either 80% missing-variable errors (model expects state that doesn't persist) or 3.5× token overhead (model redundantly recomputes state it expects to already have).
- Use it under Design Primitives / Agent Loop when designing or comparing harness choices.
