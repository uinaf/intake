---
title: Matt Pocock's 25 composable agent skills
source: https://x.com/mattpocockuk/status/2088290952704151671
saved: 2026-08-14
type: video
tags:
  - agent-skills
  - coding-agents
  - process
  - context-engineering
  - software-engineering
---

Matt Pocock tours 25 small, composable skills for engineering work, organizing them into short implementation loops, multi-session planning flows, upkeep tools, and shared reference skills.

## Key takeaways

- **Core loop**: `grill-with-docs` aligns terminology and records decisions before `implement` runs a TDD loop and finishes with a review against repository standards and the agreed design.
- **Context budget**: Pocock treats roughly 150K tokens as a heuristic “smart zone”; work unlikely to fit is externalized into a specification and implementation tickets instead of relying on one growing session.
- **Planning hierarchy**: `to-spec` captures the destination, `to-tickets` slices known work across sessions, and `wayfinder` uses decision, prototype, and research tickets when the route is still too uncertain to specify.
- **Focused repairs**: Dedicated skills add rigorous feedback loops for bug diagnosis and reconstruct merge-conflict intent from primary Git history before changing either side.
- **Human handoffs**: `handoff` packages work for another agent, while `to-questionnaire` moves unresolved interview questions to a human stakeholder and feeds the answers back later.
- **Progressive disclosure**: Most workflow skills are manually invoked and stay out of context until needed; reusable references such as TDD, grilling, domain modeling, and codebase design can be called by other skills.
- **Evidence limit**: The video is the author's fast tour of his own workflow, not a comparative evaluation; its value is the compositional architecture and routing vocabulary rather than proof that every skill improves outcomes.
