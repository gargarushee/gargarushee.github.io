# gargarushee.github.io

Interactive GitHub portfolio for Arushee Garg showcasing AI-native engineering leadership, flagship projects and keynote visibility.

## GitHub Pages deployment

This repository ships with a GitHub Actions workflow that deploys the site from the `main` branch to GitHub Pages. In your repository settings, set **Pages → Build and deployment** to **GitHub Actions** and the site will publish on every push to `main`.

## Local development

```bash
npx serve .
# or
python3 -m http.server
```

Then open `http://localhost:8000` (or whatever port your static server reports).

## Updating artwork

1. Drop your PNGs inside `assets/art/`.
2. Update the entries in `artPieces` inside `art.js` if you change filenames or want to add/remove pieces.
3. Reload the page—cards gracefully fall back to the gradient background if an image is missing.
4. Swap the placeholder hero/profile and project diagram SVGs in `assets/profile.svg` + `assets/projects/` if you have real images.

### Viewing the creative tab

- `index.html` showcases the engineering portfolio.
- `art.html` is the dedicated creative tab (linked from the nav); open it directly or via the Art link to preview digital paintings.
