---
title: My 7 Phases Of AI Development
source: https://aihero.dev/my-7-phases-of-ai-development
saved: 2026-03-19
type: article
tags:
  - ai-engineering
  - coding-agents
  - workflows
  - sdlc
---

Matt Pocock's framework for shipping production-quality code with AI agents. Not vibe coding-agents — structured engineering with AI assistance.

## The 7 Phases

1. **Idea** — Define the problem. Refine iteratively (e.g. `/grill-me` skill) before moving forward.
2. **Research** (optional) — Cache external dependency info in `RESEARCH.md` so agents don't waste context re-exploring APIs/docs. Treat as ephemeral — delete after the sprint.
3. **Prototyping** (optional) — Impose your taste. Generate multiple variations on throwaway routes, pick the winner, commit it so agents have concrete examples.
4. **PRD** — Describe the end state (what users see, how it behaves), not implementation. Grill yourself on every decision point to surface edge cases.
5. **Kanban Board** — Break PRD into tickets with blocking relationships. Enables parallelization — spin up an agent per non-blocking ticket. Linear > GitHub Issues for blocking deps.
6. **Execution** — Run coding-agents agents against tickets. Sequential is fine; parallel is possible with a good board. With proper context (research + prototype + PRD + tickets), AFK execution works well.
7. **QA** — Agent creates QA plan, human reviews and tests. Iterate phases 5-7 until polished. Includes code review for logic errors, security, performance, maintainability.

## Key Takeaways

- Front-load context (research, prototypes, PRD) so agents can work autonomously.
- Research assets are ephemeral — stale docs cause wrong turns.
- Prototyping is about taste, not just feasibility.
- PRD describes destination, not journey.
- QA is iterative: expect multiple execution loops.
- Framework-agnostic — works with Ralph loops, GSD, Spec Kit, etc.
