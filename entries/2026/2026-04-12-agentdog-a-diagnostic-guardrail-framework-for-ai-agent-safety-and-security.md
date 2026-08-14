---
title: "AgentDoG: A Diagnostic Guardrail Framework for AI Agent Safety and Security"
source: https://arxiv.org/abs/2601.18491
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - agent-security
  - design-engineering
---

AgentDog replaces binary safe/unsafe checks with a three-axis risk taxonomy, ATBench, and small diagnostic guardrail models that explain why an action violated constraints.

## Key takeaways

- **Risk taxonomy**: Risks are described along source, failure mode, and consequence.
- **ATBench**: A fine-grained agentic safety benchmark accompanies the framework.
- **Small guardrails**: Diagnostic models in the 4B–8B range report 91.8% accuracy.
- **Root-cause safety**: Monitoring asks why a constraint was violated, where it originated, and what downstream consequences follow—useful when audit trails need more than a binary flag.
