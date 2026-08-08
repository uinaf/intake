---
title: "Cloudflare Agents Week 2026: everything launched"
source: https://blog.cloudflare.com/agents-week-in-review/
saved: 2026-08-08
type: article
tags:
  - cloudflare
  - agents
  - infrastructure
  - coding-agents
  - architecture
---

Roundup of Cloudflare's first Agents Week (ending 2026-04-20): primitives for an "agentic cloud" where agents are first-class workloads at massive concurrency, not one shared app serving many users.

## Key takeaways

- **Compute ladder**: Artifacts (Git-compatible agent storage), Sandboxes GA (full agent computers), Sandbox egress/outbound Workers, Dynamic Worker Durable Object facets, and Workflows control-plane scale-up (50k concurrency).
- **Security for non-human identities**: Cloudflare Mesh, Managed OAuth for Access, scoped API tokens/revocation, and an enterprise MCP reference architecture with Code Mode.
- **Agent toolbox**: Project Think (next Agents SDK), voice, Email Service public beta, multi-provider inference binding, Agent Memory, AI Search, Browser Run (ex Browser Rendering).
- **Prototype-to-production**: unified `cf` CLI, in-dashboard Agent Lee, Flagship feature flags, PlanetScale via Workers, Registrar API beta.
- Useful framing for product work: agents are one-to-one (per user/task/session), so idle-cheap durable identity + on-demand containers matter more than classic multi-tenant app scaling.
