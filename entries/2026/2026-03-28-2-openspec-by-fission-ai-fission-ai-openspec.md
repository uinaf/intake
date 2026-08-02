---
title: 2. OpenSpec by Fission-AI (`Fission-AI/OpenSpec`)
source: https://github.com/Fission-AI/OpenSpec
saved: 2026-03-28
type: research
tags:
  - spec-driven-development
  - sdd
  - ai-agents
  - coding-agents
  - specifications
  - testing
  - vibe-coding
---

### 2. OpenSpec by Fission-AI (`Fission-AI/OpenSpec`)
**Source**: [github.com/Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | npm: `@fission-ai/openspec`

Philosophy: "fluid not rigid, iterative not waterfall, easy not complex, built for brownfield not just greenfield."

**Core workflow**:
1. `/opsx:propose <idea>` → creates a change folder with proposal.md, specs/, design.md, tasks.md
2. `/opsx:apply` → implements tasks from the spec
3. `/opsx:archive` → archives completed change, updates specs

**Key differentiators**:
- Lighter weight than Spec Kit — no rigid phase gates
- Each change gets its own folder (proposal, specs, design, tasks)
- Node.js based (`npm install -g @fission-ai/openspec`)
- Works with 20+ AI assistants via slash commands
- Expanded workflow: `/opsx:new`, `/opsx:continue`, `/opsx:ff`, `/opsx:verify`, `/opsx:sync`, `/opsx:bulk-archive`, `/opsx:onboard`
- Dashboard UI
- Recommends high-reasoning models (Opus 4.5, GPT 5.2)

**vs. Spec Kit**: More fluid/iterative, less ceremony
**vs. Kiro**: Tool-agnostic, not locked to one IDE
