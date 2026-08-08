---
title: Owain Lewis’s Agentic Software Factory with Codex and Claude Code
source: https://www.youtube.com/watch?v=AbpyqAfxZ8c
saved: 2026-08-08
type: video
tags:
  - coding-agents
  - agentic-sdlc
  - workflows
  - automation
  - human-in-the-loop
  - testing
---

Owain Lewis demonstrates an “agentic software factory” that turns the ordinary engineering lifecycle into a repeatable, version-controlled workflow. Work enters as feedback, bugs, stakeholder requests, or developer ideas; agents refine it into implementation-ready tasks, build changes in isolated environments, run tests and reviews, respond to CI feedback, and leave the final merge decision to a human.

The useful idea is not unattended code generation by itself. It is replacing improvised prompting with an explicit pipeline whose steps, triggers, permissions, and approval boundaries are consistent across tasks. Lewis says he now delegates most well-scoped implementation work through this system while spending more of his own time on product thinking, design, and planning.

## Key takeaways

- Ticket refinement is the first quality gate. A vague request such as “improve the README” lacks an outcome, context, and acceptance criteria; a refinement agent can inspect the repository, reproduce the issue where possible, challenge bad assumptions, and rewrite the task before implementation begins.
- Refinement and implementation are separate workflows. The first produces a trustworthy task contract; the second creates a worktree, plans, edits, tests, reviews, handles findings and CI feedback, and opens a pull request without merging it automatically.
- Orchestration should be deterministic where possible. Issue labels and board states trigger work, while a polling process allocates isolated environments and advances status. Models are invoked only for reasoning-heavy refinement or implementation, not for routine queue coordination.
- Isolation is non-negotiable. Git worktrees are useful for concurrent local jobs; shared or remote deployments need stronger containment such as containers or equivalent restricted sandboxes.
- Workflows should live in version control. The demonstrated factory can also run scheduled jobs, such as a bug finder that inspects the repository and creates a ticket for later review, making automation changes auditable like code.
- Autonomy should expand through a trust ladder: first report findings, then create tasks, then open pull requests, and only grant broader powers after the workflow has repeatedly proved reliable in that repository.
- Detached execution is valuable because better agents often take longer when they test, review, wait for CI, and repair findings. A roughly 35-minute run is acceptable when it replaces sustained human attention rather than merely generating code slowly.
- Human judgment remains at consequential boundaries. Mechanical maintenance, security updates, straightforward bugs, and tedious changes fit the factory; ambiguous design decisions and high-risk work still need interactive involvement.
- The closest analogy is CI/CD. Standardized release pipelines improved reliability by making checks consistent; explicit agent workflows can similarly raise the quality floor for implementation without pretending every task is safely automatable.
