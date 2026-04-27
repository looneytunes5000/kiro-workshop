# Tasks
- [x] Task 1: Archive desktop-client.html and setup-account.html
  - [x] SubTask 1.1: Move desktop-client.html to archive/
  - [x] SubTask 1.2: Move setup-account.html to archive/

- [x] Task 2: Remove desktop-client.html and setup-account.html from sidebar
  - [x] SubTask 2.1: Remove from sidebar sections in scripts.js (both getSectionName and getSectionChain)
  - [x] SubTask 2.2: Update pages that link to desktop-client.html or setup-account.html: redirect to getting-started.html

- [x] Task 3: Fix navigation buttons on all pages to match sidebar order
  - [x] SubTask 3.1: training-reference.html: Next → ai-coding-agents.html
  - [x] SubTask 3.2: ai-coding-agents.html: Previous → training-reference.html, Next → vibe-coding-reference.html
  - [x] SubTask 3.3: vibe-coding-reference.html: Previous → ai-coding-agents.html, Next → llm-eval-intro.html
  - [x] SubTask 3.4: llm-eval-intro.html: Next → spec-driven-reference.html
  - [x] SubTask 3.5: spec-driven-reference.html: Previous → llm-eval-intro.html, Next → free-practice-feature.html
  - [x] SubTask 3.6: free-practice-feature.html: Next → skills.html
  - [x] SubTask 3.7: skills.html: Previous → free-practice-feature.html, Next → skills-reference.html
  - [x] SubTask 3.8: skills-reference.html: Previous → skills.html, Next → getting-started.html
  - [x] SubTask 3.9: getting-started.html: Previous → skills-reference.html, Next → trae-solo-overview.html
  - [x] SubTask 3.10: trae-solo-overview.html: Previous → getting-started.html, Next → multitasking.html
  - [x] SubTask 3.11: multitasking.html: Next → tool-panel.html
  - [x] SubTask 3.12: tool-panel.html: Previous → multitasking.html, Next → mcp-integration.html
  - [x] SubTask 3.13: mcp-integration.html: Previous → tool-panel.html, Next → deploy-backend.html
  - [x] SubTask 3.14: deploy-backend.html: Previous → mcp-integration.html, Next → deployment-troubleshooting.html
  - [x] SubTask 3.15: deployment-troubleshooting.html: Next → opencode.html
  - [x] SubTask 3.16: opencode.html: Previous → deployment-troubleshooting.html, Next → opencode-web-ui.html
  - [x] SubTask 3.17: opencode-web-ui.html: Next → microsoft-copilot-studio.html
  - [x] SubTask 3.18: microsoft-copilot-studio.html: Previous → opencode-web-ui.html, Next → copilot-studio-reference.html
  - [x] SubTask 3.19: copilot-studio-reference.html: Previous → microsoft-copilot-studio.html, Next → agent-integration.html
  - [x] SubTask 3.20: agent-integration.html: Previous → copilot-studio-reference.html, Next → genai-portal.html
  - [x] SubTask 3.21: genai-portal.html: Previous → agent-integration.html, Next → genai-portal-reference.html
  - [x] SubTask 3.22: genai-portal-reference.html: Previous → genai-portal.html, Next → ollama.html
  - [x] SubTask 3.23: ollama.html: Previous → genai-portal-reference.html, Next → wrapping-up.html

- [x] Task 4: Fix breadcrumbs in scripts.js for all pages
  - [x] SubTask 4.1: Build complete sectionMap in getSectionName() covering all 24 sidebar pages
  - [x] SubTask 4.2: Build complete nestedChains in getSectionChain() for all nested pages
  - [x] SubTask 4.3: Remove duplicate entries (spec-driven-reference.html appears twice)

- [x] Task 5: Fix mobile menu button visibility issue
  - [x] SubTask 5.1: Check spec-driven-reference.html mobile menu button CSS classes (remove trae-browser-inspect-draggable)
  - [x] SubTask 5.2: Check all HTML pages for stray browser-inspect classes

- [x] Task 6: Verify all navigation
  - [x] SubTask 6.1: Run audit script to verify all prev/next links match sidebar order
  - [x] SubTask 6.2: Verify breadcrumbs display correctly
  - [x] SubTask 6.3: Verify no broken links

# Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 2
- Task 4 can be done in parallel with Task 3
- Task 5 can be done in parallel with all tasks
- Task 6 depends on Tasks 1-5
