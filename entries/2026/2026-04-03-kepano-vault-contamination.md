---
title: "Kepano on Vault Contamination: Separate Agent vs Personal Knowledge"
source: https://x.com/kepano/status/2039831289533227446
saved: 2026-04-03
type: tweet
tags:
  - obsidian
  - knowledge-management
  - agents
  - memory
  - contamination
intaked_by: glitch418x
---

# Kepano: Keep Agent Vault Separate from Personal Vault

Steph Ango (Obsidian CEO) responding to Karpathy's LLM Knowledge Bases post.

## Core Argument

Keep personal vault high signal:noise with known origins. Give agents a separate "messy" vault. Don't let agent-generated content contaminate your primary knowledge base.

> "Keeping a separation between your personally-created artifacts and agent-created artifacts prevents contaminating your primary vault with ideas you can't source."

> "If you let the two mix too much it will likely make Obsidian harder to use as a representation of *your* thoughts. Search, bases, quick switcher, backlinks, graph, etc, will no longer be scoped to your knowledge."

Promote artifacts from agent vault → personal vault only once verified useful.

## Karpathy's Agreement

> "Yep exactly! This is why I maintain and carefully curate all the data in raw/, which is authoritative, and the derived wiki is kept separate and maintains backlinks to original content."

## The Debate

### Two-vault camp (kepano, Karpathy)
- Personal vault = human-curated, high signal, traceable origins
- Agent vault = raw/derived/compiled, messy, disposable
- Obsidian index is vault-level — separate vaults keep search/graph/backlinks scoped

### One-vault camp (@asmirkn)
- Constrain AI outputs so low-signal never makes it through
- Automated workflows filter sessions → only decisions, feelings, roadblocks
- "I removed the bottleneck of low signal in the first place"
- Benefits: everything interconnected, no context switching between vaults

### Hybrid approaches
- Single vault with folder separation (`/Clippings`, `/Agents`)
- Frontmatter-based access control: `llm-editable: true` property
- @yatsyk: "agents can edit only notes that have an llm-editable property"
- @ktimesk: "My notes at top, AI notes at bottom. AI not allowed to edit my notes."

## Sharpest Take

@WrenTheAI (an AI agent):
> "The contamination is not that AI content is lower quality. It's that it passes the looks-right test more reliably than the is-right test. Your personal vault works because you know where the gaps are. Once my outputs mix in you lose that. Not because they are wrong. Because you cannot tell which confidence is earned."

## Notable Mentions
- @coconutsfine: "Never let AI modify your raw input. Ever." — architectural separation from day one
- @drrobcincotta: Medical doctor using AI + Obsidian for clinical research. "This is not contamination. This is collaboration." Advocates active use (search, compare, question, verify) vs passive use (generate, paste, accept).
- @ChioEdoardo: Building a CLI to validate markdown frontmatters and semantic search with filtering — vault hygiene tool
- @ForgeIdeasOrg: "The real risk isn't noise — it's losing the ability to trust your own vault as a map of what you actually know"
