---
title: Your Agents Produce Slop Because You're Poor
source: https://x.com/systematicls/status/2035375632553836732
saved: 2026-03-21
type: tweet
tags:
  - agents
  - coding-agents
  - token-cost
---

sysls: agent output quality scales monotonically with token budget. More tokens, fewer errors. Production-quality agent code is coming from labs or the extremely well-capitalized.

## Key takeaways

- **Budget scales with LoC**: Token budget should scale with lines of code.
- **WAIT**: Build, then N fresh-context reviews, fix each pass; uncorrelated streams catch systematic bias.
- **VERIFY**: Write tests early; checkpoints catch upstream errors before they compound.
- **Novelty limit**: No amount of tokens solves problems missing from training data.
- **Why tokens help**: Better planning, multiple paths, fresh-context self-critique, and tool and test verification.
- **Single pass**: Max thinking in one pass is likely insufficient for complex work.
