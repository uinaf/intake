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

## Why it matters
Addresses agent CI's core problem: binary pass/fail is useless for non-deterministic workflows. Behavioral fingerprinting detects 86% of regressions vs. 0% with binary testing; stochastic PASS/FAIL/INCONCLUSIVE verdicts grounded in hypothesis testing cut token costs 78%. Trace-first offline mode runs regression checks against production traces at zero additional inference cost.

## Classification
- Section: Design Primitives
- Subsection: Verification & CI Integration
- Type: paper
