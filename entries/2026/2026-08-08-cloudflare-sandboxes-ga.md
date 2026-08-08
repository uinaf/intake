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

Cloudflare Sandboxes and Containers are generally available: persistent, isolated Linux environments for agents that need a real shell, filesystem, git, background processes, and sleep/wake lifecycle—built on Cloudflare Containers with active-CPU pricing.

## Key takeaways

- Ask for a sandbox by name via `@cloudflare/sandbox`; it starts on demand, sleeps when idle, and exposes `exec`, `gitCheckout`, `writeFile`, processes, and previews.
- **Credential injection** at the network layer (`outboundByHost`) lets trusted Worker code attach secrets so the agent never sees raw tokens—critical for coding agents.
- Practical agent DX: PTY/xterm terminals, persistent code-interpreter contexts, `startProcess` + live preview URLs, filesystem `watch()`, and upcoming/rolling snapshots for fast resume (backup/restore already much faster than clone+install).
- Capacity and cost: high concurrent instance limits; bill for active CPU so idle LLM waits are cheap.
- Canonical pattern for PR agents: disposable (or short-lived) sandbox per job, clone repo, run coding agent, tear down—same topology Amplitude and Cloudflare's own code-review tutorial use.
