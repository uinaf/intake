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
---

AI observability platform from the Pydantic team with SQL-queryable traces and full-stack OTEL covering both the AI layer and backend.

## Key takeaways

- **SQL-queryable traces**: All trace data is SQL-queryable (PostgreSQL-compatible), so coding agents can query production observability data via the Logfire MCP server.
- **Full-stack OTEL**: Covers both the AI layer and backend, letting you determine whether a failure is in agent logic or infrastructure.
- **PydanticAI fit**: The natural observability choice for PydanticAI-based harnesses.
