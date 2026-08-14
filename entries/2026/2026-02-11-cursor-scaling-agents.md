---
title: Scaling Long-Running Autonomous Coding
source: https://cursor.com/blog/scaling-agents
saved: 2026-02-11
type: article
tags:
  - coding-agents
  - agents
  - orchestration
  - concurrency
  - scaling
---

Cursor ran hundreds of agents for weeks and settled on a hierarchical planner/worker/judge setup after locking and optimistic concurrency failed.

## Key takeaways

- **Failed approaches**: Locking became a bottleneck; optimistic concurrency made agents risk-averse.
- **Hierarchy**: Planners, workers, and judges; workers never coordinate with each other.
- **Model pick**: GPT-5.2 beat Opus 4.5 for long autonomous work.
- **Artifacts**: Built a browser (1M LoC), a Java LSP (550K LoC), and a Windows 7 emulator (1.2M LoC).
- **Caveat**: Impressive scale, but all compiled-language projects that sidestep the JS monorepo and node_modules problem.
