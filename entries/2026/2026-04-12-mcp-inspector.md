---
title: MCP Inspector
source: https://github.com/modelcontextprotocol/inspector
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - mcp
  - debugging
  - developer-experience
---

Practical debugging tool for MCP servers: a web UI plus proxy bridge that lets you inspect tools, launch servers, and validate behavior without a full client harness.

## Key takeaways

- **Isolated server debugging**: A web UI plus proxy bridge to inspect tools, launch servers, and validate behavior without building a full client harness around them.
- **UI and protocol split**: MCPI is the UI and MCPP is the protocol bridge across stdio, SSE, and streamable HTTP transports.
- **Interface vs model failures**: MCP failures are often interface failures, not model failures, so you need a way to test the server in isolation.
- **Config export**: The export flow for `mcp.json` style configurations bridges server development and real client integration.
- **Harness tooling**: Good protocol tooling is part of the harness, not optional polish.
