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

Mintlify's ChromaFs gives an assistant a bash filesystem over an existing Chroma index, cutting sandbox spin-up from about 46 seconds to 100ms without standing up micro-VMs.

## Key takeaways

- **RAG limits**: Chunk retrieval cannot answer questions that span pages or require exact syntax; real sandboxes work but were ~46s p90 and costly at their conversation volume.
- **Virtual filesystem**: UNIX commands such as grep, cat, ls, find, and cd are intercepted and translated into Chroma queries via Vercel Labs' `just-bash` and a pluggable `IFileSystem`.
- **Read-only sessions**: Session create dropped to ~100ms with zero marginal compute; writes return EROFS, so sessions stay stateless.
- **Local tree**: The file tree is a gzipped JSON blob loaded into in-memory `Set<string>` and `Map<string, string[]>` so ls, cd, and find need no network.
- **Grep path**: Coarse Chroma `$contains` or `$regex` filters, prefetch to Redis, then fine in-memory grep inside just-bash.
- **Access and lazy files**: The path tree is pruned per user with `isPublic` and groups; large OpenAPI specs stay S3 pointers until `cat`.
- **During generation**: The author distinguishes this from RAG because the agent chooses what to read during generation through familiar bash tools.
