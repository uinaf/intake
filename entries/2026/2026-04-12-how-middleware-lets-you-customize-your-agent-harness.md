---
title: How Middleware Lets You Customize Your Agent Harness
source: https://blog.langchain.com/how-middleware-lets-you-customize-your-agent-harness
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - agent-loop
  - tools
  - langchain
---

# How Middleware Lets You Customize Your Agent Harness

- Introduces AgentMiddleware: six composable hooks (`before_agent`, `before_model`, `wrap_model_call`, `wrap_tool_call`, `after_model`, `after_agent`) that intercept every stage of the agent loop.
- Enables deterministic policy enforcement (PII redaction that can't be trusted to prompts), dynamic tool injection, mid-task model swapping, and production patterns (retry, fallback, HITL interrupts) without modifying core agent logic — the reference design for cross-cutting harness concerns that shouldn't be baked into individual agents.
- Use it under Design Primitives / Agent Loop when designing or comparing harness choices.
