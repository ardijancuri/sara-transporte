# Design QA - Zollabwicklung service cards

## Scope

- Source visual truth: `C:\Users\PC\AppData\Local\Temp\codex-clipboard-2f9db7e5-1c59-4bb8-88a7-1ab530e36bdd.png`
- Implementation route: `http://localhost:3000/zollabwicklung`
- State: German customs page with the original three detailed cards and nine new service cards
- Requested change: expand the service list, enlarge the card numbers, and reduce the space below the numbers

## Evidence

- Source image: 1426 x 643 px at 96 dpi
- Desktop CSS viewport: 1426 x 900 px at device pixel ratio 1
- Desktop implementation capture: `C:\Users\PC\.codex\visualizations\2026\08\04\019fcd2e-be07-77f2-babf-9314f26c684f\sara-site-qa\customs-services-leading-pass4.png`
- Expanded-grid capture: `C:\Users\PC\.codex\visualizations\2026\08\04\019fcd2e-be07-77f2-babf-9314f26c684f\sara-site-qa\customs-services-lower-pass4.png`
- Mobile CSS viewport: 390 x 844 px at device pixel ratio 1
- Mobile implementation capture: `C:\Users\PC\.codex\visualizations\2026\08\04\019fcd2e-be07-77f2-babf-9314f26c684f\sara-site-qa\customs-services-mobile.png`
- Final combined comparison: `C:\Users\PC\.codex\visualizations\2026\08\04\019fcd2e-be07-77f2-babf-9314f26c684f\sara-site-qa\customs-services-comparison-final.png`
- The final comparison normalizes both desktop regions to 1411 x 637 px and stacks the supplied reference above the implementation.

## Findings

- Fonts and typography: the original three service headings preserve the supplied screenshot's large editorial scale. The nine new service headings use a slightly smaller responsive scale so longer names wrap naturally without orphaned letters.
- Spacing and layout rhythm: the number-to-heading gap is 24 px. The numbers are 23.5 px at the primary desktop viewport, visibly larger than the reference while remaining subordinate to the headings.
- Layout: all 12 cards render in a consistent three-column desktop grid. New description cards use a compact 320 px minimum height; the original checklist cards retain the extra height required by their content.
- Colors and visual tokens: the number and check accents use the existing orange brand color; cards retain the existing white-on-light-grey treatment and rounded corners.
- Image quality and assets: this section contains no raster imagery. Existing vector check icons are retained and render cleanly.
- Copy and content: the nine requested German services are present. The truncated final description was completed as: "Unterstützung bei der Beantragung von Zollbewilligungen und den erforderlichen Unterlagen."
- Responsive behavior: the 390 x 844 px mobile state renders a single-column card stack with no horizontal overflow. Desktop checks at 1426 x 900 px and 1280 x 720 px also show no horizontal overflow.
- Interactions: the cards are informational and have no primary interaction. Route loading and reveal states completed successfully.
- Browser console: no warnings or errors were reported in the final desktop checks.
- No actionable P0, P1, or P2 visual differences remain.

## Comparison history

- Pass 1: the service set was expanded, but the new number treatment was substantially larger than the requested "a bit bigger" adjustment.
- Pass 2: the number scale was reduced and the heading gap tightened; the original card headings needed to regain the source's stronger hierarchy.
- Pass 3: the original headings matched the reference more closely, but "Import- und Exportabwicklung" ended with an orphaned final letter.
- Pass 4: summary-card headings received their own responsive scale. The long title now wraps cleanly, the original three headings keep the source hierarchy, and desktop/mobile overflow checks pass.

## Final result

passed
