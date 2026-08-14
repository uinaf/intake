---
title: NVIDIA OpenShell
source: https://github.com/NVIDIA/OpenShell
saved: 2026-04-12
type: research
tags:
  - agent-security
  - coding-agents
---

Open-source policy-driven sandbox runtime that enforces filesystem, syscall, and network constraints at the kernel so a compromised agent cannot override them.

## Key takeaways

- **GTC 2026 announcement**: Open-source policy-driven sandbox runtime for autonomous AI agents, announced at GTC 2026.
- **Kernel enforcement**: Landlock LSM for filesystem, seccomp BPF for syscalls, and an OPA/Rego-evaluated HTTP CONNECT proxy for network.
- **Environment-level constraints**: Constraints are enforced on the environment itself, so even a compromised agent cannot override them.
- **Coding agent support**: Supports Claude Code, Codex, Cursor, and OpenCode inside the sandbox.
