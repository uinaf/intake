---
title: "Inside OpenAI: How We Built a Production System with 0 Lines of Human Code"
source: https://youtube.com/watch?v=
saved: 2026-03-26
type: video
tags:
  - openai
  - coding-agents
  - harness-engineering
  - observability
  - rules-hygiene
  - monorepo
---

An OpenAI talk on embedding judgment into a repo so agents can ship production work with no human-typed code, using structured docs, UI validation, and per-worktree observability.

## Key takeaways

- **Embedded judgment**: Standards, decisions, and pitfalls live in the repo, separate from guardrails for scope, tests, and rollback.
- **Stop conditions**: The agent operating loop refuses work that lacks a design doc, is risky, has unclear ownership, needs secrets, or would put orchestrator logic back in root src/.
- **CDP validation**: For UI-visible work, baseline, exercise, observe, and fix against the live app. CDP-driven validation is the source of truth over tests alone.
- **Per-worktree telemetry**: Each Codex worktree gets its own logs, metrics, and traces so overnight runs can query the same signals as a human SRE.
- **Grounded prompting**: Ask Mode first, scope to about an hour of human work, prompt like a GitHub issue, and fix the environment rather than the prompt when builds fail.
