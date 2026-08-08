---
title: "Project Think: next-generation Agents SDK on Cloudflare"
source: https://blog.cloudflare.com/project-think/
saved: 2026-08-08
type: article
tags:
  - cloudflare
  - agents
  - harness-engineering
  - architecture
  - coding-agents
---

Preview of Project Think (`@cloudflare/think`): opinionated Agents SDK primitives for long-running agents on Durable Objects, plus a batteries-included `Think` base class. APIs may change.

## Key takeaways

- Thesis: coding-agent loops (read → reason → act via code → observe) are becoming general assistants, but laptop/VPS hosts do not scale economically to millions of one-to-one agent sessions.
- Durable Objects give each agent identity, SQLite, hibernation (zero idle compute), and wake-on-event—better economics than always-on containers for mostly-idle agents.
- New primitives: **fibers** (crash-recoverable durable execution with `stash`), sub-agents, persistent sessions (fork/compact/search), sandboxed code execution (Dynamic Workers, Code Mode, runtime npm), and an **execution ladder** from workspace/isolate up to full Sandbox.
- Use raw `Agent` for custom control planes; use `Think` when you want sessions, tools, memory, compaction, and multi-channel delivery wired together.
- For a GitHub PR bot: Think/Agent DO is a strong orchestrator layer; heavy repo work still belongs on Sandbox containers, not in the isolate.
