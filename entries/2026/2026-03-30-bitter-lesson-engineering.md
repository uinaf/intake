---
title: Bitter Lesson Engineering
source: https://danielmiessler.com/blog/bitter-lesson-engineering
saved: 2026-03-30
type: article
tags:
  - ai
  - agents
  - philosophy
  - engineering
  - scaffolding
---

Daniel Miessler's application of Richard Sutton's "Bitter Lesson" to AI engineering.

## Core Argument
- Human attempts to control/enhance AI through hand-coded logic are not just less effective — they're actively harmful
- As AI gets smarter, our scaffolding should be about **preferences not execution**
- "Don't confuse the 'what' with the 'how'" — be specific about desired outcomes, give best tools to best AI, let it figure out execution
- Hard-coding our "superior guidance" poisons AI's native capabilities

## Key Quotes from Sutton
- "General methods that leverage computation are ultimately the most effective, and by a large margin"
- "We want AI agents that can discover like we can, not which contain what we have discovered"
- "Building in our discoveries only makes it harder to see how the discovering process can be done"

## Takeaways
- Our logic/efficiency heuristics are likely primitive
- Don't hard-code execution rules into AI instruction
- As models improve, scaffolding becomes preferences-only → system is meta-upgradeable
- Applies beyond engineering: life management, business, general AI interaction

## Relevance to Our Work
- Direct tension with prescriptive harness methodology: a layered audit spells out *how*, where BLE would say "tell it what a good harness looks like, not how to build one"
- Supports the ETH Zurich finding (AGENTS.md >60 lines hurts performance) — less instruction = more room for native capability
- The "harness complexity should decrease as models improve" observation from our research aligns perfectly
- Counter-argument: models still need objective criteria (binary pass/fail) even if they don't need step-by-step methodology
