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

UC Berkeley RDI argues that many headline AI-agent benchmarks are structurally unsafe, and they back it with benchmark-specific exploits that can score near-perfect results without solving the underlying tasks.

## Key takeaways

- They claim eight popular agent benchmarks can be exploited by attacking the eval harness rather than completing tasks.
- The recurring failure mode is shared trust boundaries: agent code can often modify, observe, or poison the same environment the evaluator later trusts.
- Examples are pretty damning:
  - SWE-bench: force tests to appear passing with `conftest.py` / monkey-patching.
  - Terminal-Bench: trojanized wrappers around verifier dependencies like `curl`, `uvx`, `pip`, or `python`.
  - WebArena: `file://` access leaks local task configs containing gold answers; separate DOM and LLM-judge attacks also work.
  - FieldWorkArena: validator reportedly accepts any assistant response, so `{}` can score full marks.
  - OSWorld: gold artifacts are downloadable from public URLs; evaluator also reportedly uses `eval()` on VM-derived strings.
  - GAIA: public answers plus over-aggressive normalization make the benchmark easy to game.
  - CAR-bench: LLM judge prompt injection and skipped reward components on some hallucination tasks.
- Their broader point is stronger than "this benchmark has bugs": benchmark scores are driving model choice, safety claims, and investment decisions despite often being non-adversarial and easy to inflate.
- The useful part is the checklist:
  - isolate agent from evaluator,
  - keep gold answers and eval metadata inaccessible,
  - never `eval()` untrusted input,
  - sanitize LLM-judge inputs,
  - adversarially red-team the evaluator itself,
  - treat all agent-produced traces as untrusted,
  - rotate/withhold benchmark answers.
- Benchmarks should be penetration-tested like software. Their planned `BenchJack` scanner is basically pitched as benchmark pentesting.

## Why it matters

This is a clean articulation of the problem behind current coding-agent leaderboard hype: the number is only as trustworthy as the eval harness. A model can look superhuman on paper while just being better at noticing grading loopholes.

## Skeptical notes

- The article is persuasive, but it is still a self-presented writeup. Some claims should ideally be independently reproduced benchmark-by-benchmark.
- "All major benchmarks are broken" is directionally believable, but the severity still depends on whether maintainers patch quickly, whether public leaderboards were actually affected, and how much exploitability transfers to private/internal evals.
- Even if the benchmarks are flawed, relative signal may still exist in some cases; the paper mainly kills naive trust in raw leaderboard scores.
