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

Cursor's cross-platform sandbox uses macOS Seatbelt, Linux Landlock plus seccomp, and Windows WSL2. Agents run freely inside the boundary and ask only for external access.

## Key takeaways

- **Platform backends**: macOS Seatbelt, Linux Landlock plus seccomp, and Windows WSL2.
- **Fewer interruptions**: 40% fewer user interruptions versus no-sandbox permissioning, because agents explore freely inside the boundary.
- **Teach constraints**: Agents must be taught to recognize sandbox constraints. Most sandboxing guides omit this step.
