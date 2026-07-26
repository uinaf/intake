---
title: "Autoresearch: Auto-Improve AI Skills in a Loop"
source: https://x.com/itsolelehmann/status/2033919415771713715
saved: 2026-03-18
type: tweet
tags:
  - ai
  - skills
  - prompting
  - automation
  - agents
intaked_by: glitch418x
---

# Autoresearch — Auto-Improve AI Skills in a Loop

Based on Karpathy's autoresearch method, adapted for Claude skills/prompts.

## Core Idea

Instead of manually iterating on prompts, let an agent do it in a loop:
1. Try a small change to the skill prompt
2. Run the skill with test inputs
3. Score the output against a checklist
4. Keep the change if score improved, revert if not
5. Repeat until 95%+ or diminishing returns

## Key Concept: Scoring Checklist

The only human input needed is a set of yes/no quality checks (3-6 is the sweet spot). Examples for landing page copy:
- "Does the headline include a specific number or result?"
- "Is the copy free of buzzwords like 'revolutionary', 'synergy'?"
- "Does the CTA use a specific verb phrase?"
- "Does the first line call out a specific pain point?"
- "Is the total copy under 150 words?"

More than 6 questions → skill starts gaming the checklist.

## Results

Landing page skill: 56% → 92% pass rate in 4 rounds. Changes made:
- Added rule: headline must include specific number/result
- Added banned buzzwords list
- Added worked example of a strong output
- Tried tighter word count → reverted (hurt CTA quality)

## Takeaways

- Works on anything scorable: page speed (1100ms → 67ms in 67 rounds), cold outreach, newsletter intros, any repeated prompt
- Produces a changelog of what works/doesn't — transferable to future models
- Original skill preserved, improved version saved separately
- Live dashboard shows progress in real-time

## Relevance

Could apply this to OpenClaw skills — auto-improve skill prompts by scoring outputs against quality checklists. The sdlc-ded skill's inconsistent behavior across sessions is exactly the kind of thing this could tighten.
