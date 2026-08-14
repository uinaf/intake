---
title: Implementing a Secure Sandbox for Local Agents
source: https://cursor.com/blog/agent-sandboxing
saved: 2026-04-12
type: article
tags:
  - agent-security
  - coding-agents
  - design-engineering
---

Cursor's cross-platform sandbox — macOS Seatbelt, Linux Landlock plus seccomp, Windows WSL2 — so agents run freely inside a boundary and ask only for external access.

## Key takeaways

- **Platform backends**: macOS Seatbelt, Linux Landlock plus seccomp, and Windows WSL2.
- **Fewer interruptions**: 40% fewer user interruptions versus no-sandbox permissioning, because agents explore freely inside the boundary.
- **Teach constraints**: Agents must be explicitly taught to recognize sandbox constraints — the missing piece most sandboxing guides omit.
