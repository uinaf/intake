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
intaked_by: glitch418x
---

## Why it matters
OpenAI's framework for skill regression testing: four eval dimensions (outcome, process, style, efficiency goals), JSONL trace capture for deterministic checks (command sequences, token budgets, repo cleanliness), then rubric-based grading only where deterministic checks don't suffice. The layering principle — add expensive LLM-as-judge checks only where they reduce meaningful risk — is the most actionable published guide to CI pipelines for agent skills that don't collapse under eval cost.

## Classification
- Section: Design Primitives
- Subsection: Verification & CI Integration
- Type: article
