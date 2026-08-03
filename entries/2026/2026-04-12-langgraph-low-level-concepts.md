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

- Models the agent loop explicitly as a directed graph with typed state, conditional edges, and checkpointing.
- The most concrete engineering treatment of loop control flow: how to implement termination conditions, branch on tool results, and persist mid-loop state for resumption.
- Use it under Design Primitives / Agent Loop when designing or comparing harness choices.
