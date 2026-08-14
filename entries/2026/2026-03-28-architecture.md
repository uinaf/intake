---
title: Architecture
source: https://arxiv.org/abs/2512.10398
saved: 2026-03-28
type: paper
tags:
  - ai-agents
  - sdlc
  - spec-driven-development
  - coding-agents
  - automation
  - devops
  - linear
---

The note describes REA's planner-executor split on Confucius, Meta's internal agent framework, with a dual-source hypothesis engine and three-phase planning inside compute budgets.

## Key takeaways

- **Planner and executor**: REA Planner collaborates on hypotheses and experiment design. REA Executor manages async jobs via hibernate-and-wake.
- **Dual-source engine**: Hypotheses combine a historical experiment database with an ML research agent.
- **Three-phase planning**: Validation, combination, and exploitation stay inside approved compute budgets.
- **Confucius base**: The system is built on Confucius, Meta's internal agent framework.
