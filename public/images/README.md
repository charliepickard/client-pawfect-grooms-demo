# Image assets

Replace the placeholders in this folder per client. The template references
the following filenames; if a client doesn't supply one, leave the placeholder
or update `config.json` to point elsewhere.

```
public/images/
├── logo.svg                       (header logo, monochrome works best)
├── hero.jpg                       (home page hero, ~2400×1600)
├── about.jpg                      (about page header + home about snippet, ~2000×1200)
├── og-image.jpg                   (social share image, 1200×630)
├── staff/
│   └── sarah.jpg                  (per staff member, square, ~800×800)
└── gallery/
    ├── 01-cockapoo-before.jpg
    ├── 01-cockapoo-after.jpg
    ├── 02-golden-after.jpg
    └── ... (any further before/after pairs or single afters)
```

Recommended formats: JPEG for photos. PNG only when transparency is required.
SVG for the logo if available.

For best Lighthouse scores, run images through an optimiser (Squoosh, ImageOptim)
before adding them.
