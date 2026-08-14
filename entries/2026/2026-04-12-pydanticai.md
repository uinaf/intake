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

Type-safe agent framework where tool definitions, parameters, and return values are Pydantic models, shifting structure mismatches to type-check failures.

## Key takeaways

- **Pydantic tool contracts**: Tool definitions, parameters, and return values are Pydantic models.
- **Type-check failures**: Shifts "agent output doesn't match expected structure" from a runtime bug to a type-check failure.
- **RunContext injection**: `RunContext` dependency injection is the reference design for passing session-scoped objects through the harness without global state.
