---
title: Harness Engineering for Reliable AI Workflows
source: https://youtube.com/watch?v=I2K81s0OQto
saved: 2026-03-28
type: video
tags:
  - harness-engineering
  - agentic-sdlc
  - reliability
  - validation-loops
intaked_by: glitch418x
---

# Harness Engineering for Reliable AI Workflows

Focuses on the reliability problem: getting from 90% to 99.9% success rate in multi-step AI workflows.

## The March of Nines

- 10-step workflow at 90% per step = 35% total success = multiple failures/day
- 10-step workflow at 99.9% per step = 99% total = ~1 failure per 10 days
- Each additional nine requires exponentially more engineering
- Skills (fancy prompts) get you to ~90%. Harnesses get you toward 99%+.

## Skills vs Harnesses

- **Skills** = advanced prompts with domain knowledge. Limited by hallucination, step-skipping, early quitting.
- **Harnesses** = deterministic rails around AI. Validate and gate outputs at each stage.
- Stripe's "minions": auto-validates AI code against millions of tests → thousands of reliable merges/week

## Key Harness Components

1. **Architecture**: single-thread supervisor, multi-agent swarm, or DAG
2. **Planning**: fixed plans (regulated/deterministic) vs dynamic plans (flexible)
3. **File systems**: virtual/real scratch pads for state persistence
4. **Sub-agents**: isolated context, parallel processing, different models per task
5. **Tool calling + guardrails**: controlled access, human-in-the-loop approvals
6. **Memory**: short-term (session) + long-term (knowledge), prevents context overload
7. **State management**: harness as state machine, recoverable from any phase
8. **Validation loops**: iterative test → correct → retest cycles
9. **Context management**: summarization + compaction vs context rot

## Contract Review Demo

Multi-phase harness: upload → classify → clarify → research playbook → extract clauses → risk analysis → redline → executive summary. Sub-agents handle individual clauses in parallel with isolated context. Different models: expensive for orchestration, cheap for subtasks.

## Key Insight

Harnesses are state machines with validation gates between phases. Not "let the agent figure it out" — deterministic flow with AI doing the work within each gate. The harness catches when AI goes off-rails, the AI does the actual thinking.

## Connection to Our Work

- "March of nines" framing explains why our harness skill grades repos — higher grade = more nines achievable
- Validation loops = our evaluator pattern
- Sub-agent isolation = the builder/judge separation
- State management = why context resets + handoff artifacts matter
- Skills complement harnesses, don't replace them — exactly our skill + harness architecture
