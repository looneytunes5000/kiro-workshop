# Add Breadcrumb Navigation Spec

## Why
The hackathon survival kit is expanding beyond training materials to include tool documentation (OpenCode, and eventually Copilot Studio, VTC GenAI portal, etc.). Users need clear navigation context to understand where they are in the resource hierarchy and easily navigate back to parent sections.

## What Changes
- Add breadcrumb navigation component to all pages
- Implement breadcrumb generation based on sidebar section hierarchy
- Add breadcrumb styling consistent with existing design system
- Ensure breadcrumbs are responsive and work on mobile
- Set up foundation for future resource dashboard homepage

## Impact
- Affected specs: Navigation, Content Organization
- Affected code: All HTML pages (index.html, opencode-web-ui.html, and all training pages), styles.css, scripts.js

## ADDED Requirements

### Requirement: Breadcrumb Navigation Component
The system SHALL display a breadcrumb trail at the top of each page's main content area, showing the hierarchical path from the homepage to the current page.

#### Scenario: User views OpenCode documentation page
- **WHEN** user navigates to opencode-web-ui.html
- **THEN** breadcrumb displays: Home > Hackathon Toolkit > OpenCode Web UI

#### Scenario: User views training page
- **WHEN** user navigates to a training page (e.g., getting-started.html)
- **THEN** breadcrumb displays: Home > Getting Started

#### Scenario: User is on homepage
- **WHEN** user is on index.html
- **THEN** breadcrumb is hidden or displays only "Home"

### Requirement: Breadcrumb Interactivity
Each breadcrumb segment (except the current page) SHALL be a clickable link that navigates to that section.

#### Scenario: User clicks breadcrumb segment
- **WHEN** user clicks on "Hackathon Toolkit" in the breadcrumb
- **THEN** user navigates to the toolkit overview or homepage with toolkit section highlighted

#### Scenario: User clicks "Home" in breadcrumb
- **WHEN** user clicks on "Home"
- **THEN** user navigates to index.html

### Requirement: Breadcrumb Styling
The breadcrumb SHALL use consistent styling with proper visual hierarchy, separators, and responsive behavior.

#### Scenario: User views breadcrumb on desktop
- **THEN** breadcrumb displays horizontally with chevron separators (>) between segments

#### Scenario: User views breadcrumb on mobile
- **THEN** breadcrumb remains readable, potentially truncating middle segments if needed

### Requirement: Breadcrumb Generation Logic
The system SHALL automatically generate breadcrumbs based on the page's position in the sidebar hierarchy.

#### Scenario: Page loads
- **WHEN** any page loads
- **THEN** JavaScript reads page metadata and generates appropriate breadcrumb trail

## MODIFIED Requirements

### Requirement: Page Structure
Each page SHALL include a data attribute or metadata that defines its position in the navigation hierarchy for breadcrumb generation.

### Requirement: Homepage
The homepage SHALL serve as the root of the breadcrumb hierarchy and eventually evolve into a resource dashboard (foundation to be established in this spec).
