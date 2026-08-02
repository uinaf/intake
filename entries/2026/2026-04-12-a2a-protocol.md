---
title: A2A Protocol
source: https://github.com/a2aproject/A2A
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - protocols
  - multi-agent
  - a2a
---

# A2A Protocol

- A2A is worth keeping because it solves a different problem than MCP: agent-to-agent interoperability rather than agent-to-tool connectivity.
- The core ideas are capability discovery via Agent Cards, opaque collaboration without exposing internal memory/tools, and support for long-running tasks over JSON-RPC plus HTTP/SSE style transports.
- The important harness distinction is boundary choice. MCP is for giving an agent capabilities; A2A is for letting one agent coordinate with another autonomous system.
- That matters for real multi-agent systems where handoffs should preserve abstraction boundaries instead of flattening every downstream agent into a tool call.
- Keep this as the reference for cross-framework agent interoperability when MCP alone is the wrong layer.
