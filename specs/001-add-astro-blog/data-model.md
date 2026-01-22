# Data model: Post

Entity: Post

Fields (frontmatter for Markdown files):

- `title` (string) - required
- `slug` (string) - required, used for URL
- `date` (ISO string) - optional
- `excerpt` (string) - optional
- `author` (string) - optional
- `tags` (array[string]) - optional
- `featuredImage` (string) - optional (path to assets)
- `content` - body of the markdown file

Normalization rules:

- If converting from `data.json`, generate `slug` from `id` or title.
- Ensure `date` is ISO-parsable if present.
