# Add OpenCode Survival Kit Spec

## Why
The website currently serves as a training resource for TRAE SOLO workshop. To transform it into a comprehensive hackathon survival kit, we need to add tool documentation (starting with OpenCode web UI) and improve navigation UX so participants can quickly find and access resources during the hackathon.

## What Changes
- Add a new "Hackathon Toolkit" section to the sidebar navigation, separate from training materials
- Create an OpenCode web UI documentation page with configuration, usage, and best practices
- Enhance sidebar with collapsible sections for better navigation of expanded content
- Add visual distinction between training sections and toolkit sections
- Implement search functionality in sidebar for quick resource discovery

## Impact
- Affected specs: Navigation, Content Organization
- Affected code: index.html, styles.css, scripts.js, new opencode-web-ui.html page

## ADDED Requirements

### Requirement: Hackathon Toolkit Section
The sidebar SHALL include a new "Hackathon Toolkit" section that is visually distinct from training sections and contains tool documentation.

#### Scenario: User views sidebar
- **WHEN** user opens the website
- **THEN** sidebar displays both "Training Materials" and "Hackathon Toolkit" sections with clear visual separation

### Requirement: OpenCode Web UI Documentation Page
The system SHALL provide a dedicated page documenting OpenCode web UI features, configuration options, and usage instructions.

#### Scenario: User accesses OpenCode documentation
- **WHEN** user clicks "OpenCode Web UI" in sidebar
- **THEN** user sees comprehensive documentation including getting started, configuration, authentication, and usage tips

### Requirement: Collapsible Sidebar Sections
The sidebar SHALL support collapsible sections to allow users to expand/collapse content categories for easier navigation.

#### Scenario: User collapses a section
- **WHEN** user clicks on a section header
- **THEN** the section collapses, hiding its child links, and shows an expand indicator

### Requirement: Enhanced Visual Hierarchy
The sidebar SHALL use visual indicators (icons, colors, spacing) to distinguish between training content and toolkit resources.

#### Scenario: User scans sidebar
- **WHEN** user looks at sidebar
- **THEN** toolkit section has distinct styling (different icon, background tint, or border) from training sections

### Requirement: Sidebar Search
The sidebar SHALL include a search input that filters sidebar links in real-time.

#### Scenario: User searches for a resource
- **WHEN** user types in search box
- **THEN** only matching sidebar links are shown, with non-matching links hidden

## MODIFIED Requirements

### Requirement: Sidebar Navigation
The existing sidebar SHALL be enhanced to support collapsible sections and search while maintaining current navigation functionality.

### Requirement: Page Structure
The existing page structure SHALL be extended to include toolkit pages alongside training pages, with clear categorization.
