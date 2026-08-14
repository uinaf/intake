---
title: "Code Execution with MCP: Building More Efficient Agents"
source: https://anthropic.com/engineering/code-execution-with-mcp
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-engineering
---

Anthropic on cutting tool-call token overhead by having agents write code to talk to MCP servers instead of calling tools directly.

## Key takeaways

- **Token reduction**: Experiments showed up to 98.7% token reduction.
- **Context pressure**: Applies when tool schema overhead and intermediate results consume context.
- **Code primitive**: Wrap multi-step tool interaction in a code-execution primitive rather than exposing each operation as a discrete tool call.
