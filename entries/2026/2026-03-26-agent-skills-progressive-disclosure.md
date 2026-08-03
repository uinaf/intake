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

By Aurimas Griciunas (SwirlAI). Deep dive into why Agent Skills took off and the progressive disclosure pattern driving them.

## Timeline

- Dec 18, 2025: Anthropic releases Agent Skills as open standard
- Within weeks: adopted by OpenAI (Codex CLI + ChatGPT), Google (Gemini CLI), GitHub Copilot, Cursor
- 3 months later: SkillsMP indexes 400K+ skills across platforms

## The Three-Tier Architecture

### Tier 1: Discovery
- Platform reads only `name` + `description` from YAML frontmatter
- ~80 tokens median per skill (range: 55–235)
- All 17 Anthropic official skills = ~1,700 tokens total
- Dozens of skills for less context than a single activated skill

### Tier 2: Activation
- When platform determines skill is relevant → loads full SKILL.md body
- Body size: 275 tokens (internal-comms) to 8,000 tokens (skill-creator), median ~2,000
- Selection via LLM reasoning over discovery descriptions
- Description quality directly determines routing accuracy

### Tier 3: Execution
- Supporting materials loaded on demand: scripts, references, templates
- Only enters context when agent reaches a step requiring them
- Three content types: domain knowledge, executable scripts, tool pointers

## Real Example: Anthropic's PDF Skill

```
pdf/
├── SKILL.md
├── reference.md
├── forms.md
└── scripts/
    ├── check_fillable_fields.py
    ├── fill_pdf_form_with_annotations.py
    └── ... (8 scripts total)
```

SKILL.md body has pointers: "For advanced usage, see REFERENCE.md" / "If you need to fill a form, follow FORMS.md." Agent pulls referenced files only when it reaches that step.

## Key Insight: Design Patterns Transfer from Human UX to Agent UX

Progressive disclosure (Nielsen Norman Group) → reduce cognitive load by showing only what's needed for the immediate task. Context window = agent's cognitive space. Overloading it degrades performance; keeping it focused enables sharp reasoning.

Same transfer: agent memory systems mirror human memory (short-term working vs long-term storage).

## Beyond Coding Agents

- OpenClaw cited as clearest non-coding example: 175K+ stars, 13K+ skills on ClawHub, most non-technical
- Customer support agents knowing 200 features but discussing 2 per conversation
- Internal operations, research agents, domain-specific assistants
- When building non-coding agents, implementing the discovery→activation→execution pipeline is the AI engineer's job

## Skill Democratization

- Markdown with plain English = domain experts, team leads, operators can author skills directly
- Both Anthropic and Google ship built-in skill-creators (generate from natural language)
- Claude.ai: non-devs can enable pre-built skills, upload custom ZIPs
- SkillsMP marketplace forming (browser extension model: discover, install, configure)

## Self-Authoring Skills

Agents that write their own skills — when encountering repeated patterns, extract into new skill file. Claude Code supports this via skill-creator skill. Quality varies but direction closes the loop.

## Unsolved Problems

- **Skill deactivation**: naive implementations discard after use, reload minutes later. Smarter ones cache recently used / keep frequently activated skills warm.
- **Scale governance**: 50+ skills with non-overlapping descriptions requires governance. Overlapping descriptions cause misactivation at 100+.
- **Description quality**: determines routing accuracy — bad descriptions = wrong skill selected = compounding downstream errors.

The swirlai newsletter domain no longer resolves; this points at the archived copy.
