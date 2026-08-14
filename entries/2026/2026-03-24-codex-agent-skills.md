---
title: Codex Agent Skills
source: https://learn.chatgpt.com/docs/customization/overview#skills
saved: 2026-03-24
type: article
tags:
  - agent-skills
  - codex
  - skill-authoring
  - progressive-disclosure
---

Codex skills package instructions, scripts, references, and assets into reusable task-specific capabilities. Repository skills live under .agents/skills, while user skills can provide broader defaults.

## Key takeaways

- **Skill locations**: Repository skills live under `.agents/skills`; user skills can provide broader defaults.
- **Invocation**: Skills can be invoked explicitly or discovered from their description.
- **Progressive disclosure**: Only discovery metadata stays in the initial context. The full workflow loads when the skill is selected.
