---
title: 3. AWS Kiro (`kiro.dev`)
source: https://kiro.dev/
saved: 2026-03-28
type: article
tags:
  - spec-driven-development
  - sdd
  - ai-agents
  - coding-agents
  - specifications
  - testing
  - vibe-coding
intaked_by: glitch418x
---

## 3. AWS Kiro (`kiro.dev`)
**Source**: [kiro.dev](https://kiro.dev) | AWS-backed IDE

The first **IDE built around SDD** as a first-class concept. VSCode-based (fork), with spec-driven development as a core workflow rather than an add-on.

**Key features**:
- **Executable Specs**: Define requirements, system design, and tasks before writing code. Documents reasoning and implementation decisions.
- **Two spec types**: Feature Specs (requirements → design → tasks) and potentially others
- **Three-phase spec workflow**: User stories with acceptance criteria → Technical design → Trackable implementation tasks
- **Agent Hooks**: AI agents that trigger on events (file save) to autonomously generate docs, tests, optimize code
- **Steering files**: Configure how agents interact with each project (coding standards, preferred workflows)
- **CLI available**: `curl -fsSL https://cli.kiro.dev/install | bash`
- **Autopilot mode**: Autonomous large-task execution
- Powered by Claude Sonnet 4.5 / Auto mode (mix of frontier models)

**Strengths**: Deep IDE integration, visual spec management, most polished UX
**Criticisms**: Locked to Kiro IDE, limited to Claude models, AWS ecosystem tie-in
