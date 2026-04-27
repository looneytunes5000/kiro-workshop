# Archive Non-Sidebar HTML Pages

## Why
Five HTML pages exist but are excluded from the sidebar navigation, creating dead-end pages. Archiving them keeps the project clean and prevents broken links for users navigating the workshop.

## What Changes
- Move 5 non-sidebar HTML pages to an `archive/` folder at the project root
- Update all `<a>` navigation links in active pages to reference archive pages
- Remove links to archived pages from `home.html` (main landing page CTA and roadmap)
- Remove references to archived pages from sidebar HTML in pages that have hardcoded sidebars
- Update `scripts.js` to remove archived pages from `getSectionName()` and `getSectionChain()` functions
- Update `scripts.js` nested breadcrumb chain for `llm-eval-intro.html`

## Impact
- Affected specs: N/A
- Affected code: `scripts.js`, `home.html`, `desktop-client.html`, `spec-driven-reference.html`, `ai-coding-agents.html`, `llm-eval-intro.html`, `free-practice-feature.html`, `deployment-troubleshooting.html`, test files

## ADDED Requirements
### Requirement: Archive folder
The project SHALL have an `archive/` directory at the root containing the 5 moved pages.

### Requirement: Updated navigation links
Pages that previously linked to archived pages SHALL redirect users to the closest alternative active page:
- **WHEN** a user clicks "Next: Get Started" from a page that previously linked to `get-started.html`
- **THEN** they are taken to `getting-started.html` (the active equivalent)
- **WHEN** a user clicks "Start Workshop" from `home.html`
- **THEN** they are taken to `training-reference.html` (the Training Session overview)
- **WHEN** a user clicks "Previous" or "Next" buttons that previously linked to archived pages
- **THEN** they are taken to the nearest active page in the same section

## MODIFIED Requirements
### Requirement: sidebar navigation entries
`scripts.js` `getSectionName()` and `getSectionChain()` SHALL NOT contain entries for:
- `start-workshop.html`
- `get-started.html`
- `introduction.html`
- `trae-solo-reference.html`
- `vibe-coding.html`

### Requirement: home.html landing page
`home.html` SHALL NOT link to any archived page. The "Start Workshop" and "View Roadmap" buttons and track cards SHALL link to active sidebar pages only.

## REMOVED Requirements
### Requirement: Non-sidebar pages in project root
**Reason**: These pages are not accessible via the sidebar and create dead-end links.
**Files moved to `archive/`**: `start-workshop.html`, `get-started.html`, `introduction.html`, `vibe-coding.html`, `trae-solo-reference.html`
