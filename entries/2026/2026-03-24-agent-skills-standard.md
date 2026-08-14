---
title: The Agent Skills Specification
source: https://agentskills.io/specification
saved: 2026-03-24
type: research
tags:
  - agent-skills
  - open-standard
  - skill-authoring
  - progressive-disclosure
---

The Agent Skills format is a portable skill directory: required SKILL.md plus optional scripts, references, and assets. Frontmatter name and description drive discovery; the Markdown body is the workflow.

## Key takeaways

- **Progressive disclosure**: Load only what the task needs instead of stuffing the full skill into the prompt.
- **Narrow focus**: Skills should be narrowly focused.
- **Description selects**: A clear description determines when a skill is selected.
- **Scripts for determinism**: Setup and validation belong in scripts, not repeated prose.
