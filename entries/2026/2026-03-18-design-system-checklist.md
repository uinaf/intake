---
title: Design System Checklist
source: https://designsystemchecklist.com/
saved: 2026-03-18
type: article
tags:
  - design
  - design-system
  - checklist
  - components
  - reference
---

Open-source checklist for planning, building, and growing a design system. By Arda Karaçizmeli. [View the project on GitHub](https://github.com/ardakaracizmeli/design-system-checklist).

## Structure

### 1. Design Language
**Brand:**
- Vision statement
- Design principles
- Tone of voice
- Terminology / glossary
- Brand assets (logo, icons)

**Guidelines:**
- Accessibility standards
- Writing guidelines
- Microcopy patterns
- Terminology consistency
- Internationalization (i18n)

### 2. Design Foundations
**Color:** a11y contrast, semantic naming, dark mode, usage guidelines
**Layout:** base units, grid system, breakpoints, spacing scale
**Typography:** mobile sizes, baseline grid alignment, readability, font performance, usage guidelines
**Elevation:** shadow system, background layering, z-index management
**Motion:** easing curves, duration scale, reduced motion a11y
**Iconography:** a11y (decorative vs informative), consistent style, naming convention, grid alignment, keyword search, reserved icons, usage guidelines

### 3. Components (30 components listed)

Each component has a checklist of states/features and reference links to Reshaped, Atlassian, Material, Radix, MUI, Spectrum, Polaris, Chakra, etc.

| Component | Key Checklist Items |
|---|---|
| Accordion | active state, composition, transition, a11y relation |
| Alert | colors, title, icon, actions, responsive, a11y roles |
| Avatar | image, fallback, sizes, colors, shape, group, a11y label |
| Badge | colors, variants, sizes, icon, dismiss, empty, positioning |
| Button | colors, variants, sizes, icon, hover, active, loading, disabled, a11y role + focus |
| Breadcrumbs | icon, disabled, collapsed, separator |
| Calendar | modes, selected, month nav, day names, i18n, a11y keyboard + state |
| Card | composition, media, actions, responsive, groups |
| Carousel | navigation, composition, item size, touch, responsive, a11y keyboard |
| Checkbox | label, checked, error, disabled, indeterminate, group, a11y keyboard |
| Divider | direction, a11y role |
| Dropdown | composition, hover, positioning, responsive, a11y focus + keyboard |
| Icon | colors, sizes, a11y decoration |
| Image | sizes, fallback, density, a11y alt |
| Link | icon, colors, disabled, font inheritance, multiline, a11y role |
| List | order, composition, a11y role |
| Loading | colors, sizes, timing, a11y reduced motion + label |
| Modal | composition, actions, close, positioning, sizes, a11y focus + keyboard + labels |
| Pagination | selected, ranges, amount, indeterminate, a11y label + state |
| Progress | label, sizes, duration, a11y label |
| Radio | label, checked, error, group, a11y keyboard |
| Select | label, error, disabled, placeholder, helper, icon, prefix, a11y label |
| Skeleton | sizes, shapes, composition, a11y motion |
| Switch | label, checked, disabled, a11y keyboard + label |
| Tabs | composition, variants, selected, disabled, icon, equal width, a11y keyboard |
| Text Area | label, error, disabled, placeholder, helper, sizes, a11y label |
| Text Field | label, error, disabled, placeholder, helper, icon, affix, sizes, a11y label |
| Toast | composition, colors, icon, timeout, stacking, action, a11y focus + motion |
| Tooltip | positioning, timeout, a11y keyboard |

### 4. Maintenance
**Documentation:** principles, getting started, design + dev docs, anatomy diagrams, props/API, composition examples, sandbox/playground, environment setup, release notes
**Local patterns:** when to create local components, types, expectations, release process
**Process:** changelog, roadmap, stakeholder alignment, analytics, paradigm shifts, SLA
**Community:** communication channels, request templates, updates, office hours
**Contribution:** rules, guidelines, templates, engagement model

## Relevance

Directly applicable to `putio-design`. Use as a quality checklist for Claude's design system output — verify each component has the right states, each foundation token is properly defined, and maintenance processes are documented.

## Key References from Checklist
- [Reshaped](https://reshaped.so/) — modern, well-documented system
- Atlassian Design System — enterprise-grade reference
- Material Design 3 — Google's latest
- Polaris (Shopify) — commerce-focused system
- Spectrum (Adobe) — comprehensive with a11y focus
