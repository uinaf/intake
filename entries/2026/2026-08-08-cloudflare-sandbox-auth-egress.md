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

Agents Week security piece on Outbound Workers for Sandboxes and Containers: egress proxies that run outside the container, inject credentials, and enforce allow/deny policy without exposing secrets to agent code.

## Key takeaways

- **Outside the box**: `outboundByHost` and named `outboundHandlers` intercept sandbox HTTP(S) in the Workers runtime, where `env` secrets and bindings live.
- **Injected auth**: The sandbox makes a plain request; the handler attaches `Authorization` or tokens. Rotate secrets in the Worker without restarting the agent.
- **Per-instance policy**: `ctx.containerId`, runtime `setOutboundByHost`, allow/deny lists, and HTTPS interception with an ephemeral CA trusted inside the sandbox.
- **Same architecture**: Complements Flue-style scoped proxies and GitHub's zero-secret agent container guidance, expressed on Cloudflare's native APIs.
