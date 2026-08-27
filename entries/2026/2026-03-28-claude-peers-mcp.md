---
title: "Claude Peers: Multi-Session Communication via MCP"
source: https://github.com/louislva/claude-peers-mcp
saved: 2026-03-28
type: research
tags:
  - multi-agent
  - claude-code
  - mcp
  - orchestration
---

claude-peers-mcp lets multiple Claude Code sessions talk to each other through an MCP server and SQLite, so they share context instead of sitting in isolated terminals.

## Key takeaways

- **Shared context**: Sessions form a team rather than isolated terminals.
- **Role split**: Planner, executor, and evaluator sessions communicate with each other.
- **Native-shaped loop**: It is the closest noted setup to Anthropic's planner-generator-evaluator running in Claude Code.
