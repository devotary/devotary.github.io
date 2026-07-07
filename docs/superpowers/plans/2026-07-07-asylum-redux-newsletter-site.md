# Asylum Redux Newsletter Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lightweight Jekyll newsletter site with an auto-updating homepage, archive, and sample issue pages for GitHub Pages.

**Architecture:** Use Jekyll layouts and `_posts/` content files so GitHub Pages can generate the homepage, archive, and article URLs automatically. Keep one shared stylesheet and local assets so the site stays self-contained and easy to publish.

**Tech Stack:** Jekyll, Liquid, Markdown, HTML5, CSS3, local image assets

---

### Task 1: Create Jekyll structure

**Files:**
- Create: `index.html`
- Create: `archive.html`
- Create: `_config.yml`
- Create: `_layouts/default.html`
- Create: `_layouts/home.html`
- Create: `_layouts/post.html`
- Create: `_posts/*.md`
- Create: `styles.css`
- Create: `assets/*.svg`

- [ ] **Step 1: Add Jekyll config and shared layout shell**
- [ ] **Step 2: Add homepage latest-issue layout using `site.posts`**
- [ ] **Step 3: Add archive listing layout using `site.posts`**
- [ ] **Step 4: Convert sample issues into `_posts/*.md` files**
- [ ] **Step 5: Keep shared styling for layout and typography**

### Task 2: Add local assets

**Files:**
- Create: `assets/redux-logo.webp`

- [ ] **Step 1: Copy the selected logo into the repo**
- [ ] **Step 2: Reference the logo from homepage and article pages**

### Task 3: Verify generated-site behavior

**Files:**
- Verify: `index.html`
- Verify: `archive.html`
- Verify: `_layouts/*.html`
- Verify: `_posts/*.md`

- [ ] **Step 1: Check homepage and archive pull from post metadata**
- [ ] **Step 2: Check files are present and clean in git**
- [ ] **Step 3: Summarize how to add a new issue later**
