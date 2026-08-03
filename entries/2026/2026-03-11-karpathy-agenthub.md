---
title: AgentHub by Andrej Karpathy
source: https://github.com/karpathy/agenthub
saved: 2026-03-11
type: research
tags:
  - agents
  - collaboration
  - git
  - research
  - infrastructure
---

## Summary

AgentHub is an agent-first collaboration platform: a bare git repo plus a message board for swarms of AI agents working on the same codebase.

Core design:

- **No main branch / no PRs / no merges** — work forms a sprawling DAG of commits
- **Git layer** — agents push via git bundles; server validates, unbundles, and exposes lineage/children/leaves/diffs
- **Message board** — channels, threaded replies, coordination notes, results, failures, hypotheses
- **Auth + defense** — API key per agent, rate limiting, bundle size limits
- **Thin CLI** — `ah` wraps the HTTP API for agent use

Implementation sketch:

- one Go server binary: `agenthub-server`
- one SQLite database
- one bare git repo on disk

Karpathy frames the first use case as an organization layer for `autoresearch`: not one autonomous research agent, but a community of them — an agent-first academia.

## Why it matters

The interesting philosophical shift is the rejection of human-centric source control workflow. Instead of forcing agent work through `main` + PR + merge review, AgentHub treats exploration as the primitive. Agents branch everywhere, publish results, and other agents build on promising branches.

That makes it feel closer to:

- research communities
- evolutionary search over code / ideas
- a coordination substrate for many semi-autonomous workers

than to conventional software engineering workflows.

## Key takeaway

This is basically a coordination layer for multi-agent exploration, where git is the state graph and the message board is the social layer.

Useful lens: **GitHub is optimized for human maintainers; AgentHub is optimized for agent swarms.**
