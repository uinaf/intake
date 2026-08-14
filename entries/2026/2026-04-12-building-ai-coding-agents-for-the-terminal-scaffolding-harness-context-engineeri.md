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
---

The first systematic practitioner paper on terminal-native coding agent harness design, distilled from building OpenDev.

## Key takeaways

- **Eager scaffolding**: Pre-build all components before the first message to eliminate first-call latency and race conditions.
- **Compound models**: Different model instances for execution, reasoning, critique, and vision tasks.
- **Defense in depth**: Five-layer safety, plus schema-filtered planning subagents that enforce constraints via tool schema rather than runtime permission checks.
- **OpenDev lessons**: Five lessons from building OpenDev apply to any server-side agent harness.
- **Foundations reference**: Useful when building or auditing agent scaffolding.
