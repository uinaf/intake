---
title: Why LLMs Hallucinate — Mechanics and Implications
source: https://youtube.com/watch?v=9VNG0h4pLh0
saved: 2026-03-28
type: video
tags:
  - llm-fundamentals
  - hallucination
  - evaluator-pattern
  - reliability
intaked_by: glitch418x
---

# Why LLMs Hallucinate

## Root Causes
1. **Lossy compression** — training data is compressed into model weights. Details get lost or blurred.
2. **Reward for confidence over refusal** — benchmarks incentivize plausible guesses, not "I don't know." Models are trained to guess, not admit uncertainty.
3. **Intrinsic vs extrinsic knowledge** — models are reliable on info in their training data (intrinsic), unreliable on info they need to look up (extrinsic).

## Types
- Factual errors (wrong dates, stats)
- Fabricated entities (fake papers, people)
- Context ignorance (ignoring provided docs, using training data instead)

## Mitigations
- **Provide intrinsic context** — feed the model the actual code/docs. Don't rely on "it probably knows."
- **Force tool use** — "use your search tool" for anything requiring current/external knowledge
- **Never trust for critical decisions** — legal, medical, financial = always verify

## Connection to Harness Engineering
- This is WHY self-evaluation fails: models are trained to be confident, not correct
- The adversarial evaluator works because it's a fresh context that hasn't "invested" in the output
- "Guessing is more highly rewarded than refusal" = agents praising their own mediocre work
- Providing the spec + running app as intrinsic context to the evaluator is the fix
