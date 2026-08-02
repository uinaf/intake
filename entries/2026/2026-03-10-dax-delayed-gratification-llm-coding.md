---
title: Dax (thdxr) on LLMs eroding delayed gratification in engineering
source: https://x.com/thdxr/status/2031377117007454421
saved: 2026-03-10
type: tweet
tags:
  - agents
  - engineering
  - code-quality
  - coding-agents
---

Dax (OpenCode founder) shared an internal memo about LLMs turbocharing three existing engineering problems:

## Key Points

1. **Shipping features not worth shipping** — LLMs make it easy to prompt features into existence, so the bar for what ships drops. The bar should remain high. Prototypes aren't worth more than product thinking.

2. **Willingness to refactor drops** — When the original design is off and forces hackiness, LLMs can deal with the hackiness, so the impulse to refactor the original design disappears. "Leave the code better than you found it."

3. **Cleaning up gets deprioritized** — LLMs keep pulling toward the next feature. There's 100x more value in fixing what exists and improving process.

4. **"We're not even moving faster"** — The worst part: all this quality loss isn't even traded off for speed. Normal pace, just with more technical debt.

## Best replies

- Karri Saarinen (Linear founder): "LLM generated prototypes are the late night drunken whiteboarding of product building. Ideas seem cool at the time, then you realize they're useless. Now you wasted time instead of working on something meaningful."
- Dax reply: "They take little effort and look near complete so momentum builds too quickly before anyone's even thought hard about it."
- @twlvone: "The tool that removes all friction also removes all discipline."
- @dackerman: "More people should experiment with fixing all bugs/UX/perf before writing new features."

## Relevance

Directly applicable to how we use coding-agents agents. Our sdlc-ded flow already has the "think before code" gate and review step, but the temptation to ship fast is real. The "not even moving faster" observation matches — agent retries and fixups eat the speed gains.
