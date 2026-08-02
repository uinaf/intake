---
title: "KernelEvolve: How Meta's Ranking Engineer Agent Optimizes AI Infrastructure"
source: https://engineering.fb.com/2026/04/02/developer-tools/kernelevolve-how-metas-ranking-engineer-agent-optimizes-ai-infrastructure
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-engineering
---

Section: Production Infrastructure & Operations

Meta's production-grade agentic kernel optimization system that autonomously generates optimized Triton kernels for hundreds of models serving billions of users daily. Achieves up to 17x speedup over PyTorch baselines with 100% correctness across 250 problems. Demonstrates harness design for continuous infrastructure optimization: a purpose-built job-harness evaluates each candidate kernel, feeds diagnostics back to the LLM, and drives search over hundreds of alternatives — reducing development time from weeks to hours.
