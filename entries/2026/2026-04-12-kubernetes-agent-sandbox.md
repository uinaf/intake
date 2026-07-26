---
title: Kubernetes Agent Sandbox
source: https://github.com/kubernetes-sigs/agent-sandbox
saved: 2026-04-12
type: research
tags:
  - agent-security
intaked_by: glitch418x
---

Section: Security, Sandbox & Permissions

K8s-native Sandbox CRD (under SIG Apps) providing declarative, standardized APIs for managing isolated, stateful, singleton workloads for AI agent runtimes. Supports gVisor and Kata Containers for kernel-level isolation; v0.2.1 introduced "Secure by Default" networking architecture enforcing strict isolation with a shared policy model. The right choice when agents must run inside existing Kubernetes infrastructure.
