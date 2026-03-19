# Personal site (single-page)

Static single-page website powered by Tailwind CSS (compiled locally for production).

## Local development

- Install dependencies:

```bash
npm install
```

- Build CSS once:

```bash
npm run build:css
```

- Watch CSS while editing `index.html`:

```bash
npm run watch:css
```

Then open `index.html` in a browser.

Note: the stylesheet link uses a cache-busting query string (`assets/tailwind.css?v=...`). If your changes don’t show up, bump that number or hard-refresh.

## Deploy

Upload `index.html` and the `assets/` folder (at minimum: `assets/tailwind.css` and `assets/portrait.png`) to any static host.

