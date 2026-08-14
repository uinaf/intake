---
title: Anthropic - Building a C Compiler with a Team of Parallel Claudes
source: https://anthropic.com/engineering/building-c-compiler
saved: 2026-04-12
type: article
tags:
  - multi-agent
  - orchestration
  - anthropic
  - coding-agents
---

A concrete multi-agent case study that coordinates parallel Claudes with files, git, tests, and restarts rather than a custom orchestrator.

## Key takeaways

- **Boring primitives**: Uses files, git, tests, and restarts instead of overdesigned orchestration.
- **Feedback shaping**: Dumping giant test logs into context is poison; summarize aggressively and leave detail on disk.
- **Repo as fabric**: Sometimes the repo is the coordination fabric.
