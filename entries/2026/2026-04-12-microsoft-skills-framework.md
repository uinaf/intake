---
title: Microsoft Skills Framework
source: https://github.com/microsoft/skills
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - skills
  - tools
  - agent-workflows
---

# Microsoft Skills Framework

- This repo is worth preserving because it treats skills as deployable harness artifacts instead of loose prompt snippets.
- The important idea is selective activation: the repo explicitly warns that loading every skill causes context rot, which matches the real harness problem of tool and instruction sprawl.
- It bundles not just skills, but agent templates, AGENTS.md guidance, MCP configs, and evaluation workflows, which makes it a concrete example of how a skills ecosystem becomes infrastructure.
- The cross-agent angle matters too: the same skill packaging targets Copilot, Claude Code, VS Code, Gemini, and related environments rather than one vendor silo.
- Keep this as a reference for versioned, shareable skill distribution and for the argument that skill management is a harness discipline, not prompt filing.
