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

## Why it matters
Open-source library (April 2026) that automates the harness engineering loop itself: give it a task and a benchmark, and it iterates overnight on system prompts, tool configurations, agent orchestration, and routing — keeping or discarding each change based on score. In a 24-hour run, hit #1 on SpreadsheetBench (96.5%) and the top GPT-5 score on TerminalBench (55.1%), beating every hand-engineered entry. The `program.md` separation of concerns (human writes the directive, agent engineers the harness) is the most practical meta-harness pattern published so far.

## Classification
- Section: Reference Implementations
- Subsection: Generators & Meta-Harnesses
- Type: repository
