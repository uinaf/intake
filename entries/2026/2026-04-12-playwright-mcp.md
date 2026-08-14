---
title: microsoft/playwright-mcp
source: https://github.com/microsoft/playwright-mcp
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - mcp
  - browser-automation
  - tools
---

Playwright MCP is a strong reference for browser automation designed around structured accessibility snapshots instead of screenshot-heavy vision loops.

## Key takeaways

- **Accessibility snapshots**: Browser automation designed around structured accessibility snapshots instead of screenshot-heavy vision loops.
- **Token economy**: Expose the page as accessibility data and deterministic actions, not as raw pixels plus guesswork.
- **MCP vs CLI skills**: MCP is better when persistent browser state and iterative introspection matter; CLI surfaces can be more token-efficient for coding agents.
- **Capability placement**: Explains when a capability should live behind MCP versus a narrower command surface.
- **Agent-optimized output**: Canonical example of an MCP server whose output shape is optimized for agent reliability rather than human convenience.
