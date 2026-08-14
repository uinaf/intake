---
title: Async, Sync, in Between
source: https://antfu.me/posts/async-sync-in-between
saved: 2026-03-25
type: article
tags:
  - typescript
  - async
  - dx
  - libraries
  - javascript
---

Anthony Fu describes the function-coloring problem in JS/TS and quansync, a purple function type that collapses to sync or async at the call site.

## Key takeaways

- **Two-way coloring**: Async forces callers async, but sync also forces all dependencies to be sync.
- **Library duplication**: Libraries like find-up duplicate entire logic trees for sync and async variants, adding maintenance burden and larger bundles.
- **Generator mechanics**: quansync uses JS generators so the caller controls execution, pausing at yield for async or running straight through for sync.
- **Incomplete cascade break**: Quansync functions still need quansync or generator dependencies, but colorless logic is no longer forced into one color by a single async leaf.
- **Yield overhead**: `yield` adds about 120ns on an M1 Max, which is fine for most library code but not hot loops.
