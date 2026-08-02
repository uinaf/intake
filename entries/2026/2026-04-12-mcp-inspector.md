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

# MCP Inspector

- MCP Inspector is the practical debugging tool for MCP servers: a web UI plus proxy bridge that lets you inspect tools, launch servers, and validate behavior without building a full client harness around them.
- The useful split is MCPI for the UI and MCPP for the protocol bridge across stdio, SSE, and streamable HTTP transports.
- For harness engineering, this is important because MCP failures are often interface failures, not model failures. You need a way to test the server in isolation.
- The export flow for `mcp.json` style configurations also makes it a bridge between server development and real client integration.
- Worth preserving because good protocol tooling is part of the harness, not optional polish.
