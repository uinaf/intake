---
title: Chayenne Zhao — Harness Engineering is Just Good Engineering
source: https://x.com/GenAI_is_real/status/2036266930290696599
saved: 2026-03-28
type: tweet
tags:
  - harness-engineering
  - contrarian
  - sglang
  - agentic-sdlc
intaked_by: glitch418x
---

# The Contrarian Take on Harness Engineering

Chayenne Zhao (SGLang community) argues harness engineering is just existing software engineering principles rebranded:
- Separation of concerns
- Single responsibility principle
- Docs-as-code
- Shift-left constraints

## SGLang Case Study (how-to-sglang)

Built a multi-agent system to auto-answer community questions. Lessons:

1. **One omniscient agent doesn't work** — context window isn't RAM. More context = more attention scatter = worse answers.
2. **Domain-specific expert architecture** — each sub-domain gets its own agent with only its own knowledge. Manager routes questions via structured routing table.
3. **Knowledge partitioning drove more improvement than model upgrades** — "we've never achieved a qualitative leap by swapping in a stronger model."
4. **All knowledge lives in the repo** — verbal agreements don't exist for agents.
5. **Routing must be structural** — not left to agent judgment.

## The Existential Question

> "If model capabilities keep scaling exponentially, will there come a day when models are strong enough to build their own environments?"

OpenClaw went from 400K to 1M lines in a month, driven by AI. Who built that environment?

## Why It Matters

Not because the ideas are wrong — they're right. But naming creates searchability and community. The question is whether these patterns survive the next model generation or become irrelevant.

> "None of this is new. It's just good engineering practice. Nothing more, nothing less."
