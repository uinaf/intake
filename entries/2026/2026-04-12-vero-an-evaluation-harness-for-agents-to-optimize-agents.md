---
title: "VeRO: An Evaluation Harness for Agents to Optimize Agents"
source: https://arxiv.org/abs/2602.22480
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - coding-agents
  - design-engineering
---

VeRO evaluates agent-on-agent optimization: a coding agent edits another agent's harness through edit-execute-evaluate loops while the framework versions snapshots, budgets, and traces.

## Key takeaways

- **Meta-evaluation**: Measures whether one agent is actually improving another, not just whether a single run passed.
- **Edit loops**: The optimizer iteratively changes prompts, tools, and configuration on a target harness.
- **Captured evidence**: Versioned agent snapshots, budget-controlled evaluation, and structured execution traces.
- **Optimizer benchmark**: Includes a suite for comparing optimizer configurations with reproducible infrastructure.
