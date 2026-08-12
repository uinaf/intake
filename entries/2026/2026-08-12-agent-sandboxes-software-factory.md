---
title: Agent Sandboxes as the Compute Layer for Software Factories
source: https://www.youtube.com/watch?v=SEI_qIW4o2c
saved: 2026-08-12
type: video
tags:
  - coding-agents
  - harness-engineering
  - infrastructure
  - agent-security
  - observability-and-tracing
---

IndyDevDan demonstrates a “factory in a box”: one local orchestrator provisions five exe.dev virtual machines, installs the same application and agent workflow in each, and runs several model-and-harness configurations against one redesign prompt. Each sandbox contains its own orchestrator plus a deterministic plan-build-test-review-document pipeline, while exposed application and observability URLs let the operator inspect results without staying in every execution loop.

The useful architectural claim is that agent infrastructure should optimize for isolation, parallel scale, and operational autonomy together. A disposable machine gives each workflow an independent filesystem and runtime; a narrowly scoped OpenRouter provisioning key with a hard spend cap bounds credential and cost exposure; teardown revokes the key. This makes “best of N” practical: run several configurations, compare their output, cost, latency, and failure modes, then select or synthesize the best result.

## Key takeaways

- The system uses three layers: an out-of-sandbox orchestrator provisions and supervises machines, an in-sandbox orchestrator starts the workflow, and task agents execute the individual software-development stages. Keeping provisioning separate from execution reduces the amount of privileged logic inside each worker.
- The repeatable asset is the mount-run-observe-teardown lifecycle, not the demo application or any particular model. Agents are most useful when nondeterministic model calls sit inside deterministic setup, health checks, gates, tests, state capture, and cleanup.
- Best-of-N is also an evaluation mechanism. Running the same task through different model-and-harness stacks produces comparative evidence about quality, speed, cost, and reliability; in the demo, one open-weight run failed while cheaper workhorse configurations produced usable variants.
- Human attention moves to the boundaries: specify the task and acceptance criteria up front, then review and validate outputs at the end. Live URLs, logs, gate status, token spend, and SSH access preserve intervention and debuggability without requiring constant supervision.
- A sandbox is not automatically a complete security boundary. The video's strongest concrete control is the capped, short-lived credential; production use still needs restricted network egress, minimal external permissions, protected harness configuration, audit logs, and reliable teardown.
- Parallel factories multiply cost and selection work as well as output. Best-of-N pays off only when automated gates reject bad candidates and the value of a better result exceeds the extra compute and review burden.

## Implementation pattern

1. Package the application, agent configuration, and deterministic workflow as one reproducible factory image or setup process.
2. Provision one isolated machine per candidate configuration and inject only task-scoped, spend-capped credentials.
3. Run health checks before work, then execute the same task and acceptance criteria across all candidates.
4. Capture artifacts, tests, logs, runtime, token usage, and cost in a comparable result schema.
5. Select or synthesize the strongest passing result, revoke credentials, and tear down the machines by default.

The demo is an illustrative prototype rather than benchmark evidence: it compares a small number of runs on one UI task, and its broad claims about sandboxes outperforming containers are not independently established. The enduring idea is narrower and stronger—treat isolated compute, scoped credentials, observability, and deterministic verification as first-class parts of the agent harness.
