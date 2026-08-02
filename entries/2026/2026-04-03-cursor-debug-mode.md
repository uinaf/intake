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

## Key Takeaways

- Debug Mode works by generating hypotheses for a bug, then adding HTTP log instrumentation to track code paths and variable values at runtime
- No fancy LSP or debugger integration — just HTTP logs, which is why it works across any language/environment
- User reproduces the bug manually, agent "listens in" via the log server, then proposes a fix based on actual runtime data
- Works across frontend+backend — can instrument both sides to trace cross-boundary bugs
- Quality of fixes is significantly higher than blind LLM bug-fixing because the model sees actual execution paths
- Pairs well with observability MCP servers (Datadog, Sentry) for even better root cause analysis

## Future speculation

- What if agents always instrumented code, not just in debug mode? Strip logs before PR.
- Could this behavior be trained into model weights directly?
- PMF challenge: requires engaged human in the loop to reproduce bugs — most engineers won't bother
