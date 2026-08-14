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

Prithvi Rajasekaran describes a planner-generator-evaluator harness for long-running app development, and how that harness should shrink as models improve.

## Key takeaways

- **Two failure modes**: Context anxiety makes models wrap up early. Self-evaluation makes agents praise mediocre work. Fresh agents with structured handoffs and a separate judge address both.
- **Live evaluator**: The evaluator clicks through the running app via Playwright MCP and fails any criterion below a hard threshold. Sprint contracts define done before work starts.
- **Gradable principles**: Asking whether something is beautiful is hard to grade. Asking whether it follows stated principles is concrete. Few-shot calibration and 5-15 iterations produced creative leaps a single pass missed.
- **Cost versus solo**: A full harness turned a broken 20-minute game into a playable 6-hour build. A later DAW run dropped sprints and still needed QA to catch stubs.
- **Stale assumptions**: Every harness component encodes what the model cannot do alone. Opus 4.6 dropped sprints and context resets. Increase complexity only when needed.
