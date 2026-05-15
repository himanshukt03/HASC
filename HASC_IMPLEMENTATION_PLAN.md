# Health Alliance SoCal (HASC) - Comprehensive Implementation Plan

This document serves as the architectural and strategic roadmap for the HASC website overhaul. It translates the client's goals—expanding SEO authority through highly specific service/location pages and shifting the brand messaging towards a collaborative care partnership—into actionable phases. 

**Future AI Models:** Refer to this document before making structural, content, or SEO changes to ensure consistency with the overarching strategy.

---

## 1. Project Overview & Goals
*   **Messaging Shift:** Transition from a transactional "psychiatric provider" tone to an integrated "behavioral health partner" and "extension of the care team."
*   **SEO Authority Expansion:** Create dedicated, highly specific landing pages for core services and geographic regions (counties) to capture long-tail local search traffic.
*   **Technical SEO:** Maintain and enhance current technical SEO standards (Core Web Vitals, Schema markup, dynamic sitemaps, robots.txt, canonicals).

---

## 2. Strategic Messaging Guidelines
Future copy generation or modification MUST adhere to these tone and messaging rules:

*   **Core Identity:** HASC is an integrated behavioral health partner, not an outside consultant.
*   **Key Themes:** Collaboration, Partnership, Integration, Family Involvement, Education, Clinical Excellence.
*   **Tone:** Compassionate, evidence-based, proactive, and supportive. 
*   **Target Audiences:** 
    1.  Facilities (SNF, ALF, Memory Care, Board & Care) - Focus on compliance, integration, staff support, and resident stabilization.
    2.  Families & Residents - Focus on compassionate care, inclusion, communication, and emotional well-being.
*   **Banned vs. Preferred Language:**
    *   *Avoid:* "We provide psychiatric evaluations and medication management."
    *   *Use:* "Health Alliance SoCal partners with skilled nursing facilities, residents, and families to provide integrated behavioral health support."
    *   *Avoid:* "Our psychiatrists will see your residents."
    *   *Use:* "We become an extension of your care team, working collaboratively with nursing staff..."

### Updated Mission & Vision (To be applied to About page)
**Mission:** At Health Alliance SoCal, our mission is to deliver compassionate, evidence-based behavioral health care through collaborative partnerships with skilled nursing facilities, assisted living communities, memory care units, board and care homes, residents, families, and interdisciplinary care teams. We are committed to becoming an extension of the care team — improving quality of life, supporting emotional well-being, promoting dignity, and enhancing clinical outcomes through integrated psychiatric care, education, communication, and proactive behavioral health support.

**Vision:** Our vision is to redefine behavioral health in post-acute and long-term care by becoming the trusted behavioral health partner for facilities, residents, and families. We strive to build a model of care where psychiatric services are fully integrated into the healthcare team, empowering facilities with education, supporting families through guidance and collaboration, and delivering exceptional, person-centered behavioral health care that improves outcomes and elevates quality of life across every setting we serve.

---

## 3. Proposed Page & Routing Structure

To support the expanded SEO footprint, the routing architecture needs to scale significantly.

### Main Navigation Structure
*   Home (`/`)
*   About Us (`/about`)
*   Services (`/services`) - *Hub linking to specific service pages*
*   Locations (`/locations`) - *Hub linking to specific county pages*
*   FAQ (`/faq`)
*   Resources (`/resources`)
*   Careers (`/careers`)
*   Contact (`/contact`)

### Expanded Core Service Pages (New)
*   `/services/skilled-nursing-facility-psychiatry`
*   `/services/assisted-living-psychiatry`
*   `/services/memory-care-behavioral-health`
*   `/services/board-and-care-mental-health`
*   `/services/telepsychiatry-long-term-care`
*   `/services/cms-f-tag-758-support`
*   `/services/psychotropic-medication-management`
*   `/services/dementia-behavioral-management`

### Expanded Geographic / Local SEO Pages (New)
*   `/locations/los-angeles-county`
*   `/locations/orange-county`
*   `/locations/san-diego-county`
*   `/locations/riverside-county`
*   `/locations/ventura-county`

---

## 4. Phase-by-Phase Implementation Plan

### Phase 1: Brand Messaging & Foundation Overhaul
*   **Task:** Update existing static pages (Home, About, Services, Contact) to reflect the new "collaborative partner" messaging.
*   **Details:**
    *   Rewrite Home page hero, value propositions, and "For Facilities / For Families" sections.
    *   Update `About.tsx` with the new Mission and Vision statements.
    *   Ensure all CTAs reflect partnership (e.g., "Request a Partnership Proposal" instead of "Book an Appointment").

### Phase 2: Core Service Pages Expansion
*   **Task:** Build out the 8 dedicated service pages.
*   **Architecture:**
    *   Create individual page files under `src/pages/services/` or use a dynamic route pattern with a data file.
    *   Add routes to `App.tsx`.
    *   Update the main `Services.tsx` page to serve as a directory with links to these new pages.
*   **SEO Elements:** Each page must have unique H1s, dedicated meta titles/descriptions via the `SEO` component.

### Phase 3: Geographic / Local SEO Pages Expansion
*   **Task:** Build out the 5 county-level landing pages.
*   **Architecture:**
    *   Create individual pages under `src/pages/locations/`.
    *   Add routes for the 5 counties in `App.tsx`.
*   **Content:** Avoid duplicate content penalties by ensuring the text for each county is uniquely tailored. Mention specific county compliance nuances if applicable, or localized testimonials.
*   **Schema:** Implement `LocalBusiness` or `MedicalBusiness` Schema with the specific `areaServed` property tailored to each county.

### Phase 4: Advanced Intersection Pages (Location + Service) - Optional Future Scaling
*   **Task:** Create highly targeted pages (e.g., "Skilled Nursing Psychiatry in Los Angeles County").
*   **Architecture:** Implement a dynamic route in `App.tsx`: `<Route path="/locations/:county/:service" element={<LocationServicePage />} />`. Use a content matrix to inject unique data based on parameters.

### Phase 5: Technical SEO, Sitemap & Analytics Refinement
*   **Task:** Ensure the new architecture is fully indexed and tracked.
*   **Details:**
    *   **Sitemap:** Update `public/sitemap.xml` to include all new service and location URLs.
    *   **Navigation:** Update `Navbar` to include dropdowns for Services and Locations.
    *   **Internal Linking:** Strategically link from existing pages to specific service and location pages.
    *   **Performance:** Verify `lazy()` loading in `App.tsx` handles the new routes smoothly.

---

## 6. Guidelines for Future AI Models

When executing tasks on this repository, strictly adhere to the following:

1.  **Use Existing Components:** The project uses Tailwind CSS and a custom design system defined in `src/index.css`. Reuse existing UI patterns (`card-practical`, `btn-primary`, `section-padding`).
2.  **Routing:** New pages must be added to `App.tsx` using `lazy()` loading to maintain performance.
3.  **SEO Component:** Every new page MUST use the `<SEO />` component imported from `../components/SEO`. Provide a unique `title` and `description`.
4.  **Schema Markup:** Inject JSON-LD schema dynamically for Location pages (using standard DOM manipulation in a `useEffect` or via Helmet).
5.  **Image Optimization:** Use `<picture>` tags with WebP fallbacks or `loading="lazy"` with explicit `width` and `height`. Use existing assets in `public/images/` where applicable.
6.  **Aesthetics:** Maintain the clean, professional, premium layout. Use `brand-primary` [Blue], `brand-secondary` [Teal], and `brand-ink`. No arbitrary new colors.
