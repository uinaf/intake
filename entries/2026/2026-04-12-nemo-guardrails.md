---
title: NeMo Guardrails
source: https://github.com/NVIDIA-NeMo/Guardrails
saved: 2026-04-12
type: research
tags:
  - agent-security
---

NVIDIA's programmable guardrails toolkit: define input, dialog, retrieval, execution, and output rails that intercept the agent loop at five layers using Colang.

## Key takeaways

- **Five rail layers**: Define input, dialog, retrieval, execution, and output rails that intercept the agent loop at five distinct layers.
- **Colang DSL**: Rails are programmed using the Colang DSL.
- **Execution rail**: The execution rail layer governs what tools the LLM can invoke and what their inputs and outputs may contain.
- **Beyond allow lists**: The reference for behavioral-level enforcement when static allow/deny lists are insufficient.
