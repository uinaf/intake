---
title: LangChain - Agent Builder's Memory System
source: https://blog.langchain.com/how-we-built-agent-builders-memory-system
saved: 2026-04-12
type: article
tags:
  - memory
  - harness-engineering
  - langchain
  - agents
---

A memory-system note that treats memory as product infrastructure: store durable facts apart from transient task state, and retrieve for decisions rather than dumping history.

## Key takeaways

- **Product infrastructure**: Memory is treated as product infrastructure, not a magical vector-store checkbox.
- **Layered memory**: Capture durable facts separately from transient task state, then retrieve with purpose.
- **Usefulness over volume**: Memory systems fail when they optimize recall volume instead of decision usefulness.
