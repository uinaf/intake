---
title: Avoiding agentic drift in large codebases
source: https://kevinkern.dev/posts/agentic-drift-in-large-codebase
saved: 2026-03-26
type: article
tags:
  - coding-agents
  - architecture
  - monorepo
  - skills
  - code-quality
---

Kevin Kern describes how coding agents preserve existing contracts in ways that slowly warp a large codebase, and the rails that keep architecture intact.

## Key takeaways

- **Drift mechanism**: Agents add normalization layers, duplicate ownership paths, and compatibility fixes that help in the moment but compound until the intended architecture loses shape.
- **Rails first**: House rules for lint, types, tests, secrets, CI, and dead-code hygiene, plus a visible domain layout, give agents a contract so they do not build in random corners.
- **Scout subagents**: Use subagents for exploration and finding duplicate ownership, not for implementation. Prefer a single branch unless a split is worth a worktree.
- **Anti-drift skills**: Canonical ownership, root-cause tracing, duplicate-ownership hunts, and hard cuts of old paths stop agents from patching both old and new forever.
- **Early review**: Manual review while the diff is still local beats later cleanup. Ask for the long-term architecture instead of treating the agent like a slot machine.
