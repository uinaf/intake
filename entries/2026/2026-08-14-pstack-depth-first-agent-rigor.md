---
title: "pstack: depth-first rigor before agent parallelism"
source: https://x.com/poteto/status/2058975157503570132
saved: 2026-08-14
type: tweet
tags:
  - agent-skills
  - coding-agents
  - verification
  - agentic-sdlc
  - multi-agent
  - code-review
  - automation
---

Lauren Tan argues that trustworthy agent parallelism starts with rigorous, auditable single-agent engineering. Her pstack plugin encodes failure-derived playbooks, while an experimental maintenance factory applies them from bug triage through evidence-backed PRs.

## Key takeaways

- **Trust before scale**: Naive parallelism only produces incorrect code faster; verification remains the bottleneck, so agents must first prove they can own one problem end to end.
- **Failure-derived skills**: pstack turns observed agent failure modes into engineering playbooks for debugging, architecture, TDD, autonomous work, visual parity, skill authoring, and review.
- **Routing layer**: `/poteto-mode` selects the playbook for a task and optimizes for maximum impact with minimum code instead of maximizing implementation volume.
- **Depth-first orchestration**: Multi-model workflows are used for competing attempts and adversarial review inside one problem, not merely to increase the number of simultaneous coding agents.
- **Auditable reasoning**: Skills can query code, history, tickets, documentation, chat, observability, errors, and analytics in parallel, then preserve a reviewable decision trail.
- **Workflow mining**: `/automate-me` derives a custom mode from recent transcripts, allowing repeated human working patterns to become routed agent procedures.
- **Maintenance factory**: The experimental Benny pipeline gathers reports and media, clarifies reproduction, checks code and organizational context, reproduces through computer use, fixes, measures performance, records before-and-after video, and opens a PR.
- **Limits and cost**: Tan presents Benny as unfinished and warns that multi-agent frontier-model workflows consume expensive tokens; the claims come from a Cursor employee describing her own workflow, not a comparative evaluation.
