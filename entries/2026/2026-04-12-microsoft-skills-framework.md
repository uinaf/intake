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

This repo treats skills as deployable harness artifacts instead of loose prompt snippets, and warns that loading every skill causes context rot.

## Key takeaways

- **Skills as artifacts**: Treats skills as deployable harness artifacts instead of loose prompt snippets.
- **Selective activation**: Explicitly warns that loading every skill causes context rot, matching the real problem of tool and instruction sprawl.
- **Ecosystem bundle**: Bundles skills, agent templates, AGENTS.md guidance, MCP configs, and evaluation workflows.
- **Cross-agent packaging**: The same skill packaging targets Copilot, Claude Code, VS Code, Gemini, and related environments rather than one vendor silo.
- **Harness discipline**: A reference for versioned, shareable skill distribution and the argument that skill management is a harness discipline, not prompt filing.
