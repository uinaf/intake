---
title: "Why LLMs Hallucinate: Mechanics and Implications"
source: https://youtube.com/watch?v=9VNG0h4pLh0
saved: 2026-03-28
type: video
tags:
  - llm-fundamentals
  - hallucination
  - evaluator-pattern
  - reliability
---

A video on why LLMs hallucinate: lossy compression, rewards for confident guesses, and a split between intrinsic training knowledge and extrinsic lookup.

## Key takeaways

- **Confidence reward**: Benchmarks reward plausible answers over refusal, so models guess instead of admitting uncertainty.
- **Intrinsic versus extrinsic**: Models are more reliable on training-data facts and unreliable on information they must look up.
- **Mitigation**: Feed actual code and docs, force tool use for current knowledge, and never trust unverified legal, medical, or financial answers.
- **Self-eval failure**: Models are trained to be confident, not correct. A fresh evaluator context has not invested in the output.
