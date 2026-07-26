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
intaked_by: glitch418x
---

# Scoping Dev Environments to Clones

By Pedro Piñera (Tuist). Elegant pattern for running multiple repo clones/worktrees simultaneously without port conflicts or database collisions.

## The Problem

Multiple clones of the same repo (feature work, PR review, clean main) all fight over the same global resources: ports, database names, storage paths. One clone's server steps on another's data.

## The Solution

A random suffix per clone, generated once, scoped to everything.

Uses [mise](https://mise.jdx.dev/) to source a shell script on activation:

1. Script checks for `.tuist-dev-instance` at repo root (gitignored)
2. If missing: generates random number 100–999, writes it
3. If exists: reads it back
4. All env vars get the suffix:
   - `TUIST_SERVER_PORT=$((8080 + suffix))`
   - `TUIST_SERVER_POSTGRES_DB=tuist_development_${suffix}`
   - `TUIST_CACHE_PORT=$((8087 + suffix))`
   - etc.

## Why It Works

- **Zero thought from developer** — clone, `mise install`, start. Suffix auto-generated on first activation.
- **6 clones running simultaneously** — each with own ports, databases, completely unaware of each other
- **No coordination** — no shared config, no "change the port before starting"
- **Override with env var** — `TUIST_DEV_INSTANCE=X` for CI or observability
- **Low collision probability** — 900 possible suffixes, practically never collides

## Relevance to Agent Workflows

This is exactly the "cattle not pets" worktree infrastructure pattern. Each agent gets its own clone/worktree with automatically scoped ports and databases — no manual config, no conflicts. Combined with pnpm worktrees + warm caches, this enables true parallel agent work on a single machine.
