---
title: Matt Pocock's 5 daily agent skills
source: https://x.com/mattpocockuk/status/2033647563627212953
saved: 2026-03-17
type: tweet
tags:
  - agent-skills
  - coding-agents
  - process
  - tdd
  - claude-code
intaked_by: glitch418x
---

# Matt Pocock's 5 daily agent skills

By Matt Pocock (@mattpocockuk) — "Process has never been more important. Skills are the best way to bundle up processes for agents."

## The 5 skills

1. **/grill-me** — interrogates you about your plan before you start coding
2. **/write-a-prd** — generates a product requirements doc from conversation
3. **/prd-to-issues** — breaks a PRD into actionable issues
4. **/tdd** — test-driven development loop
5. **/improve-my-codebase** — scans and suggests improvements (be mindful applying it)

Skills are open source: linked in thread (asked for repo link, Matt shared it).

## Video deep dive (16 min)

Matt walks through his full dev flow using these 5 skills in sequence:

### /grill-me
- Fires a "design tree" of questions at you, resolving dependencies between concepts
- Sessions can be 30-45 min with 30-50 questions for complex features
- "Skills don't have to be long to be impactful — just choose the right words at the right time"

### /write-a-prd
- Takes the grilled idea → creates a PRD as a GitHub issue
- Steps: detailed description → explore repo to verify → interview user (reuses grill-me) → sketch major modules → write PRD from template
- PRD includes problem statement, solution, user stories, implementation decisions
- User stories describe desired behavior — format is flexible (could use Cucumber etc.)
- Implementation decisions kept non-prescriptive so the PRD stays durable

### /prd-to-issues
- Takes the PRD (destination) → creates a Kanban of vertical slice issues (the journey)
- Locates PRD → explores codebase → drafts vertical slices with blocking relationships
- Key insight: **tracer bullet** approach — each issue is a thin vertical slice cutting through all integration layers, not a horizontal slice of one layer
- Prioritizes slices that flush out unknown unknowns first
- Blocking relationships enable parallel agent execution
- Issues reference parent PRD so agents can fetch context

### /tdd
- Forces red-green-refactor loop
- Key workflow: confirm interface changes with user → confirm which behaviors to test → design interfaces for testability → write one failing test → write code to pass → refactor
- **Interface design is critical**: restructure many small undifferentiated modules into fewer deep modules with thin interfaces — much easier for AI to navigate and test
- "TDD has been the most consistent way I've improved agents' outputs"
- LLMs are reluctant to refactor their own code while it's in context — clearing context makes them less precious

### /improve-my-codebase
- Explores codebase looking for "deepening opportunities" (shallow → deep modules)
- Questions: where does understanding one concept require bouncing between many files? Where are pure functions extracted just for testability but real bugs hide in how they're called?
- Spawns 3+ sub-agents in parallel, each produces a radically different interface design
- Agent recommends strongest design, proposes hybrids
- Creates refactor RFC as GitHub issue → then use /prd-to-issues to create the journey
- "Run this once a week to identify opportunities"

### The full loop
grill-me → write-a-prd → prd-to-issues → (agents execute with TDD) → improve-my-codebase → repeat

### Key insights
- "The most successful way to get code quality up from agents is to treat them like humans — humans with weird constraints"
- Skills are language/framework agnostic — work in any codebase
- Agent quality goes up as codebase quality improves (garbage in → garbage out)
- "I'm not teaching Claude Code, I'm teaching real engineering skills applied to AI"

## Key quotes from replies

- "Skills as modules > glue" — skills are composable, shareable, iterable
- "We run 20+ skills across 6 agents. Skills encode the operational contract: what to do, what to check, when to escalate, what to never touch." — @MindTheGapMTG
- "The skill IS the institutional knowledge"
- "The biggest in demand skill for humans right now is basically project management"
- Skills invoked manually with slash commands, not auto-triggered

## Takeaway

Skills = bundled processes for agents. The pattern: define your engineering process as reusable skill files, invoke them explicitly. The full loop (grill → PRD → issues → TDD → improve) is a complete development lifecycle managed through skills.
