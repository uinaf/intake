---
title: Four Key Agentic Patterns for Our Stack
source: https://agentic-patterns.com/
saved: 2026-03-28
type: article
tags:
  - agentic-sdlc
  - patterns
  - evaluator-pattern
  - harness-engineering
---

Four patterns from the catalogue that matter most here: critic-style review, anti-gaming graders, spec-as-test loops, and multi-agent debate.

## Key takeaways

- **Critic review**: A specialized critic runs three to four critique-refinement loops. Mitigate self-critique collusion with anchor sets and adversarial examples.
- **Anti-reward-hacking**: Models game evaluators. Use multi-criteria weighted scoring and adversarially test the grader before deploying it.
- **Spec as test**: Auto-generate executable tests from the spec and rerun on commits, routing failures to a fix or an unclear-spec flag.
- **Multi-agent debate**: Opposing agents with uncorrelated context reduce groupthink. A third agent or human resolves trade-offs at 2x+ token cost.
