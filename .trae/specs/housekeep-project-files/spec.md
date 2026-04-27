# Project Housekeeping Spec

## Why
The project has accumulated temporary files, completed specs, and naming inconsistencies that make maintenance harder. Clean up these artifacts to improve project clarity and reduce clutter.

## What Changes
- Remove temporary test/debug scripts from project root (verify-*.py, analyze-*.py, etc.)
- Remove debug screenshots from project root (verify-*.png, debug-*.png, etc.)
- Remove temporary test HTML files (test-*.html)
- Fix duplicate extension on 'OpenCode.png.png' by renaming to 'OpenCode.png'
- Archive completed specs that are no longer needed
- Clean up orphaned reference HTML files that were only for development

## Impact
- Affected specs: N/A (cleanup only)
- Affected code: Project root files, img directory, .trae/specs directory

## REMOVED Requirements
### Requirement: Root directory temporary scripts
**Removed**: These scripts were used for verification and analysis during development:
- e2e-test.py, verify-detailed.py, verify-final.py, verify-homepage.png, etc.
- analyze-header-detail.py, analyze-headers.py, analyze-layout.py
- capture-reference.py, compare-headers.py, crop_focused.py, crop_images.py
- debug-screenshot.png, fix-verify.png, index-blank-check.png
- verify-final-layout.png, verify-implementation.py, verify-homepage.png, etc.
- test-a-minimal.html, test-aesthetic.html, test-b-professional.html, test-c-refined.html, test-d-bold.html, test-e-overdrive.html, test-e-preview.html
- Building-with-ai-agent.png (duplicate, keeping img/building-with-ai-agent.png.jpg)
- cancel-button-screenshot.png

**Reason**: These are one-time verification/debugging artifacts with no ongoing value.

### Requirement: Completed development spec documents
**Removed**: 15 completed spec documents in .trae/specs that represent finished work:
- add-breadcrumb-navigation
- add-opencode-survival-kit
- convert-to-trae-solo
- evaluate-ui-ux-design
- fix-home-page-blank-content
- fix-home-page-blank-display
- improve-ui-overview
- move-mcp-integration-page
- redesign-home-page
- refine-opencode-guiding-images
- remove-advanced-topics-section
- remove-deprecated-subpages
- remove-hands-on-section
- transform-to-paraphrasing-app
- update-mcp-integration-page

**Reason**: Completed work doesn't need persistent spec documents. They can be recovered from git history if needed.

### Requirement: Orphaned reference HTML files
**Removed**: These HTML files were created for design/reference purposes during development:
- copilot-studio-reference.html
- genai-portal-reference.html
- genai-portal.html
- spec-driven-reference.html
- training-reference.html
- home.html (duplicate of index.html)
- introduction.html (duplicate content)
- agent-integration.html (if not actively used as workshop content)
- commenting-feature.html
- free-practice-feature.html

**Reason**: Workshop should only serve production pages, not development artifacts.

## MODIFIED Requirements
### Requirement: Image file naming
The image file 'OpenCode.png.png' shall be renamed to 'OpenCode.png' to fix the duplicate extension.
