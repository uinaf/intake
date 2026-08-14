---
title: Four Layers of AI Code Review
source: https://youtube.com/watch?v=As2xy_cSx00
saved: 2026-03-28
type: video
tags:
  - code-review
  - evaluator-pattern
  - agentic-sdlc
  - verification
---

A video describes four layers for reviewing AI-generated code, from deterministic hooks to human judgment on high-stakes changes.

## Key takeaways

- **Automate the obvious**: Typecheck, lint, format, test, and scan automatically after every generation. This is the highest-leverage, cheapest layer.
- **Local then PR review**: An agent reviews staged changes before push. PR bots add a second safety net.
- **Human for significance**: Humans still review migrations and infra. Minor changes may ship on automation alone.
- **Assumed defects**: Always assume AI-generated code has issues and get another agent to review it. Customize prompts to the project.
