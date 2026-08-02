---
title: "Meta-Harness: End-to-End Optimization of Model Harnesses"
source: https://arxiv.org/abs/2603.28052
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - reference-implementations
  - generators-and-meta-harnesses
  - paper
---

## Why it matters
Treats the entire harness (system prompt, tool definitions, context management, completion logic) as a joint optimization target rather than hand-tuning each piece. The key insight: give the proposer agent filesystem access to all prior harness candidates, scores, and execution traces — 10M-token diagnostic context vs. the 26K in prior work — so it can trace failures back to specific harness decisions.

## Classification
- Section: Reference Implementations
- Subsection: Generators & Meta-Harnesses
- Type: paper
