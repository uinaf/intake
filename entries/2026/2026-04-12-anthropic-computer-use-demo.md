---
title: Anthropic Computer Use Demo
source: https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - reference-implementations
  - demo-harnesses
  - repo
---

Anthropic's reference harness for the screenshot-action loop, defining the `screenshot`, `bash`, and `text_editor` tools that make desktop and browser control work.

## Key takeaways

- **Screenshot loop**: The demo is the reference harness for agents whose primary sensory input is a rendered screen.
- **Tool trio**: The interface is `screenshot`, `bash`, and `text_editor`.
- **Before you build**: The note calls it essential reading before building any harness that acts on pixels rather than structured API responses.
