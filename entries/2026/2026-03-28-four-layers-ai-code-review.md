---
title: Four Layers of AI Code Review
source: https://youtube.com/watch?v=As2xy_cSx00
saved: 2026-03-28
type: video
tags:
  - code-review
  - evaluator-pattern
  - agentic-sdlc
  - verification
intaked_by: glitch418x
---

# Four Layers of AI Code Review

Practical layered approach to reviewing AI-generated code.

## The Four Layers

1. **Automate the obvious** — deterministic hooks: type checking, linting, formatting, tests, security scans. Run automatically after every AI generation.
2. **Local AI review** — AI agent reviews staged changes before push. Check correctness, security, simplicity, concurrency. Group by severity.
3. **Automated PR checks** — code review tools scan PRs on open (CodeRabbit, Codex). Safety net for missed issues.
4. **Human review** — context-aware feedback for significant changes (DB migrations, infra). Minor changes: automated may suffice.

## Key Insights
- "Always assume AI-generated code has issues and get another agent to review it"
- AI found SQL injection and race conditions that humans missed
- Layer 1 (deterministic) is the highest-leverage, cheapest layer
- Specific tools matter less than having a consistent layered process
- Customize prompts and tools to your project — generic defaults make wrong assumptions

## Connection to Our Work
- Layer 1 = harness skill's "bootable, testable" checks
- Layer 2 = the adversarial evaluator pattern (separate agent reviews)
- Layer 3 = CI integration (our harness layer 4: "enforce")
- Layer 4 = trust escalation (when to auto-ship vs flag human)
- Maps cleanly to our 7-layer harness stack
