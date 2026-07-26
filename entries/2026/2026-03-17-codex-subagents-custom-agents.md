---
title: Codex subagents and custom agents guide
source: https://x.com/reach_vb/status/2033636057690800452
saved: 2026-03-17
type: tweet
tags:
  - coding-agents
  - subagents
  - agents
  - openai
intaked_by: glitch418x
---

# Codex Subagents & Custom Agents

By Vaibhav Srivastav (@reach_vb, OpenAI)

## Subagents

Specialized child agents spawned explicitly for parallel work. Each runs with its own instructions, model settings, tool context, and **own context window**. Codex merges results back. Opt-in only — more tokens than single-agent runs.

## Custom agents (TOML)

Live in `~/.codex/agents/` (personal) or `.codex/agents/` (project). Required fields: `name`, `description`, `developer_instructions`. Everything else inherited or overridden: `model`, `model_reasoning_effort`, `sandbox_mode`, `mcp_servers`, `skills.config`.

```toml
name = "reviewer"
description = "PR reviewer focused on correctness, security, and missing tests."
developer_instructions = """
Review code like an owner.
Prioritize correctness, regressions, security, and missing test coverage.
"""
```

Best agents are **narrow** — one job each. Too many responsibilities = lost benefit.

## Built-in agents

- `default` — general-purpose fallback
- `worker` — execution-focused
- `explorer` — read-heavy exploration

## Runtime model

Subagents inherit parent session's sandbox and approval state. Not independent sessions.

```toml
[agents]
max_threads = 6
max_depth = 1
```

## Good pattern: role-based split

```
Review this branch against main. Have pr_explorer map the affected code paths, 
reviewer find real risks, and docs_researcher verify the APIs the patch relies on. 
Wait for all agents and summarize the findings.
```

## Tips

- Only use when work is actually parallelizable
- Keep agents narrow and opinionated
- Read-only sandboxes for exploration and review
- Faster models for search/mapping, stronger models for judgment
- Keep depth low unless nested delegation needed
- Communication is one-way (subagent → main), subagents don't converse with each other

## Key insight

"Subagents are best thought of as role infrastructure with orchestration. The value is not just parallelism. It is cleaner boundaries, less context drift, and better decomposition on complex tasks."

Docs: https://developers.openai.com/codex/subagents
