---
title: GSD (Get Shit Done) — Spec-Driven Claude Code Wrapper
source: https://github.com/gsd-build/get-shit-done
saved: 2026-03-28
type: research
tags:
  - harness-engineering
  - agentic-sdlc
  - tools
  - claude-code
---

# Get Shit Done (GSD)

Claude Code wrapper implementing spec-driven development with phases.

## What It Does
- `/gsd:new-project` → `/gsd:discuss-phase` → `/gsd:plan-phase` → `/gsd:execute-phase` → `/gsd:verify-work`
- Atomic git commits per task (traceable, revertable)
- Modular phases: add, insert, reorder without rebuilding
- Multi-runtime support (Claude primary, community ports for others)
- Built-in security: path traversal prevention, prompt injection detection, sensitive file protection

## Limitations
- Claude-specific (community ports for others)
- No adversarial evaluator loop — verify is self-verification
- No cross-agent review
- Prompt-based, not middleware-enforced

## Interesting
- Most practical/shippable tool in the space right now
- Install with `npx get-shit-done-cc`
- "If you know clearly what you want, this WILL build it for you. No bs."
