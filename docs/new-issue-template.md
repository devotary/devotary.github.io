# New Issue Template

Create a new file in `_posts/` named like:

`YYYY-MM-DD-short-slug.md`

Example:

`2026-07-10-market-rumors.md`

Use this template:

```md
---
layout: post
title: Market Rumors
issue: 13
deck: One sentence under the title on the article page.
summary: One or two sentences used on the homepage and archive.
image: /assets/placeholder-harbor.svg
image_alt: Short description of the image
description: Short meta description for the browser and search previews.
---

Opening paragraph.

<div class="float-media">
  <img src="{{ '/assets/placeholder-ledger.svg' | relative_url }}" alt="Short image description">
  <p class="caption">Optional image caption.</p>
</div>

More body text.

## Section Heading

More body text.

<div class="ornament">* * *</div>

Closing paragraph.
```

Notes:

- The filename date controls post order.
- Higher dates appear first on the homepage and archive.
- `summary` is what shows in preview cards and archive rows.
- `deck` is the subtitle on the article page.
- `image` is the hero image at the top of the article and the preview image on listings.
