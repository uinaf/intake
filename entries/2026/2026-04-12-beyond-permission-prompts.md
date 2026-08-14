---
title: Anthropic - Beyond Permission Prompts
source: https://www.anthropic.com/engineering/claude-code-sandboxing
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - security
  - permissions
  - anthropic
---

Anthropic on why natural-language permission prompts are flimsy, and why real harnesses need structured policy and scoped authority.

## Key takeaways

- **Flimsy prompts**: Natural-language permission prompts are not enough for real harnesses.
- **Structured policy**: Need structured policy, scoped authority, and explicit approval boundaries.
- **Safety by construction**: Shift from asking the model to behave safely to making unsafe actions impossible or review-gated.
- **Mandatory reading**: Required before shipping agents that can message people, touch prod, or mutate anything expensive.
