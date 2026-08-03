---
title: Six Levels of Agentic Engineering
source: https://youtube.com/watch?v=njRAmppPvFk
saved: 2026-03-28
type: video
tags:
  - agentic-sdlc
  - agent-orchestration
  - coding-agents
  - workflow
---

Structured progression from manual AI coding to fully autonomous agent-driven development.

## The Levels

1. **Interactive Manual** — babysitting the agent, no memory, constant prompting
2. **Expertise + Memory** — persistent context (e.g., Mulch), agent retains learnings across sessions
3. **Sub-Agent Delegation** — primary agent delegates to scouts/planners/builders/reviewers within one session
4. **Developer-Orchestrated Parallelism** — human manages multiple agent sessions, coordinates manually
5. **Autonomous Orchestration** — orchestration agent manages dozens of sub-agents, isolation via worktrees, human steps back
6. **Fully Automated E2E** — agents triage issues, plan, implement, deploy without human. Issues tagged "agent ready" auto-resolved

## Key Takeaways

- Each level requires increasing trust, config, and codebase understanding
- Isolation (worktrees, separate envs) becomes essential at level 4+
- Sub-agent roles: scout (gather info), planner (design changes), builder (implement), reviewer (verify)
- Speaker's tools: Overstory (orchestration), Greenhouse (automation)
- Level 6 demonstrated with open-source maintenance: issues → PRs fully automated

## Our Take

- Levels 1-3 are where most people actually are. 4-6 are aspirational.
- The missing piece across ALL levels: verification/evaluation. Who checks the agents' work?
- Level 5-6 only work if the harness is solid — bootable, testable, observable repos.
- "Agents will write better code than I ever could" — only true if the harness catches when they don't.
- Maps directly to our harness skill: without layers 1-4 (boot, test, observe, enforce), levels 5-6 are theater.
