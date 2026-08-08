---
title: Dynamic identity-aware Sandbox egress and credential injection
source: https://blog.cloudflare.com/sandbox-auth/
saved: 2026-08-08
type: article
tags:
  - cloudflare
  - agent-security
  - infrastructure
  - agents
  - coding-agents
---

Agents Week security piece on Outbound Workers for Sandboxes/Containers: programmable egress proxies that run outside the container, inject credentials, and enforce allow/deny policy without exposing secrets to agent code.

## Key takeaways

- `outboundByHost` / named `outboundHandlers` intercept HTTP(S) from the sandbox; handlers run in the Workers runtime with access to `env` secrets and bindings.
- Pattern: sandbox makes a plain request → handler attaches `Authorization` / tokens → upstream. Rotate secrets in the Worker without restarting agent code.
- Supports per-instance policy via `ctx.containerId`, runtime `setOutboundByHost` / allow-deny lists, and HTTPS interception with an ephemeral CA trusted inside the sandbox.
- Complements Flue-style scoped proxies (Amplitude) and GitHub's "zero-secret agent container" guidance—same architecture idea on Cloudflare's native APIs.
- Direct fit for injecting `CURSOR_API_KEY` and short-lived GitHub clone tokens into a review sandbox while keeping write tokens only on the publish lane.
