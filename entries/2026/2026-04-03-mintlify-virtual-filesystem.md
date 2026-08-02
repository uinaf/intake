---
title: Building a Virtual Filesystem for Mintlify's AI Assistant (ChromaFs)
source: https://x.com/densumesh/status/2039765361533637016
saved: 2026-04-03
type: tweet
tags:
  - agents
  - filesystem
  - rag
  - virtual-fs
  - harness
  - context-management
  - chroma
---

# ChromaFs: Virtual Filesystem over Chroma for Agent Navigation

By Dens Sumesh (@densumesh), Mintlify. Full article: https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant

## Problem

RAG retrieves chunks but can't answer questions spanning multiple pages or find exact syntax. Real sandboxes (micro-VMs) work but are slow (~46s p90 session creation) and expensive (~$70K/yr at 850K conversations/month).

## Solution: ChromaFs

Virtual filesystem that intercepts UNIX commands (grep, cat, ls, find, cd) and translates them into queries against existing Chroma database. Built on Vercel Labs' `just-bash` (TypeScript bash reimplementation with pluggable `IFileSystem` interface).

- Session creation: ~46s → ~100ms
- Marginal compute cost: zero (reuses existing Chroma infra)
- Read-only (EROFS on any write) — stateless, no cleanup

## Key Implementation Details

**Directory tree bootstrap:** Entire file tree stored as gzipped JSON in Chroma (`__path_tree__`). Loaded into in-memory `Set<string>` (files) + `Map<string, string[]>` (dirs). `ls`/`cd`/`find` resolve locally with no network calls.

**Page reassembly:** Docs are chunked for embedding. `cat` fetches all chunks with matching page slug, sorts by `chunk_index`, joins. Results cached.

**Grep optimization:** Intercepts grep, parses flags, translates to Chroma query (`$contains` for fixed strings, `$regex` for patterns) as coarse filter → bulk prefetch matching chunks to Redis → narrow grep to only matched files → hand to just-bash for fine-grained in-memory execution.

**Access control:** Path tree has `isPublic`/`groups` fields. Tree pruned per-user before building — simpler than managing Linux permissions per container.

**Lazy file pointers:** Large OpenAPI specs in S3 registered as lazy pointers, fetched only on `cat`.

## Scale

30K+ conversations/day across hundreds of thousands of users.

## Interesting Thread Discussion

- "How is this not RAG?" — Author: RAG retrieves *before* generation. Here the agent decides what to read *during* generation via tool calls.
- "Why not just give the agent Chroma query tools directly?" — Multiple people asked; author didn't address directly. The fs abstraction gives agents a universal interface (bash) they already know.
- `fsspec` in Python has similar abstractions with native S3/Azure/GCP filesystem implementations.

## Takeaways

- Filesystem as universal agent interface is a real pattern (cites arxiv.org/abs/2601.11672)
- Virtual fs over existing search infra is a clever middle ground between raw RAG and expensive sandboxes
- The grep optimization (coarse Chroma filter → fine in-memory filter) is reusable
- Connects to Sarah Wooders' thread: the *harness* decided to expose a filesystem interface — that's a harness-level memory decision
