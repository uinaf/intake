---
title: Weights & Biases Weave
source: https://github.com/wandb/weave
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - design-primitives
  - observability-and-tracing
  - repo
---

Weights & Biases' tracing and eval layer for agent workflows: automatic call-graph capture, dataset versioning, and LLM-as-judge evals that sit on the wandb experiment-tracking stack.

## Key takeaways

- **Call graphs**: Automatic capture of agent call graphs for tracing.
- **Dataset versioning**: Versions eval datasets alongside the runs they score.
- **Judge evals**: LLM-as-judge evaluations integrate with the existing wandb experiment-tracking ecosystem.
