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

# microsoft/playwright-mcp

- Playwright MCP is a strong reference for browser automation designed around structured accessibility snapshots instead of screenshot-heavy vision loops.
- The harness lesson is token economy through structure: expose the page as accessibility data and deterministic actions, not as raw pixels plus guesswork.
- The repo explicitly contrasts MCP with CLI+SKILL approaches: MCP is better when persistent browser state and iterative introspection matter, while CLI surfaces can be more token-efficient for coding agents.
- That tradeoff is useful well beyond Playwright. It explains when a capability should live behind MCP versus a narrower command surface.
- Worth preserving as the canonical example of an MCP server whose output shape is intentionally optimized for agent reliability rather than human convenience.
