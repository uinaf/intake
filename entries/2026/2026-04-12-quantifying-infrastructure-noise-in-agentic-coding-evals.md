---
title: Quantifying Infrastructure Noise in Agentic Coding Evals
source: https://anthropic.com/engineering/infrastructure-noise
saved: 2026-04-12
type: article
tags:
  - research
---

Anthropic's empirical study showing container resource configuration alone produces 6+ percentage point benchmark swings — often exceeding model-to-model gaps. The 3x threshold finding is the key practical result: scores are stable up to 3x specified resources, but above that agents shift strategy entirely (lean tools vs. heavy dependencies), meaning tight and generous resource limits measure fundamentally different behaviors. Essential reading before interpreting any agentic eval.
