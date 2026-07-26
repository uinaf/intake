---
title: Pydantic Logfire
source: https://github.com/pydantic/logfire
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - design-primitives
  - observability-and-tracing
  - repo
intaked_by: glitch418x
---

## Why it matters
AI observability platform from the Pydantic team with a unique angle: all trace data is SQL-queryable (PostgreSQL-compatible), so coding agents can query production observability data directly via the Logfire MCP server. Full-stack OTEL tracing covers both the AI layer and backend — letting you determine whether a failure is in agent logic or infrastructure. The natural observability choice for PydanticAI-based harnesses.

## Classification
- Section: Design Primitives
- Subsection: Observability & Tracing
- Type: repository
