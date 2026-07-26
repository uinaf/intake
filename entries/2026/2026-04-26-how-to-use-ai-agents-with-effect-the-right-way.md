---
title: How to use AI Agents with Effect the right way
source: https://youtube.com/watch?v=XaNHyZbFUBY
saved: 2026-04-26
type: video
tags:
  - coding-agents
  - context-engineering
  - effect-ts
  - mcp
  - skills
intaked_by: glitch418x
---

# How to use AI Agents with Effect the right way

- Channel: Effect | TypeScript at Scale
- Published: 2026-03-24
- Duration: 9:47
- Source notes: YouTube metadata + English subtitles extracted with `yt-dlp`; transcript is auto/YouTube subtitle quality, so exact wording may be rough.
- Related full video from description: https://www.youtube.com/watch?v=BKYFmcij_gk&t=5550s

## Core claim

For coding agents, putting relevant source code directly inside or next to the project works better than exposing that same knowledge through MCP servers, skills, README-heavy docs, or package internals. Current coding models are post-trained to inspect repositories, understand code, and patch code; they are less naturally optimized to discover and use auxiliary context channels.

## Key takeaways

- **Clone/source-code context beats MCP for coding work right now.** The speaker says they tried an open-source MCP approach and it did not perform as well as simply having the repo available in the codebase/repo tree.
- **This is explained as a post-training artifact.** Coding models are trained/tuned around “read code → understand code → edit code,” so source files in the repository are the model’s native habitat.
- **Agent instruction files are prompting scaffolding, not the main knowledge substrate.** `AGENTS.md`/similar files are useful mostly to point the agent at relevant codebases and patterns; they should not become huge manuals.
- **Models may under-read `node_modules`, README files, and docs.** The observed heuristic is that agents focus on source directories and ignore dependency internals or markdown more often, even when those contain useful information.
- **For Effect specifically, shipping only package internals may be weaker than a repo/subtree/examples layout.** If Effect source or examples live in a first-class source directory, agents are more likely to inspect and copy correct patterns.
- **Git subtree/local clone is a viable mechanism.** The exact packaging can vary, but the important part is that the source/examples are locally available in a place the agent treats as code context.
- **Examples need version clarity.** If both Effect v3 and v4 examples exist, structure them so agents know which version to copy from; otherwise they may imitate the wrong version during migrations.
- **Closed-source APIs need a generated-code workaround.** If the dependency is closed-source but has an OpenAPI spec, generate a client and keep that generated client source in the repo. If there is only documentation, first have the model generate/iterate a client so it has code-shaped context.
- **Skills are described as mostly shared prompts.** Useful, but currently new enough that models are not deeply optimized around them; source code still tends to perform better for implementation guidance.

## Practical pattern

For a project using Effect or another complex library:

1. Add a local `repos/`, `vendor/`, `examples/`, or subtree directory with the relevant library/source/example code.
2. Keep `AGENTS.md` short: state that the source exists, where it is, what version it represents, and which patterns to follow or avoid.
3. Prefer code examples over prose explanations when trying to steer agents.
4. For migrations, separate old/new examples clearly, e.g. `examples/effect-v3/` vs `examples/effect-v4/`, and explicitly tell the agent which one is canonical.
5. For closed APIs, generate a typed client from the API spec and commit/locally expose that code so agents can inspect it like any other source.

## Concrete workshop example

Altay pointed to Michael Arnaldi’s workshop repo as another concrete version of the same recommendation: https://github.com/mikearnaldi/aie-workshop

Observed layout/guidance:

- Repo includes `./.repos/effect` as an Effect reference repository.
- `AGENTS.md` explicitly tells agents: “You have access to the Effect repository at `./.repos/effect`.”
- Agents are told to inspect `./.repos/effect/AGENTS.md` and existing Effect source/tests before introducing patterns.
- Local convention docs live under `./.patterns/`, including HTTP API, SQL, and testing patterns.
- The repo’s `AGENTS.md` is not a huge tutorial; it mainly points the agent at local code references and pattern files.

## Concrete example project: accountability

Altay also pointed to Michael Arnaldi’s `accountability` repo as an example of him building with this approach: https://github.com/mikearnaldi/accountability

Observed layout/guidance from a shallow clone:

- Monorepo accounting app using Effect backend + TanStack Start frontend.
- Packages: `packages/core`, `packages/persistence`, `packages/api`, `packages/web`.
- Reference repos are vendored locally under `repos/`:
  - `repos/effect`
  - `repos/effect-atom`
  - `repos/tanstack-router`
- `CLAUDE.md` documents architecture and points agents at `repos/` as git subtree/reference repos.
- `specs/` is the main planning/context system, with guides, architecture docs, pending work, completed work, and reference docs.
- `RALPH_AUTO_PROMPT.md` defines an autonomous “Ralph Auto” loop: choose one task within focus, implement, update specs, run `pnpm typecheck`, `pnpm lint`, `pnpm test`, then emit parseable `TASK_COMPLETE:` / `NOTHING_LEFT_TO_DO` signals.
- The project strongly enforces backend/frontend alignment: frontend-only workarounds are banned when backend/API/service/repository changes are needed.
- Frontend is intentionally **no Effect**; it uses React/TanStack Start + `openapi-fetch`, while Effect stays in server/core/persistence/API layers.

## Useful quotes / near-quotes

> “Having the codebase there, you just literally point at the codebase.”

> “The model has a single job, which is read code, patch code, edit code.”

> “The model doesn’t differentiate between the code of your project or the code of the library.”

> “At this point I’ve deleted all skills, removed all MCPs, and I just clone projects locally when I want to work with them.”

## Why this matters for us

This supports the direction of treating harness/workspace layout as a first-class agent primitive, not just writing better rules. It also lines up with our existing finding that environment/harness behavior matters as much as model choice. For Effect-heavy work, the next useful experiment is not more prompt text; it is a clean local source/examples layout that coding agents naturally inspect.

## Synthesis / working principle

The useful generalization is: **optimize the filesystem, not the prompt.**

- Repo shape beats prompt cleverness because coding agents are strongest at “read code, copy patterns, patch nearby code.”
- Vendored/reference repos are agent cognition scaffolding, not dependency management.
- Short `AGENTS.md` files should act as maps: where the reference repos live, which examples are canonical, which specs/pattern files matter, and which commands verify work.
- Rich local context ages better than giant instruction manuals. Big rule files rot; local examples/specs/patterns can evolve with the code.
- MCP servers and skills remain useful for discovery, orchestration, or reusable operations, but for implementation they are second-class compared with code-shaped local context.
- The best workspace shape is likely: reference repos + local pattern libraries + concise routing instructions + mandatory verification gates.
