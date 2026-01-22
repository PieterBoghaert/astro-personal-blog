# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a small, static personal blog with Astro: homepage (intro + 5 highlighted articles + "View all articles"), a paginated blog index (10 posts/page) using path-based pages (`/blog/page/[n]`), per-article pages (`/blog/[slug]`), plus `/about` and `/newsletter` static pages. Styling will follow the project's constitution: SCSS with CSS variables and BEM structure inspired by the referenced repo. Use TypeScript for data modules and prefer Astro Content Collections (.md) for posts; provide an adapter to import the existing `starter-code/data.json` if conversion isn't performed.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript/TypeScript (ES2020+), Node 18+ recommended
**Primary Dependencies**: Astro (v4+), Sass, Vite (bundled with Astro), optionally @astrojs/content (for Content Collections)
**Storage**: Static files — posts stored as Markdown in `src/content/posts/` (preferred) or imported from `starter-code/data.json` via `src/data/posts.ts` adapter
**Testing**: None (per user request)
**Target Platform**: Static site (SSG) deployable to any static host
**Project Type**: Frontend static site (Astro)
**Performance Goals**: Small bundle sizes; no client JS frameworks by default; images optimized
**Constraints**: No Tailwind or other CSS frameworks; use SCSS for structure and mixins only, but styling MUST use CSS custom properties for tokens (no SCSS variables for color tokens). All color tokens MUST be specified using OKLCH color notation.
**Scale/Scope**: Small personal blog (tens to low hundreds of posts)

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

Gates derived from the project constitution (Vulpo Personal Blog):

- Content-First: All proposed features that introduce content formats or storage MUST include sample content and a migration/ingest plan.
- Lightweight Tooling: New dependencies that affect build/runtime size MUST be justified; avoid UI frameworks and heavy styling libraries.
- Design System: UI/UX changes MUST map to SCSS variables and follow the BEM naming convention; include style tokens when adding components.
- Accessibility & Performance: Proposed pages/features MUST document accessibility considerations and an initial performance impact estimate.
- Governance: Major or structural changes MUST include a constitution amendment plan when they alter core principles.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

**Structure Decision**: Single static frontend site using Astro. Key directories (repo root):

``text
src/
├── content/posts/ # preferred: Markdown content collection for Astro
├── data/ # adapters and generated data (posts.ts)
├── layouts/ # Base.astro and other layout components
├── components/ # Header, Footer, PostCard, Pagination
├── pages/ # Astro pages (index.astro, blog.astro, blog/page/[n].astro, blog/[slug].astro, about.astro, newsletter.astro)
└── styles/ # SCSS, variables, partials (BEM structure)
starter-code/ # provided assets, images, original HTML templates

```

Notes:
- Prefer `src/content/posts/*.md` (Astro Content Collections) for long-term maintainability; if conversion is not desired, `src/data/posts.ts` will import `starter-code/data.json` and normalize entries.
- Use Vite (Astro default) for dev server / livereload; Sass handled via `sass` devDependency.


## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| None at this time           | N/A                | N/A                                  |

## Phase 0: Research

- Decision: Use Astro Content Collections (`src/content/posts/*.md`) for posts; provide a `src/data/posts.ts` adapter to import `starter-code/data.json` and convert entries to collection-like objects if user prefers not to convert now.
- Decision: Pagination style is path-based (`/blog/page/[n]`) — accepted by user.
- Decision: SCSS structure will mirror the referenced repo layout (partial files, variables, mixins) and include a light/dark switch using CSS custom properties and a small JS toggle written only if necessary.

Deliverables:
- `research.md` (this file in the spec directory)

## Phase 1: Design & Contracts

Deliverables:
- `data-model.md` — Post entity fields mapped to frontmatter for Markdown collection
- `quickstart.md` — How to run dev server and build
- Create minimal component contracts (props and expected inputs) for `PostCard`, `Pagination`, `Header`, `Footer`.

## Phase 2: Implementation (high-level tasks)

- T1: Create SCSS structure under `src/styles/` mirroring the constitution example (partials, base, components, utilities). Implement theming with CSS custom properties (no SCSS color variables). Add a small SCSS mixin helper for modern media-query range syntax to keep responsive rules concise.
- T2: Create `layouts/Base.astro`, `components/Header.astro`, `components/Footer.astro`, `components/PostCard.astro`, `components/Pagination.astro`.
- T3: Implement `src/content/posts/` (convert `starter-code/data.json` → markdown files) OR provide `src/data/posts.ts` adapter and test listing.
- T4: Implement pages: `src/pages/index.astro`, `src/pages/blog.astro`, `src/pages/blog/page/[page].astro`, `src/pages/blog/[slug].astro`, `src/pages/about.astro`, `src/pages/newsletter.astro`.
- T5: Wire social icons from `starter-code/assets/images` into `Footer.astro` and ensure alt text and accessible labels.
- T6: Run `npm install` and verify `npm run dev` works with Vite dev server (Astro default).
- T7: Build (`npm run build`) and verify final static output.

## Open Questions (NEEDS CLARIFICATION)

- Q1: Do you want posts converted to Markdown files now, or should I keep an adapter and convert later? (Preferred: convert now)

## Acceptance

Implement the above tasks; validate success criteria defined in the spec-generated.md: correct homepage, paginated blog, article pages, about/newsletter pages, footer text + icons, and successful build.

```
