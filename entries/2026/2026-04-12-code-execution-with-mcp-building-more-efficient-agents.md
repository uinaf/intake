---
title: "Code Execution with MCP: Building More Efficient Agents"
source: https://anthropic.com/engineering/code-execution-with-mcp
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-engineering
---

## Why it matters
Anthropic's engineering account of reducing tool-call token overhead by having agents write code to interact with MCP servers rather than calling tools directly: up to 98.7% token reduction in experiments. Broadly applicable to any harness where tool schema overhead and intermediate results are consuming context — the pattern is to wrap multi-step tool interaction in a code execution primitive rather than exposing each operation as a discrete tool call.

## Classification
- Section: Design Primitives
- Subsection: Skills & MCP
- Type: article/reference
