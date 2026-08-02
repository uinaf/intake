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

# Scaling Long-Running Autonomous Coding

By Cursor

Cursor ran hundreds of agents for weeks. Tried locking (bottleneck), optimistic concurrency (agents got risk-averse), settled on hierarchical: planners/workers/judges. Workers never coordinate with each other. GPT-5.2 > Opus 4.5 for long autonomous work. Built a browser (1M LoC), Java LSP (550K LoC), Windows 7 emulator (1.2M LoC).

**Take:** Impressive scale but all compiled-language projects. Completely sidesteps the JS monorepo + node_modules problem. The hierarchy insight is real though — don't make agents coordinate, have a coordinator distribute non-overlapping work.
