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
intaked_by: glitch418x
---

Anthony Fu (antfu) on the function coloring problem in JS/TS and a new approach called **quansync**.

## Key Takeaways

- The async/sync coloring problem goes both ways: async forces callers to be async, but sync also forces all dependencies to be sync.
- Libraries like `find-up` duplicate entire logic trees to offer both `findUp` and `findUpSync` — maintenance burden, inconsistencies, larger bundles.
- Plugin systems with async hooks force the entire pipeline async even when all plugins are sync.
- **quansync** (by antfu + sxzz, inspired by gensync) introduces a "purple" function type — a superposition that collapses to sync or async at call site.
- Uses JS generators (`function*` / `yield*`) under the hood — caller controls execution, pausing at yield points for async or running straight through for sync.
- Build-time macro (`unplugin-quansync`) lets you write normal `async/await` that transforms to generator syntax at build time.
- Not a full solution: quansync functions still need their dependencies to be quansync/generator. But it breaks the cascade — colorless logic no longer forced into one color by a single async leaf.
- Performance note: `yield` adds ~120ns overhead on M1 Max. Fine for most library code, not for hot loops.
