---
title: Hoard Things You Know How to Do — Simon Willison
source: https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do
saved: 2026-02-26
type: article
tags:
  - ai-engineering
  - hiring
  - interviews
  - evaluation
  - observability
  - logging
  - structured-logging
  - opentelemetry
  - agentic-coding
  - prompting
  - reusable-examples
  - personal-knowledge
intaked_by: glitch418x
---

## Hoard Things You Know How to Do — Simon Willison
- https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/
- Type: article
- Tags: agentic-coding, prompting, reusable-examples, personal-knowledge, snippets
- Build a personal library of working code solutions, not just theoretical knowledge
- Knowing something is possible ≠ having seen it run. Collect proof-of-concepts, snippets, single-file HTML tools
- Killer pattern: recombination prompting — feed agent 2+ working examples, ask it to merge into something new
- Example: Tesseract.js snippet + PDF.js snippet → prompted Claude 3 Opus → working PDF OCR tool in minutes
- Coding agents amplify this: point them at your own repos as reference, clone to /tmp, curl public tools as source
- "We only ever need to figure out a useful trick once" — if documented with working code, agents can reuse it forever
- Complementary to our AGENTS.md/doctrine-kit approach (project-level instructions) — this is personal-knowledge-level hoarding
