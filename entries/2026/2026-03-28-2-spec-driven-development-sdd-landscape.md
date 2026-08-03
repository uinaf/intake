---
title: 2. Spec-Driven Development (SDD) Landscape
source: https://medium.com/@visrow/spec-driven-development-is-eating-software-engineering-a-map-of-30-agentic-coding-frameworks-6ac0b5e2b484
saved: 2026-03-28
type: article
tags:
  - ai-agents
  - sdlc
  - spec-driven-development
  - coding-agents
  - automation
  - devops
  - linear
---

A map of 30+ agentic coding frameworks, sorted into four layers rather than
treated as competitors.

## Key Takeaways

- The four layers are spec frameworks (Spec Kit, OpenSpec — producing SPEC.md,
  ARCHITECTURE.md, TASKS.md), planning and task systems (Taskmaster, Agent OS)
  that compile specs into task graphs, execution agents (GSD, Devika, OpenDevin)
  that write and commit code, and AI IDEs (Cursor, Windsurf) that fold planning
  and execution into the editor.
- The claimed shift is from `prompt → code` to `spec → plan → tasks → code`, on
  the argument that agents do markedly better on structured tasks than on
  open-ended prompts.
- The strong version of the thesis: specs become the primary human interface and
  implementations become generated artifacts, the way SQL or Terraform already
  work.
- Worth pairing with [ThoughtWorks' more cautious treatment](https://thoughtworks.medium.com/spec-driven-development-d85995a81387)
  (December 2025), which flags what this map glosses over — no standard for spec
  quality, non-reproducible generation across upgrades, spec drift and
  hallucination needing CI to contain, and no settled answer on whether the spec
  or the code is the authoritative artifact.
