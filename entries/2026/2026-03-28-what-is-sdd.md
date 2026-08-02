---
title: What Is SDD?
source: https://github.com/dbreunig/whenwords
saved: 2026-03-28
type: research
tags:
  - spec-driven-development
  - sdd
  - ai-agents
  - coding-agents
  - specifications
  - testing
  - vibe-coding
---

## What Is SDD?

Spec-Driven Development is an emerging discipline where **specifications become the primary artifact** rather than code. The core idea: if you bring detailed specs (defining *what*, *why*, and sometimes *how*) plus conformance tests (measuring and validating behavior), coding agents can produce the implementation. The spec is not a throwaway design doc — it's a living, executable artifact that drives the entire development lifecycle.

**Drew Breunig** (creator of [whenwords](https://github.com/dbreunig/whenwords)) coined/popularized the term in early 2026. His experiment: ship a software library as *just* a Markdown spec + ~750 YAML conformance tests + an `install.md` prompt for agents. No code. Users paste the instructions into their coding agent of choice, specify a language, and get a working implementation.
