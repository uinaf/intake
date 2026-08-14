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
---

This spec page is worth keeping because transport choice changes deployment architecture, not just wiring details.

## Key takeaways

- **Transport shapes architecture**: Transport choice changes deployment architecture, not just wiring details.
- **Two core transports**: The 2025-11-25 spec standardizes `stdio` and Streamable HTTP, with Streamable HTTP replacing the older HTTP+SSE pattern.
- **Remote multi-client servers**: Streamable HTTP lets MCP servers live as independent services handling multiple clients instead of only as local subprocesses.
- **Load-bearing details**: Spells out newline-delimited JSON-RPC on stdio, single-endpoint HTTP semantics, optional SSE streaming, and security requirements around Origin validation, localhost binding, and authentication.
- **Canonical reference**: Keep it as the canonical transport reference, especially if tempted to treat MCP networking as an implementation footnote.
