---
title: Where LLM Agents Fail and How They Can Learn From Failures (AgentDebug)
source: https://arxiv.org/abs/2509.25370
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - design-primitives
  - debugging-and-developer-experience
  - paper
---

ICLR 2026 paper that classifies agent failures across memory, reflection, planning, action, and system layers. AgentDebug isolates root causes and feeds corrective feedback.

## Key takeaways

- **Error taxonomy**: Modular classes for memory, reflection, planning, action, and system-level failures.
- **Root-cause debug**: AgentDebug isolates the failing step and provides corrective feedback.
- **Accuracy lift**: Reports +24% higher all-correct accuracy with that feedback loop.
- **Failure dataset**: The Agent Error Benchmark annotates trajectories from ALFWorld, GAIA, and WebShop.
