---
title: Towards Self-Driving Codebases
source: https://cursor.com/blog/self-driving-codebases
saved: 2026-03-28
type: article
tags:
  - ai-agents
  - multi-agent
  - coding-agents
  - cursor
  - infrastructure
  - software-engineering
---

# Towards Self-Driving Codebases

Cursor research on scaling long-running autonomous coding with multi-agent systems. Built a web browser with ~1,000 commits/hour across 10M tool calls over one week, almost entirely without human intervention.

## Key Takeaways

### Evolution of architecture
1. **Single agent** → lost track, proclaimed false success, got stuck on complexity
2. **Shared state file** → locking hell, contention, agents avoided big tasks
3. **Planner → Executor → Workers** → bottlenecked by slowest worker, too rigid
4. **Continuous executor** → pathological behaviors (sleeping, refusing to plan, premature completion) — too many roles at once
5. **Final design** → root planner + recursive subplanners + isolated workers with handoffs

### Final system design
- **Root planner** owns full scope, delegates targeted tasks, does no coding
- **Subplanners** recursively own narrower slices — fan out workers while maintaining ownership
- **Workers** pick up tasks in isolation, work on own repo copy, write handoff summaries
- **Handoffs** propagate info up the chain — not just diffs but concerns, deviations, feedback
- No integrator (became bottleneck/"red tape")
- No cross-talk between workers — convergence happens through the ownership chain

### Throughput tradeoffs
- 100% commit correctness caused serialization and system halts — accepting some error rate was key
- Errors arise then get fixed quickly by other agents — steady error rate, not exploding
- Ideal: accept some error rate in main, maintain a "green" branch with periodic fixup passes
- Some duplicate work (multiple agents touching same file) is cheaper than over-engineering coordination

### Freshness mechanisms
- Scratchpads should be rewritten, not appended to
- Auto-summarize on context limits
- Self-reflection and alignment reminders in system prompts
- Agents encouraged to pivot and challenge assumptions

### Infrastructure learnings
- Single large VM per run (hundreds of agents) — avoided distributed systems complexity
- Disk I/O became the bottleneck, not CPU/RAM — project structure affects token throughput
- Git/Cargo shared locks don't scale with hundreds of agents — opportunity for copy-on-write and deduplication
- Dev tooling designed for single users breaks at multi-agent scale
