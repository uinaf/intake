---
title: Claude Code Source Leak — Architecture Deep Dive
source: https://mintlify.com/VineeTagarwaL-code/claude-code/concepts/how-it-works
saved: 2026-03-31
type: article
tags:
  - coding-agents
  - claude-code
  - harness
  - architecture
---

# Claude Code Source Leak

Source maps accidentally published to npm exposed ~512K lines / ~1,900 files. Someone built docs from it.

Tweet: https://x.com/mattpocockuk/status/2038933558740308017

## Architecture (from leaked source)

### Agentic Loop
- Standard ReAct: user message → assemble context → model reasons + selects tools → permission check → execute → loop until done
- Runs entirely in terminal process — no remote execution server
- Each "turn" driven by `query.ts` — streams tokens, dispatches tool_use blocks, enforces per-turn token/tool-call budgets

### Context Loading (memoized per conversation)
- **System context** (`getSystemContext()` in `context.ts`): git branch, status (truncated 2K chars), last 5 commits, cache-breaking injection
- **User context** (`getUserContext()`): CLAUDE.md memory files (4-level hierarchy: managed → user → project → local), current date
- Both memoized with lodash/memoize, cleared via `setSystemPromptInjection()`

### Memory Hierarchy
- 4 levels: managed → user → project → local CLAUDE.md files
- Disabled by `CLAUDE_CODE_DISABLE_CLAUDE_MDS=1`

### Permission Model
- Each tool has `checkPermissions` method → returns `allow` / `ask` / `deny`
- Modes: `bypassPermissions` (all auto-approved), `acceptEdits` (edits ok, bash prompts), default (prompts for everything risky)
- Read-only tools (Read, Glob, Grep) auto-approved in all modes

### Tool Execution
- Tools have `maxResultSizeChars` — oversized results saved to temp file, model gets preview + path
- Sub-agents via `Task` tool (`AgentTool`) — isolated conversation, optionally restricted toolset, local or remote

### Conversation Management
- JSON transcripts on disk (`~/.claude/`)
- Resume via `--resume <session-id>`
- Long conversations periodically **compacted** — oldest messages summarized, raw transcript preserved on disk

### Multi-Surface
- Interactive REPL (React/Ink terminal UI)
- Non-interactive `--print` mode for scripts/CI
- App Server mode via JSON-RPC over stdin/stdout (for IDE integrations)

## Dream System (auto-memory consolidation)
- Background "dreaming" agent that consolidates memories across sessions
- Fires when: ≥24h since last dream AND ≥5 sessions since last consolidation
- 4-phase prompt: orient (ls memory dir, read MEMORY.md) → gather (grep transcripts narrowly) → consolidate (merge into topic files, convert relative→absolute dates) → prune (keep MEMORY.md under 200 lines / 25KB as index)
- Runs as forked agent with read-only bash (no writes via shell)
- Lock file prevents concurrent dreams across sessions, stale after 1h
- Transcript search: `grep -rn "<narrow term>" transcripts/ --include="*.jsonl" | tail -50` — never exhaustive reads

## Memory Type Taxonomy
4 types, constrained to info NOT derivable from current project state:
- **user**: role, goals, preferences, expertise level
- **feedback**: corrections AND confirmations (record from failure AND success). Include Why + How to apply
- **project**: ongoing work, goals, deadlines. Convert relative dates to absolute
- **reference**: pointers to external systems (Linear projects, Grafana boards, Slack channels)
- Explicit exclusions: code patterns, git history, debugging recipes, ephemeral task details, anything in CLAUDE.md
- "Even when the user explicitly asks to save a PR list — ask what was *surprising* or *non-obvious*"

## Coordinator Mode
- Full orchestrator-worker with detailed system prompt (~2K words)
- Coordinator tools: Agent, SendMessage, TaskStop only — no file/bash access
- Workers get real tools, coordinator synthesizes
- Scratchpad dir for cross-worker knowledge (tengu_scratch gate)
- "Never delegate understanding" — coordinator must synthesize research findings into specific prompts with file paths, line numbers
- Continue vs spawn decision: high context overlap → continue worker, low overlap → spawn fresh
- Verification must be independent: "never ask the builder to grade its own work"

## Fork Subagent
- Omitting `subagent_type` creates a fork inheriting parent's full context + prompt cache
- Byte-identical API prefix across forks for cache sharing (placeholder tool results)
- Strict child rules: no recursive forking, no peeking at output, no fabricating results, report under 500 words
- Output format: `Scope: → Result: → Key files: → Files changed: → Issues:`
- Worktree isolation available per fork
- Mutually exclusive with coordinator mode

## Context Management (3-layer)
1. **Snip** (HISTORY_SNIP): cut old messages, report tokens freed
2. **Microcompact** (CACHED_MICROCOMPACT): per-tool-result compression, cache-aware
3. **Autocompact**: full summarization via forked agent, 9-section structured summary
   - Circuit breaker: stops after 3 consecutive failures
   - `<analysis>` scratchpad trick: model drafts analysis first, then writes summary, analysis is stripped from final output
   - Partial compaction: summarize old messages only, keep recent verbatim
   - Transcript path included so model can Read full history if needed
4. **Context Collapse** (alternative): selective section collapsing, not full summary

## Tool Result Budget System
- Per-tool `maxResultSizeChars` (default 50K) — oversized results saved to temp file, model gets preview + path
- Per-message aggregate budget: 200K chars across all tool results in one turn
- Prevents N parallel tools from collectively blowing context (e.g., 10 × 40K = 400K)

## System Prompt Architecture
- Split into static (cacheable across orgs) and dynamic (per-session) sections
- `SYSTEM_PROMPT_DYNAMIC_BOUNDARY` marker separates them
- Dynamic sections use memoized `systemPromptSection()` — computed once, cached until /clear or /compact
- `DANGEROUS_uncachedSystemPromptSection()` for volatile sections that recompute every turn (breaks cache)
- Cache optimization is a first-class concern: agent list moved to attachment messages to avoid busting tool-schema cache (was 10.2% of fleet cache_creation tokens)

## Unreleased Features
- **KAIROS**: proactive/autonomous mode with push notifications, file sending, PR subscriptions, sleep tool, cron scheduling
- **FORK_SUBAGENT**: fork yourself instead of spawning fresh agents
- **COORDINATOR_MODE**: multi-agent orchestrator-worker pattern
- **CONTEXT_COLLAPSE**: selective context collapsing as alternative to full compaction
- **REACTIVE_COMPACT**: compact on API error instead of proactively
- **TEAMMEM**: team-scoped memory directories
- **UDS_INBOX**: Unix domain socket peer communication
- **EXPERIMENTAL_SKILL_SEARCH**: auto-surface relevant skills per turn + DiscoverSkills tool
- **VERIFICATION_AGENT**: mandatory independent adversarial verification for non-trivial changes
- **WORKFLOW_SCRIPTS**: bundled reusable workflows

## Interesting Implementation Details
- Bun bundler's `feature()` for dead code elimination — unreleased features stripped from external builds
- `ant`-only code paths for internal Anthropic users (REPL tool, SuggestBackgroundPR, Config, Tungsten, undercover mode)
- "Undercover" mode: hides model names/IDs from system prompt to prevent leaking unannounced models in public commits
- Token budget feature: user specifies target ("+500k"), system shows count per turn, auto-continues until target met
- Numeric length anchors (ant-only): "≤25 words between tool calls, ≤100 words final response" — 1.2% output token reduction
- Streaming tool execution: tools start running while model is still streaming
- `bfs`/`ugrep` embedded in ant-native binary (same ARGV0 trick as ripgrep) — replaces Glob/Grep tools

## Relevance
- Confirms filesystem-as-state pattern (same as OpenClaw, Meta-Harness findings)
- Dream system solves the manual "session → durable memory" problem we handle with daily files
- Compaction prompt's 9-section structure is a good template for any summarization task
- Cache optimization is obsessive — worth learning from for OpenClaw's prompt design
- Memory taxonomy (user/feedback/project/reference) is a cleaner model than our flat MEMORY.md
