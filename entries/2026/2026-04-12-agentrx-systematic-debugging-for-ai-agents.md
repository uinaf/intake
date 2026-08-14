---
title: "AgentRx: Systematic Debugging for AI Agents"
source: https://microsoft.com/en-us/research/blog/systematic-debugging-for-ai-agents-introducing-the-agentrx-framework
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - design-primitives
  - debugging-and-developer-experience
  - article
---

AgentRx automates root-cause analysis of agent failures with trajectory normalization, schema-derived constraints, and constraint-guided evaluation on a 115-trajectory benchmark.

## Key takeaways

- **Failure pipeline**: Trajectory normalization, constraint synthesis from tool schemas, and constraint-guided evaluation replace manual log inspection.
- **Localization gain**: The approach reports 23.6% better failure localization than existing methods.
- **Annotated set**: Results are measured on a 115-trajectory annotated benchmark.
- **Why not that**: The design aims to surface why an agent failed, not only that it failed.
