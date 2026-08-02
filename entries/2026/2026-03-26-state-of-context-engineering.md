---
title: State of Context Engineering in 2026
source: https://newsletter.swirlai.com/p/state-of-context-engineering-in-2026
saved: 2026-03-26
type: article
tags:
  - context-engineering
  - agents
  - rag
  - progressive-disclosure
  - mcp
  - compression
---

# State of Context Engineering in 2026

By Aurimas Griciunas (SwirlAI). Comprehensive overview of where context engineering stands, building on Manus (July 2025) and Anthropic (Sep 2025) foundations.

## Core Insight

LLMs have a finite attention budget. Every token competes for attention. As context grows, precision drops. Context engineering = finding the smallest high-signal token set that maximises desired outcomes.

## Five Patterns

### 1. Progressive Disclosure (Agent Skills)

Load information in tiers: discovery (names + descriptions, ~80 tokens/skill) → activation (full instructions, 275–8K tokens) → execution (scripts, references).

- AgentSkills format released by Anthropic Dec 2025, adopted by OpenAI, Google, GitHub, Cursor within weeks
- **Agent identity management**: single agent assumes different identities via skills, not separate sub-agents. Claude Code already does this.
- **Self-authoring skills**: agents that extract repeated patterns into new skill files. Claude Code supports this via skill-creator skill.
- **Unsolved**: when does an activated skill get deactivated? Without pruning, multiple active skills destroy the token advantage.
- Degrades at 100+ skills due to overlapping descriptions causing misactivation.

### 2. Context Compression

Sliding window + summarisation hybrids are the dominant approach: keep recent turns raw, compress older context via LLM summarisation.

**Manus practical details:**
- Keep most recent tool calls in raw format to maintain the model's "rhythm" and formatting style
- Don't compress away error traces — leaving stack traces helps avoid repeating mistakes
- Compress periodically, not every turn

### 3. Context Routing

Classify query → direct to right context source before anything enters the window.

- LLM-powered routing: accurate but adds latency
- Hierarchical routing: lead agent triages to specialised sub-agents
- Rule-based: fast but rigid
- Hybrid: most production systems combine approaches

### 4. Evolved RAG

Three evolutions:
- **Agentic RAG** — agent controls retrieval loop, reformulates queries, iterates until confident
- **Graph RAG** — entity-relationship graphs over corpus for relational/thematic questions across documents
- **Self-RAG** — model decides when to retrieve and critiques its own outputs

Most advanced systems combine all three. High accuracy but high latency (3-5 retrieval cycles per question).

### 5. Tool Management (MCP)

MCP is now governed by Agentic AI Foundation under Linux Foundation. Solves connection problem. Context cost problem remains unsolved.

**Key issues:**
- Single complex JSON schema = 500+ tokens. 90 tools = 50K+ tokens before any user interaction
- OpenAI recommends <20 tools per agent, accuracy degrades past 10
- Manus: don't dynamically add/remove tools mid-iteration — invalidates KV-cache
- Description quality: most MCP authors write for humans, not models
- Tool overlap across MCP servers: no deduplication logic
- No versioning for tool contracts — stale schemas cause silent failures
- Security surface scales with tool count

## Layered Architecture

These patterns layer, not compete:
- **Progressive disclosure + tool management** → define what CAN enter the window
- **Routing + compression** → manage what STAYS during execution
- **Retrieval** → bring external knowledge on demand

## Practical Starting Points

1. Long tasks → add compression first (sliding window + summarisation)
2. Multi-domain → add routing (even keyword rules cut bloat)
3. Multiple MCP servers → audit tool schema token cost (usually higher than expected)
