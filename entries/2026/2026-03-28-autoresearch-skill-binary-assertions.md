---
title: Self-Improving Claude Code Skills via Binary Assertions
source: https://youtube.com/watch?v=wQ0duoTeAAU
saved: 2026-03-28
type: video
tags:
  - autoresearch
  - skills
  - binary-assertions
  - north-star
intaked_by: glitch418x
---

# Self-Improving Skills via Binary Assertions ⭐ NORTH STAR

Two layers of autoresearch on Claude Code skills:

## Layer 1: Skill Description Improvement
- Does the skill trigger correctly? Loop: adjust description → test → keep/discard

## Layer 2: Skill Output Improvement (Karpathy loop)
- Define BINARY assertions (yes/no, not 1-10)
- Run skill → evaluate against assertions → tweak SKILL.md → re-run
- LinkedIn post skill: failing → perfect in 2 iterations
- Key instruction: "Never stop. Once the experiment loop has begun, do not pause."

## Critical Insight
"The word binary is everything. This is where most people get it wrong."
- Not "rate this 1-10" — binary yes/no
- Reduces noise, makes the loop deterministic
- Can't assess tone/creativity/context — still need human for that

## For Our Harness Skill
Binary assertions we already have from today's evals:
- Did it output a grade? ✓/✗
- Did it list all 7 layers? ✓/✗
- Did it catch jest.mock? ✓/✗
- Did it produce evidence? ✓/✗
- Did it run a command? ✓/✗
Close the loop: agent modifies SKILL.md, re-runs evals, keeps if score improves.
