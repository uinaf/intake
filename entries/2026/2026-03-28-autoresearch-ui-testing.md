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
---

A Karpathy-style loop that crawls an app, generates Playwright tests, runs them, and auto-fixes failures up to three times.

## Key takeaways

- **Explore then verify**: explorer.py builds a sitemap from screenshots. The agent generates 700+ lines of Playwright tests from that map.
- **Autofix cap**: runner.py executes tests. autofix.py retries failures up to three times with agent edits.
- **Unattended loop**: Once started it needs no approvals, and depth, page count, and interval are configurable.
- **Instruction file**: program.md holds the agent instructions that drive the explore-generate-run-fix cycle.
