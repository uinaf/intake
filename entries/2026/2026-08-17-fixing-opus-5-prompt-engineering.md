---
title: "Fixing Opus 5: Proof That Prompt Engineering Is Not Dead"
source: https://www.youtube.com/watch?v=S_QdQ1G4GlU
saved: 2026-08-17
type: video
tags:
  - coding-agents
  - prompting
  - context-engineering
  - claude-code
  - anthropic
---

Behavior repeated across coding-agent sessions belongs in the system prompt, where it compounds across tasks. The video demonstrates steering Claude Opus 5 toward concise engineering communication with explicit patterns, boundaries, shorthand, and examples.

## Key takeaways

- **System-level leverage**: Put durable communication rules in the system prompt and reserve user prompts for the task at hand, so the same behavior applies to every request and response.
- **Behavioral patterns**: Specify both what good output should do and what it should avoid, including plain language, non-repetition, calibrated detail, stock phrases, flattery, decorative structure, and excessive punctuation.
- **Operational boundaries**: Tell the agent to stay within the requested scope, avoid unsolicited cleanup or speculative abstractions, and require evidence before claiming completion.
- **Reference shorthand**: Stable codes for decisions, risks, findings, or actions can make long conversations easier to navigate, while aliases can invoke recurring transformations such as compression or simplified explanations.
- **Example-driven steering**: Paired examples of desired and undesired answers act as in-context distillation; outputs from a model with a preferred style can be edited into reusable demonstrations.
- **Evidence limit**: The side-by-side runs are illustrative rather than a controlled benchmark, and the presenter notes that latency and output length vary because model generations are nondeterministic.
