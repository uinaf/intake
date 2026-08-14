---
title: "Scaling Managed Agents: Decoupling the Brain from the Hands"
source: https://anthropic.com/engineering/managed-agents
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - agent-security
---

Anthropic's production architecture separates three stateless pieces: the brain (Claude plus harness), the hands (sandboxes and tools), and the session (an append-only event log). Each can fail and be replaced independently.

## Key takeaways

- **Three components**: Brain, hands, and session stay stateless so one can fail or be swapped without taking the others down.
- **Crash recovery**: Session replay through `wake(sessionId)` plus `getEvents()` restores work from the append-only event log.
- **On-demand containers**: Provisioning containers as needed cut p50 time-to-first-token by about 60% and p95 by over 90%.
- **Cattle not pets**: The reference design treats agent containers as disposable cattle rather than long-lived pets.
