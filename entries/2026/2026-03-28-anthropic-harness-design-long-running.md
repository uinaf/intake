---
title: Harness Design for Long-Running Application Development
source: https://anthropic.com/engineering/harness-design-long-running-apps
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - agentic-sdlc
  - anthropic
  - evaluator-pattern
  - agent-architecture
---

By Prithvi Rajasekaran (Anthropic Labs). Follow-up to the earlier "effective harnesses" post.

## Core Problem

Two failure modes in long-running agent coding:
1. **Context anxiety** — models wrap up prematurely as context fills. Compaction doesn't fully fix it; context resets (fresh agent + structured handoff) do.
2. **Self-evaluation failure** — agents praise their own mediocre work. Separating builder from judge is the key lever.

## The GAN-Inspired Architecture

Three agents: **Planner → Generator → Evaluator**

### Planner
- Takes 1-4 sentence prompt, expands into full product spec
- Stays high-level (product context + design, NOT granular implementation)
- Rationale: spec errors cascade into implementation. Better to constrain deliverables, let agents figure out the path.

### Generator
- Works in sprints, one feature at a time
- Stack: React + Vite + FastAPI + SQLite/PostgreSQL
- Self-evaluates at end of each sprint before handing to QA

### Evaluator
- Uses **Playwright MCP** to actually click through the running app
- Grades against criteria with hard thresholds — any criterion below threshold = sprint fails
- Before each sprint: generator and evaluator negotiate a **sprint contract** (what "done" looks like)
- Communication via files (write → read → respond)

## Frontend Design Experiment

Four grading criteria (weighted toward design + originality over craft + functionality):
1. **Design quality** — coherent whole, not a collection of parts
2. **Originality** — custom decisions vs template/AI slop patterns
3. **Craft** — typography, spacing, color harmony (models already good here)
4. **Functionality** — usability (models already good here)

Key insight: "Is this beautiful?" is hard to grade. "Does this follow our principles?" is concrete and gradable.

Evaluator calibrated with few-shot examples. 5-15 iterations per generation. Full runs up to 4 hours.

Notable result: Dutch art museum site — after 9 conventional iterations, iteration 10 reimagined it as a 3D spatial experience with CSS perspective rooms and doorway navigation. Creative leaps impossible in single-pass.

## Full-Stack Results

### Retro Game Maker (Opus 4.5)
- Solo: 20 min, $9 → broken game, no working play mode
- Full harness: 6 hr, $200 → playable game, richer editors, AI integration
- Evaluator caught real bugs: rectangle fill broken, entity delete logic wrong, API route ordering causing 422s

### DAW (Opus 4.6, simplified harness)
- Removed sprint construct entirely (4.6 handles longer coherent runs)
- Single QA pass at end instead of per-sprint
- 3 hr 50 min, $125 → functional browser DAW with AI-driven composition
- QA still caught: stub-only audio recording, missing clip interactions, numeric-only effect controls

## Harness Evolution with Model Improvements

**Critical insight**: Every harness component encodes an assumption about what the model can't do alone. These assumptions go stale as models improve.

- Sonnet 4.5: needed context resets (context anxiety), sprint decomposition, per-sprint evaluation
- Opus 4.5: still needed sprints + evaluator, but less fragile
- Opus 4.6: dropped sprints, dropped context resets, runs 2+ hours coherently with compaction alone
- Evaluator value is task-dependent: unnecessary overhead for tasks within model's reliable range, still essential at the edge of capability

**"Find the simplest solution possible, and only increase complexity when needed."**

## Key Takeaways

1. **Separate builder from judge.** Tuning a standalone evaluator to be skeptical is far more tractable than making a generator critical of its own work.
2. **Evaluator must interact with the live app** (Playwright MCP), not just read code or screenshots.
3. **Sprint contracts** bridge the gap between high-level spec and testable implementation.
4. **Harness complexity should decrease over time** as models improve. Stress-test your assumptions regularly.
5. **The evaluator is not a fixed yes/no decision.** It's worth the cost only when the task sits beyond what the current model does reliably solo.

## Direct Connection to Our Harness Skill

- Our skill's "separate builder from judge" principle is validated here at Anthropic scale
- The evaluator using Playwright MCP = our skill's "if you did not run it, you did not verify it"
- Sprint contracts ≈ our SDD conformance tests
- Our eval today showed the same self-evaluation failure: 0/3 agents spawned an independent evaluator
- The "harness components go stale" insight = why our skill grades against current capability, not a fixed rubric
