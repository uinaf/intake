---
title: Pruning agent instructions for GPT-6 Astra
source: https://x.com/pvncher/status/2095991462416490862
saved: 2026-09-05
type: tweet
tags:
  - agent-skills
  - codex
  - prompt-engineering
  - progressive-disclosure
---

Eric Provencher argues that instructions accumulated for older coding agents can overconstrain newer models. His GPT-6 Astra guidance emphasizes selective skills, contextual repository rules, and explicit completion criteria.

## Key takeaways

- **Skill selection**: Keep descriptions concise and narrowly scoped; large catalogs consume context and can make skill selection less reliable when descriptions are shortened or overlap.
- **Progressive disclosure**: Use a small root document to route agents to task-relevant references and scripts instead of loading every workflow upfront.
- **Model differences**: Detailed recipes that help one model may restrict another; reassess shared repository instructions as model capabilities change.
- **Repository rules**: Avoid universal reading requirements and repetitive testing prompts; tie documentation and checks to the actual task.
- **Decision boundaries**: State which workflows are safe to complete autonomously so broad approval language does not halt work unnecessarily.
- **Completion criteria**: Define whether completion includes running the implementation, inspecting results, and fixing failures, along with where further exploration should stop.
