---
title: Towards Self-Driving Codebases
source: https://cursor.com/blog/self-driving-codebases
saved: 2026-03-28
type: article
tags:
  - ai-agents
  - multi-agent
  - coding-agents
  - cursor
  - infrastructure
  - software-engineering
---

Cursor research on scaling autonomous coding: a web browser built at about 1,000 commits per hour across 10M tool calls in a week, almost without human intervention.

## Key takeaways

- **Hierarchy that worked**: After single agents, shared locks, rigid planner-executor, and overloaded continuous executors failed, the design settled on a root planner, recursive subplanners, and isolated workers with handoffs.
- **No worker cross-talk**: Workers use their own repo copies. Information flows up through handoffs. No integrator, because it became red tape.
- **Tolerated errors**: 100% commit correctness halted the system. A steady error rate plus a green branch with fixup passes was more efficient.
- **Freshness**: Rewrite scratchpads, auto-summarize at context limits, and prompt agents to challenge assumptions.
- **Infra bottleneck**: Disk I/O, not CPU, became the limit. Git and Cargo locks designed for one user break at hundreds of agents.
