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

Roundup of Cloudflare's first Agents Week (ending 2026-04-20): primitives for an agentic cloud where agents are first-class, highly concurrent workloads rather than one shared app.

## Key takeaways

- **Compute ladder**: Artifacts for Git-compatible agent storage, Sandboxes GA, sandbox egress Workers, Dynamic Worker Durable Object facets, and Workflows at 50k concurrency.
- **Non-human identity**: Cloudflare Mesh, Managed OAuth for Access, scoped API tokens with revocation, and an enterprise MCP reference architecture with Code Mode.
- **Agent toolbox**: Project Think, voice, Email Service public beta, multi-provider inference, Agent Memory, AI Search, and Browser Run.
- **Ship path**: Unified `cf` CLI, in-dashboard Agent Lee, Flagship flags, PlanetScale via Workers, and Registrar API beta.
- **One-to-one scale**: Agents are per user, task, or session, so idle-cheap durable identity plus on-demand containers matter more than classic multi-tenant app scaling.
