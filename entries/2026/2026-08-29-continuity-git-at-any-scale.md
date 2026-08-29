---
title: "Continuity: Git at Any Scale"
source: https://cursor.com/blog/git-at-any-scale
saved: 2026-08-29
type: article
tags:
  - infrastructure
  - architecture
  - devops
  - cursor
---

Cursor's Continuity keeps ordinary Git repositories as fast local caches while making an S3-backed write-ahead log the durable source of truth. The design targets both huge monorepos and millions of mostly idle agent-created repositories without weakening read consistency.

## Key takeaways

- **Packfile constraint**: Git's graph requires dependent object reads, while its protocol still exchanges packfiles, so naive key-value stores and network filesystems turn routine operations into costly remote walks.
- **Spokes tradeoff**: GitHub's replication model keeps complete repositories on local NVMe and makes reads fast, but three-phase coordination grows slower and harder to operate as replicas increase.
- **WAL as truth**: Continuity persists each push to an object-storage write-ahead log before acknowledging it, linearizes publication through an indexed reference transaction, and treats local repositories as rebuildable caches.
- **Consistency without replica voting**: Atomic compare-and-swap on the WAL index makes any node safe to receive a push, while replicas verify their ETag against object storage before serving a read.
- **Elastic placement**: Rendezvous hashing keeps hot repositories near preferred nodes, but an idle repository can have no live replica because any node can materialize it from the durable log.
- **Shared compaction**: The primary compacts Git packfiles once and records the result in the WAL, letting replicas download compacted packs instead of repeating CPU-heavy repacks.
- **Reported scale**: Cursor reports linear read scaling through 100 replicas, about 120 pushes per second on S3 Standard, and more than 300 on S3 Express One Zone; these are Cursor's synthetic results, not independent benchmarks.
- **Companion explanation**: [ThePrimeagen's video walkthrough](https://www.youtube.com/watch?v=AFQW-b2WaRU) turns the article's Git DAG, tail-latency, WAL, and rendezvous-hashing mechanics into a concise visual explanation.
