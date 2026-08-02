---
title: PydanticAI
source: https://github.com/pydantic/pydantic-ai
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - design-primitives
  - task-runners-and-orchestration
  - repo
---

## Why it matters
Type-safe agent framework where tool definitions, parameters, and return values are Pydantic models. Shifts "agent output doesn't match expected structure" from a runtime bug to a type-check failure; its `RunContext` dependency injection pattern is the reference design for passing session-scoped objects through the harness without global state.

## Classification
- Section: Design Primitives
- Subsection: Task Runners & Orchestration
- Type: repository
