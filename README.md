# Maraverse Games — website

The marketing site for **Maraverse Games** and its games. Self-contained and
dependency-free — just static `HTML/CSS/JS`, no build step, no framework. Bilingual
(English / Español) with a live language toggle. Built as a **studio hub that leads with
the first game**, so new titles slot in without a rewrite.

Live at **maraversegames.com** (once deployed).

```
.
├── index.html                     ← STUDIO HOME (Maraverse Games hub + "Our games" grid)
├── the-wildlife-collection.html   ← full landing for the first game
├── 404.html                       ← branded, bilingual not-found page
├── privacy.html                   ← privacy-policy placeholder (required for Google Play)
├── styles.css                     ← all styling (dark, gold-accent theme)
├── main.js                        ← i18n dictionary, language toggle, marquee, Play-Store CTA
└── assets/
    ├── brand/    ← app icon + favicons
    ├── screens/  ← in-app screenshots (EN + ES)
    └── marquee/  ← species thumbnails for the scrolling strip
```

## Structure & how it grows

- **`index.html`** is the studio home: hero, an **Our games** grid (The Wildlife
  Collection featured, plus "in the works" teasers), an About section, and contact.
- **`the-wildlife-collection.html`** is the dedicated game landing.
- To add a future game (Cosmos, Dinosaurs, Fantasy…): add a card to the games grid in
  `index.html` and a new `<game>.html` page. No restructure needed. When a game gets big
  enough it can graduate to its own subdomain.

## Run it locally

Pure static — open `index.html`, or serve the folder:

```bash
npx serve .
# or
python -m http.server 8000
```

## Two things to set before launch

1. **Google Play link** — when the store listing is live, paste the URL into
   `PLAY_STORE_URL` at the top of [`main.js`](main.js). Both "Get it on Google Play"
   buttons on the game page activate automatically and the "Launching soon" note hides.
2. **Privacy policy** — [`privacy.html`](privacy.html) is a draft template. Complete it
   against the SDKs actually shipped (ads, crash reporting, Play Games). Google Play
   requires a public privacy-policy URL.

> Contact email is currently `admin.mara.games@gmail.com`. Once the
> `maraversegames.com` domain + email are set up, switch it to `contact@maraversegames.com`
> — it appears in `index.html`, `the-wildlife-collection.html`, `privacy.html` and `404.html`.

## Deploy — Cloudflare Pages

This repo is a dedicated static site, so deployment is trivial — no build, content at the
repo root.

**One-time setup:**

1. Cloudflare → **Workers & Pages → Create application → Pages → Import an existing Git
   repository**.
2. Pick **`adrianrnieto/maraversegames-web`**, production branch **`main`**.
3. Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` *(leave empty — the site is at the repo root)*
4. **Save and Deploy** → published to a `*.pages.dev` URL.

**Custom domain:** Pages project → **Custom domains → Set up a domain** →
`maraversegames.com` (and add `www`). DNS + SSL are automatic since the domain is on
Cloudflare.

**Auto-deploys:** every push to `main` deploys; pull requests get their own preview URL.

Notes:
- `404.html` is served automatically for unknown paths.
- Clean URLs work out of the box: `the-wildlife-collection.html` is also reachable at
  `/the-wildlife-collection`.
- CDN asset caching is automatic — no config needed.

> Because this repo is **public**, GitHub Pages (free) would also work as an alternative —
> but Cloudflare Pages keeps hosting, the domain and email in one place. Vercel / Netlify
> work too: output directory = root, no build command.

## Editing copy & translations

All user-facing text lives in the `I18N` dictionary in [`main.js`](main.js) — every
element with a `data-i18n="key"` attribute is filled from there. Add/edit a key in both
`en` and `es`. The HTML holds the English fallback inline. The language toggle also swaps
the in-app screenshots between their EN and ES captures.

## Updating screenshots

Screenshots come from the game's own visual-snapshot baselines in the game repo
(`adrianrnieto/Wildlifecollection` → `tests/snapshots/__screenshots__/screens.spec.ts/`),
converted to WebP. To refresh, re-export the relevant `*-dark.png` / `*-dark-es.png`
baselines into `assets/screens/` as `<name>-en.webp` / `<name>-es.webp` (quality ~80).
