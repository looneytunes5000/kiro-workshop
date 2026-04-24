# Remove Hands-on Exercises Section Spec

## Why

The "Hands-on Exercises" sidebar section contains pages that are either duplicated elsewhere (vibe-coding.html), have more authoritative versions in other sections, or are no longer needed. Removing this section simplifies the navigation structure.

## What Changes

- Remove the entire "Hands-on Exercises" section from the sidebar navigation in `scripts.js`
- Delete all 6 HTML files belonging to this section: steering.html, generate-steering.html, vibe-coding.html, cancel-button.html, spec-driven.html, practice-mode-feature.html
- Remove breadcrumb mappings for these pages in `scripts.js`
- Update prev/next navigation buttons on adjacent pages that previously linked to removed pages

## Impact

- Affected specs: sidebar navigation, breadcrumbs, page navigation flow
- Affected code: `scripts.js`, 6 HTML files in the workshop directory
- No breaking changes to existing pages outside this section

## ADDED Requirements

### Requirement: Simplified Sidebar Navigation
The sidebar SHALL no longer include the "Hands-on Exercises" section and its pages.

#### Scenario: View sidebar on any page
- **WHEN** user opens the workshop site
- **THEN** the sidebar displays sections: Training Session, Agents Toolkits, Advanced Topics, Wrap Up (no Hands-on Exercises)

### Requirement: Removed Page Redirect
Pages that previously linked to Hands-on Exercises pages in their prev/next navigation SHALL be updated to link to valid pages or have their navigation adjusted.

#### Scenario: Navigate from adjacent pages
- **WHEN** user is on generate-steering.html's previous page
- **THEN** the navigation button links to a valid page, not a deleted one

## REMOVED Requirements

### Requirement: Hands-on Exercises Section
**Reason**: Pages are duplicated or no longer needed
**Migration**: Content users actually need exists in Training Session or Advanced Topics sections
