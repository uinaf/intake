---
title: GPT-5.5 prompting guide
source: https://developers.openai.com/api/docs/guides/prompt-guidance?model=gpt-5.5
saved: 2026-04-29
type: article
tags:
  - ai
  - openai
  - prompting
  - gpt-5-5
---

OpenAI's GPT-5.5 prompt guide pushes outcome-oriented prompts: desired result, success criteria, constraints, evidence, and output shape, instead of old procedural stacks.

## Key takeaways

- **Outcome first**: Define the result, success criteria, constraints, available evidence, and final shape. Do not drag over-procedural prompt stacks forward.
- **Split style**: Keep personality and collaboration style separate and short. One sets tone; the other sets when to ask, assume, verify, and stop.
- **Decision rules**: Prefer rules over piles of ALWAYS/NEVER. Reserve hard invariants for safety, required fields, and real non-negotiables.
- **Stop conditions**: Say when evidence is enough, when to search again, when to ask, and when to answer.
- **Steerable format**: Set verbosity and structure on purpose. Keep heavy scaffolding only where it helps reading or UI stability.
- **Grounded answers**: Define which claims need citations, what counts as evidence, and how to handle missing sources without false negatives.
- **Retrieval budgets**: Start with one broad search; search again only when the core question, required facts, or a specific artifact is still missing.
- **Agent checks**: Give validation tools. For code, run targeted tests and lint; for long Responses replays, preserve assistant `phase` values.
