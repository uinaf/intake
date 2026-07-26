---
title: MCP Streamable HTTP Transport
source: https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - mcp
  - protocols
  - transport
intaked_by: glitch418x
---

# MCP Streamable HTTP Transport

- This spec page is worth keeping because transport choice changes deployment architecture, not just wiring details.
- The 2025-11-25 spec standardizes two core transports: `stdio` and Streamable HTTP, with Streamable HTTP replacing the older HTTP+SSE pattern.
- The big harness implication is remote deployment. Streamable HTTP allows MCP servers to live as independent services handling multiple clients instead of only as local subprocesses.
- The page is also useful because it spells out the boring but load-bearing details: newline-delimited JSON-RPC on stdio, single-endpoint HTTP semantics, optional SSE streaming, and the security requirements around Origin validation, localhost binding, and authentication.
- Keep it as the canonical transport reference, especially for anyone tempted to treat MCP networking as an implementation footnote.
