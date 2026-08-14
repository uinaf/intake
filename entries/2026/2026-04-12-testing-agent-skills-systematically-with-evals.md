---
title: Testing Agent Skills Systematically with Evals
source: https://developers.openai.com/blog/eval-skills
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - verification-and-ci-integration
  - article
---

OpenAI's skill regression framework layers cheap deterministic checks before expensive LLM-as-judge grading so CI does not collapse under eval cost.

## Key takeaways

- **Four eval dimensions**: Outcome, process, style, and efficiency goals.
- **JSONL traces**: Capture traces for deterministic checks on command sequences, token budgets, and repo cleanliness.
- **Layered grading**: Use rubric or LLM-as-judge checks only where deterministic checks do not suffice.
- **Cost principle**: Add expensive judges only where they reduce meaningful risk.
