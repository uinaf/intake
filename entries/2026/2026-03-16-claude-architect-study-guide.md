---
title: Claude Certified Architect - Unofficial Study Guide
source: https://x.com/hooeem/status/2033198345045336559
saved: 2026-03-16
type: tweet
tags:
  - ai
  - anthropic
  - career
  - agents
  - mcp
---

Unofficial study guide for the partner-only Claude Certified Architect (Foundations) exam. It tests practical architecture decisions, not trivia.

## Key takeaways

- **Agentic loops**: Use `stop_reason`; never parse natural language for termination. Subagents have no shared memory with the coordinator.
- **Hooks over prompts**: High-stakes enforcement is programmatic, not probabilistic.
- **Tool design**: Descriptions are the selection mechanism; four to five tools per agent; fix descriptions before adding classifiers.
- **CLAUDE.md hierarchy**: User, project, and directory rules; path-specific globs in `.claude/rules/`.
- **Structured output**: Explicit criteria, two to four few-shot examples, nullable fields to prevent fabrication.
- **Context**: Progressive summarization kills transactional data; put key findings first to avoid lost-in-the-middle.
