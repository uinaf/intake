---
title: Multi-Agent Wiki Brain (Karpathy pattern + OpenClaw + Hermes)
source: https://x.com/jumperz/status/2040166448492900356
saved: 2026-04-03
type: tweet
tags:
  - agents
  - knowledge-management
  - memory
  - multi-agent
  - openclaw
  - hermes
  - swarm
intaked_by: glitch418x
---

# Multi-Agent Wiki Brain — JUMPERZ

Extends Karpathy's wiki pattern to a 10-agent swarm using OpenClaw + Hermes.

## Architecture

1. **Agents produce:** Every agent auto-dumps output into `raw/` as it works
2. **Compiler runs periodically:** Organizes into structured wiki articles by domain (infrastructure, signals, content, technical patterns). Auto-maintains backlinks and index.
3. **Review gate (Hermes):** Sits between drafts and live. Scores every article before it enters permanent KB. Clean outputs promoted, bad ones die in drafts.
4. **Briefings:** Per-agent briefings generated from live wiki so each agent starts with exactly the context it needs instead of waking up blank.

## Key Design Decision: Separate Review Agent

Hermes is NOT part of the swarm — it's a supervisor with no context about how work was produced. No bias toward keeping outputs. Just asks: "Is this accurate? Should this enter the permanent brain?"

Why Hermes specifically: NousResearch trains it with structured outputs, function calling, and evaluation-style reasoning. Consistency matters more than raw intelligence for a review gate processing hundreds of articles.

## Division of Labor

- **OpenClaw:** Execution — running agents, routing tasks, managing channels, dispatching crons
- **Hermes:** Judgment — reviewing swarm output, deciding what persists
- **Wiki:** Shared brain connecting them

## The Loop

agents produce → compiler organizes → hermes validates → briefings feed back → repeat

## Takeaway

The hallucination-compounding problem is real and under-discussed. One bad connection enters the brain → every downstream agent builds on it. The review gate pattern (separate agent with no production context doing validation) is a solid mitigation. Applicable to OpenClaw's own memory write-back pipeline.
