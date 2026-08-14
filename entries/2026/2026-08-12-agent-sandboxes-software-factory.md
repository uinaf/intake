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

IndyDevDan's "factory in a box": one local orchestrator provisions five exe.dev VMs, installs the same app and workflow, and runs several model-and-harness stacks against one redesign prompt.

## Key takeaways

- **Three layers**: An out-of-sandbox orchestrator provisions machines, an in-sandbox orchestrator starts the workflow, and task agents run plan-build-test-review-document stages.
- **Repeatable lifecycle**: The asset is mount, run, observe, and teardown. Nondeterministic model calls sit inside deterministic setup, gates, tests, and cleanup.
- **Best of N**: Parallel configurations produce comparative evidence on quality, speed, cost, and reliability. In the demo, one open-weight run failed while cheaper stacks produced usable variants.
- **Boundary attention**: Specify the task and acceptance criteria up front, then review outputs. Live URLs, logs, spend, and SSH keep intervention without constant supervision.
- **Incomplete boundary**: A sandbox is not automatically secure. The strongest concrete control here is a capped, short-lived OpenRouter key that teardown revokes.
- **Cost of parallelism**: Best-of-N pays only when automated gates reject bad candidates and a better result is worth the extra compute and review.
- **Prototype caution**: A small number of runs on one UI task, not benchmark evidence. Broad claims that sandboxes beat containers are not independently established.
