---
title: "Harness Engineering: Leveraging Codex in an Agent-First World"
source: https://openai.com/index/harness-engineering
saved: 2026-03-06
type: article
tags:
  - agents
  - coding-agents
  - openai
  - architecture
---

OpenAI shipped an internal product with zero manually written code over five months: about 1M lines, 1,500 PRs, three to seven engineers, all Codex-generated, about one-tenth the estimated time.

## Key takeaways

- **AGENTS.md as map**: About 100 lines pointing at structured `docs/`; one giant file crowded context and rotted.
- **Repo as record**: If it is not in the repo, it does not exist to the agent; Slack and Google Docs are invisible.
- **Mechanical enforcement**: Layered architecture, custom linters with remediation in errors, parse-don't-validate at boundaries.
- **Agent legibility**: Bootable per worktree, CDP, ephemeral observability; favor boring, well-trained-on tech.
- **Garbage collection**: Recurring Codex tasks scan slop and open refactor PRs instead of Friday cleanups.
- **Merge philosophy**: Corrections are cheap, waiting is expensive; agent-to-agent review replaces most human review.
- **Full loop**: Prompt, reproduce, fix, validate with video, open a PR, remediate, and escalate only for judgment.
