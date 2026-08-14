---
title: Owain Lewis’s Agentic Software Factory with Codex and Claude Code
source: https://www.youtube.com/watch?v=AbpyqAfxZ8c
saved: 2026-08-08
type: video
tags:
  - coding-agents
  - agentic-sdlc
  - workflows
  - automation
  - human-in-the-loop
  - testing
---

Owain Lewis shows an agentic software factory that turns the ordinary lifecycle into a version-controlled pipeline. Agents refine work, build in isolation, test, and handle CI, while a human keeps the merge decision.

## Key takeaways

- **Refinement gate**: A vague request lacks outcome, context, and acceptance criteria. A refinement agent inspects the repo, challenges assumptions, and rewrites the task first.
- **Split workflows**: Refinement produces a task contract. Implementation creates a worktree, plans, edits, tests, reviews, handles CI, and opens a PR without merging it.
- **Deterministic orchestration**: Labels and board states trigger work. Models run only for reasoning-heavy refinement or implementation, not routine queue coordination.
- **Isolation**: Git worktrees help concurrent local jobs; shared or remote deploys need containers or equivalent sandboxes.
- **Trust ladder**: Report findings, then create tasks, then open PRs, and grant broader powers only after the workflow proves reliable in that repo.
- **Detached time**: A roughly 35-minute run is acceptable when it replaces sustained human attention rather than generating code slowly.
- **Human boundaries**: Mechanical maintenance and straightforward bugs fit the factory; ambiguous design and high-risk work still need interactive judgment.
- **CI analogy**: Explicit agent workflows can raise the implementation quality floor the way standardized release pipelines raised release reliability.
