---
title: LLM Wiki - Idea File by Andrej Karpathy
source: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
saved: 2026-04-05
type: research
tags:
  - ai
  - llm
  - knowledge-base
  - wiki
  - memory
  - personal-wiki
  - idea-file
  - karpathy
---

Karpathy's copy-paste idea file for a personal LLM wiki: compile sources into a persistent, interlinked markdown knowledge base instead of rediscovering fragments with RAG on every question.

## Key takeaways

- **RAG gap**: Upload-and-retrieve systems rediscover knowledge from scratch each time; nothing accumulates, and multi-document synthesis is rebuilt on every ask.
- **Persistent wiki**: On ingest the LLM extracts, updates entity pages, flags contradictions, and revises the synthesis so knowledge is compiled once and kept current.
- **Three layers**: Immutable raw sources, an LLM-owned wiki of markdown pages, and a schema file such as `CLAUDE.md` or `AGENTS.md` that makes the model a disciplined maintainer.
- **Core workflows**: Ingest discusses and files a source across many pages; query answers with citations and can file the answer back; lint hunts contradictions, orphans, and gaps.
- **Navigation files**: `index.md` is a categorical catalog the model reads first; `log.md` is an append-only timeline with grep-friendly prefixes.
- **Human job**: People curate sources, direct analysis, and ask questions; the LLM does the bookkeeping humans abandon as wikis grow.
- **Memex lineage**: The pattern is closer to Vannevar Bush's private associative store than to the public web; the LLM is the missing maintainer.
- **Instantiate it**: The file is intentionally abstract; paste it into an agent and co-evolve directory layout, schema, and tools for your domain.
