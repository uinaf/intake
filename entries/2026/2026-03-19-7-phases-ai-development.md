---
title: My 7 Phases Of AI Development
source: https://aihero.dev/my-7-phases-of-ai-development
saved: 2026-03-19
type: article
tags:
  - ai-engineering
  - coding-agents
  - workflows
  - sdlc
---

Matt Pocock's seven phases for shipping production-quality code with AI: idea, optional research, optional prototyping, PRD, kanban, execution, and QA.

## Key takeaways

- **Front-load context**: Research, prototypes, and PRD so agents can work autonomously.
- **Ephemeral research**: Cache dependency info in RESEARCH.md, then delete it; stale docs cause wrong turns.
- **Taste via prototypes**: Generate variations on throwaway routes, pick a winner, commit it as an example.
- **PRD is destination**: Describe what users see and how it behaves, not the implementation journey.
- **Kanban blocking**: Tickets with blocking relationships enable one agent per non-blocking slice; Linear beats GitHub Issues for deps.
- **Iterative QA**: Agent writes a QA plan, human reviews; expect multiple execution loops.
