---
title: What spec-driven development gets wrong
source: https://x.com/augmentcode/status/2025993446633492725
saved: 2026-02-23
type: tweet
tags:
  - ai-engineering
  - claude-code
  - context-management
  - workflows
  - research-first
  - planning
  - annotation-loop
  - specs
  - living-specs
  - documentation
  - agentic-coding
intaked_by: glitch418x
---

## What spec-driven development gets wrong
- **Author:** Augment Code (X post)
- **URL:** https://x.com/augmentcode/status/2025993446633492725?s=46
- **Shared by:** Altay
- Type: tweet
- Tags: specs, living-specs, documentation, agentic-coding, write-back

Thesis: specs fail for the same reason docs fail, humans don’t reliably maintain them. 
The proposed fix is a living spec where humans and agents both read/write the same artifact, with human approval gates at key decision points.

What stood out:
- “spec as shared control surface” is stronger than “spec as pre-work document”
- stale specs are more dangerous than stale docs because agents execute them confidently
- the right granularity is decision-level updates, not line-by-line narration

**My take:** This maps directly to our docs-keeper pattern. We should keep enforcing a strict write-back contract: assumptions changed, constraints discovered, decisions made, and next action — updated during execution, not after the fact.
