# TODO-HUMAN — Requires Your Decision / Real-world Input

## Pre-deploy (all easy wins)
1. **Claim Google Business Profile** — dynamicsroute.tech → Local Services. Categories: *Trucking Transportation*, *Freight Forwarding Company*, *Moving / Transportation Service*. Add: phone `+251 983 222 221`, service areas (Addis, Modjo, Kality, Hawassa, Dire Dawa, Djibouti), hours (24/7), real photos (trucks, loading).
2. **Google Shopping / merchant center** — only after the app has actual paid collections (optional).
3. **Directory listings** — submit name/address/phone exactly as: *DTC - Dynamics Transport Commission*, dynamicsroute.tech to: Google My Business (done in #1), Bing Places, Yandex, 2merkato / ZayRony / YeAddisBiz local directories, Djibouti port directories (dmp.com.et adjacency). Keep NAP consistent.
4. **GA4 + Search Console** — set in Dokploy env (after create):
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX`
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxx` (from GSC → Settings → Verification → HTML tag)
   - The build is no-op safe without them (script only renders when set).

## Post-launch (commercial decisions)
5. **Commission rate** — announced-before-change, TBD exact % (user decision). Do NOT publish a fake number. Current copy: *"Free during launch; a rate will be announced before it changes."* ✓ matches user's choice.
6. **Amharic `/am/`** — draft homepage + corridor links drafted, but **needs your native review** (spelling/tonality). Only then promote `/am/` in sitemap priority.
7. **App stores** — connect Play Console/App Store, set dynamicsroute.tech as site, add screenshots + keywords (freight, trucking, cargo, Djibouti, queues).

## Content (optional but recommended before heavy promotion)
8. Blog: password + toast fine; consider adding 2–3 more corridor guides (Modjo→Djibouti, Kality→Djibouti) for cluster depth. FAQ page has data but no FAQPage schema on some pages (home). The `/blog` + corridor pages have Article/FAQPage/HowTo JSON-LD.
