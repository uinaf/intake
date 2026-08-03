---
title: NeMo Guardrails
source: https://github.com/NVIDIA-NeMo/Guardrails
saved: 2026-04-12
type: research
tags:
  - agent-security
---

NVIDIA's programmable guardrails toolkit: define input, dialog, retrieval, execution, and output rails that intercept the agent loop at five distinct layers using the Colang DSL. The execution rail layer specifically governs what tools the LLM can invoke and what their inputs/outputs may contain — the reference for behavioral-level enforcement when static allow/deny lists are insufficient.
