---
title: "Meta-Harness: End-to-End Optimization of Model Harnesses"
source: https://x.com/yoonholeee/status/2038640635482456118
saved: 2026-03-30
type: tweet
tags:
  - coding-agents
  - harness
  - meta-learning
  - agent-scaffolding
---

A coding-agent loop that proposes, evaluates, and stores full harness histories, showing that changing the harness around a fixed LLM can open a large performance gap.

## Key takeaways

- **Outer loop**: Propose a harness, evaluate it, store code, scores, and traces on the filesystem, then repeat.
- **Proposer access**: Claude Code (Opus 4.6) greps prior candidates' source, scores, and traces. It gets up to 10M tokens versus 26K in prior methods.
- **Iteration scale**: The agent reads a median 82 files per step, references 20+ prior candidates, and evaluates about 60 harnesses over 20 iterations.
- **Benchmark gains**: +7.7 on text classification versus ACE with 4× fewer context tokens; +4.7 on IMO-level math across five held-out models; number-one Haiku 4.5 agent on TerminalBench-2.
- **Trace ablation**: Full traces beat scores-only and scores-plus-summary; summaries hurt by dropping diagnostic detail.
- **Credit assignment**: The proposer needs raw traces to tie failures to specific harness decisions; compressed feedback is not enough.
- **Authors**: Yoonho Lee, Roshen Nair, Qizheng Zhang, Kangwook Lee, Omar Khattab, and Chelsea Finn.
