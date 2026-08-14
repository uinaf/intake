---
title: Prompt Guidance for GPT-5.4
source: https://developers.openai.com/api/docs/guides/prompt-guidance
saved: 2026-03-08
type: article
tags:
  - openai
  - prompting
  - agents
---

GPT-5.4 holds tone over long answers, sticks with multi-step agent loops, and follows modular block-structured prompts. Thin context and irreversible actions still need explicit prompting.

## Key takeaways

- **Output contract**: Return exactly the requested sections, in order; if a format is required, output only that format.
- **Follow-through**: Proceed on clear, reversible, low-risk work; ask only for irreversible side effects or missing sensitive info.
- **Instruction priority**: User instructions override style defaults; safety, honesty, and privacy do not yield.
- **Tool persistence**: Keep calling until the task is complete and verification passes; empty results get a fallback strategy.
- **Dependencies**: Check prerequisites before acting; parallelize only independent lookups.
- **Watch item**: Tool routing is less reliable early in low-context sessions.
