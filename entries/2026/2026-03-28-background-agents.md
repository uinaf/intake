---
title: "The Self-Driving Codebase: Background Agents"
source: https://background-agents.com/
saved: 2026-03-28
type: article
tags:
  - ai-agents
  - background-agents
  - coding-agents
  - sdlc
  - infrastructure
  - devops
---

## Key Takeaways

1. **Background agents reason, scripts execute.** The defining difference between CI/CD automation and background agents is decision-making at each step — reading context, generating fixes, explaining changes.
2. **Hierarchy beats flat coordination.** Cursor's research proved that self-coordinating equal-role agents collapse under lock contention. What works: root planner → recursive subplanners → independent workers with isolated repo copies.
3. **Accept a small constant error rate.** Requiring 100% correctness before every commit causes serialization bottlenecks. Letting agents fix each other's errors is more efficient than preventing all errors upfront.
4. **Three infrastructure pillars are non-negotiable:** isolated compute (sandboxed VMs per agent), event routing (triggers from PRs, CVEs, CI failures, schedules), and governance (permissions, audit trails, blast radius controls, human review gates).
5. **Developers move "on the loop" not "in the loop."** The role shifts from writing every line to: constraint design, system architecture for agent work, deep review, and trust calibration.
6. **Constraints outperform instructions.** "No TODOs, no partial implementations" works better than "remember to finish implementations." Quantify scope ("generate 20-100 tasks") instead of vague directives.
7. **Standardized dev environments are prerequisite infrastructure.** Stripe, Ramp, and Ona all had cloud-based standardized environments before agents — that's what enabled them to scale. Git worktrees on localhost break immediately with parallel agents in monorepos.
8. **Real-world production numbers:** Stripe Minions merge 1,000+ agent-authored PRs/week. Ramp's Inspect accounts for 57% of merged PRs (30% frontend+backend). Ona reached 88.5% agent-authored PRs on main.

---

## Main Article: The Self-Driving Codebase

**Source:** https://background-agents.com/ (fetched via vibesparking.com mirror)
**Published:** March 2, 2026

### Core Narrative

Cursor's AI system generated ~8,000 commits in a single 8-hour stretch. Over 7 days: 10M tool calls, hundreds of concurrent agents, peak ~1,000 commits/hour. The project was a web browser — real engineering, not a demo. Humans watched dashboards and calibrated direction.

### Architecture Evolution (What Failed → What Worked)

- **Single powerful model (Opus 4.5):** Lost track of progress, proclaimed premature success. Failed.
- **Self-coordinating equal agents:** Shared state files caused lock contention. 20 agents → throughput of 1-3. Agents avoided complex tasks to minimize conflicts. Failed.
- **Hierarchical system (final design):**
  - Root planner: owns entire scope, never writes code
  - Recursive subplanners: subdivide work, maintain ownership
  - Independent workers: isolated repo copies, write handoffs
  - Information flows upward without global synchronization
  - Individual failures don't cascade — anti-fragile

### Key Prompting Insights

- Constraints > instructions ("No TODOs" > "finish implementations")
- Avoid checkbox mentality — high-level intent + agent autonomy > granular task lists
- Quantify scope — "generate 20-100 tasks" > "generate many tasks"
- Don't instruct for things the model knows; only instruct for what it doesn't know or domain-specific processes

### Deployed Use Cases Today

1. **Dependency updates** — scheduled audits, PRs for safe updates, changelog analysis for major versions
2. **CVE remediation** — triggered by advisories, generates fix + test + explanatory PR in minutes
3. **CI/CD migration** — translates pipeline configs file by file with testing
4. **Test coverage expansion** — analyzes gaps, writes targeted tests, verifies, submits
5. **Linting/standards enforcement** — applies new standards across multiple repos consistently

### The Developer Role Shift

- **Prompt engineering & constraint design** — what constraints produce reliable output
- **System architecture for agent work** — small modules, clear interfaces, minimal cross-cutting dependencies
- **Review at the right depth** — catching technically-correct-but-contextually-wrong
- **Trust calibration** — knowing when to let agents run vs. intervene

---

## Cursor Research: "Towards Self-Driving Codebases"

**Source:** https://cursor.com/blog/self-driving-codebases
**Published:** ~Early 2026

The primary source research behind the main article. Much more detail on the iterative harness development.

### Infrastructure Details

- Ran on single large Linux VMs (not distributed) to avoid premature complexity
- Logged all agent messages, system actions, command outputs with timestamps for replay and analysis
- Used Cursor itself to analyze logs and find behavioral patterns

### Multi-Agent Evolution (Detailed)

1. **Self-coordination:** Agents used shared state file with locks. Locks caused contention, agents forgot to release them, throughput collapsed. Lockless optimistic concurrency helped but didn't fix structural issues.
2. **Structured roles (planner/executor/judge/workers):** Better but bottlenecked by slowest worker. Too rigid — couldn't dynamically readjust.
3. **Continuous executor:** Removed independent planner, executor plans + spawns. Added freshness mechanisms (rewrite scratchpad.md, auto-summarize at context limits, self-reflection prompts). But became pathological: sleeping randomly, refusing to delegate, claiming premature completion — overwhelmed by too many simultaneous roles.
4. **Final design:** Hierarchical planner/subplanner/worker system. Workers unaware of larger system, work on own repo copy, submit handoffs. Information propagates upward. System remains dynamic and self-converging.

### Key Technical Observations

- **Disk became the hotspot** — hundreds of agents compiling simultaneously created GB/s I/O of build artifacts. Project structure and DX directly affect token and commit throughput.
- **Git and Cargo shared locks** are designed for single-user — rethinking these with database-style concurrent primitives could yield easy wins.
- **Copy-on-write and deduplication** across agent repo copies (most files identical) is a low-hanging optimization.
- **The ideal efficient system accepts some error rate** but maintains a final "green" branch with fixup passes before release.

### Specification Failures

- "Spec implementation" was too vague → agents went deep into obscure features
- Performance expectations needed explicit instructions and enforced timeouts
- Dependency philosophy needed explicit constraints on which libraries to use/avoid
- Architecture matters: monolith structure caused I/O bottleneck; restructuring into self-contained crates dramatically improved throughput

---

## Ona: "A Visual Guide to Self-Driving Codebases"

**Source:** https://ona.com/stories/visual-guide-self-driving-codebases

Announcement post for background-agents.com. Frames the narrative:

- The bottleneck of software development has shifted from writing code to everything around it
- Running parallel agents locally (worktrees, multiple Macs) is a "false summit"
- Agents need to move not just to background but to the cloud — on schedules and event triggers
- Industry needs shared terminology: background agents, parallel agents, fleets, swarms, proactive agents, sub-agents
- background-agents.com is positioned as a definitional/educational resource, not a product announcement

---

## Ona Webinar: "The Primitives of a Self-Driving Codebase"

**Source:** https://ona.com/events/background-agent-primitives

Webinar covering infrastructure primitives for background agents at scale:

### Four Primitives

1. **Sandboxed execution** — isolated environments per agent
2. **Governance** — permissions, audit, blast radius
3. **Context and connectivity** — access to internal services, databases, APIs
4. **Orchestration** — managing agent fleets

### Key References

- Stripe's Minions: 1,000+ agent-authored PRs merged/week
- Ramp's background agent: 57% of merged PRs
- Both companies invested heavily in standardizing dev environments *before* agents
- Worktrees and local agents are dead ends for organizational scale

---

## Ramp: "Why We Built Our Background Agent" (Inspect)

**Source:** https://builders.ramp.com/post/why-we-built-our-background-agent

The most detailed implementation guide in this collection — practically a spec for building your own.

### Architecture

- **Sandbox:** Each session in a sandboxed VM on Modal. Full dev environment: Vite, Postgres, Temporal. Connected to Sentry, Datadog, LaunchDarkly, Braintrust, GitHub, Slack, Buildkite.
- **Agent:** Uses OpenCode as the coding agent (structured as server-first, typed SDK, comprehensive plugin system, readable source code for agent self-understanding).
- **API:** Cloudflare Durable Objects — each session gets its own SQLite DB. Uses Agents SDK for real-time streaming via WebSockets Hibernation API.
- **Clients:** Slack bot, web interface (with hosted VS Code and streamed desktop view), Chrome extension for visual React changes.

### Key Design Decisions

- **Pre-built images** refreshed every 30 minutes — clone, install deps, initial setup all done ahead of time. Sessions start from snapshots.
- **Warm sandbox pool** — start warming when user begins typing, ready before they hit enter.
- **Allow reads before sync completes** — agent starts researching immediately, blocks writes until sync is done (OpenCode plugin on `tool.execute.before`).
- **Multiplayer sessions** — any number of people can work in one session together, attributed commits per person. Use cases: teaching non-engineers, live QA, reviewing PRs collaboratively.
- **Child sessions** — agents can spawn sub-sessions for research across repos or breaking up large tasks.
- **Queue follow-up prompts** rather than interrupting — easier to manage, lets users send thoughts while AI works.

### Authentication & Security

- GitHub auth for user tokens → PRs opened on behalf of users (not the app) to prevent self-approval of changes.
- Sandbox pushes changes, API uses user's GitHub token for PR creation.
- GitHub webhooks track branch/PR lifecycle.

### Results

- ~30% of all PRs merged to frontend and backend repos are written by Inspect
- Reached this level in just a couple months
- No forced adoption — built to needs, created virality through public Slack usage

---

## Ona: "The Last Year of Localhost"

**Source:** https://ona.com/stories/the-last-year-of-localhost
**Author:** Johannes Landgraf, CEO of Ona (formerly Gitpod)

### Central Thesis

Cloud development environments are now a hard prerequisite for background agents. The companies leading the agent wave (Stripe, Ramp, Ona) standardized their dev environments years before agents existed. Those investments are now paying compound returns.

### Why Localhost Breaks

- **Git worktrees in monorepos:** Each needs its own dependency install, running services, database instances. Port conflicts, shared cache corruption, machine grinding to a halt with 3+ worktrees.
- **Organizational fragmentation:** No standardized approach — teams independently discover the same limitations.
- **Scale mismatch:** Agents need many environments simultaneously. No laptop is big enough for 5 full monorepo environments in parallel.

### What Cloud Dev Environments Need

1. **Isolation: VMs, not containers.** Containers share kernels — agent compromising a container can reach others. VMs provide real security boundaries.
2. **Declarative, reproducible definitions.** Dev Container spec (devcontainer.json) is the underappreciated hero. Open standard, vendor-neutral environment definition.
3. **Automated lifecycle.** `automations.yaml` defining services (long-running) and tasks (one-time setup) with explicit triggers. Turns reproducible → self-assembling.
4. **Connectivity and context.** Environments inside customer's VPC with native network access. No tunnels, no exported secrets. Agent output proportional to context quality.
5. **Kernel-level security.** Short-lived scoped tokens + kernel-level syscall monitoring. Policy-as-code for hard constraints ("no public S3 buckets", "no writes to production databases").

### The Audit Checklist

- Can a new engineer go zero → running code in <10 minutes?
- Can you spin up 10 identical environments programmatically?
- Is your environment definition checked into your repo?
- Does your environment set itself up without manual steps?
- Can environments reach all internal services securely?
- If an agent is compromised, what limits blast radius?

---

## Stripe: "Minions" (Parts 1 & 2)

**Source:** https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents
**Published:** February 2026

Article content was paywalled/JS-rendered and couldn't be fully extracted, but referenced extensively in other articles:

- **Minions** are Stripe's homegrown one-shot, end-to-end coding agents
- 1,000+ PRs merged per week, all agent-authored with human review
- Built on top of Stripe's pre-existing cloud devbox infrastructure (EC2-based, with Sorbet server, full monorepo checkout, rsync from laptops)
- The "Leverage" team builds internal productivity tools
- Agent infrastructure was a "thin layer on top of years of environment investment"

---

## Cross-Cutting Themes and Insights

### 1. Infrastructure > Model Intelligence

Every source agrees: the bottleneck isn't model capability. It's the surrounding infrastructure. Sandboxing, environment reproducibility, network connectivity, and governance determine whether agents produce merge-ready PRs or useless diffs.

### 2. The Hierarchy Pattern is Universal

Cursor's research, Stripe's Minions, and Ramp's Inspect all converge on hierarchical agent architectures. Flat coordination fails. Clear ownership, isolated workspaces, and upward information flow work.

### 3. Environment Standardization is the Entry Ticket

Stripe, Ramp, and Ona all invested in dev environment standardization years before agents. Teams without this foundation will hit a wall regardless of model quality. The "Last Year of Localhost" framing is that agents are finally forcing the cloud-dev migration that was always theoretically right but never urgent enough.

### 4. Accept Imperfection, Optimize for Throughput

Cursor's research found that requiring 100% correctness creates serialization bottlenecks. Ramp's approach of spawning many sessions and seeing "which one lands" reflects the same philosophy. The efficient system maintains a small constant error rate with rapid correction.

### 5. The PR as Safety Gate

Every implementation keeps the pull request as the human review point. Ramp explicitly prevents self-approval by using user GitHub tokens (not app tokens) for PR creation. The governance model is: agents do the work, humans approve the merge.

### 6. Multiplayer and Organizational Access

Ramp's multiplayer sessions and Ona's "anyone can spin up an environment" both point to agents democratizing code changes beyond engineers. PMs, designers, and support teams can participate when the barrier to entry is low enough.

### 7. Specification Quality is the New Bottleneck

Cursor's research shows that agent output quality directly mirrors specification quality. Vague specs → agents pursue obscure features. The human skill that matters most is writing good constraints and specifications — not writing code.

### 8. Vendor Landscape

- **Ona** (formerly Gitpod): Cloud dev environments + agent infrastructure, VM-based isolation, Dev Container spec, VPC-native
- **Modal**: Sandbox/VM infrastructure (used by Ramp)
- **Cloudflare**: Durable Objects + Agents SDK for API layer (used by Ramp)
- **OpenCode**: Open-source coding agent recommended by Ramp as the best server-first implementation
- **Cursor**: Research on multi-agent systems + Background Agents feature for users
