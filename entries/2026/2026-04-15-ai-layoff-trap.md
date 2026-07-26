---
title: The AI Layoff Trap
source: https://arxiv.org/abs/2603.20617
saved: 2026-04-15
type: paper
tags:
  - ai
  - economics
  - automation
  - labor
  - policy
  - game-theory
intaked_by: glitch418x
---

# The AI Layoff Trap
**Authors:** Brett Hemenway Falk (UPenn), Gerry Tsoukalas (Boston University)
**Date:** March 2026 | **Field:** Theoretical Economics (econ.TH)

## Core Argument

AI-driven automation creates a **demand externality** that traps rational firms in an automation arms race, even when they can see the cliff ahead. When firms replace workers with AI, they capture the full cost saving but only bear a fraction (1/N) of the resulting demand destruction — the rest falls on rival firms. This makes over-automation a **strictly dominant strategy** in competitive markets.

## Key Findings

1. **Over-automation is structural, not behavioral.** Perfect foresight doesn't fix it. Each firm's optimal automation rate exceeds the cooperative optimum because the demand externality is split across N competitors.

2. **More competition = worse distortion.** A monopolist fully internalizes the externality; fragmented markets show the widest gap. Counter-intuitive: competition doesn't discipline firms here, it dilutes their incentive to restrain.

3. **"Better" AI amplifies the problem (Red Queen effect).** Higher AI productivity widens the wedge — each firm perceives a market-share gain from automating beyond rivals, but at symmetric equilibrium these gains cancel, leaving only additional distortion.

4. **Wage adjustment can't fix it.** Endogenous wages change *when* the problem bites, not *whether* it exists. The wedge persists once activated.

5. **The resulting loss is deadweight, not transfer.** Both workers AND firm owners are harmed.

## Policy Evaluation (6 instruments tested)

| Instrument | Result |
|---|---|
| Upskilling | Narrows wedge, can't eliminate |
| Worker equity participation | Narrows wedge, can't eliminate |
| Coasian bargaining | Fails — automation is dominant strategy, no self-enforcing agreement |
| Capital income taxes | Doesn't alter automation rate (operates on profit levels, not per-task margin) |
| Universal Basic Income | Raises floor on living standards but leaves automation incentive unchanged |
| **Pigouvian automation tax** | **Only instrument that implements cooperative optimum** — set equal to uninternalized demand loss per task; revenue can fund retraining, making tax potentially self-limiting |

## Model Structure

- Task-based model (inspired by Acemoglu & Restrepo 2018), refocused on product market
- N symmetric firms choose automation rate α ∈ [0,1]
- Workers have higher marginal propensity to consume (MPC) than owners
- Displaced worker income fraction η replaced via reemployment/transfers; rest is lost to sector
- Convex integration cost (quadratic adjustment cost)
- Equilibrium automation rate: α^NE = (s - ℓ/N)/k
- Cooperative optimum: α^CO = (s - ℓ)/k
- Wedge: α^NE - α^CO = ℓ(1-1/N)/k > 0

## Empirical Context Cited

- Block cut ~half of 10K workforce (Dorsey: AI made roles unnecessary)
- 100K+ tech workers laid off in 2025, AI primary driver in >50% of cases
- Salesforce replaced 4K support agents with agentic AI
- Devin at Goldman Sachs/Infosys: 1 senior engineer = 5-person team
- ~80% of US workers hold jobs with tasks susceptible to LLM automation

## Distinction from Prior Work

- Beraja & Zorzi (2025): inefficiency through labor market (borrowing constraints), single firm sufficient. This paper: product market, requires competition, vanishes under monopoly.
- Acemoglu & Restrepo: focus on whether labor market rebalances. This: what happens on product side when rebalancing is slow/incomplete.
- Not a coordination failure that communication could resolve — it's a true externality with a dominant-strategy equilibrium.

## Takeaway

The AI layoff problem isn't that firms are irrational or shortsighted — it's that the market structure makes over-automation the only rational choice. Policy needs to target the competitive incentive itself, not just the aftermath. Pigouvian automation tax is the only fix that works at the margin where the distortion lives.
