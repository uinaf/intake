---
title: Harnesses Are Everything — How to Optimize Yours
source: https://x.com/thealexker/status/2045203785304232162
saved: 2026-04-18
type: tweet
tags:
  - agents
  - harness
  - context-management
  - progressive-disclosure
  - subagents
  - prompt-engineering
---

Alex Ker argues the harness, not the model, makes intelligence useful: it manages stateless context, wraps tools and guardrails, and is basically a `while` loop over the next message.

## Key takeaways

- **Harness job**: Manage context for stateless LLMs and make tools, I/O, and guardrails work around the model.
- **Lean human prompts**: LLM-generated system prompts can degrade quality and cost more. Frontier models hit a "dumb zone" after a few hundred instructions.
- **Progressive disclosure**: Let the agent pull context on demand. Skills load name and description first; Claude Code's search-based MCP loading cuts context sharply.
- **RPI prompts**: Each prompt should research, plan, or implement — not all three. Planning is where outsourcing thinking is most expensive.
- **Subagent patterns**: Fan out for parallel investigation; pipeline sequential roles so the main agent gets layered judgment without holding every lens.
- **One harness**: Switching stacks drops institutional knowledge in config files. Iterate on failures in `.md` files instead of hopping tools.
