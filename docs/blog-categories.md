# Blog Categories Guide

The DIG website uses a category system to organize blog posts and provide visual differentiation through icons. This guide explains how to use categories effectively.

## Available Categories

The site supports the following blog post categories, each with its own Bootstrap icon:

### `research`
- **Icon**: `bi-bezier2` (📊)
- **Use for**: Research findings, theoretical discussions, methodology posts, academic insights
- **Example**: "What Does Transformative Data Science Actually Mean?"

### `event`
- **Icon**: `bi-calendar-event` (📅)
- **Use for**: Conference presentations, workshops, seminars, speaking engagements
- **Example**: "Workshop: Introduction to Community-Centered Data Analysis"

### `publication`
- **Icon**: `bi-journal-text` (📖)
- **Use for**: Paper announcements, publication releases, academic achievements
- **Example**: "Our CHI 2025 Paper on Community Data Governance"

### `news`
- **Icon**: `bi-megaphone` (📢)
- **Use for**: Lab updates, student spotlights, general announcements, milestones
- **Example**: "Student Spotlight: Alex Johnson's Work on Data Pipeline Reproducibility"

### `link`
- **Icon**: `bi-link-45deg` (🔗)
- **Use for**: External resource shares, interesting articles, relevant work by others
- **Example**: "New Framework for Ethical Data Infrastructure Released"

## How to Set Categories

Add the category to your blog post's front matter:

```yaml
---
layout: layouts/post.njk
title: "Your Post Title"
category: research
excerpt: "Brief description of the post"
date: 2025-09-24
permalink: "/blog/{{ page.fileSlug }}/"
---
```

## Category Configuration

Categories and their icons are defined in `src/_data/site.json`:

```json
"icons": {
  "research": "bi-bezier2",
  "event": "bi-calendar-event", 
  "publication": "bi-journal-text",
  "news": "bi-megaphone",
  "link": "bi-link-45deg"
}
```

## Adding New Categories

To add a new category:

1. **Choose a Bootstrap Icon**: Browse [Bootstrap Icons](https://icons.getbootstrap.com/) and select an appropriate icon
2. **Update site.json**: Add the new category and icon to the `icons` object
3. **Use in posts**: Reference the new category in your blog post front matter

Example of adding a "tutorial" category:

```json
"icons": {
  "research": "bi-bezier2",
  "event": "bi-calendar-event",
  "publication": "bi-journal-text", 
  "news": "bi-megaphone",
  "link": "bi-link-45deg",
  "tutorial": "bi-book"
}
```

## Best Practices

### Content Guidelines
- **Be consistent**: Use the same category for similar types of content
- **Be specific**: Choose the most specific category that applies
- **Avoid overlap**: If a post could fit multiple categories, choose the primary purpose

### Writing Tips
- **Research posts**: Include methodology, findings, and implications
- **Event posts**: Include date, time, location, and registration details
- **Publication posts**: Include abstract, key contributions, and access information
- **News posts**: Keep tone celebratory and informative
- **Link posts**: Provide context and explain relevance to DIG's work

### SEO and Discovery
- Categories appear in RSS feeds to help readers filter content
- Icons provide visual scanning cues on the blog index
- Search functionality indexes category information
- Categories can be used for future filtering features

## Troubleshooting

### Missing Icons
If a category doesn't have an icon defined in `site.json`, it will default to `bi-file-text`. Always define icons for new categories.

### Category Not Displaying
Ensure the category name in your post exactly matches the key in `site.json` (case-sensitive).

### Icon Not Showing
Verify the Bootstrap Icon class name is correct. All icons should start with `bi-`.
