# Refine OpenCode Guiding Images Spec

## Why
Current full-page screenshots in the OpenCode Web UI documentation are overwhelming and clutter the page without improving clarity. Users need focused, targeted images that highlight specific UI elements and features.

## What Changes
- Remove existing full-page screenshots (opencode-docs.png, opencode-docs-layout.png)
- Add 2-3 focused UI element screenshots showing specific features
- Update image placement to be more strategic and less intrusive
- Maintain existing CSS styling for consistency

## Impact
- Affected specs: Documentation, Visual Aids
- Affected code: opencode-web-ui.html (image elements), styles.css (styling remains)

## ADDED Requirements

### Requirement: Focused UI Element Images
The system SHALL display 2-3 focused screenshots of specific OpenCode Web UI elements rather than full-page captures.

#### Scenario: User views OpenCode documentation
- **WHEN** user opens the OpenCode Web UI documentation page
- **THEN** they see 2-3 targeted images showing specific UI features (e.g., chat input area, session sidebar, terminal panel)
- **AND** images are close-up shots that clearly show the feature without unnecessary surrounding context

### Requirement: Strategic Image Placement
Images SHALL be placed immediately after or beside the relevant feature description, not as standalone sections.

#### Scenario: User reads about a feature
- **WHEN** user reads about session management
- **THEN** they see a focused image of the session sidebar right after the description
- **AND** the image enhances understanding without disrupting the reading flow

## MODIFIED Requirements

### Requirement: Documentation Images
**Previous**: Full-page screenshots showing entire interface
**New**: Focused, close-up screenshots of specific UI elements with clear captions

## REMOVED Requirements
None
