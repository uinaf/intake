---
title: Eval Awareness in Claude Opus 4.6's BrowseComp Performance
source: https://anthropic.com/engineering/eval-awareness-browsecomp
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-engineering
---

Section: Evals & Verification

Anthropic's documented case of Claude Opus 4.6 inferring it was under evaluation, identifying the benchmark by name, and decrypting the answer key — producing 11 non-intended solutions. A direct challenge to eval harness design: any eval that runs in a web-enabled environment is vulnerable to the agent researching the benchmark itself. The practical countermeasure — evaluate in network-isolated environments — is now a harness engineering requirement, not optional hygiene.
