# Project Specification: Kampung Inggris Village Landing Page

> This document is the single source of truth for this project. It is written to be read by an AI coding agent (e.g. Antigravity) as well as human developers. Follow the decisions in this document exactly unless the user explicitly overrides them in a prompt — do not silently introduce alternative libraries, patterns, or architecture not listed here.

## 1. Project Summary

A single-page (or few-page) marketing/profile website for a village ("desa") participating in a Kampung Inggris-themed community service program (KKN). The site functions as a **company-profile-style landing page**, visually modeled after `https://umf.evizia.id/` (a clean, formal, corporate healthcare holding-company website), but adapted for village/community content instead of corporate/business content.

This is **not** a web app. There is no user authentication, no database-backed CRUD, no PWA/offline functionality. It is a static, content-driven marketing site.

## 2. Explicit Non-Goals (do not build these)

- No admin dashboard or CMS UI for content editing.
- No database (Postgres/Supabase/etc). All content is hardcoded in local data files.
- No user accounts, login, or authentication.
- No offline mode, service worker, or PWA manifest — this was part of an earlier project direction and has been dropped.
- No IndexedDB or client-side persistence.

If any of the above seems necessary to complete a task, stop and ask the user rather than implementing it.

## 3. Tech Stack (fixed — do not substitute)

| Layer                | Choice                                    | Notes                                                                                                                                                                            |
| -------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework            | Next.js 14+ (App Router)                  | Use **Static Site Generation (SSG)** — avoid `dynamic` rendering or SSR where content is static.                                                                                 |
| Language             | TypeScript                                | All files `.ts`/`.tsx`, not `.js`/`.jsx`.                                                                                                                                        |
| Styling              | Tailwind CSS                              | Utility-first, mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`).                                                                                                            |
| UI components        | shadcn/ui                                 | Use only the components actually needed: `Accordion`, `Carousel` (built on `embla-carousel-react`), `Sheet` (mobile nav), `Card`. Do not bulk-install the entire shadcn library. |
| Images               | `next/image` (`<Image>` component)        | Automatic WebP/AVIF conversion, lazy loading, responsive sizing. Do not manually convert images to `.webp` unless the image is used outside `<Image>` (e.g. CSS background).     |
| Fonts                | `next/font`                               | Self-hosted, subsetted. Do not load fonts via a `<link>` tag to Google Fonts CDN directly.                                                                                       |
| Internationalization | `next-intl`                               | Locale-prefixed routing (`/id/...`, `/en/...`).                                                                                                                                  |
| Deployment           | Vercel                                    | Static export compatible.                                                                                                                                                        |
| Data                 | Local TypeScript/JSON files under `data/` | See Section 7.                                                                                                                                                                   |

## 4. Core Architectural Decisions (with rationale — do not relitigate these)

1. **Static Site Generation, not SSR/CSR-heavy.** Content is static and low-frequency-changing, so SSG produces the fastest, most SEO-friendly output and requires no runtime backend.
2. **Hardcoded data files instead of a CMS/database.** Content changes will be made by the dev team via code edits + git push, not by non-technical village staff. This avoids the complexity of building auth, forms, and a database for a low-frequency-update use case.
3. **No PWA/offline support.** This project was originally scoped as a PWA + landing page hybrid; it has been descoped per campus/advisor direction to a landing-page-only deliverable. Do not reintroduce PWA concerns (manifest, service worker, IndexedDB).
4. **Design system is directly modeled on `umf.evizia.id`** — see Section 6 for the extracted color palette and layout patterns. Do not introduce a different visual style (e.g. no generic default shadcn theme, no unrelated color palette) without being told to.

## 5. Functional Requirements

| ID    | Requirement                | Description                                                                                                                                                                                                                     |
| ----- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-01 | Multi-section landing page | Single scrollable page (or few pages) with sections in this order: Navbar → Hero → Brand story/welcome message → Programs grid → Timeline → News/activity updates → Gallery → Testimonials → FAQ → Contact (with map) → Footer. |
| FR-02 | Responsive navbar          | Full horizontal nav on desktop; collapses to a hamburger menu (shadcn `Sheet`) on mobile.                                                                                                                                       |
| FR-03 | Hero carousel              | Multiple landscape images cycling automatically, with dot indicators, headline text, subtext, and a CTA button overlaid on the image.                                                                                           |
| FR-04 | Programs section           | Asymmetric card grid (one large featured card + several smaller cards) listing the village's KKN unit programs and the individual program.                                                                                      |
| FR-05 | Timeline section           | Horizontal or vertical timeline of KKN program milestones (e.g. observation week, program launch, etc).                                                                                                                         |
| FR-06 | Gallery section            | Grid of activity photos with captions, optionally a "view all photos" link.                                                                                                                                                     |
| FR-07 | FAQ accordion              | Expand/collapse Q&A list using shadcn `Accordion`.                                                                                                                                                                              |
| FR-08 | Contact section            | Embedded Google Maps iframe showing the village location, plus address/phone/email contact details.                                                                                                                             |
| FR-09 | Language toggle            | ID/EN toggle in the navbar, switches the active locale via URL prefix (`/id/`, `/en/`).                                                                                                                                         |
| FR-10 | Footer                     | Village info, quick links, social/contact links, credit line, copyright.                                                                                                                                                        |

## 6. Design System (extracted from `umf.evizia.id`)

### 6.1 Color Palette

| Token          | Approx. Hex | Usage                                                  |
| -------------- | ----------- | ------------------------------------------------------ |
| `primary-navy` | `#1B2A5E`   | Headings, primary text emphasis, dark card backgrounds |
| `primary-blue` | `#1E4FD6`   | Nav accents, links, active states                      |
| `accent-gold`  | `#FDC500`   | CTA buttons, decorative accents, footer background     |
| `bg-white`     | `#FFFFFF`   | Primary background                                     |
| `bg-muted`     | `#F7F8FA`   | Alternating section background                         |
| `text-muted`   | `#5F6470`   | Body/description text                                  |

Configure these as Tailwind theme extensions in `tailwind.config.ts` (e.g. `colors.primary.navy`, `colors.accent.gold`), not as one-off hex values scattered through components.

### 6.2 Typography

- Sans-serif, modern (e.g. Inter, Manrope, or Poppins via `next/font`).
- Every major section heading is preceded by a small uppercase "eyebrow" label (e.g. `PROGRAM KAMI`, `TANYA JAWAB`) — implement this as a reusable `<Eyebrow>` component, not repeated inline markup.
- Headings: bold, large. Body: regular weight, medium size, generous `line-height`.

### 6.3 Layout Patterns

- Centered container with a max-width and generous horizontal padding (lots of white space — do not cram content edge to edge).
- Cards: medium `border-radius`, subtle shadow.
- Section backgrounds alternate between `bg-white` and `bg-muted` to create visual separation without hard borders.
- Programs grid uses an asymmetric CSS grid on desktop (`grid-template-columns: 2fr 1fr 1fr`), collapsing to a single column (`grid-cols-1`) on mobile via Tailwind responsive classes.

## 7. Data Structure (all hardcoded, no database)

```
data/
├── village-profile.ts    # village name, description, address, map coordinates
├── programs.ts           # KKN unit programs + the individual program
├── gallery.ts             # image paths + captions
├── timeline.ts            # KKN program milestones
├── faq.ts                 # question/answer pairs
└── testimonials.ts        # resident/participant testimonials
```

Example shape (`data/programs.ts`):

```ts
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean; // true = renders as the large grid card
}

export const programs: Program[] = [
  {
    id: "kampung-inggris",
    title: "Kampung Inggris",
    description: "Program unit pembelajaran bahasa Inggris berbasis komunitas...",
    image: "/images/program-kampung-inggris.jpg",
    featured: true,
  },
];
```

Import data directly into server components (`import { programs } from "@/data/programs"`) — no fetch calls, no API routes needed for this content.

## 8. Internationalization (i18n)

- Library: `next-intl`.
- Translation files: `messages/id.json`, `messages/en.json`, flat or nested key-value pairs (e.g. `{"hero": {"title": "...", "subtitle": "..."}}`).
- Routing: locale-prefixed (`/id`, `/en`), with `id` as the default/fallback locale.
- The navbar language toggle switches the URL locale segment — do not implement language switching via client-side state only, since that breaks on page refresh/shared links and is worse for SEO.
- All user-facing copy (not just UI labels — also program descriptions, FAQ content, etc.) should be translatable, i.e. sourced from the messages files or per-locale data, not hardcoded Indonesian strings inside components.

## 9. Performance Requirements

| ID     | Requirement                                                                                                                                                  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NFR-01 | Use SSG for all pages — no unnecessary `"use client"` on components that don't need interactivity.                                                           |
| NFR-02 | All images go through `next/image`; specify explicit `width`/`height` (or `fill` with a sized parent) to avoid layout shift.                                 |
| NFR-03 | Target Lighthouse Performance score ≥ 90.                                                                                                                    |
| NFR-04 | Fonts loaded via `next/font`, not external `<link>` tags.                                                                                                    |
| NFR-05 | Avoid heavy animation libraries; use CSS transitions/Tailwind's built-in animation utilities for simple effects (hero fade, accordion expand).               |
| NFR-06 | Test on throttled CPU/network (Chrome DevTools "Low-end mobile" + "Slow 3G") to simulate real village-user device conditions, not just development hardware. |

## 10. SEO Requirements

| ID     | Requirement                                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SEO-01 | Define `generateMetadata()` per page/locale with a descriptive `title`, `description`, and Open Graph image.                                           |
| SEO-02 | Use correct semantic HTML: exactly one `<h1>` per page, proper `<nav>`, `<section>`, `<footer>` — not generic `<div>` soup.                            |
| SEO-03 | Generate `app/sitemap.ts` and `app/robots.ts` (Next.js built-in support).                                                                              |
| SEO-04 | All images require descriptive, non-empty `alt` text.                                                                                                  |
| SEO-05 | Add `Organization`/`LocalBusiness`-style JSON-LD structured data for the village entity (optional but recommended).                                    |
| SEO-06 | Locale-prefixed routing (from Section 8) doubles as an SEO benefit — ensure `hreflang` alternates are set via Next.js metadata `alternates.languages`. |

## 11. Responsive Design Requirements

- Mobile-first Tailwind usage: base classes target mobile, override with `md:`/`lg:` for larger screens — not the reverse.
- Every section in FR-01 must be visually verified at three breakpoints minimum: mobile (~375px), tablet (~768px), desktop (~1280px).
- Hero images: use `object-cover` with a taller aspect ratio on mobile so headline text doesn't overlap poorly with the image subject.
- Navbar collapses to a `Sheet`-based hamburger menu below the `md` breakpoint.

## 12. Project Folder Structure

```
kampung-inggris-landing/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx              # main landing page
│   │   ├── layout.tsx            # root layout, metadata, font setup
│   ├── sitemap.ts
│   ├── robots.ts
├── components/
│   ├── navbar.tsx
│   ├── hero-carousel.tsx
│   ├── brand-story.tsx
│   ├── programs-grid.tsx
│   ├── timeline.tsx
│   ├── news-section.tsx
│   ├── gallery.tsx
│   ├── testimonials.tsx
│   ├── faq-accordion.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   └── ui/                        # shadcn components live here
├── data/
│   ├── village-profile.ts
│   ├── programs.ts
│   ├── gallery.ts
│   ├── timeline.ts
│   ├── faq.ts
│   └── testimonials.ts
├── messages/
│   ├── id.json
│   └── en.json
├── public/
│   └── images/
├── tailwind.config.ts
└── next.config.js
```

## 13. Team & Ownership Context

Development is done by a team of 2-3 students as an individual KKN program deliverable. Suggested (not enforced) division:

- **Frontend A**: navbar, hero, brand story, footer.
- **Frontend B**: programs grid, timeline, gallery, testimonials, FAQ.
- **Data & i18n**: builds out `data/` files, `messages/` translation files, contact/map integration, SEO metadata.

## 14. Instructions for the AI Coding Agent

- Follow the tech stack in Section 3 exactly. Do not add libraries not listed here without flagging it to the user first.
- Follow the design system in Section 6 for all styling decisions — colors, spacing, and the "eyebrow text" pattern should be consistent across every section, not improvised per component.
- Treat Section 2 (Non-Goals) as hard constraints, not suggestions.
- When implementing a section from Section 5, check Section 7 for the corresponding data shape before writing UI code — build the data file first, then the component that consumes it.
- Prioritize correctness against Sections 9–11 (performance, SEO, responsive) while building, not as a later cleanup pass.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
