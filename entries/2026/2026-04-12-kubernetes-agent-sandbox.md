---
title: Kubernetes Agent Sandbox
source: https://github.com/kubernetes-sigs/agent-sandbox
saved: 2026-04-12
type: research
tags:
  - agent-security
---

A Kubernetes-native Sandbox CRD for managing isolated, stateful, singleton workloads for AI agent runtimes inside existing clusters.

## Key takeaways

- **Sandbox CRD**: Kubernetes-native Sandbox CRD under SIG Apps, with declarative, standardized APIs for isolated, stateful, singleton agent workloads.
- **Kernel isolation**: Supports gVisor and Kata Containers for kernel-level isolation.
- **Secure by default**: v0.2.1 introduced a Secure by Default networking architecture with strict isolation and a shared policy model.
- **Cluster-native fit**: The right choice when agents must run inside existing Kubernetes infrastructure.
