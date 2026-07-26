---
title: "Building Observable AI Agents: Temporal Now Integrates with Braintrust"
source: https://temporal.io/blog/building-observable-ai-agents-temporal-now-integrates-with-braintrust
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - observability-and-tracing
  - article
intaked_by: glitch418x
---

## Why it matters
Combines Temporal's durable execution (automatic retries, state persistence, event history replay) with Braintrust's LLM tracing so every Workflow and Activity becomes a Braintrust span and every LLM call is traced with full context. Demonstrates the pattern with a deep research agent where failed synthesis steps retry without re-executing prior searches, and prompt updates propagate via `braintrust.load_prompt()` without code deployment. The most practical published integration of workflow durability and LLM observability for production agent debugging.

## Classification
- Section: Design Primitives
- Subsection: Observability & Tracing
- Type: article
