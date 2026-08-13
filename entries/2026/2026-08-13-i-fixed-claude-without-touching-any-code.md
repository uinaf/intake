---
title: I Fixed Claude Without Touching Any Code
source: https://www.youtube.com/watch?v=e1snsuY4lTI
saved: 2026-08-13
type: video
tags:
  - harness-engineering
  - coding-agents
  - skills
  - context-engineering
  - developer-experience
---

Theo describes improving his coding-agent workflow by repeatedly turning observed failures and personal corrections into global instructions, narrow skills, concrete examples, and machine-specific operating rules. The useful idea is not that Markdown changes the underlying model, but that a maintained harness can make the same model behave more consistently within one person's recurring workflows.

## Key takeaways

- Treat agent instructions as accumulated operational feedback. Theo audits prior conversations, notices repeated corrections or failure patterns, and converts those into durable rules instead of rewriting prompts from scratch each time.
- Skill metadata is primarily a routing surface. Descriptions should emphasize the user phrases and situations that should activate a skill; detailed procedure belongs inside the skill and unrelated workflows should stay separate.
- Concrete bad/good examples can encode taste more effectively than abstract advice. His examples focus on human-readable PR titles and descriptions, scope control during review, and stopping points that prevent an agent from continuing past the requested boundary.
- The target is often communication quality rather than raw coding ability. File hosting, screenshots, videos, HTML comparisons, and consistent PR prose help a human evaluate parallel agent work without reconstructing what happened from logs or implementation inventories.
- Fleet-wide configuration is useful only when it preserves scope. Theo separates universal skills, command-center-only capabilities, and project rules, then syncs them across several machines instead of installing every workflow everywhere.
- Instructions should be earned and revisited. Blindly copying another person's `AGENTS.md` or skill collection imports preferences and constraints without evidence that they match local failures.

## Caveats

The video is an anecdotal workflow report, not a controlled evaluation. Theo's productivity also depends on T3 Code, parallel machines, worktrees, review automation, upload services, and substantial prior infrastructure, so the improvement cannot be attributed to Markdown alone. Long-lived instructions can also become stale, contradictory, or expensive in context; the stronger practice is a measured loop of observed failure, scoped intervention, replay or evaluation, and pruning when the rule no longer helps.
