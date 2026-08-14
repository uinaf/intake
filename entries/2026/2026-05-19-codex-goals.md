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

Codex Goals are persistent, thread-scoped completion contracts. A prompt asks, works, and waits; a Goal works, checks, and continues or completes.

## Key takeaways

- **Completion contract**: A Goal defines outcome, verification surface, constraints, boundaries, iteration policy, and a blocked stop — not unlimited autonomy.
- **Thread scope**: Goals live on a thread, not as global memory. Lifecycle states include active, paused, complete, and budget-limited.
- **Conservative continue**: Resume only when the thread is idle, the Goal is active, and no user input or other work is queued. No-tool-call turns stop the spin.
- **Evidence-based done**: Codex must audit tests, benchmarks, or artifacts. Believing it is finished is not enough.
- **Budget is not done**: Hitting a budget limit means stop, summarize, and name next steps — not mark the Goal complete.
- **Good candidates**: Performance work, flaky tests, migrations, repro-heavy bugs, multi-step refactors, and research that needs a final artifact. Skip one-line edits and vague "make this better."
