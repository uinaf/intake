---
title: How I Use Claude Code
source: https://boristane.com/blog/how-i-use-claude-code
saved: 2026-02-23
type: article
tags:
  - ai-engineering
  - claude-code
  - context-management
  - workflows
  - research-first
  - planning
  - annotation-loop
  - specs
  - living-specs
  - documentation
  - agentic-coding
---

Boris Tane's Claude Code workflow keeps architectural control: research first, plan second, annotate, then implement last.

## Key takeaways

- **Research first**: Deep-read and write a `research.md` artifact before planning.
- **Plan second**: `plan.md` with concrete paths, snippets, and tradeoffs.
- **Annotation loop**: Human inline notes, multiple passes, and an explicit "don't implement yet."
- **Implement last**: "Implement it all" with strict constraints and progress tracking in the plan.
- **Durable artifacts**: Decision-making stays separate from generation; chat-only context is not enough.
- **Discipline**: Skipping the annotation loop turns it back into generic prompt-to-patch cycles.
