---
title: YouTube Thumbnail Optimization via Autoresearch
source: https://youtube.com/watch?v=0PO6m09_80Q
saved: 2026-03-28
type: video
tags:
  - autoresearch
  - design
  - optimization
  - evaluator-pattern
intaked_by: glitch418x
---

# Thumbnail Optimization via Autoresearch

Turned subjective "is this clickable" into 12 binary criteria scored by Gemini Vision.

## The Loop
1. Generate thumbnails
2. Score against 12 binary criteria (clear focal point? readable text? emotional expression? etc.)
3. Identify failures, rewrite prompt
4. Regenerate, re-score
5. 10 iterations: 8.7/12 → 11/12 without manual feedback

## Multi-Source Feedback (fast → slow)
- Gemini Vision scoring (seconds)
- YouTube analytics / daily CTR (days)
- A/B split test results (highest confidence — controlled experiment)
- Human-in-the-loop feedback

## Key Insight
Bucket 3→2 conversion: "beautiful thumbnail" is subjective. "12 binary design criteria scored by a vision model" is automatable. The A/B split test is the ultimate ground truth, just slower.
