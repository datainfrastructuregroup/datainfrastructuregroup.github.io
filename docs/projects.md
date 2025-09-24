# Projects System Guide

The DIG website includes a comprehensive projects system that showcases research projects with categorization, individual project pages, and tag-based organization.

## Project Structure

### Data File
Projects are defined in `src/_data/projects.json` with the following structure:

```json
{
  "id": "project-slug",
  "title": "Project Title",
  "tags": ["computational", "qualitative"],
  "excerpt": "Brief project description for listings",
  "description": "Longer description (optional, can use markdown content instead)",
  "status": "active",
  "year": "2024-2026",
  "collaborators": ["Partner Organization", "Another Partner"],
  "publications": ["Conference 2025", "Journal article (in prep)"],
  "github": "https://github.com/org/repo"
}
```

### Individual Project Pages
Each project gets its own page at `/projects/{id}/` created from markdown files in `src/projects/`.

## Available Project Tags

Project tags are defined in `src/_data/site.json` under `projectTags`:

### Current Tags
- **`computational`** - `bi-cpu` (💻) - Projects involving programming, data processing, tool development
- **`qualitative`** - `bi-chat-quote` (💬) - Projects using interviews, ethnography, discourse analysis
- **`both`** - `bi-diagram-3` (📊) - Mixed-methods projects combining computational and qualitative approaches
- **`collaborative`** - `bi-people` (👥) - Community-engaged or participatory research
- **`policy`** - `bi-building` (🏛️) - Policy analysis or advocacy-focused work
- **`technical`** - `bi-gear` (⚙️) - Infrastructure, systems, or technical tool development

## Adding New Projects

### 1. Add Project Data
Add a new entry to `src/_data/projects.json`:

```json
{
  "id": "new-project-slug",
  "title": "New Project Title",
  "tags": ["computational", "collaborative"],
  "excerpt": "Brief description for project listing",
  "status": "active",
  "year": "2025-2026",
  "collaborators": ["Partner Name"],
  "publications": ["Upcoming conference"],
  "github": "https://github.com/datainfrastructuregroup/new-project"
}
```

### 2. Create Project Page
Create `src/projects/new-project-slug.md`:

```yaml
---
layout: layouts/project.njk
title: "New Project Title"
lead: "One-sentence project description"
tags: ["computational", "collaborative"]
status: "active"
year: "2025-2026"
collaborators: ["Partner Name"]
publications: ["Upcoming conference"]
github: "https://github.com/datainfrastructuregroup/new-project"
permalink: "/projects/new-project-slug/"
---

## Project Overview

Detailed project description in markdown...

## Methodology

Research approach and methods...

## Current Status

What's happening now...
```

## Adding New Project Tags

### 1. Define Tag Icon
Add to `src/_data/site.json` under `projectTags`:

```json
"projectTags": {
  "existing-tag": "bi-existing-icon",
  "new-tag": "bi-new-icon"
}
```

### 2. Choose Appropriate Icon
Browse [Bootstrap Icons](https://icons.getbootstrap.com/) and select an icon that represents the tag concept. All icon classes should start with `bi-`.

### 3. Use in Projects
Reference the new tag in project data and front matter:

```json
"tags": ["computational", "new-tag"]
```

## Project Page Layout

The project layout (`layouts/project.njk`) includes:

### Header Section
- Breadcrumb navigation
- Project tags with icons
- Title and lead description
- Timeline and status badges

### Main Content
- Left column: Project content (markdown)
- Right sidebar: Project details card with collaborators, publications, and GitHub link

### Footer
- Back to projects link

## Project Listing Features

The main projects page (`/projects/`) displays:

### Project Cards
- Tag badges with icons
- Project title (linked to individual page)
- Timeline and status
- Excerpt description
- Active status badge

### Tag Reference
- Visual guide showing all available tags and their icons
- Helps users understand the categorization system

## Customization Options

### Project Status
Supported status values:
- `"active"` - Shows green "Active" badge
- `"completed"` - Shows gray "Completed" badge
- `"on-hold"` - Shows gray "On Hold" badge

### Tag Colors
Tags use Bootstrap's secondary badge styling by default. To customize:

```css
.badge.tag-computational {
  background-color: #your-color !important;
}
```

### Project Card Layout
Modify `src/projects.md` to change how projects are displayed in the listing.

## SEO and Discovery

### Project URLs
- Clean URLs: `/projects/project-name/`
- Breadcrumb navigation for context
- Proper heading hierarchy

### Metadata
- Project titles become page titles
- Lead descriptions become meta descriptions
- Tags are included in page content for search indexing

## Integration with Other Features

### Search
Projects are automatically included in the site search index through the existing search system.

### Navigation
The Projects link is added to the main navigation menu automatically.

### RSS Feed
Projects are separate from blog posts and don't appear in the RSS feed. Consider creating a separate projects feed if needed.

## Best Practices

### Content Guidelines
- **Titles**: Clear, descriptive, avoid jargon
- **Excerpts**: 1-2 sentences, focus on impact or novelty
- **Tags**: Use 1-3 tags, choose most specific applicable tags
- **Status**: Keep updated as projects evolve

### Writing Style
- **Overview**: Context, problem, approach
- **Methodology**: Specific methods and tools
- **Status**: Current progress and next steps
- **Impact**: Broader significance and applications

### Maintenance
- Review project status quarterly
- Update publications as they're accepted/published
- Archive completed projects or mark as "completed"
- Add new collaborators as partnerships develop

## Troubleshooting

### Project Not Appearing
- Check that the project ID in the data file matches the markdown filename
- Verify the markdown file is in `src/projects/` directory
- Ensure the permalink matches the expected URL pattern

### Tags Not Showing Icons
- Verify tag names exactly match keys in `site.json` `projectTags`
- Check that Bootstrap Icon class names are correct (start with `bi-`)
- Ensure the icon exists in the Bootstrap Icons library

### Layout Issues
- Check that the project layout template exists at `src/_includes/layouts/project.njk`
- Verify front matter includes all required fields
- Test with minimal content to isolate formatting issues
