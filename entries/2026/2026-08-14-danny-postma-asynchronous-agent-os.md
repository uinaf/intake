---
title: Danny Postma's asynchronous Agent OS
source: https://x.com/dannypostma/status/2088181331465253045
saved: 2026-08-14
type: video
tags:
  - coding-agents
  - agentic-sdlc
  - task-runners-and-orchestration
  - workflows
  - automation
  - human-in-the-loop
  - agent-security
---

Danny Postma demonstrates a personal agent control plane that turns specs into reviewed pull requests through disposable runtimes, narrow agent permissions, reusable task templates, asynchronous approvals, and bounded open-ended loops.

## Key takeaways

- **Control plane**: Each agent has a model, prompt, skills, MCP connections, repository mounts, environment, and collaboration allowlist, while YAML definitions and a CLI keep projects synchronized.
- **Ephemeral execution**: A task starts a clean container, pulls the repository, mounts only its permitted resources, performs the work, commits, and discards the environment afterward.
- **Feature pipeline**: A reusable template chains spec approval, planning, four-role plan review, revision, implementation, code review, fixes, wiki updates, end-to-end tests, and final human deployment review.
- **Asynchronous decisions**: Agents contact Postma through an inbox MCP only when blocked or awaiting approval; mobile push notifications and structured choices let work continue without an open laptop.
- **Event-driven work**: Webhooks trigger support triage and bug diagnosis, approved findings can enter the full fix pipeline, and recurring tasks cover scheduled operational work.
- **Goal loops**: Open-ended goals generate a definition of done, then an orchestrator selects specialized agents until every criterion passes, constrained by spend, runtime, and repeated-stall limits.
- **Cost routing**: Managed agents reportedly reached roughly $500 per day, prompting a hybrid route with cloud planners and cheaper workers on a $10 Hetzner VM; its permission-bypass modes materially weaken the otherwise careful isolation story.
- **Evidence limit**: The “95% automated” claim is a personal estimate from a live prototype demo, not an evaluation, and the prompts, skills, and implementation were not yet published with the video.
