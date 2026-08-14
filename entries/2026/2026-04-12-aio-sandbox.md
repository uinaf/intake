---
title: AIO Sandbox
source: https://github.com/agent-infra/sandbox
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - agent-security
---

An all-in-one Docker sandbox that puts browser, shell, filesystem, MCP servers, and VS Code Server in one container, with 4–8s startup and Claude Skills mounting.

## Key takeaways

- **One container**: Browser, shell, filesystem, MCP servers, and VS Code Server share a single Docker environment.
- **Native MCP**: Sandbox capabilities are exposed to LLMs through the standard protocol.
- **Shared downloads**: Files downloaded in the browser are immediately available in the terminal and VS Code.
- **Startup**: Optimized start is 4–8 seconds depending on config, with Claude Skills mounting support.
