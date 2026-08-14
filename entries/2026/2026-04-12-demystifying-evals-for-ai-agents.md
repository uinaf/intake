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

Anthropic on agent evals as whole-loop scoring with task success definitions and environment control, not unit tests with more vibes.

## Key takeaways

- **Whole-loop evals**: Need task success definitions, environment control, and repeatable scoring around the whole loop.
- **Harness under test**: Changing tools, context, or approvals can move results as much as changing models.
- **Benchmark caution**: A corrective against cargo-cult benchmark chasing.
