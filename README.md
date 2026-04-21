# Kunal Sharma — Political Research Website

A minimal, academic personal website for political research and analysis.

## File Structure

```
/
├── index.html          — Home page
├── articles.html       — All articles listing
├── about.html          — About page
├── articles/
│   ├── article1.html   — Is Indian Democracy Weakening?
│   ├── article2.html   — Role of Media in Political Power
│   └── article3.html   — Centralisation vs. Federalism in India
├── css/
│   └── style.css       — All styles
├── js/
│   └── script.js       — Dark mode toggle + nav
└── images/
    ├── profile.jpg     — Profile photo (add your own)
    ├── article1.jpg    — Article 1 featured image
    ├── article2.jpg    — Article 2 featured image
    └── article3.jpg    — Article 3 featured image
```

## Setup

1. Add your images to the `/images/` folder:
   - `profile.jpg` — your profile photo (square recommended)
   - `article1.jpg`, `article2.jpg`, `article3.jpg` — article hero images (16:9 recommended)

2. If images are missing, graceful emoji placeholders are shown automatically.

## Deployment

### GitHub Pages
1. Push to a GitHub repository
2. Go to Settings → Pages → Source: Deploy from branch → `main` / `/(root)`
3. Site will be available at `https://yourusername.github.io/repo-name/`

### Netlify
1. Drag the project folder into [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect the GitHub repo for automatic deployments

## Features
- ☾ Dark mode toggle (persists via localStorage)
- 📱 Fully responsive (mobile hamburger menu)
- 🔤 Playfair Display (serif) + Source Sans 3 (sans-serif)
- 🏷 Tag system on all articles
- 🔗 Related articles on each article page
- ♿ Accessible (semantic HTML, aria labels, keyboard nav)
- ⚡ No dependencies — pure HTML/CSS/JS

## Color Scheme
| Token        | Light Mode  | Dark Mode  |
|-------------|-------------|------------|
| Background  | `#FFFFFF`   | `#0B0B0B`  |
| Text        | `#111111`   | `#EAEAEA`  |
| Accent blue | `#1E3A8A`   | `#6B8FD6`  |
| Muted text  | `#555555`   | `#888888`  |
