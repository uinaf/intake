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

# Plan-and-Execute Agents

- The canonical engineering write-up separating planning from execution as distinct harness layers: a planner LLM generates the step list once; an executor agent works through it, replanning only when needed.
- Defines the pattern that most modern task-decomposition harnesses follow.
- Use it under Design Primitives / Planning & Task Decomposition when designing or comparing harness choices.
