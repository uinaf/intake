---
title: "Autoresearch Pattern: Beyond ML Training"
source: https://mager.co/blog/2026-03-14-autoresearch-pattern
saved: 2026-03-28
type: research
tags:
  - autoresearch
  - agentic-sdlc
  - self-improving
  - karpathy
---

The Karpathy recipe for software: one file to modify, one metric, one fixed budget, and a keep-or-discard rule, looped forever.

## Key takeaways

- **Meta-programming**: You optimize program.md more than train.py. Karpathy spent more time on the agent setup than the training code.
- **Broad applications**: The same loop can improve skills, sports-prediction prompts, CSS via Lighthouse, and recommendation discovery.
- **Single-metric limit**: Most software work lacks one number. Adding dark mode is not measurable, so an adversarial evaluator has to fill that gap.
