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

## Key takeaways

- GPT-5.5 prompts should be more outcome-oriented: define the desired result, success criteria, constraints, available evidence, and final output shape; avoid dragging old overly procedural prompt stacks forward.
- Keep personality and collaboration style separate and short. Personality shapes tone; collaboration style shapes when to ask, assume, verify, and stop.
- For tool-heavy or multi-step flows, use a short visible preamble before tools so users see responsiveness without forcing noisy play-by-play.
- Prefer decision rules over excessive ALWAYS/NEVER language. Reserve strict invariants for safety, required fields, side-effect limits, and true non-negotiables.
- Add explicit stop rules: when enough evidence is enough, when to search again, when to ask for missing info, and when to answer.
- GPT-5.5 is highly steerable on output format. Set verbosity and formatting expectations deliberately; keep heavy structure only where it helps comprehension or product UI stability.
- For grounded answers, define citation behavior: which claims require support, what counts as sufficient evidence, and how to handle missing evidence without turning absence into a false negative.
- Use retrieval budgets: start with one broad search; search again only when the core question is unanswered, required facts are missing, exhaustive coverage is requested, a specific artifact must be read, or a claim would otherwise be unsupported.
- For creative/generative drafts, separate sourced facts from creative wording. Do not invent product, customer, metric, roadmap, or competitive claims just to make copy stronger.
- Give agents validation tools and instructions. For code, ask for targeted tests/typecheck/lint/build/smoke checks; for visuals, render and inspect before finalizing.
- For implementation plans, make them traceable: map requirements to files/resources, state/data flow, validation, failure behavior, security/privacy, and material open questions.
- In long-running Responses workflows, preserve assistant item `phase` values (`commentary`, `final_answer`) when manually replaying prior assistant outputs.

## Useful prompt skeleton

Role: 1-2 sentences defining function and context.

# Personality
Tone, demeanor, and collaboration style.

# Goal
User-visible outcome.

# Success criteria
What must be true before final answer.

# Constraints
Policy, safety, business, evidence, and side-effect limits.

# Output
Sections, length, and tone.

# Stop rules
When to retry, fallback, abstain, ask, or stop.
