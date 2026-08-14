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

Treats the entire harness as a joint optimization target rather than hand-tuning each piece, and gives the proposer filesystem access to prior candidates and traces.

## Key takeaways

- **Joint optimization**: Treats system prompt, tool definitions, context management, and completion logic as a joint optimization target rather than hand-tuning each piece.
- **Diagnostic context**: Gives the proposer agent filesystem access to all prior harness candidates, scores, and execution traces.
- **Scale of context**: Uses 10M-token diagnostic context versus 26K in prior work, so it can trace failures back to specific harness decisions.
