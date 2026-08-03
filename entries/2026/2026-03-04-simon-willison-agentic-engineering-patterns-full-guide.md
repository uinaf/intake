---
title: Simon Willison — Agentic Engineering Patterns (full guide)
source: https://simonwillison.net/guides/agentic-engineering-patterns
saved: 2026-03-04
type: article
tags:
  - ai-engineering
  - agent-harness
  - design-first
  - coding-agents
  - prototyping
  - context-management
  - ai-adoption
  - tdd
  - code-review
  - cognitive-debt
  - agentic-patterns
---

- URL: https://simonwillison.net/guides/agentic-engineering-patterns/
- Type: article
- Tags: agentic-patterns, coding-agents, tdd, code-review, cognitive-debt, agent-harness
- Sub-pages:
  - [Code is cheap](https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/)
  - [Hoard things you know how to do](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/)
  - [Anti-patterns](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)
  - [Red/green TDD](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/)
  - [First run the tests](https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/)
  - [Linear walkthroughs](https://simonwillison.net/guides/agentic-engineering-patterns/linear-walkthroughs/)
  - [Interactive explanations](https://simonwillison.net/guides/agentic-engineering-patterns/interactive-explanations/)
  - [GIF optimization (annotated prompt)](https://simonwillison.net/guides/agentic-engineering-patterns/gif-optimization/)
  - [Prompts I use](https://simonwillison.net/guides/agentic-engineering-patterns/prompts/)
- Key takeaways:
  - Code is cheap now — old "not worth the time" instinct is wrong. Fire off async agent sessions freely.
  - Hoard working code examples obsessively. Killer pattern: "combine these two working examples into X."
  - Don't inflict unreviewed AI code on collaborators. Your job = deliver code you know works.
  - "Use red/green TDD" — 4 words that encode massive engineering discipline for agents.
  - "First run the tests" — start every agent session with this to set testing mindset + discover project.
  - Linear walkthroughs via tools like showboat for understanding vibe-coded projects.
  - Interactive explanations to pay down cognitive debt — ask agents to build animations of how code works.
  - Annotated prompt study: lean on agent knowledge, describe UI loosely, provide test tooling, inject follow-ups mid-flight.
  - Hard line: LLMs don't write opinion/personality text — only proofread.
