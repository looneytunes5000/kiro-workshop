# Fix Navigation Buttons & Design Consistency Spec

## Why
The navigation buttons at the bottom of each page need to have correct links following the sidebar order, and their design should match the reference images showing dynamic width, specific colors, no arrows, and no hyperlink underlines.

## What Changes
- Update navigation button links on all pages to follow the exact sidebar order defined in `scripts.js`
- Add "Next: FAQ → Back to Home" button on the last page (`faq.html`)
- Add "Home ← FAQ" button on `home.html` footer (link to `faq.html`)
- Update button design to match reference images:
  - Dynamic (content-driven) width, not fixed width
  - Primary button: gold-primary background, dark text
  - Secondary button: transparent background, blue-accent border, grey text
  - No arrow characters (→, ←) in button text
  - No hyperlink underline
- Ensure design is consistent across both light and dark modes

## Impact
- Affected specs: navigation, design-system
- Affected code: all HTML pages with `.navigation-buttons`, `home.html` footer, `faq.html` nav buttons, `styles.css` button styles

## SIDEBAR ORDER (reference from scripts.js)

The correct page order is:

1. Home → index.html
2. Training Session:
   - training-reference.html
   - ai-coding-agents.html
   - vibe-coding-reference.html
   - llm-eval-intro.html
   - spec-driven-reference.html
   - free-practice-feature.html
   - skills.html
   - 14-skills.html
   - skills-reference.html
   - getting-started.html
3. AI Coding Agents:
   - trae-solo-overview.html
   - multitasking.html
   - tool-panel.html
   - mcp-integration.html
   - deploy-backend.html
   - deployment-troubleshooting.html
   - opencode.html
   - opencode-web-ui.html
4. AI-Powered Systems:
   - microsoft-copilot-studio.html
   - copilot-studio-reference.html
   - agent-integration.html
   - genai-portal.html
   - genai-portal-reference.html
   - ollama.html
5. FAQ → faq.html

Home and FAQ should link to each other (Home → FAQ, FAQ → Home).

## REQUIREMENT: Navigation Buttons Correct Order

### Scenario: Pages navigate in sidebar order (prev+next links
- **WHEN** user clicks "Previous" or "Next" button on any page
- **THEN** the user navigates to the adjacent page in sidebar order

### Scenario: Last page (FAQ) links to Home
- **WHEN** user is on faq.html and clicks Next
- **THEN** user navigates to home.html with label "Next: Home"

### Scenario: Home links to FAQ
- **WHEN** user is on home.html
- **THEN** user sees a navigation option linking to faq.html with label "FAQ"

## REQUIREMENT: Button Design Consistency

### Scenario: Buttons match reference design
- **WHEN** user views navigation buttons on any page
- **THEN** buttons have:
  - Dynamic (content-driven) width
  - Primary button: gold-primary (#E8C547 dark bg / #E8C547 light bg) with dark text (text-primary)
  - Secondary button: transparent background, blue-accent border, text-secondary color
  - No arrow characters
  - No text-decoration underline

### Scenario: Light mode colors
- **WHEN** user views buttons in light mode
- **THEN** colors remain consistent and readable per reference images

### Scenario: Dark mode colors
- **WHEN** user views buttons in dark mode  
- **THEN** colors remain consistent and readable per reference images
