---
title: Skill Graphs > SKILL.md
source: https://x.com/arscontexta/status/2023957499183829467?s=46
saved: 2026-03-13
type: tweet
tags:
  - agents
  - skills
  - onboarding
  - context-engineering
  - x
intaked_by: glitch418x
---

Heinrich argues that single `SKILL.md` files are fine for narrow tasks, but deeper domains need **skill graphs**: many small markdown nodes connected by wikilinks, with YAML descriptions for scan-first traversal.

## Core idea

A skill graph is a network of composable skill files where:
- each file captures one coherent idea, technique, or method
- YAML frontmatter lets the agent scan descriptions before reading whole files
- wikilinks carry semantic meaning inside prose
- MOCs (maps of content) organize larger clusters
- the agent uses progressive disclosure: index → descriptions → links → sections → full content

## Why it matters

The claim is that structured knowledge enables applications that single-file skills cannot support well, especially in rich domains like:
- therapy
- trading
- legal work
- company knowledge / onboarding / culture

Instead of stuffing everything into one prompt file, the agent traverses only the parts relevant to the current task.

## Notable takeaways

- Skill graphs are basically recursive skill discovery inside the graph itself.
- The index file is not just a directory; it is an attention-routing entry point.
- Wikilinks embedded in prose help an agent decide *when* and *why* to follow a path.
- This pushes skills from static instruction blobs toward navigable domain understanding.

## Example framing from the post

The post proposes a `knowledge-work` index that routes into topic MOCs like:
- graph structure
- agent cognition
- discovery / retrieval
- processing workflows

This mirrors how a serious domain could be represented for agent traversal rather than flat prompt loading.

## Why worth keeping

Useful framing for future OpenClaw skill design: treat skills less like isolated command recipes and more like a modular knowledge graph with progressive disclosure and semantic navigation.
