---
title: Model Context Protocol (MCP)
source: https://modelcontextprotocol.io/introduction
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - mcp
  - protocols
  - tools
---

- MCP matters because it standardizes the boundary between an agent and external systems, instead of making every tool integration a one-off adapter.
- The useful framing is "USB-C for AI apps": one protocol layer for tools, data sources, and workflows across clients like Claude, ChatGPT, Cursor, and VS Code.
- For harness design, the important implication is portability. A server built once can be exposed to multiple agent runtimes without redoing the entire integration surface.
- The protocol is not just about tools. It also covers data access and workflow surfaces, which makes it a better mental model for agent infrastructure than thinking only in terms of function calling.
- Worth keeping as the canonical intro page when explaining why MCP exists before diving into transport, authorization, or server implementation details.
