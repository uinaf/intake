---
title: Farzapedia - Personal Wikipedia via LLM
source: https://x.com/karpathy/status/2040572272944324650
saved: 2026-04-05
type: tweet
tags:
  - ai
  - memory
  - personal-wiki
  - file-over-app
  - byoai
  - llm
intaked_by: glitch418x
---

# Farzapedia

**Farza's personal Wikipedia** — an LLM-generated knowledge base from 2,500 diary entries, Apple Notes, and iMessage conversations.

## Why This Approach Works (per Karpathy)

1. **Explicit** — The memory artifact is navigable (the wiki). You can see exactly what the AI knows/doesn't know. Inspectable and manageable.

2. **Yours** — Data lives on your local machine. Not trapped in an AI provider's system. You're in control.

3. **File over app** — Simple collection of files in universal formats (markdown, images). Interoperable with any tool/CLI. Agents can apply the Unix toolkit. Use Obsidian or vibe-code your own viewer.

4. **BYOAI** — Use whatever AI you want (Claude, Codex, OpenCode, etc.). Can even fine-tune an open-source model on your wiki so it "knows" you in its weights, not just via attention over data.

## The Pitch

This puts **you in full control**:
- Data is yours
- Universal formats
- Explicit and inspectable  
- Swap AIs freely, keep providers on their toes

Not the simplest setup — requires managing file directories — but agents make it easier. "Agent proficiency is a CORE SKILL of the 21st century."

## Altay's Context

Already has the infrastructure:
- `memory/` with daily logs
- `entries/` for curated content
- `memory/notes/` for research/docs
- OpenClaw workspace as the interface

**Open question:** Manual curation vs auto-generating from data dumps (Notes, iMessage, etc.)
