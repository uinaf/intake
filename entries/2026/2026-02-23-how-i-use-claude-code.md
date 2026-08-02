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

## How I Use Claude Code
- **Author:** Boris Tane
- **URL:** https://boristane.com/blog/how-i-use-claude-code/
- **Shared by:** Altay
- Type: article
- Tags: claude-code, workflows, research-first, planning, annotation-loop

Practical workflow write-up for using Claude Code on non-trivial engineering work without losing architectural control.

Core pipeline:
- research first (deep-read + `research.md` artifact)
- plan second (`plan.md` with concrete paths/snippets/tradeoffs)
- annotation loop (human inline notes, multiple passes, explicit “don’t implement yet”)
- implementation last (“implement it all” + strict constraints + progress tracking in plan)

Strong points:
- separates decision-making from code generation
- creates durable artifacts instead of chat-only context
- reduces wasted implementation churn from early wrong assumptions
- keeps human judgment in the loop at architecture level

Caveat:
- this workflow needs discipline; skipping the annotation loop turns it back into generic prompt→patch cycles.

**My take:** High-signal and battle-tested. The annotation cycle is the key differentiator — it’s the mechanism that injects product and system judgment before code is written.
