---
title: "Building AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned"
source: https://arxiv.org/abs/2603.05344
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - foundations
  - planning
  - context-engineering
  - tools
  - coding-agents
  - safety
  - permissions
  - arxiv
intaked_by: glitch418x
---

# Building AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned

- The first systematic practitioner paper on terminal-native coding agent harness design: eager-construction scaffolding (pre-build all components before the first message to eliminate first-call latency and race conditions), compound multi-model architecture (different model instances for execution, reasoning, critique, and vision tasks), 5-layer defense-in-depth safety, and schema-filtered planning subagents (enforce behavioral constraints via tool schema rather than runtime permission checks).
- The five lessons distilled from building OpenDev apply to any server-side agent harness.
- Useful as a foundations reference when building or auditing agent scaffolding.
