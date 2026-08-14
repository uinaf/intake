---
title: Scoping dev environments to clones
source: https://pepicrft.me/blog/scoping-dev-environments-to-clones
saved: 2026-03-26
type: article
tags:
  - infrastructure
  - monorepo
  - worktrees
  - mise
  - tuist
---

Pedro Piñera's pattern for running multiple repo clones or worktrees at once without port or database collisions, using a random suffix generated once per clone.

## Key takeaways

- **Per-clone suffix**: A gitignored instance file stores a random number from 100 to 999 that is applied to ports, database names, and cache paths.
- **Zero coordination**: Clone, install, and start. The suffix is generated on first activation, so six clones can run unaware of each other.
- **Override hook**: An environment variable can set the instance id for CI or observability.
- **Agent parallelism**: Automatically scoped ports and databases let each agent worktree run without manual config or conflicts.
