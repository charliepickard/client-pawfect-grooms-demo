# Dog Grooming Website Template

A productized Astro template for small dog grooming businesses. Per-client
content lives in a single `src/config.json` file. Every page and component
reads from it, so deploying a new client site means: fork repo → fill in
config → drop in their photos → connect Netlify.

## Stack

- **Astro 4** — static HTML output
- **Tailwind CSS 3** — utility-first, themed via CSS custom properties from `config.json`
- **Cal.com** — booking + Stripe payments via embed
- **Decap CMS** — git-based CMS at `/admin`, auth via Netlify Identity
- **Netlify** — hosting + auto-deploy from GitHub

Hosting & content are free for the client. Cloudflare for DNS/email forwarding.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site → ./dist
npm run preview  # preview the built site locally
```

## Per-client setup checklist

Target: **2–3 hours** per client once you're familiar.

1. **Onboarding form** — collect name, services, prices, hours, address, phone, brand colours, photos, social handles.
2. **Domain** — register through your Cloudflare account.
3. **Repo** — fork this template into a client-specific repo (e.g. `client-pawfect-grooms`).
4. **Fill `src/config.json`** — every per-client string lives here.
5. **Drop client photos** into `public/images/` (see `public/images/README.md` for filenames + sizes).
6. **Cal.com account** — create one for the client. Add event types (one per service). Connect their Stripe. Set deposit amounts per event if required.
7. **Netlify** — connect the GitHub repo. Auto-deploys on push.
8. **DNS** — point the Cloudflare domain at Netlify, enable SSL.
9. **Netlify Identity** — enable in Netlify dashboard. Invite the client by email so they can log into `/admin`.
10. **Email forwarding** — Cloudflare Email Routing → forward `info@theirdomain.co.uk` to their existing inbox.
11. **Walk-through** — show the client the Cal.com mobile app and `/admin` for content edits.

## What lives where

```
src/
├── config.json                  # ALL per-client content
├── components/                  # Small, single-purpose components
├── layouts/BaseLayout.astro     # HTML shell, fonts, brand CSS vars, Cal.com init
├── pages/                       # One .astro file per route
└── styles/global.css            # Tailwind + minimal globals

public/
├── admin/                       # Decap CMS at /admin
│   ├── index.html               # Decap loader
│   └── config.yml               # Which keys clients can edit
├── images/                      # All photos and the logo
└── robots.txt                   # Allow all, disallow /admin/
```

## Editing content (the client)

1. Visit `https://yourdomain.co.uk/admin`.
2. Log in with the email you set up in Netlify Identity.
3. Edit services, gallery, reviews, or opening hours.
4. Click **Publish**. The site rebuilds automatically (~1–2 minutes).

The client cannot edit business name, address, brand colours, or SEO settings
through `/admin` — those are reserved for you to update in `config.json` and
push to GitHub.

## Things to remember when editing

- Never hardcode client text in a page or component — always pull from `config.json`.
- Hero image needs `fetchpriority="high"` and no `loading="lazy"` (LCP).
- New images go in `public/images/`; reference them with leading `/` (e.g. `/images/hero.jpg`).
- The Cal.com inline embed iframes app.cal.com — `netlify.toml` has a per-route
  `X-Frame-Options: SAMEORIGIN` exception for `/book` so the embed works.

## Out of scope (V1)

Multi-staff booking, customer accounts, SMS reminders, pet records, online shop,
loyalty programme, blog, recurring bookings, multi-location, live Google Reviews
API. See the spec for context.

## Demo

The "Pawfect Grooms" content in `config.json` is realistic placeholder content
for pitching to prospective clients. Deploy this as-is to a Netlify subdomain
(e.g. `pawfect-grooms-demo.netlify.app`) and you have a working demo site.
