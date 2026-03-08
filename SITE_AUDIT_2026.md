# Retro Brawl Site Audit — March 2026

## Summary

Full audit of sitemap, robots.txt, package.json, package-lock.json, and related SEO/config files. Issues were found and fixed.

---

## Fixes Applied

### 1. **package-lock.json**
- **Issue:** Root package name was `cardrummyapp` (leftover from another project).
- **Fix:** Renamed to `retrobrawl` to match `package.json`.

### 2. **robots.txt API route** (`src/app/api/robots/route.ts`)
- **Issue:** Contained invalid path `Allow: /download-retro-brawl` (page does not exist).
- **Fix:** Removed `/download-retro-brawl`. Correct path is `/download-retro-brawl-apk`.

### 3. **Dynamic sitemap & robots**
- **Issue:** Static `public/sitemap.xml` was outdated and missing 2 blog posts.
- **Fix:** Added rewrites in `next.config.ts`:
  - `/sitemap.xml` → `/api/sitemap` (dynamic, always up to date)
  - `/robots.txt` → `/api/robots` (single source of truth)

---

## Current Configuration

### package.json
- **Name:** retrobrawl
- **Version:** 1.0.0
- **Dependencies:** next ^15.5.9, react ^19.0.0, react-dom, react-hook-form, web-vitals, critters
- **DevDependencies:** TypeScript, ESLint, Tailwind, PostCSS, Autoprefixer

### Sitemap Architecture
| URL | Source | Pages |
|-----|--------|-------|
| `/sitemap.xml` | API `/api/sitemap` | All main + 14 blog posts |
| `/sitemap-index.xml` | Static `public/` | Points to sitemap.xml + image-sitemap.xml |
| `/image-sitemap.xml` | Static `public/` | Image URLs for homepage |

**Blog posts in sitemap:** 14 total, including:
- retro-brawl-crashing-not-opening-how-to-fix
- top-5-fan-made-retro-brawl-maps-2025
- (all other existing posts)

### robots.txt (via API)
- **Allow:** All pages (`Allow: /`)
- **Disallow:** `/api/`, `/admin/`
- **AI bots blocked:** GPTBot, ClaudeBot, Google-Extended, etc.
- **Search bots allowed:** Googlebot, Bingbot, Baiduspider, Yandex
- **Sitemaps:** sitemap-index.xml, sitemap.xml, image-sitemap.xml

### manifest.json
- **Name:** Retro Brawl APK
- **Icons:** retro-brawl-logo.webp (192, 512)
- **Theme:** #06091F

---

## Pages Inventory (26 routes)

**Main:** `/`, `/download-retro-brawl-apk`, `/retro-brawl-for-ios`, `/retro-brawl-for-pc`, `/retro-brawl-apk-about-us`, `/retro-brawl-apk-contact-us`, `/privacy`, `/disclaimer`, `/dmca`, `/blog`

**Blog:** 14 posts (all present in dynamic sitemap)

---

## Recommendations

1. **Image sitemap:** Consider making `image-sitemap.xml` dynamic if you add more image-heavy pages.
2. **Sitemap index:** Could add an API route for sitemap-index if you split sitemaps (e.g. pages vs blog).
3. **Static files:** `public/sitemap.xml` and `public/robots.txt` are now bypassed by rewrites; you can keep them as fallbacks or remove them.
4. **Package scripts:** Current scripts (dev, build, start, lint) are standard and adequate.

---

## Security Headers (next.config.ts)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- X-XSS-Protection: 1; mode=block
