---
title: Claude Agent Skills Authoring Best Practices
source: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
saved: 2026-03-24
type: article
tags:
  - agent-skills
  - claude
  - skill-authoring
  - progressive-disclosure
---

# Claude Agent Skills Authoring Best Practices

Keep a skill concise because its instructions share the model's context window with the task. Use progressive disclosure: metadata supports discovery, `SKILL.md` carries the workflow, and referenced files supply detail only when needed.

Match instruction precision to operational risk. Flexible judgment can use prose guidance, preferred patterns can use pseudocode, and fragile repeatable work should use exact scripts. Keep reference files directly reachable from `SKILL.md` rather than building deep chains.
