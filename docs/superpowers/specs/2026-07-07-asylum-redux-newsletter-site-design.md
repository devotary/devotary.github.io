# Asylum Redux Newsletter Site Design

## Goal

Build a lightweight GitHub Pages site for an Arma 3 server newsletter archive. The site should feel editorial rather than productized: restrained, compact, readable, and easy to extend by duplicating a static HTML page.

## Chosen Approach

Use GitHub Pages' built-in Jekyll support. The homepage and archive will be generated from newsletter post files in `_posts/`, while shared presentation stays in layouts and one stylesheet. This preserves a static deployment while removing manual homepage and archive upkeep.

## Visual Direction

The layout borrows the reference site's structure, not its stack. The design uses:

- a compact top bar
- a restrained masthead with the `redux-logo`
- a narrow reading width
- serif-forward typography
- neutral charcoal tones, cool blue accents, and a restrained dark presentation that suits the white logo
- simple rules and dividers instead of decorative effects

The goal is a newsroom or field bulletin feel, not a glossy SaaS landing page.

## Site Structure

### Homepage

`index.html` will include:

- a short masthead with branding and a one-line premise
- a featured latest issue section sourced from the newest post
- a compact grid of up to three more recent issues sourced from the next newest posts
- a link to the full archive

### Archive

`archive.html` will list all newsletter issues in reverse chronological order with date, issue label, summary, and direct links by looping over `site.posts`.

### Newsletter Pages

Each post in `_posts/` will include front matter and content that render through a shared post layout:

- issue metadata
- title and dek
- summary text for previews
- hero image reference
- body sections with simple subheads
- floated images to demonstrate image-and-text wrapping
- stylized section breaks
- archive navigation

## Content Model

For this first pass, content is static and hand-authored. Dummy issues and placeholder images are acceptable. New issues can be added by creating one new file in `_posts/` with the standard front matter and body content. The homepage and archive then update automatically when GitHub Pages rebuilds the site.

## Assets

- Use `assets/redux-logo.webp` as the primary site mark.
- Create local SVG placeholder images so the demo stays lightweight and self-contained.

## Constraints

- No custom build system outside GitHub Pages
- No client-side framework
- No external dependencies required for core rendering
- Responsive on desktop and mobile
- Keep publishing simple for future manual writing
