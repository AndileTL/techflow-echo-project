This is a large multi-area update. Here's how I'll execute it while preserving the current premium Starlink-inspired design, animations, palette, and typography.

## 1. SEO / JSON-LD / OG validation
- Audit JSON-LD on Home, Services, About, Portfolio, Starlink, IspReseller, and 4 Solutions pages.
- Fix common Rich Results warnings: missing `Organization` with `logo`/`url`/`contactPoint`, `WebSite` with `potentialAction` SearchAction, `Service` with `provider`+`areaServed`, `FAQPage` with proper Q/A pairs, `BreadcrumbList` with absolute URLs.
- Ensure every page has unique `<title>`, `<meta description>`, canonical, `og:title/description/url/image/type`, `twitter:card`. Add a shared OG image (`/og-image.png`) and reference absolute URLs.
- Update `index.html` sitewide Organization JSON-LD with logo URL, sameAs (socials), and contactPoint (+263 86 77 211 025, sales@techflow.co.zw).

## 2. Positioning: Home + Business + Enterprise + ISPs + Corporate
- Update Hero headline/subcopy, WhyTechFlow, Industries, SuccessStories, Footer tagline, and Solutions hero copy to consistently say "homes, businesses, enterprises, ISPs, and organizations across Zimbabwe."
- Industries grid: add "Home & Residential" tile alongside existing sectors.
- Services page: add a Home Services vs Business Services tabbed/grouped view.

## 3. WhatsApp Qualification Flow
- Replace single-button `WhatsAppButton.tsx` with a multi-step dialog (shadcn `Dialog`):
  Step 1 Customer Type → Step 2 New/Existing → Step 3 multi-select services (Home set vs Business set based on Step 1) → Step 4 contact details (zod-validated) → Step 5 generates formatted message, stores lead in DB, then opens `https://wa.me/263779822400?text=...`.
- Floating bubble keeps current style; opens the flow instead of jumping straight to WA.

## 4. Backend for Contact + Consultation + WhatsApp leads
- Extend existing `contact_submissions` table with `customer_type`, `customer_status`, `source` (`contact_form` | `consultation` | `whatsapp_flow`), `services` (text[]). Migration adds columns + GRANTs already in place.
- Edge Function `send-lead-notification`: zod-validates payload, inserts row, sends branded HTML email to `sales@techflow.co.zw` via Lovable Emails (will run `setup_email_infra` + `scaffold_transactional_email` after checking domain status; if no domain configured, I'll prompt the user with the email setup dialog before deploying).
- Hook `Contact.tsx` and the WhatsApp flow to invoke this function; success toast: "Thank you for contacting TechFlow. Our team will get back to you shortly."

## 5. Ecosystem partner logos
- Replace text grid in `Ecosystem.tsx` with an animated logo wall (marquee + hover lift) for: Starlink, Microsoft, MikroTik, Ubiquiti, Cisco, Hikvision, Dahua, ZKTeco, Fortinet, VMware, Sophos, Veeam, Cloudflare.
- Use brand SVG wordmarks (simple inline SVGs or text-as-logo fallbacks in brand fonts) styled with the existing glass/card tokens — no new color tokens, monochrome with hover color reveal.
- New supporting copy as provided.

## 6. Connectivity section video
- Upload `Showcase_as_well_how_we_create.mp4` via `lovable-assets` and embed in `Connectivity.tsx` as a glassmorphism-framed `<video autoplay muted loop playsinline>` inside the existing layout (placed below the orbital graphic, above the link grid) — preserves orbit animations and gradients.

## 7. Lead Management Dashboard
- Extend `/admin/contacts` (existing `AdminContacts.tsx`) into a unified leads dashboard:
  - Tabs: All / Contact Form / Consultation / WhatsApp.
  - Search (name/email/company), filters (status, source, customer type, date range), CSV export.
  - Status workflow: New, Contacted, In Progress, Won, Closed (update existing status enum in UI; DB column already `text`).
- Protected by existing `useAuth` + `isAdmin` check.

## Technical details
- Files to edit: `index.html`, `src/components/{Hero,WhyTechFlow,Industries,SuccessStories,Connectivity,Ecosystem,Footer,Contact,WhatsAppButton}.tsx`, `src/pages/{Index,Services,About,Portfolio,Starlink,IspReseller,AdminContacts}.tsx`, `src/pages/solutions/*.tsx`.
- New: `src/components/WhatsAppLeadFlow.tsx`, `src/components/PartnerLogos.tsx`, `supabase/functions/send-lead-notification/index.ts`, asset pointer for the video.
- Migration: add `customer_type`, `customer_status`, `source`, `services text[]` to `contact_submissions`.
- Email: requires Lovable Emails domain. Will check status first; if missing, surface the email setup dialog and pause that sub-task until configured.

## Out of scope confirmation
Anything you'd like to drop or defer (e.g., the lead dashboard CSV export, or the email step if you don't want to configure a sender domain right now)?