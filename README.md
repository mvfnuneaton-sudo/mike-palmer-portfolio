# Mike Palmer — Personal Portfolio

Personal portfolio highlighting commercial leadership, operational improvement, systems integration, UI/UX, product delivery and selected software projects.

**Status:** Source is on GitHub. GitHub Pages and the custom domain must be enabled separately in repository Settings.

## Structure
- `index.html`: main site and embedded, anonymised showcase images
- `assets/styles.css`: design system and responsive layouts
- `assets/site.js`: navigation, case-study galleries and interactive skills

This is a static website; no database or build step is required.

## Publishing on GitHub Pages
1. Open **Settings → Pages** in this repository.
2. Choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then Save.
4. Once GitHub confirms publication, the default address is expected to be `https://mvfnuneaton-sudo.github.io/mike-palmer-portfolio/`.

## Custom domain
The custom domain is `mike.mpdesk.uk`. The `CNAME` file is committed; finish the GitHub Pages Settings and DNS record. In Pages settings, set the custom domain and update your DNS with the CNAME GitHub specifies. Do not assume ownership of `mpdesk.com` from `mpdesk.uk`.

## Privacy and content safeguards
- FFN showcases use fictional demo details in their screenshots.
- The MFFL screenshot uses an admin placeholder.
- **MP Desk interface images have been withheld from the public build** pending employer approval. The written case study stays high level.
- Review all professional claims, public contact links and workplace material before sharing broadly.
- Never add real member contact information, personal records, unpublished business finances or authentication credentials.

## Editing
Change the copy in `index.html`, appearance in `assets/styles.css`, and interactive behaviour in `assets/site.js`. The page includes self-contained demonstration images and a career-profile PDF so it can be hosted without additional media files.


## V9 product showcases
- MFFL: navy/red product section with a consistent laptop-style walkthrough, manually selectable screens and automatic transitions when in view.
- MP Desk: dark graphite/amber product section with interactive Product Master, Performance and Vendor Rebates *representative interfaces*. All sample data are fictional; no real employer dashboards or financial figures are published.
- The original FFN showcase remains unchanged. Both project sections retain their technical capability deep dives.

## V14: recruiter-first discovery and performance
- **Role-fit navigator:** four evidence pathways (ecommerce, operations/change, product/UX, and integration/data) with deep links to the corresponding case studies. The chosen view can be shared with a `?focus=commerce|change|product|integration#role-fit` URL.
- **Faster initial HTML:** repeated embedded portrait images, older showcase images and the career-profile PDF are now separate cacheable assets. HTML reduced from ~1.3 MB to ~37 KB before transfer compression; this is a file-size reduction, not a verified Core Web Vitals result.
- **Social and search:** a branded 1200×630 OG preview, canonical URL, Person structured data, sitemap and robots.txt.
- **Safety:** employer-specific MP Desk screenshots remain withheld. Images with members/figures still use fictional demo representations; no new personal contact details have been published.
- **Recruitment conversion gap:** add an approved public email or LinkedIn profile to the Contact section and downloadable profile before treating the site as a completed recruiter-facing destination.
- **Design inspiration:** categorisation and navigation from `f/prompts.chat`; editorial restraint from `alshedivat/al-folio` and `cobiwave/simplefolio`; anti-generic design principles from `heydamir/unslop`. Inspiration only, no source code or template copied.

## V15: ecommerce leadership and recruiter contact
- Reconciled career timeline to the latest supplied CV: Nemesis Now (Mar 2026-present), KhooCommerce (Jun 2025-Feb 2026), Director of Systems at Pyramid (Feb 2023-Jun 2025), Head of B2C & Digital Trading (Apr 2021-Feb 2023), and earlier roles.
- Strengthened ecommerce credentials: led £3m+ B2C trading, grew sales by £1m+, built Shopify B2B/B2C stores, and owned merchandising, pricing, campaigns, customer service and fulfilment.
- Expanded career examples to include DTC growth, Shopify/UX, and Amazon Vendor proof-of-collection automation alongside API/EDI and product work.
- **Public contact is LinkedIn only:** https://www.linkedin.com/in/mike-palmer-677669a6/
- Updated downloadable two-page CV from latest supplied copy and explicitly removed personal phone/email details from the public PDF.
- Checked static layout at 1440, 800, 390 and 320px. Live browser/device testing remains separate.
