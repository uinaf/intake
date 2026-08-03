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

Describes a microVM-based sandboxing architecture with kernel-level isolation, resource caps (CPU/memory/disk), and an authentication proxy that keeps secrets entirely out of the runtime environment. Persistent WebSocket sessions support long-running agent tasks like dependency installation and test suite execution without the overhead of per-call container restarts.
