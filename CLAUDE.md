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
- `generate-cv.mjs` — Generates 8 PDF variants (FullStack/iOS/Architect/JavaDeveloper × EN/FR) using Typst
- `templates/cv.typ` — Typst template (single file, ~160 lines)
- `templates/cv-*.json` — Generated data files (written by generate-cv.mjs, do not edit directly)
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

## CV Template Design Principles (`scripts/templates/cv.typ`)

### Layout & Spacing
- **Margins:** Keep tight (currently 0.45in/0.38in/0.5in). Smaller margins = more usable space; don't go above 0.6in.
- **Font sizes:** Minimum body text is 9pt (skills labels/tags). Body content is 10–10.5pt. Nothing below 9pt — readability matters.
- **Section spacing:** More space *above* section headings (16pt) than *below* them (2pt). Content should feel close to its heading, with clear separation from the previous section.
- **No hard pagebreaks:** Let content flow naturally. Use `block(breakable: false)` on individual entries to prevent mid-entry splits.
- **Two-column grids are fragile in Typst:** Uneven content across columns creates large whitespace gaps. Prefer single-column layouts unless content is guaranteed to be balanced. If you must use multi-column, track column position and pad empty cells before `colspan` elements.

### Visual Design
- **B&W print-friendly:** Use only dark navy accent (`#1a3a5c`) — prints as near-black. No colors that disappear in grayscale.
- **No decorative capsules/pills around text.** They add visual noise without information. Plain comma-separated text is cleaner and more space-efficient.
- **Skill labels in a fixed-width right-aligned column** (80pt grid + right align) so colons line up vertically. This creates a clean, scannable structure.
- **Experience entries use a left accent bar** (3pt stroke) instead of divider lines between entries. Filled circle bullets (`●`) in accent color.
- **Section headings:** Bold title-case text with a short thick accent underline (40pt wide, 2.5pt). No background fills, no uppercase.

### Typst-Specific Lessons
- `par(leading)` controls line spacing *within* a paragraph. `par(spacing)` controls gaps *between* paragraphs. Both must be tuned — reducing only `leading` won't fix large gaps between skill rows since each row is its own paragraph.
- Use `set par(...)` inside `#{ set par(...); ... }` code blocks to scope style overrides to a section (e.g., tighter spacing in skills only).
- `grid.cell(colspan: N)` will error if it starts mid-row and overflows available columns. Always pad with empty cells to force colspan onto a new row.
- `#set par(...) in { }` syntax doesn't work at top level in Typst — use `#{ set par(...) }` code block instead.

### Content & Tone
- **CV data lives in `generate-cv.mjs`**, not in the JSON files. The script writes JSON files at build time. All content changes go in the JS variant definitions.
- **8 variants:** 4 profiles (FullStack, iOS, Architect, JavaDeveloper) × 2 languages (EN, FR).
- **French variants** include a `sections` object for translated section labels and an `education` object. English variants use hardcoded defaults in the template.
- **Accomplishments are quantified** — always include metrics (DAU counts, percentages, team sizes, time improvements).
- **Experience bullets follow "Label: Detail" format** — e.g., "Operational Excellence: Major refactoring of 450K-line codebase..."
- **Each variant is tailored** — same career history but bullets, titles, and descriptions are rewritten to emphasize the relevant skills for each profile. Not just translations but genuine re-framing.
