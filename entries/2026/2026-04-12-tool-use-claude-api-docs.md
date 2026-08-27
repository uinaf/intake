---
title: "Tool Use: Claude API Docs"
source: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - tool-design
  - tools
  - anthropic-docs
---

Anthropic's tool-use docs are the authoritative reference for client versus server execution, strict schemas, and `tool_result` error signaling.

## Key takeaways

- **Execution models**: Distinguishes client-side versus server-side tool execution.
- **Strict schemas**: Treats schema enforcement as part of the tool contract, not an optional nicety.
- **Error signaling**: Documents how `tool_result` should report failures so the model can recover.
