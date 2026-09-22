# SEO CHANGELOG — DTC / Dynamics Transport Commission

Site: https://dynamicsroute.tech · Repo: `dynamic-transport-market`
All SEO work done this session landed as static, prerendered output. Last verified `next build`: **passes**, 26 routes, TSC clean.

---

## 1. Homepage — Task 1 (DONE)
- New "Queue & Associations" section (`components/home/queue-associations.tsx`) inserted between Vehicle Fleet and Coverage Map on `app/page.tsx`.
- Copy covers: free booking, verified drivers, live tracking, transparent rates, Pan-African route coverage.

## 2. Pricing Transparency — Task 2 (DONE)
- `app/pricing/page.tsx` hero + summary cards rewritten to be explicit and commission-free:
  - **Free during launch** — no commission, no subscription, no hidden fees.
  - Post-launch rate: **TBD — announced before any change** (per business decision; exact % set when decided).
- Per-quintal rate indicators now say **"Contact for quote" / "Announced before quoting"** — we never publish a fabricated number.

## 3. Queue Organizations Landing — Task 3 (DONE, partially)
- Content rewritten for queue org audiences (fair FIFO rotation, verified drivers, digital queue engine, free during launch).
- Added inline JSON-LD (`SoftwareApplication` / `Service` w/ `Provider`=DTC) — works on client component. **Note:** client pages can't export Next `metadata`; title/description live in component `<title>` fallback (see TODO-HUMAN if stricter control wanted).

## 4. Transport Associations Landing — Task 4 (DONE, partially)
- Content rewritten for associations (membership value, member matching, free during launch).
- Inline JSON-LD `Service` schema added.

## 5. Addis Ababa – Djibouti Corridor — Task 5 (DONE)
- `/addis-to-djibouti` page using shared `components/corridors/corridor-page.tsx` + `lib/corridors.ts`.
- Structured data: `Product`/`Service` + `Offer` + breadcrumbs + FAQPage (all corridor pages).

## 6. Remaining Corridors — Task 6 (DONE)
- `/addis-to-adama`, `/addis-to-hawassa`, `/dire-dawa-to-djibouti`, `/modjo-dry-port`, `/kality-warehouse`, `/container-transport`.
- All via shared corridor template; every page emits canonical + hreflang back to `/`.

## 7. Amharic `/am/` — DRAFT (see TODO-HUMAN)
- Not included in build; verify/dev review required (Amharic spelling/tonality) — see human checklist.

## 8. Technical SEO — Task 8 (DONE)
- `lib/seo.ts`: `SITE_NAME`, `SITE_URL` (https://dynamicsroute.tech), `canonical(path)` helper (returns `alternates.canonical` + `metadataBase`). Used on every page via `canonical('/...')`.
- `app/sitemap.ts`: generated from route map incl. corridor pages. (Blog route added — site will 404 until blog articles merged; see TODO-HUMAN.)
- `app/robots.ts`: allow all, Sitemap URL uses `SITE_URL`.
- `app/layout.tsx`: GA4 (via `NEXT_PUBLIC_GA_MEASUREMENT_ID`) + GSC site-verification meta (via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`) — both env-gated, no-op if unset.

## 9. Blog — Task 9 (DRAFT STRUCTURE ONLY)
- `/blog` index + `/blog/addis-to-djibouti-shipping-guide-2026` article drafted. **Not in build yet** — wire the `posts` map + article page then rebuild (see TODO-HUMAN).

## 10. GA4 (DONE) · GSC (DONE)
- GA4 measurement ID hookup in `layout.tsx` (client script via `next/script` in `<body>`) — set `NEXT_PUBLIC_GA_MEASUREMENT_ID` at deploy; no-op otherwise.
- GSC verification: meta flag env-gated.

## 11. Google Business Profile (PENDING — human action)
- See directory checklist in TODO-HUMAN.md (claim GBP, categories, service areas, hours, photos, GBP posts).

## 12. Directory / Commissions (PENDING — human action)
- See directory checklist in TODO-HUMAN.md.
- Post-launch commission rate: **TBD — will be announced before any change** (no number published). Do **not** publish a fixed %.
