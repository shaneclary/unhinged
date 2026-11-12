# Launch checklist

Do not point unhingedgeology.com at this build until every box is ticked.

## Content

- [ ] Every page in `src/content/legacy/status.ts` is `imported: true`, with Liam's exact text.
- [ ] Every `exact: false` string in `src/content/legacy/home.ts` and every `summary` in
      `src/content/services.ts` has been replaced with the exact text from the current site.
- [ ] News posts and articles are imported at their current URLs. List the current URLs
      first (Squarespace: Settings > Import/Export > Export gives an XML file with all of them).
- [ ] Liam has reviewed each guide (`reviewed: true`) and the glossary (`glossaryReviewed`).
      Unreviewed guides stay hidden, so launch does not have to wait for all of them.
- [ ] Liam has gone through `/proposed-additions`.

## Assets

- [ ] Photos copied from the Squarespace CDN into `/public/images`, and the URLs in
      `src/content/` updated. They break the day Squarespace is cancelled otherwise.
- [ ] Logo file from Liam (vector or PNG) in place in the header, favicon and `site.logo`.
- [ ] Alt text written for every photo.

## Wiring

- [ ] Contact form: `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` set in Vercel. Send a test.
- [ ] Decide: newsletter signup, gold and silver price boxes, cart link (see `/proposed-additions`).
- [ ] Social links confirmed (Instagram, X) and LinkedIn added in `src/content/site.ts`.

## Search

- [ ] Any current URL that is not in this build gets a redirect in `next.config.ts`.
- [ ] `NEXT_PUBLIC_SITE_URL=https://www.unhingedgeology.com` and `NEXT_PUBLIC_INDEXABLE=true`
      set for Production in Vercel. Redeploy.
- [ ] Check `/robots.txt` allows crawling and `/sitemap.xml` lists the right pages.
- [ ] Domain added to the Vercel project, DNS pointed, apex redirects to www (or the reverse:
      match what the current site does).
- [ ] Google Search Console: verify the domain, submit the sitemap.
- [ ] Spot-check structured data on the home page, one guide and the glossary with
      Google's Rich Results Test.

## After

- [ ] Keep the Squarespace site paid for a few weeks as a fallback, then cancel.
- [ ] Recheck BLM fees each August and update the claims guide and calculator defaults.
