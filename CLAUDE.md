# Unhinged Geology: site rebuild

Rebuild of unhingedgeology.com for Liam Eades (Unhinged Geology LLC, Tonopah, NV).
Shane Clary is building it. Liam approves the content.

Stack: Next.js (App Router, static pages), TypeScript, plain CSS. No database.
Deploys on Vercel (project `unhinged`). Fonts are self-hosted via @fontsource.

## Commands

    npm run dev        # local site
    npm test           # calculator math + content cross-reference checks
    npm run typecheck
    npm run build

## The three content rules

1. **Liam's existing language stays Liam's.** Text carried over from the current
   site lives in `src/content/legacy/` and `src/content/services.ts`. Each string
   is marked `exact: true` (word for word) or `exact: false` (a close paraphrase
   waiting to be replaced with his exact words). Do not polish it.
2. **Anything new is listed for his approval** in `src/content/proposed.ts`
   (shown at `/proposed-additions`, never indexed). If you add something new to
   the site, add it there too.
3. **Nothing unreviewed reaches search engines.** Guides have `reviewed: false`
   until Liam signs off; the glossary has `glossaryReviewed`; pages not yet
   imported are `imported: false` in `src/content/legacy/status.ts`. Those flags
   drive robots tags, the sitemap and llms.txt.

## Where things are

| Path | What |
|---|---|
| `src/content/site.ts` | Business facts, routes, menus. Routes match the current site's URLs exactly. |
| `src/content/legacy/home.ts` | Home page copy from the current site. |
| `src/content/legacy/status.ts` | Which current pages are imported. Drives noindex + sitemap. |
| `src/content/services.ts` | The six services, their map-unit symbols, related guides. |
| `src/content/learn/*.ts` | Guides. One file each, three depths: `float`, `outcrop`, `core`. |
| `src/content/learn/types.ts` | Guide format, depth names, `[[glossary-id]]` link syntax. |
| `src/content/glossary.ts` | Terms, each with a plain and a technical definition. |
| `src/content/proposed.ts` | New material and open questions for Liam. |
| `src/lib/calc.ts` (+ `.test.ts`) | All calculator math. Pure functions, tested. |
| `src/lib/seo.ts` | Page metadata and JSON-LD builders. |
| `src/lib/llms.ts` | `/llms.txt` and `/llms-full.txt`. |
| `src/components/` | `Depth` (depth switcher), `Calculators`, `StripLog`, `Photo`, etc. |
| `src/app/globals.css` | The whole design system. Tokens at the top. |
| `docs/LAUNCH.md` | Cutover checklist. Read before pointing the domain. |
| `docs/VOICE.md` | How Liam writes. Read before writing anything new. |

## Things that will bite

- **Staging is noindex by design.** `NEXT_PUBLIC_INDEXABLE=true` is set only at cutover.
- **Photos still load from the Squarespace CDN.** They must be copied into
  `/public` before the Squarespace site is switched off. See `docs/LAUNCH.md`.
- **Content files import each other with `.ts` extensions** so `node --test` can
  run them without a build step. Keep that.
- **Fees and regulations in the guides have dates.** BLM fees were checked
  against BLM's schedule for claims located on or after Sept 1, 2026. Recheck
  each August.
- Reading-depth names (Float / Outcrop / Core) are set once in
  `src/content/learn/types.ts`.
