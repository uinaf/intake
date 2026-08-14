---
title: Cursor's Debug Mode Is Arguably Its Best Feature
source: https://davidgomes.com/cursor-debug-mode
saved: 2026-04-03
type: article
tags:
  - cursor
  - debugging
  - coding-agents
  - instrumentation
---

David Gomes argues Cursor's Debug Mode is its best feature: the agent instruments the running app with HTTP logs, watches a repro, and fixes from real execution data.

## Key takeaways

- **Hypothesis plus logs**: Debug Mode generates bug hypotheses, then adds HTTP log instrumentation to track code paths and variable values at runtime.
- **No debugger hook**: It uses HTTP logs rather than LSP or debugger integration, which is why it works across languages and environments.
- **Human repro**: The user reproduces the bug; the agent listens via a log server and proposes a fix from actual runtime data.
- **Cross-boundary**: It can instrument frontend and backend together to trace bugs that cross the boundary.
- **Higher-quality fixes**: Fixes beat blind LLM debugging because the model sees real execution paths; it also pairs with observability MCP servers.
- **Adoption risk**: The loop needs an engaged human to reproduce bugs, which most engineers may not bother with.
