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
---

A YouTube thumbnail experiment that turned clickability into twelve binary visual checks scored by Gemini Vision, then looped generate-score-rewrite for ten iterations.

## Key takeaways

- **Scoring loop**: Generate thumbnails, score them against twelve binary criteria, rewrite the prompt from failures, and regenerate.
- **Score lift**: Ten iterations moved results from 8.7/12 to 11/12 without manual feedback.
- **Feedback stack**: Gemini Vision scores in seconds, YouTube CTR over days, A/B tests as the highest-confidence ground truth, plus optional human review.
- **Binary criteria**: A beautiful thumbnail is subjective; twelve binary design checks scored by a vision model are automatable.
