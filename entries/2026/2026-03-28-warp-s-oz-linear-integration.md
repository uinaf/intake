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
---

Warp's Oz cloud agent can be tagged or assigned on a Linear issue, then clone repos, work the task, and post a PR plus a Linear update.

## Key takeaways

- **Kickoff**: Tag @Oz on a Linear issue or assign the issue to Oz.
- **Cloud run**: The agent spins up, clones repos from the configured environment, and works with Linear plus codebase context.
- **Live updates**: It posts a task list, elapsed time, and checkpoints, and shares a live session teammates can watch or steer.
- **Handoff**: On completion it commits with the user's GitHub identity, opens a PR, and posts the PR link back to Linear.
- **Infrastructure**: Environments are Docker-based, PRs go through GitHub CLI, and enterprise can self-host.
