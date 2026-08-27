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

Behavior repeated across coding-agent sessions belongs in the system prompt, where it compounds across tasks. The video builds a concrete prompt for steering Claude Opus 5 toward concise engineering communication, then compares it against the default behavior after each change.

## Key takeaways

- **Two prompt layers**: User prompts specify one task, while the system prompt sets rules for every task and response. The presenter argues that this makes system-prompt work multiplicative: recurring preferences such as brevity, scope control, and communication style are encoded once instead of restated on every request.
- **Purpose before persona**: The prompt begins by defining a working relationship built around clear, concise, actionable communication rather than assigning the model a theatrical role. The standard's objective is to deliver useful results for the team, business, and customers.
- **Positive patterns**: Desired behavior is written concretely: lead with the most important information, use plain and specific language, state each fact once, match detail to the task, challenge bad assumptions, and choose terminology that compresses information without becoming ambiguous.
- **Negative patterns**: The prompt separately bans recurring failure modes such as stock phrases, empty agreement, flattery, decorative headings, motivational filler, excessive em dashes, unnecessary analogies, and prose optimized for quotability rather than engineering value. The point is to give the model both a target and a boundary.
- **Reference points**: For answers containing several decisions, risks, findings, questions, or actions, the agent assigns stable short codes and preserves them across the conversation. A follow-up such as “expand R6” can then select an exact item without repeating its full context; short answers should not receive codes merely for ceremony.
- **Operational boundaries**: The agent is told to deliver only the requested scope, avoid widening work into cleanup, refactoring, documentation, or speculative future abstractions, and never claim completion without evidence. It should also avoid unsolicited commit attribution and keep completion reports proportional to the work.
- **Aliases and examples**: Exact shorthand commands can expand into reusable instructions. Examples include compressing an answer, simplifying its language, isolating the main signal, or adding reference codes. Paired examples of good and bad responses then act as in-context distillation, including edited outputs from another model whose style is closer to the desired result.
- **Iteration and evidence**: The presenter evolves the prompt by running default and customized Claude Code sessions side by side after each change, inspecting wording, structure, runtime, and apparent output-token use. These runs illustrate an iterative tuning method, not a controlled benchmark: generations are nondeterministic, and no systematic token or quality evaluation is reported.
