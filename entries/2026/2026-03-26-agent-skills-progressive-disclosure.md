---
title: "Agent Skills: Progressive Disclosure as a System Design Pattern"
source: https://web.archive.org/web/20260422201154/https://www.newsletter.swirlai.com/p/agent-skills-progressive-disclosure
saved: 2026-03-26
type: article
tags:
  - skills
  - progressive-disclosure
  - context-engineering
  - rules-hygiene
  - coding-agents
---

Aurimas Griciunas explains why Agent Skills spread so quickly: progressive disclosure loads only the tokens needed for discovery, then the workflow, then supporting files.

## Key takeaways

- **Three-tier loading**: Discovery reads name and description, about 80 tokens median. Activation loads the SKILL.md body. Execution pulls scripts and references only when a step needs them.
- **Rapid adoption**: Anthropic released the open standard in December 2025. OpenAI, Google, GitHub Copilot, and Cursor adopted it within weeks, and SkillsMP later indexed 400K+ skills.
- **Description quality**: Selection is LLM reasoning over discovery descriptions, so description quality determines routing accuracy.
- **Human UX transfer**: Progressive disclosure from human UX applies to agents. The context window is cognitive space, and overloading it degrades reasoning.
- **Self-authoring**: Agents can extract repeated patterns into new skill files. Claude Code supports this via a skill-creator skill.
- **Unsolved governance**: Deactivation, overlapping descriptions at 100+ skills, and weak descriptions that cause misactivation remain open problems.
