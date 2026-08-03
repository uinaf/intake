---
title: Your Agents Produce Slop Because You're Poor
source: https://x.com/systematicls/status/2035375632553836732
saved: 2026-03-21
type: tweet
tags:
  - agents
  - coding-agents
  - token-cost
---

## Key Takeaways

- Agent output quality scales monotonically with token budget. More tokens = fewer errors.
- Companies claiming production-quality agent code are either foundation model providers or extremely well-capitalized.
- Token budget should scale proportionally with lines of code.
- Two simple improvements:
  1. **WAIT**: Automated review loops — build, then N fresh-context reviews, fix findings each pass. Uncorrelated thinking streams catch systematic bias.
  2. **VERIFY**: Write tests early and often. Verification checkpoints catch upstream errors before they compound downstream.
- **Novelty is the hard limit**: No amount of tokens solves problems not in the training data. Domain expertise still required for novel problems.
- Extra tokens help by: better reasoning/planning, multiple solution paths, self-critique with fresh context, and tool/test verification.
- Single-pass max thinking is likely insufficient for complex work.

## Notable Quote

> "Research, after all, is what produces the bedrock of knowing the answer. Humans spend biological time to produce better answers, and agents simply spend more compute time to produce better answers."
