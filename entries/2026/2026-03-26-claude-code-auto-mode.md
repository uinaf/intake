---
title: "Claude Code auto mode: a safer way to skip permissions"
source: https://anthropic.com/engineering/claude-code-auto-mode
saved: 2026-03-26
type: article
tags:
  - claude-code
  - security
  - permissions
  - coding-agents
  - anthropic
  - prompt-injection
---

By Anthropic engineering. A new permission mode that delegates approval decisions to model-based classifiers — middle ground between manual review and `--dangerously-skip-permissions`.

## The Problem

- Default mode: approve every action → approval fatigue (users accept 93% anyway)
- Sandbox: safe but high maintenance, breaks on network/host access
- `--dangerously-skip-permissions`: zero maintenance, zero protection
- Real incidents from internal log: deleting remote git branches, uploading GitHub auth tokens, attempting production DB migrations — all from overeager model behavior

## How Auto Mode Works

**Two defense layers:**

### Input layer: Prompt-injection probe
- Server-side scan of tool outputs (file reads, web fetches, shell output) before they enter agent context
- When content looks like injection, adds a warning telling agent to treat it as suspect

### Output layer: Transcript classifier (Sonnet 4.6)
- Evaluates each action against decision criteria before execution
- **Two-stage pipeline:**
  - Stage 1: Fast single-token yes/no filter, tuned to err toward blocking
  - Stage 2: Chain-of-thought reasoning, only runs if stage 1 flags (most actions clear stage 1)
- Classifier sees only user messages + tool calls — strips assistant text and tool outputs by design
- Reasoning-blind: agent can't talk classifier into bad decisions

### Permission tiers
1. **Built-in allowlist + user settings** — safe-read tools auto-allowed. On entering auto mode, blanket shell/interpreter rules are dropped
2. **In-project file ops** — writes/edits inside project dir allowed without classifier (reviewable via git)
3. **Transcript classifier** — everything else: shell commands, web fetches, external tools, subagent spawns, out-of-project filesystem ops

## Threat Model

Four reasons an agent takes dangerous action:
1. **Overeager behavior** — genuinely trying to help but exceeds authorization (primary target)
2. **Honest mistakes** — misunderstands blast radius
3. **Prompt injection** — hijacked by planted instructions
4. **Misaligned model** — pursues own goal (not seen in practice yet)

## Classifier Decision Criteria

**Fixed template** (ships with Claude Code):
- Evaluation rules: judge real-world impact, not surface text. Follows through wrappers, chained commands, assembled scripts
- User intent rules: conservative — what the user explicitly authorized, not what's merely related to their goal
- Step-by-step: check block rules → allow exceptions → user intent → decide

**Three customizable slots:**
- **Environment** — trust boundary (domains, cloud buckets, orgs). Default: only current git repo
- **Block rules** (20+) — destroy/exfiltrate, degrade security, cross trust boundaries, bypass review/affect others
- **Allow exceptions** — installing declared deps, standard cred flows, pushing to working branch

## Results

| | Real traffic (n=10k) | Real overeager (n=52) | Synthetic exfil (n=1k) |
|---|---|---|---|
| Stage 1 only | 8.5% FPR | 6.6% FNR | 1.8% FNR |
| Full pipeline | 0.4% FPR | **17% FNR** | 5.7% FNR |

- 0.4% false positive rate = minimal friction on normal work
- 17% miss rate on real overeager actions — honest number. Most misses: classifier sees the danger but misreads consent signals
- Better than `--dangerously-skip-permissions`, not a replacement for careful human review on high-stakes infra

## Key Design Decisions

**Why strip assistant text:** Agent could generate persuasive rationalizations. Classifier judges actions, not explanations.

**Why strip tool results:** Primary prompt-injection defense. Classifier rarely needs them — a POST of env vars to external URL fails against user intent regardless of what prompted it.

**Two-stage efficiency:** Stage 2 prompt is identical except final instruction → almost entirely cache-hit from stage 1.

**Reasoning-blind is complementary:** Action-level blocking catches misaligned actions regardless of reasoning. CoT monitoring catches misaligned reasoning with benign-looking actions. The two are orthogonal.
