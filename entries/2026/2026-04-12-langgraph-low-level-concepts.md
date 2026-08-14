---
title: LangGraph — Low Level Concepts
source: https://langchain-ai.github.io/langgraph/concepts/low_level
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - agent-loop
  - tools
  - langgraph
---

Models the agent loop explicitly as a directed graph with typed state, conditional edges, and checkpointing.

## Key takeaways

- **Graph loop model**: Models the agent loop as a directed graph with typed state, conditional edges, and checkpointing.
- **Loop control flow**: The most concrete engineering treatment of termination conditions, branching on tool results, and persisting mid-loop state for resumption.
- **Agent loop comparison**: Use it when designing or comparing harness choices around agent-loop control.
