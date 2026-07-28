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

## Services panel refinement QA

- Source visual truth: `C:\Users\PC\AppData\Local\Temp\codex-clipboard-bc4a2c00-2256-4b71-8968-f9aea409e612.png`
- Browser-rendered implementation: `C:\Users\PC\Documents\sara-transporte\tmp\services-implementation-1124.png`
- Side-by-side comparison: `C:\Users\PC\Documents\sara-transporte\tmp\services-comparison-1124.png`
- Focused header evidence: `C:\Users\PC\Documents\sara-transporte\tmp\header-icons-1024.jpg`
- State: homepage `/#leistungen`, desktop, no hover
- Reference pixels: 1124 × 691
- Implementation capture: 1109 × 888 from a 1124 × 900 viewport override; normalized proportionally to 1124 × 900 and cropped to 1124 × 691 for equal-size comparison
- Density: 1× CSS rendering; no device-frame or browser chrome included

### Required fidelity surfaces

- Fonts and typography: Manrope remains active. The section label, two-line heading, service titles, weights, and compact supporting copy match the reference hierarchy while preserving the requested smaller title scale.
- Spacing and layout rhythm: the dark panel is 673 px high at the comparison breakpoint. Its 75 px internal desktop frame, four equal 368 px cards, 26 px gaps, aligned image bottoms, and rounded corners closely track the reference proportions.
- Colors and visual tokens: the existing deep-navy, white, muted-blue, and pale-canvas tokens match the source. Borders remain intentionally low contrast.
- Image quality and asset fidelity: all five visible photographs are real Sara Transporte legacy assets. Card images use a cool desaturated treatment and restore color on hover; the faint upper-right warehouse image replaces the reference's decorative logistics photograph without placeholder or CSS-drawn imagery.
- Copy and content: the reference structure is retained with German, Sara Transporte-specific service names and descriptions. Summaries clamp to three lines, matching the source's compact editorial density without changing the underlying content.

### Comparison history

1. Initial comparison found a P2 vertical-rhythm mismatch: the heading stayed on one line and the cards began too high.
   - Fixed with a two-line heading measure, shorter 368 px cards, 155 px bottom-anchored images, and reduced panel padding.
   - Post-fix evidence showed the card row beginning at 243 px, close to the reference's 235 px.
2. Second comparison found a P2 horizontal-density mismatch: cards stretched too close to the panel edges and varied in height as descriptions wrapped.
   - Fixed with a reference-proportional 75 px internal frame, 26 px desktop gaps, equal-height card wrappers, and three-line summaries.
   - Post-fix evidence shows all four cards at 368 px with images aligned from 447 px to 602 px and the panel ending at 673 px.
3. Final side-by-side comparison found no remaining P0, P1, or P2 issues.
   - Intentional differences are limited to Sara Transporte-specific German copy, company photography, and a plain “Alle Leistungen” arrow that preserves the site's established no-circle secondary-action rule.

Focused comparison was required because the utility icons and card typography are too small to judge reliably from a full homepage capture. The services comparison and 1024 px header capture confirm the unbordered 20 px LinkedIn “in” mark, 20 px phone-call icon, 34 px hit-area widths, and zero visual gap between the two utility links.

### Service-card icon refinement

- Removed the sequence number from every homepage service container.
- Replaced the four outline symbols with filled Font Awesome logistics pictograms.
- Increased the rendered service icon size to 30 × 30 px and kept a consistent white treatment.
- Rebalanced each card around the title, icon, description, and bottom-aligned photograph.
- Verified four-column desktop, two-column tablet, and one-column phone layouts at 1024, 901, 768, 390, and 320 px with no horizontal overflow or title/icon collision.

## Experience heading refinement QA

- Source visual truth: `C:\Users\PC\AppData\Local\Temp\codex-clipboard-2af2617a-efc8-43c0-aee0-ce13d94af7b1.png`
- Browser-rendered implementation: `C:\Users\PC\Documents\sara-transporte\tmp\experience-implementation-1115-final.jpg`
- Side-by-side comparison: `C:\Users\PC\Documents\sara-transporte\tmp\experience-comparison-1115-final.png`
- State: homepage `/#intro`, desktop, no hover
- Reference pixels: 1115 × 461
- Implementation capture: 1100 × 710 from a 1115 × 720 viewport override; the first 461 px were normalized to 1115 × 461 for equal-size comparison
- Density: 1× CSS rendering; no browser chrome included

### Required fidelity surfaces

- Fonts and typography: the active Manrope family is retained. After two user-directed reductions, the right-side statement renders at 28.16 px at 1280 px and 24 px at 390 px. It retains weight 750, a 1.06 line height, and tight display tracking.
- Spacing and layout rhythm: the eyebrow and statement occupy the reference's narrow-left/wide-right grid. Their visual tops align, and the existing proof content begins at approximately 302 px versus 297 px in the reference.
- Colors and visual tokens: the existing pale canvas, deep navy text, and blue eyebrow remain consistent with the source.
- Image quality and asset fidelity: the existing Sara Transporte fleet photography remains unchanged and uses the same rounded media position as before.
- Copy and content: `Ein Logistikpartner. Alle Wege.` was removed. The former supporting paragraph is now the sole large German statement on the right.

### Comparison history

1. Initial comparison found a P2 vertical-rhythm mismatch: the section content began roughly 75 px lower than the reference.
   - Fixed by reducing the desktop top padding and preserving the existing space below the proof content.
   - Post-fix evidence places the eyebrow and statement near the reference's 39 px visual top and the proof row within roughly 5 px of the source.
2. Responsive inspection found a P2 narrow-phone overflow caused by the long German word `maßgeschneiderte` at the desktop minimum display size.
   - Fixed with a small-screen fluid title scale that preserves the bold hierarchy while reducing to 32 px at 320 px.
   - Post-fix checks at 1024, 901, 900, 768, 430, 390, 320, and 280 px show no horizontal page overflow.
3. Final side-by-side comparison found no remaining P0, P1, or P2 issues.
   - The different statement wrapping is intentional because the live site uses Sara Transporte's German copy rather than the reference's English placeholder text.
4. User review found the initial reference-matched statement scale visually too large in the live page context.
   - Reduced the final desktop range to 28–42.4 px and the responsive range to 24–28 px.
   - Post-fix evidence shows a 28.16 px desktop statement at 1280 px and a 24 px statement at 390 px with no horizontal overflow.

The full-width section crop is also the focused typography comparison because this change affects only the eyebrow, statement, and the transition into the existing proof row.

### Partner-strip follow-up

- Desktop evidence: `C:\Users\PC\Documents\sara-transporte\tmp\partner-strip-heading-1280-final.jpg`
- Mobile evidence: `C:\Users\PC\Documents\sara-transporte\tmp\partner-strip-heading-390-final.jpg`
- Replaced three white-background legacy logo files with brand-faithful transparent PNG derivatives and trimmed the existing transparent Spedlogswiss asset.
- Set the final desktop logo boxes to 50 px high with individual maximum widths of 145–185 px, raised visual opacity, and the established grayscale treatment.
- Removed the partner-strip heading and bottom divider so the banner contains only the four partner marks.
- Centered the logos across four equal desktop columns with 42 px of vertical padding; at 900 px and below, the banner becomes a centered two-column grid with 36 px of vertical padding.
- Verified transparent computed backgrounds, alpha channels from 0–255, successful image decoding, and no page overflow at 1024, 901, 900, 768, 430, 390, and 320 px.

### Framing and typography follow-up

- Removed the desktop navigation container border while retaining its translucent background and blur treatment.
- Removed the homepage hero eyebrow and expanded the desktop hero to the available viewport height.
- Standardized the hero, detail hero, and services panel to an even 18 px outer frame that matches the hero's top inset.
- Reduced the desktop experience statement to a 25.6–36 px fluid range and increased its line height to 1.13.
- Increased the shared heading line height to 1.1 for `h2`, 1.18 for `h3`, and 1.02 for hero titles.
- Reduced the mobile homepage hero to a 580–680 px responsive range so partner content enters the first viewport sooner while all hero content remains contained.
- Verified at 1280 × 900 and 390 × 844 with no horizontal overflow and no browser console warnings or errors.

### Responsive spacing follow-up

- Reduced the homepage hero title to 35.1 px at 390 px and 32 px at 320 px, with a 48 px tablet maximum.
- Reduced mobile partner-logo boxes from 50 px to 42 px and tightened the two-column banner gap and vertical padding.
- Added shared section-spacing and heading-spacing tokens for desktop, tablet, and phone layouts.
- Standardized general phone containers and framed panels to 18 px outer gutters.
- Corrected the services panel inner width to use its parent panel as the sizing reference, maintaining 60 px desktop and 16 px phone internal gutters.
- Normalized homepage intro, services, process, testimonial, impact, story, and footer spacing at each responsive breakpoint.
- Verified at 1280 × 900, 768 × 900, 390 × 844, and 320 × 568 with no overflow, console warnings, or content collisions.

### Monochrome palette and hero follow-up

- Reworked the shared palette around white, black, and neutral gray values, retaining `#0758D8` as the only chromatic accent.
- Replaced the former navy surfaces with neutral black and converted light-blue labels, borders, icon surfaces, shadows, and status treatments to gray or the primary blue.
- Reduced the shared hero overlay from an 84% peak side mask to 58%, with a softer 44% lower gradient, and removed the homepage image's additional blue-black gradient.
- Reduced the mobile homepage hero to a 550–620 px range and mobile detail heroes to 560 px.
- Verified settled hero contrast and image visibility on the homepage, About, and Services hero images at desktop and phone sizes.
- Verified the 320 px homepage and detail hero content remains inside the image frame and clears the header.
- Confirmed the stylesheet contains no chromatic hex values other than `#0758D8`, with no browser console warnings or errors.

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
