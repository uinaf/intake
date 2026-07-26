---
title: LangChain — Top 30 to Top 5 on TerminalBench via Harness Only
source: https://blog.langchain.com/improving-deep-agents-with-harness-engineering
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - benchmarks
  - evaluator-pattern
  - agentic-sdlc
intaked_by: glitch418x
---

# LangChain Harness Engineering

- Went from Top 30 to **Top 5 on TerminalBench 2.0** by only changing the harness, same GPT-5.2-Codex model
- "Reasoning sandwich": high reasoning at plan + verify, medium in between → 52.8% to 66.5%
- Build-verify-fix loop enforced by middleware hooks (not just prompting)
- Trace Analyzer Skill: automated error analysis spawning parallel agents, synthesizing findings
- LoopDetectionMiddleware: nudges agents to reconsider after multiple edits to same file
- Context engineering: directory structures, tooling info, time budget warnings
- "The purpose of the harness engineer: prepare and deliver context so agents can autonomously complete work"
