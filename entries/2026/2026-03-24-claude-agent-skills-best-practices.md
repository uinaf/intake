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

Keep a skill concise because its instructions share the model's context window with the task. Use progressive disclosure: metadata for discovery, SKILL.md for the workflow, and referenced files for detail only when needed.

## Key takeaways

- **Progressive disclosure**: Metadata supports discovery, SKILL.md carries the workflow, and referenced files supply detail only when needed.
- **Instruction precision**: Match precision to operational risk. Flexible judgment can use prose, preferred patterns can use pseudocode, and fragile repeatable work should use exact scripts.
- **Shallow references**: Keep reference files directly reachable from SKILL.md rather than building deep chains.
