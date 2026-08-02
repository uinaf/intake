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

Section: Security, Sandbox & Permissions

Cursor's cross-platform sandbox implementation (macOS Seatbelt, Linux Landlock + seccomp, Windows WSL2) that lets agents run freely within a boundary and request approval only for external access. Key result: 40% fewer user interruptions vs. no-sandbox permissioning — agents explore freely inside the boundary rather than requesting every file operation. The training insight — that agents must be explicitly taught to recognize sandbox constraints — is the missing piece most sandboxing guides omit.
