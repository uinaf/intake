---
title: Agents have their own computers with Sandboxes GA
source: https://blog.cloudflare.com/sandbox-ga/
saved: 2026-08-08
type: article
tags:
  - cloudflare
  - agents
  - infrastructure
  - coding-agents
  - agent-security
---

Cloudflare Sandboxes and Containers are generally available: persistent, isolated Linux environments for agents that need a real shell, filesystem, git, background processes, and sleep/wake, billed on active CPU.

## Key takeaways

- **On-demand machine**: Ask for a sandbox by name via `@cloudflare/sandbox`. It starts when needed, sleeps when idle, and exposes `exec`, `gitCheckout`, `writeFile`, processes, and previews.
- **Credential injection**: `outboundByHost` lets trusted Worker code attach secrets so the agent never sees raw tokens.
- **Agent DX**: PTY terminals, persistent interpreter contexts, `startProcess` with live preview URLs, filesystem `watch()`, and faster backup/restore than clone-and-install.
- **Idle-cheap billing**: High concurrent instance limits; you pay for active CPU, so waits on the model stay cheap.
- **PR-agent pattern**: Short-lived sandbox per job, clone, run the coding agent, tear down — the same topology Amplitude and the official review tutorial use.
