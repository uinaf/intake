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

- **REA Planner:** Collaborates with engineers on hypothesis generation and experiment design
- **REA Executor:** Manages async job execution via a hibernate-and-wake mechanism
- **Dual-Source Hypothesis Engine:** Combines historical experiment database + ML research agent
- **Three-Phase Planning:** Validation → Combination → Exploitation (within approved compute budgets)
- Built on **Confucius** (Meta's internal agent framework, [arxiv](https://arxiv.org/abs/2512.10398))
