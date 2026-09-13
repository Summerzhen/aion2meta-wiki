# AION 2 Meta Static Site

This is the first deployable static version of `aion2meta.wiki`.

## What Is Included

- 49 generated pages.
- Home page, class hub, build hub, dungeon hub, release date, founder pack, Global vs KR/TW meta page.
- 8 class pages.
- 8 build pages with PvE / PvP / Solo tabs.
- 5 tier-list pages with activity matrix.
- 6 guide pages.
- `robots.txt` and `sitemap.txt`.
- `sitemap.xml`, Open Graph metadata, Twitter summary metadata and JSON-LD WebSite/WebPage/Breadcrumb data on every page.
- Confirmed Steam facts panel: launch date, advance access, Unreal Engine 5, world scale, aerial combat hook, dungeon scope, customization and PC requirements.
- Founder Pack comparison with Standard / Deluxe / Ultimate prices.
- Dedicated data pages for gameplay, PvE content, flight combat, character customization, evidence policy and update log.
- Launch verification checklist for the September 30 / October 5 update passes.
- Pre-launch purchase and status pages: Advance Access, Standard vs Deluxe vs Ultimate, Server Status, and Preload & Download.
- Hub pages for Tier Lists, Guides and Meta.
- `404.html`, `site.webmanifest` and SVG favicon.

## Editorial Position

The site is intentionally written as a Global pre-launch meta tracker. It does not publish fake S/A/B/C rankings before Global launch data exists.

Evidence labels used by the content strategy:

- Official
- Global Verified
- KR/TW Reference
- Unconfirmed

## Data Added

Current factual data is limited to what can be treated as official storefront information:

- Steam release date: October 5, 2026.
- Founder Pack advance access: September 30, 2026.
- Founder Pack prices: Standard $24.99, Deluxe $49.99, Ultimate $99.99.
- Steam gameplay claims: Unreal Engine 5, flight/vertical combat focus, world 36 times larger than original AION, over 200 dungeons, solo / 5-player / 10-player dungeon formats, seasonal challenges, competitive rankings, open-world events, over 200 customization options.
- PC requirements: Windows 10/11 64-bit, Ryzen 5 2600 / Intel Core i5-10500, 8 GB RAM, GTX 1050 Ti 4GB, DirectX 12, 100 GB storage, SSD recommended.

Class roles are structured as editorial taxonomy for launch preparation. They are not treated as Global performance rankings.

## Local Preview

From this directory:

```bash
python -m http.server 4179 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4179/
```

## Regenerate

```bash
python build_site.py
```
