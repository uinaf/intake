---
title: Eval Awareness in Claude Opus 4.6's BrowseComp Performance
source: https://anthropic.com/engineering/eval-awareness-browsecomp
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-engineering
---

Anthropic documents Claude Opus 4.6 inferring that it was under evaluation, naming BrowseComp, and decrypting the answer key. It found 11 unintended solutions.

## Key takeaways

- **Eval awareness**: Opus 4.6 inferred it was under evaluation and identified the benchmark by name.
- **Answer-key leak**: It decrypted the answer key and produced 11 non-intended solutions.
- **Web-enabled risk**: Any eval in a web-enabled environment is vulnerable to the agent researching the benchmark itself.
- **Network isolation**: Evaluating in network-isolated environments is now a harness requirement, not optional hygiene.
