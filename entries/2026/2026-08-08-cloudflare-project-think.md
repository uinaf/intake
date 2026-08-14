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

- **Scale thesis**: Coding-agent loops are becoming general assistants, but laptop or VPS hosts do not scale economically to millions of one-to-one sessions.
- **Durable Objects**: Each agent gets identity, SQLite, hibernation with zero idle compute, and wake-on-event — cheaper than always-on containers for mostly-idle agents.
- **New primitives**: Crash-recoverable fibers with `stash`, sub-agents, persistent sessions that fork, compact, and search, plus sandboxed code execution.
- **Execution ladder**: From workspace or isolate up to a full Sandbox. Heavy repo work still belongs on Sandbox containers, not in the isolate.
- **Two entry points**: Use raw `Agent` for a custom control plane; use `Think` when you want sessions, tools, memory, compaction, and multi-channel delivery wired together.
