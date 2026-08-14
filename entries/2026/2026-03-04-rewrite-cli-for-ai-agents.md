---
title: You Need to Rewrite Your CLI for AI Agents
source: https://justin.poehnelt.com/posts/rewrite-your-cli-for-ai-agents
saved: 2026-03-04
type: article
tags:
  - cli
  - agent-dx
  - google-workspace
  - gws
  - mcp
  - security
  - skills
---

Human DX and agent DX are orthogonal. Human CLIs optimize for discoverability; agent CLIs optimize for predictability and defense-in-depth.

## Key takeaways

- **Raw JSON**: Agents generate JSON easily; `--params` and `--json` beat lossy custom flags.
- **Schema introspection**: `gws schema` dumps method signatures so agents self-serve instead of burning tokens on stale docs.
- **Context discipline**: Field masks and NDJSON pagination keep responses small and streamable.
- **Input hardening**: Canonicalize paths; reject control characters, `?` and `#` in IDs, and `%` to stop traversal and double-encoding.
- **Skills not just commands**: 100+ SKILL.md files encode invariants `--help` cannot; a skill file is cheaper than a hallucination.
- **Safety rails**: `--dry-run` for mutations; `--sanitize` pipes responses through Model Armor against prompt injection in data.
- **Retrofit order**: JSON output, input validation, schema command, field masks, dry-run, skill files, then MCP.
