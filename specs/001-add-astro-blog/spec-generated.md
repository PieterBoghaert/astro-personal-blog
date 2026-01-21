# Feature Specification: Personal blog in Astro

**Feature Branch**: `001-add-astro-blog`  
**Created**: 2026-01-21  
**Status**: Draft  
**Input**: User description: "I want to create a personal blog in Astro. There should be a homepage with an intro and 5 related articles with 'view all articles'. Besides that there should be a blog index page with 10 link to articles and pagination. Every article should have a single page. There also should be a about and newsletter page. There should be a footer with 'Made with ❤️ and ☕️' and on the right social icons (X, Github, LinkedIn and Frontend Mentor) Those icons are in the assets/images folder in the starter code."

## User Scenarios & Testing (mandatory)

### User Story 1 - Browse homepage (Priority: P1)

A casual visitor lands on the homepage, reads the intro, sees five highlighted (related/recent) articles and can click "View all articles".

**Why this priority**: The homepage is the primary entry point and must present discoverable content quickly.

**Independent Test**: Open `/` in a browser and verify the intro text appears and five article cards are shown; clicking "View all articles" navigates to the blog index.

**Acceptance Scenarios**:

1. **Given** there are >=5 posts, **When** a visitor opens `/`, **Then** the intro and five article previews are visible with title and excerpt.
2. **Given** a visitor clicks "View all articles", **When** they click, **Then** they are taken to `/blog` (blog index page).

---

### User Story 2 - Blog index & pagination (Priority: P1)

A visitor goes to the blog index and can page through posts ten at a time.

**Why this priority**: The blog index is the main content listing and must support navigation across older posts.

**Independent Test**: Open `/blog` and verify it lists up to 10 posts per page and pagination controls exist to navigate next/previous pages.

**Acceptance Scenarios**:

1. **Given** there are >10 posts, **When** a visitor is on `/blog`, **Then** only 10 posts are shown and pagination nav links are present to reach subsequent pages.
2. **Given** a visitor clicks a pagination link, **When** they click, **Then** the next set of posts is displayed and the URL updates to reflect page number.

---

### User Story 3 - Read individual article (Priority: P1)

A visitor clicks an article from any list and reads the full article on its single page.

**Why this priority**: Individual article pages are the core content delivery unit.

**Independent Test**: Click an article link and verify the article page renders title, date (if present), body content, and sharing/social links.

**Acceptance Scenarios**:

1. **Given** a post exists with id `slug`, **When** a visitor opens `/blog/slug`, **Then** they see the article title, content, and a consistent header/footer.

---

### User Story 4 - About & Newsletter pages (Priority: P2)

Visitor can access an About page and a Newsletter sign-up page.

**Why this priority**: Secondary site pages provide context and capture subscriptions.

**Independent Test**: Open `/about` and `/newsletter` and verify static content is present and footer is visible.

**Acceptance Scenarios**:

1. **Given** the pages exist, **When** a visitor opens `/about`, **Then** about content is shown.
2. **Given** the pages exist, **When** a visitor opens `/newsletter`, **Then** newsletter text (and optionally a form placeholder) is shown.

---

### Edge Cases

- When there are fewer than 5 posts, homepage shows all available posts without error.
- When there are 0 posts, index shows a friendly empty-state message and no pagination.
- Long article content should wrap and not break layout; images missing should render alt text placeholders.

## Requirements (mandatory)

### Functional Requirements

- **FR-001**: The site MUST have a homepage (`/`) showing an intro and up to 5 article previews plus a prominent "View all articles" link.
- **FR-002**: The site MUST expose a blog index at `/blog` with pagination showing 10 posts per page and page navigation controls.
- **FR-003**: Each article MUST have its own single page at `/blog/[slug]` displaying title, date (if available), content, and metadata (author/tags if present).
- **FR-004**: The site MUST include `/about` and `/newsletter` static pages.
- **FR-005**: The footer MUST display the text "Made with ❤️ and ☕️" and social icons (X, GitHub, LinkedIn, Frontend Mentor) on the right; icons are sourced from `starter-code/assets/images`.
- **FR-006**: Content source: site SHOULD read existing `starter-code/data.json` and expose posts via `src/data/` modules for Astro consumption.
- **FR-007**: Navigation: header navigation MUST include links to Home, Blog, About, Newsletter.
- **FR-008**: Build MUST succeed with the provided content and assets; missing images must not break the build.

### Key Entities

- **Post**: id/slug, title, date, excerpt, content, tags, author, featuredImage
- **Page**: static pages like About and Newsletter (title, body)

## Success Criteria (mandatory)

### Measurable Outcomes

- **SC-001**: Homepage loads and displays intro + up to 5 article previews on first visit (manual verification).
- **SC-002**: Blog index returns at most 10 posts per page and pagination links navigate to other pages (manual verification).
- **SC-003**: Individual article pages render title and content for at least 10 sample posts from `starter-code/data.json`.
- **SC-004**: Footer contains exact text "Made with ❤️ and ☕️" and four social icons, and icons resolve from `starter-code/assets/images`.
- **SC-005**: The Astro build completes without errors using the provided starter-code content.

## Assumptions

- Use Astro for site generation and TypeScript for data modules.
- The existing `starter-code/data.json` contains an array of post objects; if not, a small import adapter will convert it into an array under `src/data/posts.ts`.
- Social icons are present at `starter-code/assets/images` with reasonable filenames; missing icons will be gracefully ignored.
- Homepage "related" articles will default to the 5 most recent posts unless the user supplies explicit related metadata.

## Implementation Notes (non-normative)

- Use SCSS + CSS variables and BEM for styling (per constitution). No Tailwind or other CSS frameworks.
- Posts may be rendered from `src/data/posts.ts` which imports `starter-code/data.json` and normalizes fields.
- Create a simple pagination helper to compute slices of the posts array.
- Create a simple pagination helper to compute slices of the posts array.
- Pagination URL style: path-based pages using the `/blog/page/[n]` convention (SSG/SEO-friendly).

---

_Spec created by automation; update as needed._

## Clarifications

### Session 2026-01-21

- Q: Which pagination URL style should the blog index use? → A: Option A — path-based pages (`/blog/page/2`) for SSG and SEO friendliness.
