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

Autonomous harness optimization via coding agent (Claude Code) with full filesystem access to prior candidates' code, traces, and scores.

## How It Works
- Outer loop: propose harness → evaluate → store all logs (code, scores, traces) to filesystem → repeat
- Proposer is Claude Code (Opus 4.6) with filesystem access to ALL prior candidates' source, scores, and execution traces
- Up to 10M tokens of diagnostic context per step via grep/cat, vs 26K max for prior methods
- Agent reads median 82 files per iteration, referencing 20+ prior candidates per step
- ~60 harnesses evaluated over ~20 iterations per run
- Harness = single-file Python program modifying prompting, retrieval, memory, orchestration logic

## Results
- **Text classification**: +7.7 points over ACE (state-of-art) while using 4× fewer context tokens. Matches best prior optimizer in 1/10th the evaluations.
- **Math reasoning** (IMO-level): +4.7 points average across 5 held-out models from a single discovered harness
- **TerminalBench-2**: #1 among all Claude Haiku 4.5 agents, beats all hand-engineered baselines
- **Key ablation**: full traces >> scores-only (34.6 median) >> scores+summary (34.9). Full Meta-Harness: 50.0 median. Summaries actually hurt by compressing away diagnostic detail.
- Generalizes OOD: best average accuracy on 9 unseen datasets

## Key Insight
"Changing the harness around a fixed LLM can produce a 6× performance gap on the same benchmark." Full history access is essential — compressed feedback (scores, summaries, sliding windows) discards the information needed to trace failures to specific harness decisions. The proposer needs raw traces to do credit assignment over code.

## Relevance to our harness skill
- Validates the "environment > instruction" finding from our eval framework
- Our manual approach (skill files shaping agent behavior) is the handcrafted version of what Meta-Harness automates
- The paper explicitly notes this workflow "only became practical recently, following major improvements in coding-agent capabilities around early 2026"
- Potential direction: use Meta-Harness loop to evolve agent skills based on eval results
- Their "minimal domain-specific skill" guiding the proposer is exactly what our skill files do

## Authors
Yoonho Lee, Roshen Nair, Qizheng Zhang, Kangwook Lee, Omar Khattab, Chelsea Finn

## Links
- Paper: https://yoonholee.com/meta-harness/paper.pdf
- Project: https://yoonholee.com/meta-harness/
- Thread: https://x.com/yoonholeee/status/2038640635482456118
