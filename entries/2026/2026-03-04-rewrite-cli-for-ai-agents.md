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

# You Need to Rewrite Your CLI for AI Agents

Core thesis: human DX and agent DX are orthogonal. Human CLIs optimize for discoverability and forgiveness. Agent CLIs optimize for predictability and defense-in-depth. Retrofitting one into the other is a losing bet.

Written by the author of Google's new Workspace CLI (`gws` — https://github.com/googleworkspace/cli).

## Key Design Principles

### 1. Raw JSON Payloads > Bespoke Flags
- Agents generate JSON trivially; custom flag abstractions are lossy and can't express nested structures.
- `gws` uses `--params` and `--json` for all inputs, accepting full API payloads as-is.
- Practical compromise: support both raw payload and convenience flags in the same binary. `--output json` or `OUTPUT_FORMAT=json` env var.

### 2. Runtime Schema Introspection
- `gws schema drive.files.list` dumps full method signature (params, request body, response types, required OAuth scopes) as machine-readable JSON.
- Agents self-serve at runtime instead of burning tokens on stale docs in system prompts.
- Uses Google's Discovery Document with dynamic `$ref` resolution — CLI becomes canonical source of truth.

### 3. Context Window Discipline
- Field masks limit what the API returns: `--params '{"fields": "files(id,name,mimeType)"}'`
- NDJSON pagination (`--page-all`) emits one JSON object per page, stream-processable without buffering.
- Guidance baked into CLI's own agent context files — agents don't intuit context discipline.

### 4. Input Hardening Against Hallucinations
Most underappreciated dimension. Agents hallucinate differently than humans typo:
- **Path traversal**: agents confuse path segments, generate `../../.ssh`. Canonicalize and sandbox all output to CWD.
- **Control characters**: reject anything below ASCII 0x20.
- **Resource IDs**: agents embed query params inside IDs (`fileId?fields=name`). Reject `?` and `#`.
- **URL encoding**: agents pre-encode strings that get double-encoded (`%2e%2e` for `..`). Reject `%`.
- "The agent is not a trusted operator."

### 5. Ship Agent Skills, Not Just Commands
- 100+ SKILL.md files with YAML frontmatter, one per API surface plus higher-level workflows.
- Encode invariants agents can't intuit from `--help`: "always use --dry-run for mutations", "add --fields to every list call".
- "A skill file is cheaper than a hallucination."

### 6. Multi-Surface from Same Binary
- CLI (human terminal)
- MCP stdio (JSON-RPC tools, no shell escaping)
- Gemini CLI Extension (native agent capability)
- Env vars for headless auth (`GOOGLE_WORKSPACE_CLI_TOKEN`, `GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE`)

### 7. Safety Rails
- `--dry-run`: validate request locally without hitting API. Critical for mutating operations.
- `--sanitize`: pipes API responses through Google Cloud Model Armor against prompt injection embedded in data (e.g., malicious email body saying "ignore previous instructions").

## Retrofit Checklist (practical order)
1. `--output json` — machine-readable output is table stakes
2. Validate all inputs — reject control chars, path traversals, embedded query params
3. Add `schema` or `--describe` command — runtime introspection
4. Support field masks / `--fields` — limit response size
5. Add `--dry-run` — validate before mutating
6. Ship CONTEXT.md or skill files — encode invariants
7. Expose MCP surface — typed JSON-RPC over stdio

## Relevance to OpenClaw
- SKILL.md format with YAML frontmatter maps directly to OpenClaw's skill system.
- Input hardening principles apply to any CLI agents invoke (gog, bird, agent-browser, etc.).
- Schema introspection pattern worth considering for `gog` or future OpenClaw tool wrappers.
- `gws` itself could eventually replace `gog` if it stabilizes (pre-v1.0, expect breaking changes).
