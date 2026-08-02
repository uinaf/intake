---
title: Anthropic - Demystifying Evals for AI Agents
source: https://anthropic.com/engineering/demystifying-evals-for-ai-agents
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - evaluator-pattern
  - anthropic
  - testing
---

# Anthropic - Demystifying Evals for AI Agents

- Agent evals are not just unit tests with more vibes. You need task success definitions, environment control, and repeatable scoring around the whole loop.
- The harness itself is part of the system under test. Changing tools, context, or approvals can move results as much as changing models.
- Useful corrective against cargo-cult benchmark chasing.
