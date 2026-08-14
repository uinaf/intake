---
title: Plan-and-Execute Agents
source: https://blog.langchain.com/plan-and-execute-agents
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - planning-and-task-decomposition
  - planning
  - langchain
---

The canonical engineering write-up separating planning from execution as distinct harness layers: a planner generates the step list; an executor works through it.

## Key takeaways

- **Distinct harness layers**: Separates planning from execution as distinct harness layers.
- **Replan when needed**: A planner LLM generates the step list once; an executor agent works through it, replanning only when needed.
- **Canonical pattern**: Defines the pattern that most modern task-decomposition harnesses follow.
