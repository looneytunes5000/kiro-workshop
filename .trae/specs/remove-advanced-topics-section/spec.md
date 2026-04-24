# Remove Advanced Topics Section Spec

## Why

The "Advanced Topics" sidebar section and its 6 pages are being removed per user request to simplify the workshop navigation structure.

## What Changes

- Remove the entire "Advanced Topics" section from sidebar navigation in `scripts.js`
- Delete all 6 HTML files: agent-hooks.html, hook-configuration.html, hook-examples.html, advanced-steering.html, sub-agents.html, context-engineering.html
- Remove breadcrumb mappings for these pages in `scripts.js`
- Fix all broken references (links, nav buttons, hardcoded sidebars) in remaining pages

## Impact

- Affected specs: sidebar navigation, breadcrumbs, page navigation flow
- Affected code: `scripts.js`, 6 HTML files in the workshop directory, any pages linking to them
- Pages that previously linked to Advanced Topics pages will need their prev/next navigation updated

## ADDED Requirements

### Requirement: Simplified Sidebar Navigation
The sidebar SHALL no longer include the "Advanced Topics" section and its pages.

#### Scenario: View sidebar on any page
- **WHEN** user opens the workshop site
- **THEN** the sidebar displays sections: Training Session, Agents Toolkits, Hands-on Exercises, Wrap Up (no Advanced Topics)

### Requirement: Fixed Navigation Buttons
Pages that previously linked to Advanced Topics pages in their prev/next navigation SHALL link to valid remaining pages.

#### Scenario: Navigate from adjacent pages
- **WHEN** user clicks prev/next buttons on pages that were adjacent to deleted pages
- **THEN** the navigation button links to a valid, existing page

## REMOVED Requirements

### Requirement: Advanced Topics Section
**Reason**: Pages are being removed per user request
**Migration**: N/A
