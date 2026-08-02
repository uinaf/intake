---
title: "Codagent: Three Nested Loops"
source: https://codagent.beehiiv.com/p/slot-machines-and-safety-nets
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - agentic-sdlc
  - three-loops
  - evaluator-pattern
---

# Codagent: Three Nested Loops

Best framing of the harness engineering problem.

## Three Loops
1. **Outer loop** (project): intent capture, governance, architectural enforcement, knowledge base
2. **Orchestration loop** (feature): planning pipeline (PRD → design → tasks), each constraining the next
3. **Inner loop** (task): code → verify → iterate, with independent reviewer subagents

## Case Studies
- OpenAI 1M LOC: outer loop — garbage collection agents, architectural linters, all intent in versioned repo files
- MetaGPT: orchestration loop — strict pipeline of standardized docs, executability 1.0 → 4.0/4.0
- Superpowers: inner loop — TDD, 5-step verification, independent reviewer subagents

## Gaps Identified
- MetaGPT: no human approval gates, replaces existing agents instead of integrating
- Superpowers: prompt-based enforcement can fail on context overflow, no automated hard gates

## Key Insight
"No agent can code into a corner because it can't start until planning artifacts exist as concrete documents."

## Building
Open-source agent-agnostic harness with cross-agent review, session management, crash recovery, human approval gates.
