---
title: Autoresearch Pattern — Beyond ML Training
source: https://mager.co/blog/2026-03-14-autoresearch-pattern
saved: 2026-03-28
type: research
tags:
  - autoresearch
  - agentic-sdlc
  - self-improving
  - karpathy
---

The universal recipe from Karpathy's autoresearch, applied to software:

```
ONE file to modify + ONE metric + ONE fixed budget + keep/discard rule = loop forever
```

## Applications Beyond Training
- **Skill/prompt improvement**: modify SKILL.md → eval score → keep if improved. Agents improving agent instructions.
- **Sports prediction**: modify sentiment prompt → backtest against outcomes → keep if accuracy up
- **Web performance**: modify CSS → Lighthouse audit → keep if scores up
- **Recommendation algo**: modify discovery → measure diversity/relevance → iterate

## Key Insight
"You don't optimize train.py — you optimize program.md. You're programming the programmer."

Karpathy spent more time optimizing the agent setup than the training code itself. The meta-setup IS the product.

## Limitation for Software
Works when ONE metric exists. Most software work doesn't have a single number. "Add dark mode" isn't measurable. That's where the adversarial evaluator fills the gap.
