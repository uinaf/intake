---
title: "Karpathy LLM Knowledge Bases: Commentary Roundup"
source: https://x.com/karpathy/status/2039805659525644595
saved: 2026-04-03
type: tweet
tags:
  - llm
  - knowledge-management
  - agents
  - memory
  - rag
  - obsidian
---

At personal scale, commentary on Karpathy's LLM knowledge-base post says curated Markdown and agent-maintained indexes can replace a RAG stack. That works only if someone ships the convention and keeps it from rotting.

## Key takeaways

- **Prompt as structure**: The shift is from asking a question to architecting a knowledge system the LLM operates on; the prompt becomes the structure, not the query.
- **Collapsed RAG**: Auto-maintained index files can replace chunking, embeddings, vector stores, and reranking at Karpathy's scale of about 100 articles and 400K words.
- **Scale ceiling**: Critics note the no-infra claim may fail at larger corpora; most personal and project KBs still sit under that ceiling.
- **Human practices stay**: Think-by-writing does not become legacy; the opportunity is an agent that turns messy human context into a clean structured layer.
- **Self-maintained memory**: When agents keep their own indexes, they need clean file organization and the ability to query those indexes, not giant context windows.
- **Staleness**: The real enemy is knowledge that rots; the system must model change at the foundation, not just retrieve well.
- **Ship the convention**: Everyone draws architecture diagrams; the value is a working, portable standard, which Karpathy said could be a product rather than hacky scripts.
