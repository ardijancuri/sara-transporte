# Design QA

## Scope

- Reference: `C:\Users\PC\Downloads\original-13f58cd05dbe6b761411258073c4f7a1.webp`
- Implementation: `http://localhost:3000/`
- Comparison viewport: 1024 × 900
- Reference size: 1024 × 5909
- Implementation capture: `tmp/homepage-1024-final-clean.jpg`
- Side-by-side comparison: `tmp/reference-vs-implementation-v2.jpg`

## Visual comparison

The implementation follows the reference's core visual language: a framed photographic hero, compact pill navigation, pale blue-gray canvas, restrained navy/royal-blue palette, small uppercase labels, rounded content panels, an oversized low-contrast service marquee, a dark four-column service module, thin outline icons, and compact editorial typography.

The content and imagery remain Sara Transporte-specific, while the old site's service information, routes, contact details, and assets are preserved.

## QA history

1. P1: The 1024 px layout was too tall and switched major modules into tablet stacks too early.
   - Fixed by reducing hero height and keeping the experience, service, process, impact, and footer modules in their desktop compositions through 1024 px.
2. P1: The mobile navigation overlay inherited grid sizing from the header and did not cover the viewport.
   - Fixed with an explicit full-viewport overlay and verified navigation to `/dienstleistungen`.
3. P2: Some content depended on reveal state and could remain visually absent in stitched or fast-scroll states.
   - Fixed by making content visible by default while retaining transition styling.
4. P2: Titles and supporting text were visually heavier than the reference.
   - Fixed with smaller responsive heading scales, tighter section spacing, and Manrope typography.
5. P2: Mixed text glyphs did not match the reference's icon language.
   - Replaced with consistent Tabler outline icons.
6. P2: The original logo included a slogan and the wordmark was not vertically balanced.
   - Replaced with a transparent slogan-free logo whose two-line `SARA / TRANSPORTE AG` wordmark is vertically centered beside the symbol.
7. P1: Vinext's image optimizer raised an internal `fetch` error and prevented migrated photographs from loading.
   - Added a shared unoptimized Next Image wrapper so local legacy assets render directly while retaining explicit dimensions, responsive sizing, and alt text.
8. P1: A browser-added body attribute produced a React hydration warning during development.
   - Limited hydration warning suppression to the root body, then verified a clean cold-start runtime.
9. P2: The customs service cards overflowed at the 1024 px transition width.
   - Allowed grid children and long headings to shrink and wrap, with narrower intermediate padding.
10. P2: Navigation, footer, office-contact, and form controls had inconsistent interaction heights.
    - Standardized focus treatment and raised key touch targets to 40–48 px.
11. P2: Small-phone marquee sizing, tablet card density, header icon sizing, and ultrawide hero wrapping drifted from the reference.
    - Refined the mobile hero and marquee, kept a two-column tablet service grid, fixed header icons at 38 px, and capped the hero title measure.
12. P1: Vinext emitted `next/font` URLs as Windows `file:///` resources, which browsers correctly blocked.
    - Removed the `next/font` runtime integration and self-hosted the Google Manrope variable font through browser-safe `/assets/fonts/` URLs. Verified `document.fonts.status` is `loaded`, the active computed family is Manrope, and no Vinext font paths remain in the build output.
13. P2: The mobile menu button sat too close to the scrollbar edge on small displays because its container used `100vw`.
    - Positioned the mobile header with explicit safe-area-aware left and right insets, aligned the button to the grid end, and added a compact 280–380 px treatment.
14. P1: Calls to action used four competing patterns: plain arrows, floating arrows, circular links, and pills with different heights.
    - Consolidated the site into 48 px primary pill actions and 44–45 px secondary text actions with shared weight, spacing, focus treatment, and hover motion.
15. P2: Arrow and download icons were repeated with slightly different sizes and stroke weights.
    - Added a shared `ActionIcon` component with semantic diagonal, forward, and download variants. Primary pills use the circular accent; secondary links, cards, downloads, and indexes use the same 16 px glyph without a container.
16. P2: Header social controls and the mobile menu were styled independently.
    - Preserved shared tap-target sizing and transition timing while removing visible circles from header social and phone links. The mobile menu retains its distinct circular control.
17. P2: Header navigation type was too light and relied on animated underlines for active and hover states.
    - Removed desktop and mobile underlines, increased navigation size and weight, and retained a clear active state through color and weight only.

## Verification

- Visual comparison pass with the reference at 1024 × 900
- Responsive passes at 320 × 568, 360 × 800, 390 × 844, 430 × 932, 768 × 1024, 820 × 1180, 1024 × 900, 1280 × 900, 1440 × 1000, and 1920 × 1080
- Additional narrow-header passes at 280 × 653, 320 × 568, 360 × 800, 375 × 812, and 390 × 844
- Mobile menu opens, covers the viewport, exposes 71 px navigation targets, and routes correctly
- Manrope loads from HTTP-served local assets with no `file:///` font URLs
- Action-system passes on the homepage hero, service cards, quote form, certificate cards, and service index
- Navigation, header utility icons, and secondary action icons match the simplified container-free treatment
- All action-bearing controls across ten routes use the shared icon component; no legacy inline action SVGs remain
- All ten routes return successfully without horizontal overflow or broken images
- Clean cold-start browser and server console pass
- TypeScript check passed
- Production build passed
- Rendered route tests passed
- ESLint passed with zero warnings

final result: passed
