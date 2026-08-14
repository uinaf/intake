---
title: Night Shift Agentic Workflow
source: https://jamon.dev/night-shift
saved: 2026-03-16
type: article
tags:
  - ai
  - agents
  - workflow
  - coding
  - productivity
---

Jamon Holmgren: humans take the day shift (specs, architecture), agents take the night shift (autonomous implementation). Human time is expensive; tokens are cheap.

## Key takeaways

- **Day shift**: Write specs for your thinking in `./Specs/`; a `draft-` prefix means the agent ignores them; AGENTS.md is a ~150-line router.
- **Night loop**: Prep and tests, pick bugs then specs, six review personas, implement, validate, commit, report.
- **Morning review**: Changelog and commit-by-commit review; fix docs, workflow, and validation gaps first, then code.
- **Unread plans**: Agent plans are for the agent; burn tokens to make output review-ready.
- **Feedback loop**: Each night should get better than the last; stacked commits on one branch.
- **Claimed result**: About 5x faster, better quality, and more fun than prior agentic approaches.
