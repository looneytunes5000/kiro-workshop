# Home Landing Page Polish Spec

## Why

The current home.html reads as "TRAE SOLO Workshop" when it should be branded as a **VTC aiHackathon 2026** event page where TRAE is just one of the allowed AI tools. The design also needs polishing across five impeccable dimensions: bolder visual identity, refined layout rhythm, correct typography hierarchy, clearer copy and UX labeling, and final polish before shipping.

## What Changes

- **Branding**: Replace all "TRAE SOLO Workshop" titles and references with aiHackathon framing. TRAE becomes one of the featured tools, not the workshop identity.
- **Hero redesign**: Amplify from a safe left-aligned template to a bolder asymmetric composition with the gold accent carrying 30-60% of the hero surface (Committed color strategy per impeccable laws).
- **Typography**: Fix the font family usage — JetBrains Mono should only appear in code/technical contexts, not in hero meta or track card features. Space Grotesk carries structure end-to-end (Grotesk Commitment from DESIGN.md).
- **Spacing & rhythm**: Vary section spacing intentionally. The hero, track grid, roadmap, and footer currently use uniform gaps — each section should breathe differently.
- **Copy clarity**: Rewrite headings, descriptions, and labels to be precise and purposeful. Every word earns its place — no restated headings, no intros that repeat titles.
- **Cleanup**: Consolidate duplicated inline `<style>` rules that are already covered by `styles.css`. Move remaining page-specific styles into the stylesheet where possible.

## Impact

- **Affected specs**: impeccable bolder, layout, typeset, clarity, polish commands
- **Affected code**: `home.html` (primary), `styles.css` (progress bar rule already updated, may receive additional refinements)
- **No breaking changes** — this is a visual and content enhancement

## MODIFIED Requirements

### Requirement: Landing Page Content
The system shall present the landing page as a **VTC aiHackathon 2026** event page, not a "TRAE SOLO Workshop". TRAE shall be referenced as one of the featured AI tools alongside others (OpenCode, Microsoft Copilot Studio, GenAI Portal).

#### Scenario: Page loads
- **WHEN** user opens home.html
- **THEN** page title, hero title, and badge all reference aiHackathon 2026, with TRAE positioned as a tool

#### Scenario: Track descriptions
- **WHEN** user views track cards
- **THEN** descriptions frame the learning around aiHackathon participation, with TRAE as one tool among others

### Requirement: Hero Section Visual Impact
The system shall apply a **Committed** color strategy to the hero, where warm workshop gold carries 30-60% of the hero surface through a gradient overlay or accent treatment. The hero shall use an asymmetric composition (left content, right accent area) rather than a centered template layout.

### Requirement: Typography Hierarchy
The system shall follow the DESIGN.md typography system:
- Space Grotesk for all structural text (headings, body, descriptions)
- JetBrains Mono reserved exclusively for code contexts, numbered identifiers (01, 02, 03), and technical accents
- Caveat used sparingly for callout titles only
- Hierarchy through scale + weight contrast (minimum 1.25 ratio between steps)
- Body line length capped at 65-75ch

### Requirement: Spacing Rhythm
The system shall vary spacing between sections intentionally. Hero padding, section margins, and gap values shall create visual rhythm — not uniform gaps throughout.

### Requirement: Copy Quality
The system shall ensure all landing page copy:
- Has no restated headings or intros that repeat titles
- Avoids em dashes, uses commas/colons/semicolons instead
- Uses precise, purposeful language where every word earns its place
- Clearly distinguishes between the aiHackathon event and the individual tools being taught
