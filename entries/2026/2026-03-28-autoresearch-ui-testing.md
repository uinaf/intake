---
title: Autoresearch Applied to Autonomous UI Testing
source: https://youtube.com/watch?v=VxMHTk627tE
saved: 2026-03-28
type: video
tags:
  - autoresearch
  - testing
  - playwright
  - agentic-sdlc
intaked_by: glitch418x
---

# Autoresearch for UI Testing

Applied the Karpathy loop to build an autonomous UI testing agent.

## How It Works
1. `explorer.py` — crawls web app, takes screenshots, builds sitemap
2. Agent reads sitemap, generates Playwright test cases (700+ lines auto-generated)
3. `runner.py` — executes tests
4. `autofix.py` — retries failed tests up to 3 times with agent fixes
5. `program.md` — instructions for the agent
6. Loop: explore → generate tests → run → fix failures → repeat

## Key Files
- `explorer.py` — crawler + screenshot + sitemap builder
- `runner.py` — test executor
- `autofix.py` — retry with agent-driven fixes (max 3 attempts)
- `test.py` — generated test cases
- `program.md` — agent instructions

## What's Interesting
- Fully autonomous once started — no manual approvals needed
- Configurable: depth, page count, interval (every 5 min, hourly, etc.)
- Generated 700+ lines of test code from sitemap alone
- Combines exploration (discover the app) with verification (test it)

## Connection to Our Work
- This IS the harness Layer 1 automated: explore → test → verify
- The explorer building a sitemap = our harness audit discovering what exists
- The autofix loop = the Karpathy keep/discard pattern on test failures
- Could be the "Playwright evaluator" that Anthropic uses, but automated end-to-end
