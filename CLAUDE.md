# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal digital resume/portfolio website that converts Markdown content into a static HTML site using spec-md.

## Build Commands

```bash
# Generate the site (renders Markdown to HTML)
./generate.sh
```

This runs spec-md to process `src/index.md` and outputs to `docs/index.html`.

## Architecture

**Content Pipeline:**
- Source: Markdown files in `src/`
- Tool: spec-md (Markdown-to-HTML generator)
- Config: `spec-md.json` (injects custom CSS and JS into head)
- Output: `docs/index.html`

**Content Structure:**
- `src/index.md` - Main entry point that includes all sections via `[](../src/file.md)` syntax
- Individual section files: `welcome.md`, `goal.md`, `projects.md`, `tech.md`, `experience.md`, `education.md`, `story.md`, `thanks.md`, `other.md`, `glossary.md`
- Experience files: `experience_*.md` (individual job histories)

**Static Assets:**
- `docs/css/custom.css` - Custom styling
- `docs/main.js` - PostHog analytics
- `docs/img/` - Images
- `docs/files/` - Downloadable files (CV.pdf)

## Key Files

| File | Purpose |
|------|---------|
| `generate.sh` | Build script that runs spec-md and post-processes HTML |
| `spec-md.json` | Configures head injections (CSS, JS) |
| `Package.swift` | Swift package manifest (minimal, used as project container) |
