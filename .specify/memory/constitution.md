# [PROJECT_NAME] Constitution

<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]

<!-- Example: I. Library-First -->

[PRINCIPLE_1_DESCRIPTION]

<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]

<!--
Sync Impact Report

- Version change: UNKNOWN -> 1.0.0
- Modified principles: [PRINCIPLE_1_NAME] -> Content-First; [PRINCIPLE_2_NAME] -> Lightweight Tooling; [PRINCIPLE_3_NAME] -> Design System; [PRINCIPLE_4_NAME] -> Accessibility & Performance; [PRINCIPLE_5_NAME] -> Governance & Versioning
- Added sections: Development Workflow, Additional Constraints
- Removed sections: none
- Templates requiring updates: / .specify/templates/plan-template.md ✅ updated
  / .specify/templates/spec-template.md ⚠ pending review
  / .specify/templates/tasks-template.md ⚠ pending review
- Follow-up TODOs: none
-->

# Vulpo Personal Blog Constitution

## Core Principles

### Content-First

All written content (posts, pages, metadata) MUST be the primary concern. Content MUST be authored, structured, and reviewable independently of styling or build tooling. Rationale: a content-first approach ensures longevity and portability of the site.

### Lightweight Tooling

Tooling and dependencies MUST remain minimal. Static-site generation with Astro (or equivalent) is PREFERRED. No CSS frameworks (e.g., Tailwind) or heavy runtime frameworks are allowed for core styling. Rationale: reduces maintenance, improves performance, and keeps the project accessible to contributors.

### Design System (SCSS + CSS Variables, BEM)

Styling MUST use a small design system: CSS custom properties, a SCSS pipeline, and a BEM naming convention for components. Styles MUST be modular, themable via variables, and not rely on external frameworks. Rationale: predictable, testable styling and easy theme changes. It should be like https://github.com/PieterBoghaert/todo-livewire/tree/master/resources/scss for the structure and also since we have a light and dark modus the light-dark css function should be used like in this github repo.

### Accessibility & Performance

All public pages MUST meet basic accessibility and performance gates: semantic HTML, keyboard navigation, visible focus states, and compressed/optimized images. Performance budgets (e.g., small bundle sizes) SHOULD be considered for each release. Rationale: inclusive access and fast load times.

<!--
Sync Impact Report

- Version change: UNKNOWN -> 1.0.0
- Modified principles: placeholder -> Content-First, Lightweight Tooling, Design System, Accessibility & Performance, Governance & Versioning
- Added sections: Development Workflow, Additional Constraints
- Removed sections: none
- Templates requiring updates: .specify/templates/plan-template.md ✅ updated
  .specify/templates/spec-template.md ⚠ pending review
  .specify/templates/tasks-template.md ⚠ pending review
- Follow-up TODOs: none
-->

# Vulpo Personal Blog Constitution

## Core Principles

### Content-First

All written content (posts, pages, metadata) MUST be the primary concern. Content MUST be authored, structured, and reviewable independently of styling or build tooling. Rationale: a content-first approach ensures longevity and portability of the site.

### Lightweight Tooling

Tooling and dependencies MUST remain minimal. Static-site generation with Astro (or equivalent) is PREFERRED. No CSS frameworks (e.g., Tailwind) or heavy runtime frameworks are allowed for core styling. Rationale: reduces maintenance, improves performance, and keeps the project accessible to contributors.

### Design System (SCSS + CSS Variables, BEM)

Styling MUST use a small design system: CSS custom properties, a SCSS pipeline, and a BEM naming convention for components. Styles MUST be modular, themable via variables, and not rely on external frameworks. Rationale: predictable, testable styling and easy theme changes.

### Accessibility & Performance

All public pages MUST meet basic accessibility and performance gates: semantic HTML, keyboard navigation, visible focus states, and compressed/optimized images. Performance budgets (e.g., small bundle sizes) SHOULD be considered for each release. Rationale: inclusive access and fast load times.

<!--
Sync Impact Report

- Version change: UNKNOWN -> 1.0.0
- Modified principles: placeholder -> Content-First, Lightweight Tooling, Design System, Accessibility & Performance, Governance & Versioning
- Added sections: Development Workflow, Additional Constraints
- Removed sections: none
- Templates requiring updates: .specify/templates/plan-template.md ✅ updated
  .specify/templates/spec-template.md ⚠ pending review
  .specify/templates/tasks-template.md ⚠ pending review
- Follow-up TODOs: none
-->

# Vulpo Personal Blog Constitution

## Core Principles

### Content-First

All written content (posts, pages, metadata) MUST be the primary concern. Content MUST be authored, structured, and reviewable independently of styling or build tooling. Rationale: a content-first approach ensures longevity and portability of the site.

### Lightweight Tooling

Tooling and dependencies MUST remain minimal. Static-site generation with Astro (or equivalent) is PREFERRED. No CSS frameworks (e.g., Tailwind) or heavy runtime frameworks are allowed for core styling. Rationale: reduces maintenance, improves performance, and keeps the project accessible to contributors.

### Design System (SCSS + CSS Variables, BEM)

Styling MUST use a small design system: CSS custom properties, a SCSS pipeline, and a BEM naming convention for components. Styles MUST be modular, themable via variables, and not rely on external frameworks. Rationale: predictable, testable styling and easy theme changes.

### Accessibility & Performance

All public pages MUST meet basic accessibility and performance gates: semantic HTML, keyboard navigation, visible focus states, and compressed/optimized images. Performance budgets (e.g., small bundle sizes) SHOULD be considered for each release. Rationale: inclusive access and fast load times.

### Governance & Versioning

This constitution is the authoritative guide for project-level decisions. Amendments MUST follow the Governance section below. Constitution versioning uses semantic versioning where:

- MAJOR: incompatible governance changes (redefinitions or removals of principles)
- MINOR: addition of a principle or material expansion of guidance
- PATCH: wording clarifications, typos, or non-semantic edits

## Additional Constraints

- No external UI frameworks for core styling (Tailwind, Bootstrap, etc.).
- SCSS may be used for preprocessing; output CSS MUST be shipped to the built site.
- TypeScript is PREFERRED for source files; JavaScript MAY be used for simple scripts if justified.

## Development Workflow

- Content stored under `src/content/` or as structured JSON/TS modules in `src/data/` for programmatic consumption.
- Feature changes to site structure or content MUST be proposed via PR with a short migration plan when required.
- Code reviews require at least one approving reviewer. For governance or architecture changes, two reviewers are REQUIRED.

## Governance

- Amendments: Changes to this constitution MUST be proposed in a PR titled `constitution: amend vX.Y.Z → vA.B.C` with a summary of changes, rationale, and a migration plan for downstream templates.
- Approval: Minor and patch amendments require one approving reviewer; MAJOR amendments REQUIRE two approvers and explicit community notification.
- Compliance: All implementation plans (see `.specify/templates/plan-template.md`) MUST include a Constitution Check that verifies compliance with the principles above.

**Version**: 1.0.0 | **Ratified**: 2026-01-21 | **Last Amended**: 2026-01-21
