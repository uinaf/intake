---
title: Why your agent should manage its context through SQL
source: https://www.youtube.com/watch?v=uMudSbZ79-A
saved: 2026-09-07
type: video
tags:
  - context-engineering
  - agent-security
  - tools
---

A Conductor engineer draws on work at YC and Conductor to argue that a scoped SQL tool can replace much bespoke agent retrieval plumbing. The leverage comes from schemas, iterative queries, and reusable views—not unrestricted database access.

## Key takeaways

- **Flexible retrieval**: SQL lets agents combine filters, follow relationships, and inspect rows through one composable interface. The speaker reports that removing vector search improved retrieval in one YC deployment; this is experience from a specific system, not a general benchmark against vector search.
- **Database guardrails**: Use read replicas, read-only roles, timeouts, row and result-size limits, and audit logs. Conductor also scopes access through tenant-filtered views and transaction-local configuration in rolled-back transactions; the Q&A stresses explicitly granting access to views and leaving sensitive fields out.
- **Schema as context**: Supply schema definitions plus model-code explanations of column meaning. Treat repeated query errors as evidence of missing semantic context, and turn recurring joins into curated views that reduce trial-and-error tool calls.
- **Token discipline**: The speaker recommends CSV instead of JSON to reduce repetitive result overhead. Keep result sets small and expose selected tables or views when the full schema exceeds the context window; separate agents can receive different schema subsets.
- **Unified data access**: Mirroring third-party data into a database, or exposing external data through DuckDB, can give agents a common query interface instead of separate API tools. Local mirrors reduce repeated upstream reads rather than establishing that upstream access constraints disappear.
- **Operational learning**: Review query logs and failures, then add useful views and known-good queries to agent instructions. The talk does not establish SQL as universally better than filesystem-and-shell retrieval; its closing discussion leaves that comparison open.
