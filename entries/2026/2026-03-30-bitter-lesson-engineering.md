---
title: Bitter Lesson Engineering
source: https://danielmiessler.com/blog/bitter-lesson-engineering
saved: 2026-03-30
type: article
tags:
  - ai
  - agents
  - philosophy
  - engineering
  - scaffolding
---

Daniel Miessler applies Richard Sutton's Bitter Lesson to AI engineering: as models get smarter, scaffolding should state preferences and outcomes, not hard-coded execution.

## Key takeaways

- **Harmful scaffolding**: Hand-coded control logic is weaker than general methods and can poison native model capability.
- **Preferences not execution**: Be specific about desired outcomes, give the best tools to the best model, and let it figure out how.
- **Sutton quotes**: General methods that leverage computation win by a large margin; agents should discover like we do, not contain what we already discovered.
- **Meta-upgradeable systems**: As models improve, instruction should shrink toward preferences so the system upgrades with the model.
- **Broader scope**: The same stance applies to life management, business, and general AI interaction, not only engineering.
