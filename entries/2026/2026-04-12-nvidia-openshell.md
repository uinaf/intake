---
title: NVIDIA OpenShell
source: https://github.com/NVIDIA/OpenShell
saved: 2026-04-12
type: research
tags:
  - agent-security
  - coding-agents
intaked_by: glitch418x
---

Section: Security, Sandbox & Permissions

Open-source policy-driven sandbox runtime for autonomous AI agents, announced at GTC 2026. Enforces security constraints at the kernel level via Landlock LSM (filesystem), seccomp BPF (syscalls), and an OPA/Rego-evaluated HTTP CONNECT proxy (network) — constraints are enforced on the environment itself, so even a compromised agent cannot override them. Supports Claude Code, Codex, Cursor, and OpenCode inside the sandbox.
