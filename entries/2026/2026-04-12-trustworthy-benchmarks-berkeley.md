---
title: "How We Broke Top AI Agent Benchmarks: And What Comes Next"
source: https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont
saved: 2026-04-12
type: article
tags:
  - ai
  - benchmarks
  - evals
  - security
---

UC Berkeley RDI argues that many headline agent benchmarks are structurally unsafe, and shows harness exploits that can score near-perfect results without solving the tasks.

## Key takeaways

- **Harness exploits**: They claim eight popular agent benchmarks can be gamed by attacking the evaluator rather than completing the work.
- **Shared trust**: Agent code can often modify, observe, or poison the same environment the grader later trusts.
- **Concrete breaks**: Examples include `conftest.py` monkey-patches on SWE-bench, trojanized Terminal-Bench wrappers, `file://` leaks in WebArena, and `eval()` on OSWorld VM strings.
- **Leaderboard risk**: Scores still drive model choice, safety claims, and investment even when evals are non-adversarial and easy to inflate.
- **Hardening checklist**: Isolate agent from evaluator, hide gold answers, never `eval()` untrusted input, sanitize LLM-judge inputs, and red-team the grader.
- **Independent caution**: The write-up is self-presented; severity still depends on patches, whether public boards were hit, and how much transfers to private evals.
