---
title: "OpenAI - Shell + Skills + Compaction: Tips for Long-Running Agents"
source: https://developers.openai.com/blog/skills-shell-tips
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - skills
  - context-engineering
  - long-running-agents
  - openai
---

OpenAI's tips for long-running agents reduce to three harness choices: durable shell state, explicit skill bundles, and deliberate compaction.

## Key takeaways

- **Durable shell state**: Keep shell state that survives across turns instead of treating each command as a forgetful one-off.
- **Explicit skill bundles**: Package skills as interfaces. OpenAI saw routing improve after adding negative examples to manifests.
- **Deliberate compaction**: Compact context on purpose. If a long-running agent feels flaky, check these three before inventing new machinery.
