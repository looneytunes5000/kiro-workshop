# Improve UI Layout with Reduced Left Margin and Right Overview Column Spec

## Why
The current documentation layout has excessive left margin and lacks a right-side table of contents (overview) column, which is a standard pattern in modern documentation sites like TRAE docs and OpenCode docs. This improvement will enhance navigation and readability.

## What Changes
- Reduce `--content-gap` from 48px to 32px for tighter left margin
- Add a right-side overview column (~240px wide) showing current page sections as clickable links
- Make the overview column sticky so it follows scroll position (like OpenCode's right sidebar at 1080px-1440px)
- Ensure responsive behavior: hide overview column below 1200px viewport width
- Update all HTML pages to include the overview column container
- Content area max-width adjusted to ~720px for optimal readability (matching TRAE/OpenCode docs pattern)

## Impact
- Affected specs: Layout, Navigation
- Affected code: styles.css (layout changes), scripts.js (dynamic TOC generation), all HTML pages (overview column markup)

## ADDED Requirements

### Requirement: Right Overview Column
The system SHALL provide a right-side overview column (~240px wide) that displays the current page's section headings as clickable navigation links, positioned at the right edge of the viewport (similar to OpenCode's right sidebar at 1080px-1440px range).

#### Scenario: User views a page with multiple sections
- **WHEN** user opens any workshop page
- **THEN** they see a right sidebar showing all h2/h3 headings as clickable links
- **AND** the current section is highlighted as they scroll
- **AND** the overview column has an "On this page" header (matching TRAE/OpenCode pattern)

### Requirement: Reduced Left Margin
The system SHALL reduce the left margin to create a more compact and balanced layout.

#### Scenario: User views any page
- **WHEN** user opens any workshop page
- **THEN** the content area has reduced left padding compared to current layout

### Requirement: Sticky Overview Column
The overview column SHALL remain visible as the user scrolls through long content.

#### Scenario: User scrolls through a long page
- **WHEN** user scrolls down
- **THEN** the overview column stays visible within the viewport

### Requirement: Responsive Behavior
The overview column SHALL be hidden on smaller screens to preserve readability.

#### Scenario: User views on mobile/tablet
- **WHEN** viewport width is below 1200px
- **THEN** the overview column is hidden and content uses full available width

## MODIFIED Requirements

### Requirement: Content Layout
The content area SHALL be restructured to accommodate the right overview column while maintaining readable line lengths.

#### Scenario: User reads content
- **WHEN** user views any page
- **THEN** content width is optimized for readability with overview column present

## REMOVED Requirements
None
