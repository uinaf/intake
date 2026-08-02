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

# Codex Agent Skills

Codex skills package instructions, scripts, references, and assets into reusable task-specific capabilities. Repository skills live under `.agents/skills`, while user skills can provide broader defaults.

Skills can be invoked explicitly or discovered from their description. Progressive disclosure keeps only discovery metadata in the initial context and loads the full workflow when the skill is selected.
