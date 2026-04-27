# Add aiHackathon Reference Sections Spec

## Why
The home page serves as a contestant reference hub for aiHackathon 2026. Three key pieces of information from the official event site are missing: the event tagline, judging criteria, and schedule. These should be accessible on the home page without overwhelming the layout — hidden behind click-to-reveal accordions using the Prompt Accordion pattern.

## What Changes
- Add a **"The aiHackathon"** section with the event tagline in a visually eye-catching reveal card
- Add a **"Judging Criteria"** accordion containing 4 criteria translated to English (Quality, Feasibility, Innovation and Creativity, Presentation)
- Add a **"Schedule"** accordion with the 5 June 2026 full-day timeline
- All three sections use native `<details>`/`<summary>` (Prompt Accordion pattern) — no JavaScript required
- English only
- Flat, border-only style matching existing home page design system with gold accent highlights
- Placed between the "Choose Your Path" section and the "Reference Roadmap" section

## Impact
- Affected specs: None (new sections)
- Affected code: `home.html` (inline `<style>` + HTML body)

## ADDED Requirements

### Requirement: Event Tagline Card
The system SHALL display an eye-catching tagline card that reveals the official aiHackathon event name and motto when expanded.

#### Scenario: Tagline card closed
- **WHEN** page loads
- **THEN** a bordered card with summary text "The aiHackathon Event" is shown, no content visible

#### Scenario: Tagline card opened
- **WHEN** user clicks the summary
- **THEN** content expands showing:
  - "The 1st aiHackathon"
  - "AI for All: Smarter Solutions, Smarter VTC"
  - "Open to all full-time staff. No prior AI or programming experience is required."
  - Key stats: Total Prizes (HK$26,000+), Total Awards (7), Duration (1 day), Team Size (3-5), Team Composition (at least 2 different OUs)

### Requirement: Judging Criteria Accordion
The system SHALL display 4 judging criteria in an eye-catching grid layout when expanded, translated to English from the official site.

#### Scenario: Criteria accordion closed
- **WHEN** page loads
- **THEN** a bordered card with summary text "Judging Criteria" is shown

#### Scenario: Criteria accordion opened
- **WHEN** user clicks the summary
- **THEN** content expands showing 4 criteria cards in a 2x2 grid:
  1. **Innovation and Creativity** — Brand-new ideas or original, never-before-realized solutions
  2. **Presentation** — Clarity, fluency and effective communication of project value
  3. **Feasibility** — Technical feasibility and practical implementation capability
  4. **Quality** — Completeness of functionality and user experience

### Requirement: Schedule Accordion
The system SHALL display the full 5 June 2026 schedule timeline when expanded.

#### Scenario: Schedule accordion closed
- **WHEN** page loads
- **THEN** a bordered card with summary text "Schedule — 5 June 2026" is shown

#### Scenario: Schedule accordion opened
- **WHEN** user clicks the summary
- **THEN** content expands showing the full timeline with all 12 time slots from 09:00 to 17:15

### Requirement: Flat-By-Default Visual Style
All three new sections SHALL follow the existing design system:
- No drop shadows, no gradients on containers — borders define structure
- Gold (`--gold-primary`) used sparingly for key accents (icons, headers, highlights)
- JetBrains Mono for labels/tags, Space Grotesk for headings
- Eye-catching through layout contrast and accent colors, not through decorative effects

### Requirement: Prompt Accordion Pattern
All three sections SHALL use the native `<details>`/`<summary>` element matching the Prompt Accordion pattern:
- `.prompt-accordion` class on `<details>`
- `.prompt-accordion-header` styling on `<summary>`
- `.prompt-accordion-content` on the content wrapper
- Chevron icon rotates 90° on `[open]` state
