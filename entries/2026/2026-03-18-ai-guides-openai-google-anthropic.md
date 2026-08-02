---
title: 9 AI Guides from OpenAI, Google, and Anthropic
source: https://x.com/mdancho84/status/2033870515060785391
saved: 2026-03-18
type: tweet
tags:
  - ai
  - guides
  - prompting
  - agents
  - reference
---

# 9 AI Guides — OpenAI, Google, Anthropic

Curated list of official guides from the big three.

## The Guides

1. **AI in the Enterprise** — OpenAI (PDF)
   - https://cdn.openai.com/business-guides-and-resources/ai-in-the-enterprise.pdf

2. **A Practical Guide to Building Agents** — OpenAI (PDF)
   - https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf

3. **Prompting Guide 101** — Google (PDF)
   - https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf

4. **Identifying and Scaling AI Use Cases** — OpenAI (PDF)
   - https://cdn.openai.com/business-guides-and-resources/identifying-and-scaling-ai-use-cases.pdf

5. **Building Effective Agents** — Anthropic (article)
   - https://www.anthropic.com/engineering/building-effective-agents

6. **Prompt Engineering** — Anthropic (docs)
   - https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview

7. **Kaggle Agents Companion** — Google/Kaggle (whitepaper)
   - https://www.kaggle.com/whitepaper-agent-companion

8. **601 Real-World Gen AI Use Cases** — Google (article)
   - https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders

9. **Prompt Engineering** — Google/Kaggle (whitepaper)
   - https://www.kaggle.com/whitepaper-prompt-engineering

## Key Observation

Each company emphasizes different failure modes:
- **OpenAI** → business value and scaling
- **Google** → prompting fundamentals and workspace integration
- **Anthropic** → when agents fail and how to build safely

## Detailed Notes (from accessible guides)

### Anthropic: Building Effective Agents (full article)

Core thesis: **the most successful agent implementations use simple, composable patterns — not complex frameworks.**

**Key distinction:** workflows (predefined code paths orchestrating LLMs) vs agents (LLMs dynamically directing their own processes). Both are "agentic systems."

**When NOT to use agents:** Start with the simplest solution. Agentic systems trade latency/cost for better task performance. For many apps, optimizing single LLM calls with retrieval + in-context examples is enough.

**Framework warning:** Frameworks create abstraction layers that obscure prompts and responses, making observability harder. Start with raw LLM APIs — many patterns are a few lines of code.

**5 workflows patterns:**

1. **Prompt chaining** — sequence of steps, each LLM processes previous output. Add programmatic "gates" between steps. Use when task cleanly decomposes into fixed subtasks. Example: generate copy → translate.

2. **Routing** — classify input, direct to specialized handler. Use for distinct categories that need different treatment. Example: customer service (general/refund/technical) → different prompts.

3. **Parallelization** — simultaneous work, aggregated. Two variants: sectioning (independent subtasks in parallel) and voting (same task multiple times for confidence). Example: one model handles query while another screens for inappropriate content.

4. **Orchestrator-workers** — central LLM breaks down tasks dynamically, delegates to workers, synthesizes results. Key difference from parallelization: subtasks aren't predefined. Example: coding-agents products changing multiple files.

5. **Evaluator-optimizer** — one LLM generates, another evaluates in a loop. Use when clear career criteria exist and iteration adds measurable value. Example: literary translation with nuance review.

**Agents (true autonomous):** Use for open-ended problems where steps can't be predicted. LLM uses tools in a loop based on environmental feedback. Crucial: design toolsets clearly. Higher cost, potential for compounding errors. Test in sandboxes.

**Three core principles:**
1. Maintain simplicity in agent design
2. Prioritize transparency — show specs steps
3. Carefully craft agent-computer interface (ACI) through thorough tool docs

**Practical applications:** Customer support (conversation + action + clear success criteria + feedback loops) and coding-agents agents (SWE-bench, computer use).

### Google: 1,001 Real-World Gen AI Use Cases

Organized by 11 industry groups and 6 agent types: Customer, Employee, Creative, Code, Data, Security. Started at 101 entries in April 2024, now 1,001+.

Highlights:
- Mercedes-Benz: cars that converse with drivers via Gemini
- Mercari: anticipates 500% ROI, 20% employee workload reduction
- Virgin Voyages: Veo text-to-video for thousands of hyper-personalized ads
- Figma: brand-approved images/assets in seconds
- Continental: conversational AI in vehicle cockpits
- GM OnStar: AI virtual assistant for intent recognition

### OpenAI: AI in the Enterprise (PDF — 7 lessons)

Case studies from Morgan Stanley, Indeed, Klarna, Lowe's, BBVA, Mercado Libre, and OpenAI itself.

**7 lessons:**

1. **Start with evals** — Morgan Stanley: rigorous structured testing before deployment. 98% of advisors now use AI daily. Document access jumped 20% → 80%.

2. **Embed AI in products** — Indeed: GPT-4o mini for personalized job matching "why" statements. 20% increase in applications started, 13% uplift in hiring. Fine-tuned smaller model: 60% fewer tokens, same quality.

3. **Start now, invest early** — Klarna: AI assistant handles 2/3 of all service chats (equivalent of 700 agents). Resolution time: 11 min → 2 min. Projected $40M profit improvement. 90% of employees use AI daily.

4. **Customize and fine-tune** — Lowe's: fine-tuned models improved product tagging accuracy by 20%, error detection by 60%.

5. **Get AI in experts' hands** — BBVA: rolled out ChatGPT Enterprise to 125K employees. 2,900+ custom GPTs created in 5 months. Credit risk, legal (40K questions/year), customer service sentiment analysis.

6. **Unblock developers** — Mercado Libre: built "Verdi" platform on GPT-4o/mini for 17,000 developers. 100x more products catalogued, 99% fraud detection on flagged items.

7. **Set bold automation goals** — OpenAI internally: automation platform on top of Gmail handles hundreds of thousands of tasks/month.

**Security callout:** Enterprise data not used for training, SOC 2 Type 2, granular access controls, flexible retention.

### OpenAI: A Practical Guide to Building Agents (PDF — 33 pages)

The most comprehensive of the bunch. Highly relevant to OpenClaw agent architecture.

**What makes an agent:**
- Uses LLM to manage workflows execution and make decisions
- Has tools to interact with external systems
- Operates within harness-engineering
- Can halt and transfer control back to user on failure

**When to build agents:** When traditional rules-based automation fails — complex decisions, unwieldy rulesets, heavy unstructured data. Otherwise, deterministic solutions suffice.

**Three tool types:** Data (query/read), Action (send/update/create), Orchestration (other agents as tools).

**Instructions best practices:**
- Use existing SOPs/docs, convert to LLM-friendly routines
- Break dense resources into smaller steps
- Every step = specific action or output
- Capture edge cases with conditional branches
- Use capable models (o1/o3-mini) to auto-generate instructions from docs

**Orchestration patterns:**

*Single-agent:* Start here. One agent, incrementally add tools. Use prompt templates with variables for different use cases (not separate prompts). Loop until exit condition.

*When to split into multi-agent:*
- Complex logic with many if-then-else branches
- Tool overload (overlapping tools, not just count)

*Multi-agent patterns:*
1. **Manager pattern** — central agent delegates via tool calls, maintains control and synthesizes. Good when one agent should control the user interaction.
2. **Decentralized pattern** — agents hand off to each other as peers. Good when specialized agents should fully take over (e.g., triage → support → sales).

**Guardrails (critical section):**
- Relevance classifier (off-topic detection)
- Safety classifier (jailbreaks, prompt injection)
- PII filter
- Moderation (hate/harassment/violence)
- Tool safeguards (risk-rate each tool: low/medium/high)
- Rules-based protections (blocklists, regex, input limits)
- Output validation (brand alignment)

**Human intervention triggers:**
1. Exceeding failure thresholds (agent retried too many times)
2. High-risk actions (irreversible, high-stakes)

**Key quote:** "Start small, validate with real users, grow capabilities over time."

### OpenAI: Identifying and Scaling AI Use Cases (PDF)

Framework for finding and prioritizing AI use cases. Based on 300+ implementations, 4,000+ surveys, 2M+ business users.

**Three areas to look for AI opportunities:**
1. Repetitive low-value tasks (anti-to-do list concept)
2. Skill bottlenecks (waiting for other teams' expertise)
3. Navigating ambiguity (getting unstuck on open-ended work)

**Six use case primitives:**
1. Content creation
2. Automation
3. Research
4. Ideation/strategy
5. Coding
6. Data analysis

Most enterprise AI use cases fit into one of these six categories. Train engineering on these primitives to accelerate use case discovery.

**Notable examples:**
- Klarna CFO: AI-first approach saved $10M in consulting fees
- LaunchDarkly CPO "Anti To-Do List": tasks she never has to do again
- BBVA: 2,900 custom GPTs across departments

### Google Prompting 101 (PDF — not accessible)

741 bytes downloaded — likely geo-restricted or requires Google auth. Direct link: https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf

### Kaggle Whitepapers (not accessible)

Behind captcha. Direct links:
- Agents: https://www.kaggle.com/whitepaper-agent-companion
- Prompting: https://www.kaggle.com/whitepaper-prompt-engineering
