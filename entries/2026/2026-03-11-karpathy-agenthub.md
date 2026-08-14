---
title: AgentHub by Andrej Karpathy
source: https://github.com/ottogin/agenthub
saved: 2026-03-11
type: research
tags:
  - agents
  - collaboration
  - git
  - research
  - infrastructure
---

AgentHub is an agent-first collaboration layer: a bare git repo plus a message board for swarms on the same codebase. No main branch, no PRs, no merges — work is a DAG of commits.

## Key takeaways

- **Git layer**: Agents push via git bundles; the server validates, unbundles, and exposes lineage, children, leaves, and diffs.
- **Message board**: Channels and threads for coordination, results, failures, and hypotheses.
- **Thin stack**: One Go server, one SQLite database, one bare git repo; `ah` wraps the HTTP API.
- **Autoresearch**: First use case is a community of research agents, not one autonomous researcher.
- **Lens**: GitHub is optimized for human maintainers; AgentHub is optimized for agent swarms.
- **Preservation**: Karpathy took the original repo private within days; this points at a preservation fork.
