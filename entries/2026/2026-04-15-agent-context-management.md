---
title: Context Management for AI Agents
source: https://youtube.com/watch?v=sYxkPwct0Ek
saved: 2026-04-15
type: video
tags:
  - ai
  - agents
  - context-management
  - memory
  - engineering
  - tooling
intaked_by: glitch418x
---

# Context Management for AI Agents

**Speaker:** Jaymin West ([@jayminwest](https://github.com/jayminwest))
**Tool:** [mulch](https://github.com/jayminwest/mulch) — structured expertise management CLI
**Ecosystem:** [os-eco](https://github.com/jayminwest/os-eco) (mulch, seeds, canopy, overstory)

---

## The Problem

Context management ≠ single-session context window. It's about **where agents read/write knowledge, how learnings are distilled and reused across runs.** Without a system, every agent session starts from zero — yesterday's discoveries are forgotten today.

## Anti-patterns

### ❌ Directory of Markdown Files
The #1 red flag. A `docs/` or similar directory filled with one-off markdown files. Looks productive (Claude writes pretty markdown), but:
- Hard to update as project grows
- Hard to come back to after written
- High cognitive overhead for models (too much creative freedom → inconsistent formats)
- Grepping through 50+ .md files hoping to find the right thing is unreliable

This doesn't mean "avoid markdown" — CLAUDE.md/AGENTS.md still serve their purpose. The anti-pattern is using a *directory full of freeform .md files* as a knowledge base.

### ❌ Claude Code's Built-in Memory
"A problem shipped as a feature." Issues:
- Unstructured (freeform markdown the model decides how to write)
- Not shared across team members
- Constantly truncated (~200 lines)
- You have zero control over format or content
- Fine to leave enabled, but don't rely on it for context management

### ❌ Buzzword-heavy RAG/Embeddings/Knowledge Graphs
Easy to get carried away building "the perfect system." For most teams, a simple queryable database beats elaborate vector/embedding pipelines.

## Core Concepts

### 1. Harness Independence
Context store should work regardless of agent tool — Claude Code, Copilot, Codex, etc. Any agent with bash access should be able to read/write the same store.

### 2. Version Control + Team Collaboration
At enterprise scale (dozens-hundreds of devs), all devs + all agents must access the same shared context. A dev's high-quality agent learnings on one side of the codebase should be available to another dev's agents touching that area.

### 3. Agent Rituals
Every agent session needs three phases:
- **Start (prime):** Read context store before beginning work
- **Middle (retrieve):** Access knowledge as needed during work
- **End (write-back):** Store learnings, failures, decisions back into the shared system

These must be baked into AGENTS.md/CLAUDE.md — not left to agent discretion.

### 4. Structured > Unstructured Data
**"You don't want the agent to be deciding how to store knowledge."** Structured stores (JSON/YAML/schema) force predictable formats, make querying and pruning reliable. Unstructured stores let models invent messy formats that compound over time.

### 5. Knowledge Decay
- How is outdated context discarded? Archived? Deleted?
- What happens when a code section is rewritten — is the old knowledge pruned?
- Releases should trigger pruning workflows
- Without decay, the store becomes a graveyard

### 6. Retrieval Quality
- How do agents access stored context?
- How do you ensure results are high-quality, not slop/junk?
- Predictable query interface > fuzzy grep through markdown

## The 2×2 Framework

| | **Structured** | **Unstructured** |
|---|---|---|
| **Local** | ✅ mulch (JSONL, git-tracked) | ❌ directory of .md files |
| **Shared** | ✅ hosted DB + schema + retrieval | ⚠️ committed .md directory (shared but messy) |

- **Local + Structured** → solo dev sweet spot (mulch, YAML/JSON domain files)
- **Shared + Structured** → enterprise (simple DB, retrieval layer, decay strategy)
- **Local + Unstructured** → avoid at all costs
- **Shared + Unstructured** → technically shared but still problematic

## Solo Dev vs Enterprise

### Solo Dev
Use mulch or build something similar:
- Structured data storage (JSONL per domain)
- Agent rituals baked in (onboard → prime → record)
- Auto-decay / pruning
- Git-tracked (clone repo = instant expertise)
- Local-first, no cloud dependency

### Enterprise
Build your own — no out-of-the-box solution exists yet, because every codebase has unique culture/nuance:
- Shared database instance with sane schema
- Simple retrieval layer (doesn't even need text search initially)
- Decay strategy (prune on releases)
- Agent rituals in AGENTS.md
- Keep it simple — don't over-engineer with embeddings/RAG

---

## Mulch — The Tool

**Repo:** https://github.com/jayminwest/mulch
**Install:** `bun install -g @os-eco/mulch-cli`
**Binary:** `ml`

### Architecture
- Storage: JSONL records in `.mulch/expertise/<domain>.jsonl` — one file per domain, one record per line
- Append-only → zero merge conflicts, trivial schema validation
- Git-native → `.mulch/` tracked in version control, `merge=union` in `.gitattributes`
- Zero LLM dependency — quality equals agent quality
- Provider-agnostic — any agent with bash access

### Record Types (6)
| Type | Required Fields | Use Case |
|---|---|---|
| convention | content | "Use WAL mode for SQLite" |
| pattern | name, description | Named patterns with file refs |
| failure | description, resolution | What went wrong + how to avoid |
| decision | title, rationale | Architectural decisions + why |
| reference | name, description | Key files/endpoints to remember |
| guide | name, description | Step-by-step procedures |

### Classification Tiers (3)
- **foundational** — long-lived, rarely pruned
- **tactical** — medium shelf life
- **observational** — short-lived, first to prune

### Key Commands
- `ml init` — create `.mulch/` in project
- `ml add <domain>` — add expertise domain
- `ml record <domain> --type <type>` — write a record
- `ml query [domain]` — read accumulated expertise
- `ml prime [domains...]` — output AI-optimized context for injection
- `ml search [query]` — BM25 search across domains
- `ml compact [domain]` — merge/group related records
- `ml prune` — remove stale tactical/observational entries
- `ml onboard` — generate AGENTS.md/CLAUDE.md snippet
- `ml diff [ref]` — show expertise changes between git refs
- `ml outcome <domain> <id>` — track if a record's advice worked

### Concurrency Safety
- Advisory file locking (O_CREAT|O_EXCL) with 50ms retries up to 5s
- Stale locks auto-cleaned after 30s
- Atomic writes (temp file → rename)
- `merge=union` for branch merges

### Workflow
1. `ml init` → creates `.mulch/`
2. Agent reads expertise → `ml prime` (grounded in project learnings)
3. Agent does work → normal task execution
4. Agent records insights → `ml record` before finishing
5. `git push` → teammates' agents get smarter too

---

## os-eco Ecosystem

Mulch is one tool in a larger ecosystem ([os-eco](https://github.com/jayminwest/os-eco)):
- **Seeds** (`@os-eco/seeds-cli`) — issue tracking
- **Mulch** (`@os-eco/mulch-cli`) — expertise management
- **Canopy** — (TBD, likely retrieval/search layer)
- **Overstory** ([repo](https://github.com/jayminwest/overstory)) — multi-agent orchestration (Claude Code, Pi, etc.)

Workflow: `ml prime` → `sd ready` → do work → `ml record` → `sd close`

---

## Prior Art Mentioned
- CodaDB project: used YAML expert files per domain (`claude/agents/experts/<domain>/expertise.yaml`) — more structured than markdown, easier to prune/lint

## Relevance to Our Setup
Our current approach (MEMORY.md + daily notes + docs/reference/ + structured intake) already follows most of these principles:
- ✅ Structured layout with clear purposes per file
- ✅ Agent rituals (read MEMORY.md, SOUL.md, USER.md at start; write-back rule at end)
- ✅ Harness-independent (OpenClaw works with any model)
- ✅ Git-tracked workspace
- ⚠️ Semi-structured — our "store" is markdown, not JSONL/YAML with enforced schemas
- ⚠️ No explicit decay/pruning — no time-based or release-triggered cleanup
- ⚠️ Daily notes can accumulate without pruning
- ⚠️ No dedup/cross-referencing between records
- ❌ No confirmation scoring or outcome tracking (did this advice actually work?)

### Gaps Worth Considering
1. **Explicit decay rules** — prune daily notes older than N days, archive stale references
2. **Classification tiers** — foundational vs tactical vs observational shelf life
3. **Outcome tracking** — did a convention/decision actually hold up?
4. **Structured record format** — YAML frontmatter in intake files is a start, but no enforced schema per record type
