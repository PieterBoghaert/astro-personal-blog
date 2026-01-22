# Research: decisions for 001-add-astro-blog

Decision: Use Astro Content Collections (Markdown files) for posts.

Rationale: Astro's content collections give good authoring workflow, frontmatter metadata, and are well supported by Astro's routing and pagination patterns. Converting the provided `starter-code/data.json` into `src/content/posts/*.md` will make posts editable and portable.

Alternative: Keep `starter-code/data.json` and expose it via `src/data/posts.ts` as an adapter. This is faster but less maintainable long-term.

Decision: SCSS structure follows the referenced repo layout (partials, variables, components)
Rationale: User requested similar structure; using variables and partials keeps code modular.

Decision: Pagination: path-based `/blog/page/[n]` for SSG-friendly routes.
