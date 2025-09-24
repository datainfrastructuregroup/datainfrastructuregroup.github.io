# Deployment Guide

This guide covers how to build and deploy the DIG Eleventy website to various hosting platforms.

## Prerequisites

- Node.js (LTS version recommended)
- Git
- Access to your chosen hosting platform

## Local Development

### Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd "11ty site"

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8082` with live reload.

### Development Commands
- `npm run dev` - Start development server with live reload
- `npm run build` - Build site for production (outputs to `_site/`)

## Building for Production

The production build process:

```bash
# Build the site
npm run build
```

This creates a `_site/` directory containing:
- Static HTML files
- CSS and JavaScript assets
- RSS feed (`feed.xml`)
- Search index (`search.json`)
- All images and other assets

## Deployment Options

### GitHub Pages

#### Method 1: GitHub Actions (Recommended)

1. **Create workflow file** at `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build site
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./_site
```

2. **Enable GitHub Pages** in repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (created by the action)

#### Method 2: Manual Build

```bash
# Build the site
npm run build

# Deploy _site/ contents to gh-pages branch
# (Use gh-pages npm package or manual git commands)
```

### Netlify

#### Method 1: Git Integration (Recommended)

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `_site`
   - Node version: 18 (in Environment variables: `NODE_VERSION=18`)

#### Method 2: Manual Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build site
npm run build

# Deploy
netlify deploy --prod --dir=_site
```

### Vercel

1. **Connect repository** to Vercel
2. **Build settings** (auto-detected):
   - Framework: Other
   - Build command: `npm run build`
   - Output directory: `_site`

### Traditional Web Hosting

For shared hosting or VPS:

```bash
# Build the site
npm run build

# Upload _site/ contents via FTP/SFTP to web root
# Or use rsync for server deployment:
rsync -avz --delete _site/ user@server:/path/to/webroot/
```

## Environment Configuration

### Site URL Configuration

Update `src/_data/site.json` for production:

```json
{
  "title": "Data Infrastructure Group (DIG)",
  "url": "https://your-domain.com",
  "social": {
    "github": "https://github.com/your-org"
  }
}
```

### Analytics Setup

To enable Plausible analytics:

```json
{
  "plausibleDomain": "your-domain.com"
}
```

### Contact Form Setup

Update contact form action in `src/contact.md`:

```markdown
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

## Custom Domain Setup

### GitHub Pages
1. Add `CNAME` file to repository root with your domain
2. Configure DNS A records to point to GitHub Pages IPs
3. Enable HTTPS in repository settings

### Netlify
1. Add custom domain in Netlify dashboard
2. Configure DNS to point to Netlify
3. SSL certificate is automatically provisioned

### Vercel
1. Add domain in Vercel dashboard
2. Configure DNS as instructed
3. SSL certificate is automatically provisioned

## Performance Optimization

### Build Optimization
- Images are automatically copied to `_site/assets/`
- CSS is loaded from CDN (Bootstrap)
- JavaScript is minimal and loaded from CDN

### Caching Headers
Add to your hosting platform:

```
# Netlify (_headers file)
/assets/*
  Cache-Control: public, max-age=31536000

/*.html
  Cache-Control: public, max-age=3600

/feed.xml
  Cache-Control: public, max-age=3600
```

## Troubleshooting

### Build Failures

**Node version issues**:
```bash
# Use Node 18 LTS
nvm use 18
```

**Dependency issues**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Template errors**:
- Check Nunjucks syntax in templates
- Verify data file structure
- Check for missing front matter

### Deployment Issues

**GitHub Pages not updating**:
- Check Actions tab for build errors
- Verify gh-pages branch exists
- Check repository settings

**Netlify build failures**:
- Check build logs in Netlify dashboard
- Verify Node version in environment variables
- Check build command and publish directory

**Missing assets**:
- Verify asset paths are relative
- Check passthrough copy configuration in `.eleventy.js`
- Ensure assets exist in source

## Monitoring

### Site Health
- Monitor RSS feed: `/feed.xml`
- Check search functionality: `/search/`
- Verify all navigation links work
- Test contact form submission

### Analytics
- Set up Plausible or similar privacy-focused analytics
- Monitor page views and popular content
- Track RSS feed subscriptions

## Backup Strategy

1. **Source code**: Stored in Git repository
2. **Content**: Blog posts and pages in Markdown
3. **Configuration**: All settings in version-controlled files
4. **Assets**: Images and files in `src/assets/`

The entire site can be rebuilt from the Git repository, making backup straightforward.
