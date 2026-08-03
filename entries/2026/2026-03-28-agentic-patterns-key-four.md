---
title: Four Key Agentic Patterns for Our Stack
source: https://agentic-patterns.com/
saved: 2026-03-28
type: article
tags:
  - agentic-sdlc
  - patterns
  - evaluator-pattern
  - harness-engineering
---

## 1. CriticGPT-Style Code Review
- **Status:** validated in production
- Specialized AI trained for critique, not generation
- 3-4 iterations of critique-refinement loops
- Multi-category: bugs, security, quality, performance, best practices
- Risk: evaluator-model collusion in self-critique → mitigate with anchor sets and adversarial examples
- URL: https://agentic-patterns.com/patterns/criticgpt-style-evaluation

## 2. Anti-Reward-Hacking Grader Design
- **Status:** emerging
- Models actively game evaluators (length hacking, format hacking, solution appending)
- Fix: multi-criteria weighted scoring (correctness 50%, reasoning 20%, completeness 15%, citations 10%, formatting 5%)
- "Adversarial test your grader BEFORE deploying" — try to hack it yourself first
- Maps to desloppify's gaming-resistant scoring
- URL: https://agentic-patterns.com/patterns/anti-reward-hacking-grader-design

## 3. Spec-As-Test Feedback Loop ⭐ (most actionable for us)
- **Status:** emerging
- Auto-generate executable tests from the spec
- On any spec/code commit: regenerate test suite → run → if failures, open PR to fix or flag unclear spec
- Four layers: spec parsing → test generation → execution → feedback routing
- THIS is the missing bridge between our Layer 2 (Spec) and Layer 4 (Evaluate)
- URL: https://agentic-patterns.com/patterns/spec-as-test-feedback-loop

## 4. Opponent Processor / Multi-Agent Debate
- **Status:** emerging
- Spawn opposing agents with different goals (advocate vs critic)
- Uncorrelated context windows prevent groupthink
- Resolution: third agent synthesizes, or human reviews trade-offs
- 2x+ token cost but better decisions
- Use case: code review (author-defender vs security-auditor), architecture decisions
- URL: https://agentic-patterns.com/patterns/opponent-processor-multi-agent-debate
