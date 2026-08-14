---
title: Quantifying Infrastructure Noise in Agentic Coding Evals
source: https://anthropic.com/engineering/infrastructure-noise
saved: 2026-04-12
type: article
tags:
  - research
---

Anthropic's empirical study showing container resource configuration alone produces 6+ percentage point benchmark swings, often exceeding model-to-model gaps.

## Key takeaways

- **Resource-driven swings**: Container resource configuration alone produces 6+ percentage point benchmark swings, often exceeding model-to-model gaps.
- **3x threshold**: Scores are stable up to 3x specified resources; above that, agents shift strategy entirely.
- **Different behaviors**: Tight versus generous resource limits measure fundamentally different behaviors — lean tools versus heavy dependencies.
- **Eval interpretation**: Essential reading before interpreting any agentic eval.
