---
title: "LangSmith Sandboxes: Secure Code Execution for Agents"
source: https://blog.langchain.com/introducing-langsmith-sandboxes-secure-code-execution-for-agents
saved: 2026-04-12
type: article
tags:
  - agent-memory
  - agent-security
  - design-engineering
---

Describes a microVM-based sandbox with kernel-level isolation, resource caps, and an authentication proxy that keeps secrets out of the runtime.

## Key takeaways

- **MicroVM isolation**: MicroVM-based sandboxing with kernel-level isolation and CPU, memory, and disk resource caps.
- **Secrets stay out**: An authentication proxy keeps secrets entirely out of the runtime environment.
- **Persistent sessions**: Persistent WebSocket sessions support long-running tasks like dependency installation and test-suite execution without per-call container restarts.
