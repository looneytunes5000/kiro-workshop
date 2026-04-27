# Fix Navigation and Breadcrumb Issues

## Why
Navigation buttons (Previous/Next) across workshop pages do not match the actual sidebar page order, breadcrumbs are missing or incorrect on most pages, and two pages (`desktop-client.html`, `setup-account.html`) should be archived as they are obsolete content that no longer fits the workshop structure.

## What Changes
- Archive `desktop-client.html` and `setup-account.html` into `archive/` folder
- Remove `desktop-client.html` and `setup-account.html` from sidebar in `scripts.js`
- Fix all Previous/Next navigation buttons to match the sidebar order
- Add navigation buttons to pages that are missing them
- Fix breadcrumb section maps and chains in `scripts.js` for all pages
- Fix mobile menu button visibility issue on `spec-driven-reference.html`
- Clean up duplicate entries in `scripts.js` section maps

## Impact
- Affected specs: archive-sidebar-pages (extends the previous archive work)
- Affected code: All HTML pages with navigation buttons, `scripts.js`, sidebar definition

## Correct Sidebar Order (source of truth for navigation)
1. training-reference.html → 2. ai-coding-agents.html → 3. vibe-coding-reference.html → 4. llm-eval-intro.html → 5. spec-driven-reference.html → 6. free-practice-feature.html → 7. skills.html → 8. skills-reference.html → 9. getting-started.html → 10. traе-solo-overview.html → 11. multitasking.html → 12. tool-panel.html → 13. mcp-integration.html → 14. deploy-backend.html → 15. deployment-troubleshooting.html → 16. opencode.html → 17. opencode-web-ui.html → 18. microsoft-copilot-studio.html → 19. copilot-studio-reference.html → 20. agent-integration.html → 21. genai-portal.html → 22. genai-portal-reference.html → 23. ollama.html → 24. wrapping-up.html

## REMOVED Requirements
### Requirement: desktop-client.html and setup-account.html in sidebar
**Reason**: Obsolete pages that no longer fit the workshop flow.
**Migration**: Moved to `archive/` folder. Pages that previously linked to them redirected to `getting-started.html`.
