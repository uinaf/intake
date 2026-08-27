---
title: AutoAgent
source: https://github.com/kevinrgu/autoagent
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - reference-implementations
  - generators-and-meta-harnesses
  - repo
---

AutoAgent automates the harness loop itself: given a task and a benchmark, it iterates overnight on prompts, tools, orchestration, and routing, keeping only score-positive changes.

## Key takeaways

- **Overnight search**: The library iterates on system prompts, tool configurations, agent orchestration, and routing, keeping or discarding each change by score.
- **Reported wins**: A 24-hour run hit number one on SpreadsheetBench (96.5%) and the top GPT-5 score on TerminalBench (55.1%), beating hand-engineered entries.
- **program.md split**: Humans write the directive, and the agent engineers the harness. The note calls this the most practical meta-harness pattern published so far.
