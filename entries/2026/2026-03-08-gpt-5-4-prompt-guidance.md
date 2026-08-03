---
title: Prompt Guidance for GPT-5.4
source: https://developers.openai.com/api/docs/guides/prompt-guidance
saved: 2026-03-08
type: article
tags:
  - openai
  - prompting
  - agents
---

## Strengths
- Strong personality/tone adherence with less drift over long answers
- Agentic workflows robustness — sticks with multi-step work, retries, completes loops
- Evidence-rich synthesis in long-context / multi-tool workflows
- Instruction adherence in modular, block-structured prompts
- Batched/parallel tool calling with accuracy
- Spreadsheet, finance, Excel workflows

## Where Explicit Prompting Helps
- **Low-context tool routing** early in sessions — less reliable when context is thin
- **Dependency-aware workflows** — needs explicit prerequisite checks
- **Reasoning effort selection** — higher effort ≠ better; depends on task shape
- **Research tasks** — needs disciplined source collection and citation rules
- **Irreversible/high-impact actions** — needs verification prompts
- **Terminal/coding-agent environments** — tool boundaries must stay clear

## Key Prompt Patterns

### Output Contract
- Return exactly the sections requested, in order
- Apply length limits only to intended sections
- If a format is required (JSON, MD, SQL, XML), output only that format

### Verbosity Controls
- Concise, information-dense writing
- Don't repeat the user's request
- Brief progress updates
- Don't over-shorten at the expense of evidence/reasoning

### Follow-Through Policy
- Clear intent + reversible + low-risk → proceed without asking
- Ask permission only for irreversible, external side effects, or missing sensitive info
- Briefly state what was done and what remains optional

### Instruction Priority
- User instructions override style/tone/formatting defaults
- Safety, honesty, privacy constraints don't yield
- Newer user instructions override older conflicting ones
- Preserve non-conflicting earlier instructions

### Tool Persistence
- Use tools when they materially improve correctness
- Don't stop early when another call would improve results
- Keep calling until task complete AND verification passes
- Empty/partial results → retry with different strategy

### Dependency Checks
- Check prerequisites before acting
- Don't skip lookups just because the end state seems obvious
- Resolve dependencies before dependent actions

### Parallel Tool Calling
- Parallelize independent retrieval/lookup steps
- Don't parallelize steps with prerequisite dependencies
- After parallel retrieval, synthesize before more calls

### Completeness Contract
- Task incomplete until all items covered or marked [blocked]
- Track processed items/pages for batches
- Confirm coverage before finalizing

### Empty Result Recovery
- Don't immediately conclude no results exist
- Try 1-2 fallback strategies (alternate wording, broader filters, alternate source)
- Report what was tried alongside "no results"

## Relevance to OpenClaw
- GPT-5.4 is configured as fallback model for all agents
- System prompts already cover most patterns (working agreement, safety, tool narration)
- Main watch item: tool routing reliability in early-session / low-context scenarios
- XML-block structured prompts work well with this model
