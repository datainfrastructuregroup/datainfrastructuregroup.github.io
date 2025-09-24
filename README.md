# Data Infrastructure Group (DIG) Website

Static website built with Eleventy (11ty) for an interdisciplinary research group focused on restorative and transformative data science.

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- Git

### Quick Start
```bash
# Install dependencies
npm install

# Start development server with live reload
npm run dev

# Build for production
npm run build
```

The development server runs at `http://localhost:8082` and the built site outputs to `_site/`.

## Site Structure

- `src/_includes/` – Nunjucks layouts and partials
- `src/_data/site.json` – Global site configuration
- `src/blog/posts/` – Blog post markdown files
- `src/assets/` – CSS, images, and other static assets
- `docs/` – Documentation for content management and deployment

### Key Pages
- **Homepage** (`/`) – Mission statement and recent posts
- **Research Team** (`/team/`) – PI and student affiliates
- **Projects** (`/projects/`) – Research projects with individual pages and tag system
- **Blog** (`/blog/`) – Categorized posts with RSS feed
- **Get Involved** (`/get-involved/`) – Contact form and subpages
  - Collaborators (`/get-involved/collaborators/`)
  - Student Hiring (`/get-involved/student-hiring/`)
- **Resources** (`/resources/`) – Links to GitHub and materials
- **Search** (`/search/`) – Client-side search with Fuse.js

## Documentation

- **[Blog Categories Guide](docs/blog-categories.md)** – How to categorize and write blog posts
- **[Projects System Guide](docs/projects.md)** – Managing research projects with tags and individual pages
- **[Deployment Guide](docs/deployment.md)** – Building and deploying to various platforms

## Features

- **Responsive Design** – Bootstrap 5 with custom styling
- **Blog System** – Categorized posts with icons and pagination
- **Projects System** – Research projects with tags, individual pages, and detailed layouts
- **RSS Feed** – Auto-generated at `/feed.xml`
- **Search** – Client-side search across posts and team members
- **Contact Form** – Formspree-compatible with validation
- **Analytics Ready** – Plausible integration via configuration

## Configuration

### Site Settings
Edit `src/_data/site.json` to configure:
- Site title and tagline
- Navigation structure
- Social links (GitHub)
- Analytics domain
- Blog category icons

### Contact Form
Update the form action in `src/contact.md`:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Analytics
Enable Plausible by setting `plausibleDomain` in `site.json`:
```json
{
  "plausibleDomain": "your-domain.com"
}
```

## Content Management

### Adding Blog Posts
Create new markdown files in `src/blog/posts/` with front matter:
```yaml
---
layout: layouts/post.njk
title: "Your Post Title"
category: research
excerpt: "Brief description"
date: 2025-09-24
permalink: "/blog/{{ page.fileSlug }}/"
---
```

### Team Members
Update `src/_data/affiliates.json` to manage student affiliates. PI information is in `src/team.md`.

## Deployment

This static site can be deployed to:
- **GitHub Pages** (with Actions)
- **Netlify** (recommended for forms)
- **Vercel**
- **Traditional hosting** (upload `_site/` contents)

See the [Deployment Guide](docs/deployment.md) for detailed instructions.

## Development

The site uses:
- **Eleventy** for static site generation
- **Bootstrap 5** for responsive design
- **Bootstrap Icons** for iconography
- **Fuse.js** for client-side search
- **Luxon** for date formatting

No build process is required for CSS/JS as external CDNs are used for dependencies.
