---
title: Using Goals in Codex
source: https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex
saved: 2026-05-19
type: article
tags:
  - codex
  - openai
  - goals
  - agent-architecture
  - completion-contract
---

# Using Goals in Codex

## Key Takeaways

- **Goals** are persistent, thread-scoped objectives in OpenAI's Codex that keep a coding agent working toward a defined outcome across multiple turns, rather than requiring repeated prompting.
- Mental model: **Prompt** = ask → work → result → wait. **Goal** = work → check → continue or complete.
- A Goal is a **completion contract**, not unlimited autonomy. It defines: outcome, verification surface, constraints, boundaries, iteration policy, and blocked stop condition.
- Goals are scoped to a thread (not global memory or project-level). They carry lifecycle state: active, paused, complete, budget-limited.
- Continuation is event-driven and conservative: only when thread is idle, Goal is active, no user input queued, and no other work pending. No-tool-call turns suppress further continuation to prevent spinning.
- Completion must be **evidence-based** — Codex must audit against concrete evidence (tests, benchmarks, artifacts), not just believe it's done.
- Budget limits cause Codex to stop, summarize progress, and identify next steps — budget exhaustion ≠ completion.

## When to Use Goals

Good candidates: performance optimization, flaky test investigation, dependency migrations, bug hunts requiring reproduction, multi-step refactors, benchmark-driven tuning, research tasks requiring a final artifact.

Not for: one-line edits, simple explanations, short code reviews, vague objectives ("make this better").

## Strong Goal Pattern

```
/goal <desired end state> verified by <specific evidence> while preserving <constraints>. Use <allowed inputs, tools, or boundaries>. Between iterations, <how to choose next action>. If blocked or no valid paths remain, <what to report and what would unlock progress>.
```

## Research Goal Example (Deep Hedging paper)

Strong research Goals define evidence standards upfront: what counts as exact reproduction, approximate reconstruction, proxy support, and blocked claims. The final output should preserve different levels of epistemic support rather than flattening into a single success claim.

## Relevance to Our Work

This is architecturally similar to our TaskFlow pattern but focused on a single coding-agent thread. The "completion contract" idea (outcome + verification surface + constraints + blocked stop) maps well to how we structure agent instructions — the discipline of defining what "done" means and what "blocked" means is universally applicable.
