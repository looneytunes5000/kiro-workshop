# Remove TRAE IDE Level 3 Subpages Spec

## Why

The "Cloud Agent" and "Understanding Application" level 3 subpages under the TRAE IDE section are being deprecated and should be removed from the workshop website.

## What Changes

- Remove all sidebar navigation links to `cloud-agent.html` and `understanding-application.html`
- Remove all sidebar links referencing these pages
- Clean up references in `scripts.js` navigation data
- Clean up references in `e2e-test.py` end-to-end tests
- Clean up references in `tests/all-pages.spec.js` Playwright tests
- **DO NOT delete** the HTML files themselves (keep files, only remove links)

## Impact

- Affected HTML files: sidebar navigation in multiple pages
- Affected code: `scripts.js`, `e2e-test.py`, `tests/all-pages.spec.js`
- Affected navigation: sidebar menus across workshop pages

## REMOVED Requirements

### Requirement: Sidebar Links to Cloud Agent Page
**Reason**: Page is being deprecated
**Migration**: Links removed from all sidebar navigation sections

### Requirement: Sidebar Links to Understanding Application Page
**Reason**: Page is being deprecated
**Migration**: Links removed from all sidebar navigation sections

### Requirement: JS Navigation Configuration
**Reason**: Navigation data in scripts.js references deprecated pages
**Migration**: Remove page entries from `pages` array and `pageHierarchy` config

### Requirement: E2E Test References
**Reason**: Test files reference pages that are no longer part of navigation
**Migration**: Remove page entries from test arrays
