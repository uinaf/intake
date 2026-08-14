---
title: instructor
source: https://python.useinstructor.com/
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - tool-design
  - tools
  - instructor
---

Instructor maps Pydantic models to structured LLM extraction with built-in retries and validation-error feedback, replacing ad-hoc JSON parsing.

## Key takeaways

- **Structured extraction**: Maps Pydantic models directly to structured LLM extraction with built-in retry and validation-error feedback loops.
- **Type-safe tool output**: Turns tool-call output parsing from ad-hoc JSON handling into type-safe data models, eliminating an entire class of harness parsing bugs.
- **Tool design comparison**: Use it when designing or comparing harness choices around tool design and structured outputs.
