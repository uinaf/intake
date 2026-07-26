---
title: "Scaling Managed Agents: Decoupling the Brain from the Hands"
source: https://anthropic.com/engineering/managed-agents
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - agent-security
intaked_by: glitch418x
---

## Why it matters
Anthropic's production architecture for separating three stateless components — the "brain" (Claude + harness), "hands" (sandboxes/tools), and "session" (append-only event log) — enabling independent failure and replacement of each. Crash recovery via session replay (`wake(sessionId)` + `getEvents()`) and on-demand container provisioning cut p50 TTFT by ~60% and p95 by over 90%. The reference design for treating agent containers as "cattle not pets" in production.

## Classification
- Section: Design Primitives
- Subsection: Task Runners & Orchestration
- Type: article/reference
