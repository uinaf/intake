---
title: Choosing the Right Multi-Agent Architecture
source: https://blog.langchain.com/choosing-the-right-multi-agent-architecture
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - planning-and-task-decomposition
  - context-engineering
  - multi-agent
  - langchain
---

# Choosing the Right Multi-Agent Architecture

- Decision framework for four multi-agent patterns (subagents, skills, handoffs, router) with concrete performance data: subagents process 67% fewer tokens than skills in multi-domain scenarios because context isolation prevents cross-domain bloat.
- The five-dimension matching table (distributed development, parallelization, multi-hop, user interaction, latency) is the most actionable published guide for deciding when a topology change — not a model change — is the right lever for a performance problem.
- Use it under Design Primitives / Planning & Task Decomposition when designing or comparing harness choices.
