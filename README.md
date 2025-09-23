# Data Infrastructure Group (DIG) Website

Static website built with Eleventy (11ty). English and Spanish content lives in parallel under `src/en/` and `src/es/`.

## Getting Started

- Install Node.js (LTS recommended).
- Install dependencies:

```bash
npm install
```

- Start local dev server with live reload:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

The site outputs to `_site/`.

## Structure

- `src/_includes/` – layouts and partials
- `src/_data/site.json` – global site data (title, nav, analytics, languages)
- `src/en/` – English pages and posts
- `src/es/` – Spanish pages and posts
- `src/assets/` – CSS, images, etc.

## Deployment

This is a pure static site and can be deployed to GitHub Pages, Netlify, Vercel, or university hosting. No server is required. Include `_headers`/`_redirects` if needed later.

## Analytics

Supports Plausible via `site.json` config. Set `plausibleDomain` to enable, leave empty to disable.

## Contact Form

Uses a static-compatible provider (e.g., Formspree/Netlify Forms). Replace the placeholder action URL in `contact.md`.
