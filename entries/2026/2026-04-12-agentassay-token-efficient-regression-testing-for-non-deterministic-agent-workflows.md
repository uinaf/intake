---
title: "AgentAssay: Token-Efficient Regression Testing for Non-Deterministic Agent Workflows"
source: https://arxiv.org/abs/2603.02601
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - design-primitives
  - verification-and-ci-integration
  - paper
---

AgentAssay treats binary pass/fail as useless for non-deterministic agent CI, replacing it with behavioral fingerprints, stochastic verdicts, and trace-first offline checks.

## Key takeaways

- **Binary failure**: Pass/fail is a poor signal for non-deterministic agent workflows.
- **Fingerprints**: Behavioral fingerprinting detected 86% of regressions versus 0% with binary testing.
- **Stochastic verdicts**: PASS, FAIL, and INCONCLUSIVE calls grounded in hypothesis testing cut token costs 78%.
- **Trace-first CI**: Offline regression checks run against production traces at zero additional inference cost.
