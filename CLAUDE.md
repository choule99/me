# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multilingual (EN/FR) personal portfolio website built with **Astro**, **TailwindCSS**, and **TypeScript**. Deployed as a static site to GitHub Pages.

## Build Commands

```bash
npm run dev            # Start dev server
npm run build          # Build static site to docs/
npm run preview        # Preview built site
npm run generate-cv    # Generate 6 PDF CV variants using Typst
```

Output goes to `docs/` which is served by GitHub Pages at `https://choule99.github.io/me`.

## Architecture

**Tech Stack:** Astro SSG + TypeScript + TailwindCSS (@tailwindcss/typography)

**Routing:**
- English (default): `/me/` → `docs/index.html`
- French: `/me/fr/` → `docs/fr/index.html`
- Dynamic route via `src/pages/[...lang]/index.astro`

**Content:**
- `src/content/experience/*.md` — 7 experience entries, each with `.fr.md` variant
- `src/content/config.ts` — Astro content collection schema (company, title, dates, order, description, lang)
- `src/i18n/translations.ts` — All UI text in both languages
- `src/i18n/utils.ts` — i18n helper utilities

**Components** (`src/components/`):
- `BaseLayout.astro` — HTML wrapper, meta tags, PostHog analytics, scroll animations
- `Navigation.astro` — Fixed navbar (appears on scroll), language toggle
- `Hero.astro` — Header with name, title, bio, CTA buttons
- `SectionCard.astro` / `SectionBadge.astro` — Section wrappers and labels
- `ExperienceCard.astro` — Collapsible timeline entries
- `ProjectCard.astro` — Project showcase cards
- `TechBadge.astro` — Technology tags
- `Footer.astro` — Footer with contact info

**CV Generation** (`scripts/`):
- `generate-cv.mjs` — Generates 6 PDF variants (FullStack/iOS/Architect × EN/FR) using Typst
- `templates/cv.typ` — Typst template
- `templates/cv-*.json` — Generated data files
- Output: `public/files/CV-*.pdf`

**Page Sections** (in `src/pages/[...lang]/index.astro`):
Hero → Welcome → Goals → Projects → Technologies → Experience → Education → Story → Thanks → Misc → Footer

## Key Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config: output dir, base URL, i18n, TailwindCSS |
| `tailwind.config.mjs` | Custom colors, fonts (Inter), shadows |
| `src/pages/[...lang]/index.astro` | Main page with all sections (573 lines) |
| `src/i18n/translations.ts` | All translatable strings |
| `src/content/config.ts` | Content collection schema |
| `Package.swift` | Legacy artifact (unused) |
