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
├── privacy.html                   ← privacy policy (required for Google Play)
├── delete-data.html               ← account & data deletion (Play's "Delete account URL")
├── _redirects                     ← keeps docs/ off the live site
├── docs/                          ← internal notes, not served (e.g. play-data-safety.md)
├── app-ads.txt                    ← AdMob authorised-sellers file (must stay at the root)
├── styles.css                     ← all styling (dark, gold-accent theme)
├── main.js                        ← i18n dictionary, language toggle, marquee, Play-Store CTA
└── assets/
    ├── brand/    ← app icon + favicons
    ├── screens/  ← in-app screenshots (EN + ES)
    ├── games/    ← teaser art for upcoming worlds (prehistory, cosmos, fantasy)
    ├── marquee/  ← species thumbnails for the scrolling strip
    └── video/    ← optional hero gameplay clip (see "Two things to set", below)
```

## Page sections

**`the-wildlife-collection.html`** (the conversion-focused game landing):
hero (experience-first copy + optional "Watch gameplay" button) → species marquee →
headline stats → free/offline band → features → **Chase the rares** (foil-card
composition) → mid-page CTA → Learn → screen gallery → Conservation → **social proof**
(placeholder reviews, ready for Google Play) → final CTA.

**`index.html`** (studio hub): hero → marquee → Our games → **The Maraverse** (the four
universes: Nature · Prehistory · Space · Fantasy) → studio story → final CTA.

All headline numbers, rare-card foils and the world tiles are built from the existing
WebP assets with CSS — no extra binaries to ship.

## Structure & how it grows

- **`index.html`** is the studio home: hero, an **Our games** grid (The Wildlife
  Collection featured, plus "in the works" teasers), an About section, and contact.
- **`the-wildlife-collection.html`** is the dedicated game landing.
- To add a future game (Cosmos, Dinosaurs, Fantasy…): add a card to the games grid in
  `index.html` and a new `<game>.html` page. No restructure needed. When a game gets big
  enough it can graduate to its own subdomain.

## `app-ads.txt`

[`app-ads.txt`](app-ads.txt) declares that Google/AdMob is authorised to sell the ad
inventory of the Android app. Without it, programmatic buyers filter the app's
impressions as unauthorised — fewer bidders, lower eCPM — and AdMob raises a warning in
the console.

```
google.com, pub-9475965117228543, DIRECT, f08c47fec0942fa0
```

Two constraints:

- It must be served from the **domain root** (`https://maraversegames.com/app-ads.txt`),
  so the file stays at the repo root — never move it into a subfolder.
- AdMob crawls the **developer website declared in the Play Store listing**, so that
  field must point at `https://maraversegames.com`. A recrawl takes about a day.

## `sellers.json` & the verified domain

`app-ads.txt` is only one half of the authorised-seller chain: it declares *from the
publisher's side* that Google may sell this inventory. The other half is Google's own
[`sellers.json`](https://google.com/sellers.json), where the seller behind
`pub-9475965117228543` is listed. That entry is controlled in **AdMob → Settings →
Account → Account controls → Seller information (sellers.json)**, and it is set to:

> **Transparent (maraversegames.com) (verified)**

Transparent publishes the seller name and the domain publicly; the alternative,
Confidential, hides both, and some programmatic buyers discount or skip confidential
sellers. The account is an individual one, so the published seller name is the developer's
legal name — already public in [`privacy.html`](privacy.html), so this adds no new
exposure.

### The DNS TXT record (in Cloudflare, not in this repo)

AdMob only accepts a domain that is **verified in Google Search Console under the same
Google account**. `maraversegames.com` is registered there as a **Domain** property
(covers the apex, `www` and any future subdomain), verified by a TXT record on the apex:

| Type | Name                 | Content                                | Proxy    |
| ---- | -------------------- | -------------------------------------- | -------- |
| TXT  | `maraversegames.com` | `google-site-verification=cq9DGmM2bnf…` | DNS only |

It was created through Google's one-time Cloudflare authorisation from the Search Console
verification screen, so it lives in **Cloudflare DNS** — there is no file in this repo to
point at, which is why it is written down here.

⚠️ **Never delete that TXT record.** Google revalidates periodically; if the record
disappears the Search Console property is un-verified, and the domain drops off the
`sellers.json` entry. Note the apex also carries SPF, DKIM and MX records for email —
when adding anything, **add a new TXT record, never overwrite an existing one**.

Changes to either setting propagate to `google.com/sellers.json` within about a day.

## Run it locally

Pure static — open `index.html`, or serve the folder:

```bash
npx serve .
# or
python -m http.server 8000
```

## Two things to keep an eye on

1. **Google Play link** — the app is live, and `PLAY_STORE_URL` at the top of
   [`main.js`](main.js) holds the listing URL. Every "Get it on Google Play" button
   (hero, mid-page and final CTA) picks it up and the "Launching soon" note stays
   hidden. Clearing the string reverts the whole site to the pre-launch state.
2. **Privacy policy** — [`privacy.html`](privacy.html) is written against the SDKs the
   app actually ships (Firebase Analytics + Remote Config, Firebase Authentication with
   Play Games sign-in, Firestore cloud save, AdMob, Sentry, Cloudflare asset delivery, local notifications).
   **Revisit it whenever the app adds or drops a service**, and bump the "Last updated"
   date. Keep [`delete-data.html`](delete-data.html) and the Play Data safety notes in
   [`docs/play-data-safety.md`](docs/play-data-safety.md) in step with it. Google Play requires a public
   privacy-policy URL, and it is the URL the AdMob consent message links to.

### Social proof

The reviews section on the game page uses **invented placeholder quotes** (`social.*` in
the `I18N` dictionary), attributed to first names labelled "early tester" so they never
read as verified Play reviews. Swap the text and attribution for genuine reviews as soon
as the listing has them — the layout is already in place.

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
