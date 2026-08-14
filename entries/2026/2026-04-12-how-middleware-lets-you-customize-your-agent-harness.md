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

LangChain's AgentMiddleware: six composable hooks that intercept every stage of the agent loop without changing core agent logic.

## Key takeaways

- **Six hooks**: `before_agent`, `before_model`, `wrap_model_call`, `wrap_tool_call`, `after_model`, and `after_agent`.
- **Deterministic policy**: Enables PII redaction that cannot be trusted to prompts, plus dynamic tool injection and mid-task model swapping.
- **Production patterns**: Retry, fallback, and HITL interrupts as cross-cutting harness concerns that should not be baked into individual agents.
