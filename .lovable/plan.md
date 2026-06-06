This is a multi-part rebuild follow-up. Here's the proposed plan, grouped so we can ship in one pass.

## 1. Framer Motion performance pass
- Audit `Hero`, `Connectivity` (orbit rings + radial blobs), `WhyTechFlow`, `Industries`, `SuccessStories`, `Ecosystem` for expensive animations.
- Wrap heavy decorative motion in a `useReducedMotion()` + `useIsMobile()` guard so mobile and reduced-motion users get static fallbacks.
- Replace any `animate` on `filter`/`blur` with transform/opacity only; add `will-change: transform` only where needed; downgrade infinite orbit rings to CSS `@keyframes` (cheaper than Framer re-renders) on `< md` breakpoints.
- Animated counters: rewrite using `requestAnimationFrame` with `IntersectionObserver` (run once, skip when offscreen, throttle to 60fps cap, stop on unmount). Verify no jank by profiling in preview at 375px.

## 2. SEO metadata expansion
- Sitewide defaults already live in `index.html`; keep Organization JSON-LD there.
- Per-route `<Helmet>` blocks (title, description, canonical, og:*, JSON-LD) for: `/` (already partial — keep), `/services`, `/about`, `/portfolio`, `/starlink`, `/isp-reseller`, plus the four new Solutions pages below.
- Zimbabwe keyword targeting: "Best IT Service Provider in Zimbabwe", "Managed IT Harare", "Microsoft 365 Zimbabwe", "Starlink Installation Zimbabwe", "Business Internet Harare", "Cybersecurity Zimbabwe", "VoIP Zimbabwe".
- JSON-LD: `LocalBusiness` on `/` and `/about`; `Service` schema on each Solutions page; `BreadcrumbList` on inner pages; `FAQPage` already on `/`.
- Update `public/sitemap.xml` with the new Solutions routes.

## 3. Responsive header / hamburger polish
- Current `Header.tsx` already has a mobile menu; tighten it:
  - Lock body scroll while open.
  - Animate panel with `motion.div` (transform-only) to avoid layout shift.
  - Ensure logo + CTA fit at 375px (shrink "Book Consultation" → icon + short label on `sm`).
  - Add `min-h-16` to header to prevent CLS as the scrolled state toggles.
  - Verify sticky behaviour at 375px and 768px in preview.

## 4. Contact form backend
- Form already inserts into `contact_submissions` table via Supabase — keep that as source of truth.
- Add an Edge Function `send-contact-notification` that:
  - Validates payload with zod.
  - Inserts to DB (or runs after insert via trigger? Simpler: call function from client after insert succeeds).
  - Sends an email notification to `sales@techflow.co.zw` using Lovable's built-in transactional email (requires email domain setup — will check status first; if no domain configured we'll surface the setup dialog).
- WhatsApp follow-up: on successful submit, show a toast with a "Continue on WhatsApp" button that opens `wa.me/263779822400` pre-filled with the user's name + service interest (encodeURIComponent).
- Add client-side zod validation on all fields with inline errors.

## 5. New Solutions pages
Create four routes off the existing `/services` parent, reusing the existing site chrome (Header/Footer/WhatsAppButton):
- `/solutions/managed-it` — Managed IT
- `/solutions/cloud-cybersecurity` — Cloud & Cybersecurity
- `/solutions/connectivity` — Connectivity (links to existing `/isp-reseller` + `/starlink` deep dives)
- `/solutions/digital-transformation` — Digital Transformation

Shared `SolutionPageLayout` component:
- Hero with gradient, headline, sub, dual CTA (Book Consultation / WhatsApp).
- "What's included" feature grid.
- Outcomes / KPIs strip.
- Industries served chips.
- FAQ accordion (3–5 Qs, fed into `FAQPage` JSON-LD).
- CTA band → `/services#consultation-form`.

Update `Header.tsx` nav so "Solutions" links to `/solutions/managed-it` (or a hub) and add a desktop dropdown listing all four. On mobile, expand inline.

## Technical notes
- Files touched: `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/Connectivity.tsx`, `src/components/WhyTechFlow.tsx`, `src/components/Industries.tsx`, `src/components/SuccessStories.tsx`, `src/components/Contact.tsx`, `src/App.tsx`, `index.html`, `public/sitemap.xml`.
- Files created: `src/components/SolutionPageLayout.tsx`, `src/pages/solutions/ManagedIT.tsx`, `CloudCybersecurity.tsx`, `Connectivity.tsx`, `DigitalTransformation.tsx`, `src/hooks/use-animated-counter.ts`, `src/lib/validation.ts` (zod schemas), `supabase/functions/send-contact-notification/index.ts`.
- Email: will call `email_domain--check_email_domain_status` first. If no domain configured, I'll surface the setup dialog and keep the DB insert + WhatsApp flow working in the meantime (notification email queued once domain is live).
- No DB schema changes needed — `contact_submissions` already exists.

## Out of scope
- Redesigning existing pages beyond what's needed for the new nav.
- Switching auth/role logic.
- Custom domain setup.

Approve and I'll ship it.