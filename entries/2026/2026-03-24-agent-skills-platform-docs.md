---
title: Agent Skills Platform Docs — Claude, Codex, Cursor
source: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
saved: 2026-03-24
type: article
tags:
  - agent-skills
  - harness
  - coding-agents
  - skill-authoring
  - reference
intaked_by: glitch418x
---

# Agent Skills — Platform Docs Comparison

## Claude (Anthropic) — Skill Authoring Best Practices

### Core Principles
- **Concise is key** — context window is shared public good. Only add what Claude doesn't already know
- **Progressive disclosure** — metadata (name, description) pre-loaded; SKILL.md loaded on trigger; reference files loaded on demand
- **SKILL.md body under 500 lines** for optimal performance
- **References max one level deep** from SKILL.md (no chains of references)

### Degrees of Freedom
- **High freedom** (text instructions): multiple approaches valid, context-dependent
- **Medium freedom** (pseudocode/scripts with params): preferred pattern exists, some variation OK
- **Low freedom** (exact scripts): fragile operations, consistency critical

### Structure
- Frontmatter: `name` (≤64 chars, lowercase+hyphens), `description` (≤1024 chars)
- Description in **third person** ("Processes Excel files", not "I can help you")
- Naming: gerund form preferred (`processing-pdfs`, `testing-code`)
- Progressive patterns: high-level guide → domain-specific refs → conditional details
- Longer reference files: include table of contents at top

### Key Insight
> "Challenge each piece: Does Claude really need this? Can I assume Claude knows this? Does this paragraph justify its token cost?"

## Codex (OpenAI) — Agent Skills

### Structure
```
my-skill/
├── SKILL.md          # Required: instructions + metadata
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
├── assets/           # Optional: templates, resources
└── agents/
    └── openai.yaml   # Optional: UI metadata, policy, dependencies
```

### Invocation
- **Explicit**: `/skills` or `$` mention
- **Implicit**: Codex auto-selects based on description match
- `allow_implicit_invocation: false` in openai.yaml to disable auto-trigger

### Scan Locations (resolution order)
| Scope | Location |
|-------|----------|
| Repo (CWD) | `$CWD/.agents/skills` |
| Repo (parent) | `$CWD/../.agents/skills` |
| Repo (root) | `$REPO_ROOT/.agents/skills` |
| User | `$HOME/.agents/skills` |
| Admin | `/etc/codex/skills` |
| System | Bundled by OpenAI |

### Best Practices
- Keep each skill focused on one job
- Prefer instructions over scripts unless deterministic behavior needed
- Write imperative steps with explicit inputs and outputs
- Test prompts against description to confirm trigger behavior
- Symlinked skill folders supported

### openai.yaml
- UI metadata (display_name, icons, brand_color, default_prompt)
- Policy (allow_implicit_invocation)
- Dependencies (MCP servers, tools)

## Cursor — Agent Skills

### Skill Directories
| Location | Scope |
|----------|-------|
| `.agents/skills/` | Project-level |
| `.cursor/skills/` | Project-level |
| `~/.cursor/skills/` | User-level (global) |

Also loads from `.claude/skills/`, `.codex/skills/`, `~/.claude/skills/`, `~/.codex/skills/` for compatibility.

### Frontmatter Fields
| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Identifier, must match parent folder name |
| `description` | Yes | What/when, used for relevance matching |
| `license` | No | License reference |
| `compatibility` | No | Environment requirements |
| `metadata` | No | Arbitrary key-value |
| `disable-model-invocation` | No | When true, only via explicit `/skill-name` |

### Key Difference
- `disable-model-invocation: true` = slash command behavior (explicit only)
- Default = agent auto-applies when relevant

## Cross-Platform Convergence

All three platforms converge on the **AgentSkills standard** (agentskills.io):
- Directory: `.agents/skills/<name>/SKILL.md`
- Frontmatter: `name` + `description` (required)
- Optional: `scripts/`, `references/`, `assets/`
- Progressive disclosure: metadata → SKILL.md → references on demand
- Focus on one job per skill
- Description drives discovery/matching

### Authoring Takeaways for Harness Skill
1. Keep SKILL.md under 500 lines, body focused on workflow
2. Move detailed checklists and reference material to `references/`
3. Description must clearly state what + when (third person)
4. One level of reference depth max
5. High-freedom instructions for evaluation/gap analysis, low-freedom for specific setup scripts
6. Scripts in `scripts/` for deterministic setup tasks (playwright install, dev server checks)
