---
title: 1. GitHub Spec Kit (`github/spec-kit`)
source: https://github.com/github/spec-kit
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

### 1. GitHub Spec Kit (`github/spec-kit`)
**Source**: [github.com/github/spec-kit](https://github.com/github/spec-kit) | [Blog announcement](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) (Sep 2, 2025)

The most "official" SDD framework, from GitHub itself. Open source, Python-based CLI.

**Four phases**:
1. **Specify** (`/speckit.specify`): High-level description → agent generates detailed spec focused on user journeys, experiences, success criteria. Not tech stack — the *what* and *why*.
2. **Plan** (`/speckit.plan`): Provide stack, architecture, constraints → agent generates comprehensive technical plan
3. **Tasks** (`/speckit.tasks`): Agent breaks spec + plan into small, reviewable, testable chunks
4. **Implement** (`/speckit.implement`): Agent tackles tasks one by one with focused changes

**Key design choices**:
- Works with Copilot, Claude Code, Gemini CLI via slash commands
- Explicit checkpoints between phases — human reviews and refines before moving forward
- Constitution concept (`/speckit.constitution`) for project-wide governing principles
- Huge extension ecosystem (30+ community extensions): Azure DevOps sync, Jira integration, Linear integration, V-Model enforcement, reconciliation/drift detection, multi-agent orchestration, retrospectives

**Criticisms** (per OpenSpec): "Thorough but heavyweight. Rigid phase gates, lots of Markdown, Python setup."
