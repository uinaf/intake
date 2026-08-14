---
title: Symphony + Harness Engineering notes
source: https://github.com/openai/symphony
saved: 2026-03-11
type: research
tags:
  - agents
  - harness-engineering
  - orchestration
  - symphony
  - research
---

This cluster is about moving from interactive coding agents to harnessed autonomous work systems. Symphony turns project work into isolated autonomous implementation runs.

## Key takeaways

- **Symphony pitch**: Engineers should manage work, not supervise agents line-by-line; it is an engineering preview, not a mature product.
- **Bottleneck shift**: Once agents write most code, the bottleneck is environment design.
- **Repo as record**: AGENTS.md as a table of contents; knowledge structured, versioned, and mechanically checked.
- **Three requirements**: Legible environment, strong verification loops, and generic tools the model already understands.
- **Ladder**: Interactive use, then memory and instructions, scouts and builders, human orchestrator, orchestrator agent, then issue-to-PR with the human mostly outside.
- **Switching mid-loop**: Do not interrupt a working production loop for a shinier orchestrator.
