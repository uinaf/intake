---
title: Warp's Oz → Linear Integration
source: https://docs.warp.dev/agent-platform/cloud-agents/integrations/linear
saved: 2026-03-28
type: article
tags:
  - ai-agents
  - sdlc
  - spec-driven-development
  - coding-agents
  - automation
  - devops
  - linear
intaked_by: glitch418x
---

### Warp's Oz → Linear Integration
**Source:** [Warp Docs](https://docs.warp.dev/agent-platform/cloud-agents/integrations/linear)

End-to-end flow:
1. Tag @Oz on a Linear issue or assign the issue to Oz
2. Agent spins up in cloud, clones repos from configured environment
3. Agent works through task with full Linear issue context + codebase context
4. Posts real-time updates: task list, elapsed time, checkpoints
5. Shared live session link — teammates can watch or steer in real time
6. On completion: commits using your GitHub identity, creates PR with clean description
7. Posts PR summary and link back to Linear issue

Infrastructure: Docker-based environments, GitHub CLI for PRs, self-hosted option for enterprise.
