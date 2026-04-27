# Tasks
- [x] Task 1: Move 5 HTML files to archive/ folder
  - [x] SubTask 1.1: Create `archive/` directory at project root
  - [x] SubTask 1.2: Move `start-workshop.html` → `archive/start-workshop.html`
  - [x] SubTask 1.3: Move `get-started.html` → `archive/get-started.html`
  - [x] SubTask 1.4: Move `introduction.html` → `archive/introduction.html`
  - [x] SubTask 1.5: Move `vibe-coding.html` → `archive/vibe-coding.html`
  - [x] SubTask 1.6: Move `trae-solo-reference.html` → `archive/trae-solo-reference.html`

- [x] Task 2: Update home.html — remove all links to archived pages
  - [x] SubTask 2.1: Change "Start Workshop" button to link to `training-reference.html`
  - [x] SubTask 2.2: Change featured track card (01) from `introduction.html` to `training-reference.html`
  - [x] SubTask 2.3: Change track card 03 (Survival Kit) from `vibe-coding.html` to `skills.html`
  - [x] SubTask 2.4: Change footer "Start Workshop" button to `training-reference.html`

- [x] Task 3: Update navigation buttons in active pages
  - [x] SubTask 3.1: Update `desktop-client.html` "Previous" link: `get-started.html` → `getting-started.html`
  - [x] SubTask 3.2: Update `spec-driven-reference.html` "Next" link: `trae-solo-reference.html` → `trae-solo-overview.html`

- [x] Task 4: Update active pages with hardcoded sidebar links
  - [x] SubTask 4.1: Update `llm-eval-intro.html` hardcoded sidebar: replace `trae-solo-reference.html` → `trae-solo-overview.html`, `vibe-coding.html` → `vibe-coding-reference.html`
  - [x] SubTask 4.2: Update `free-practice-feature.html` hardcoded sidebar: replace `trae-solo-reference.html` → `trae-solo-overview.html`, `vibe-coding.html` → `vibe-coding-reference.html`
  - [x] SubTask 4.3: Update `free-practice-feature.html` content link: `vibe-coding.html` → `vibe-coding-reference.html`
  - [x] SubTask 4.4: Update `deployment-troubleshooting.html` content link: `vibe-coding.html` → `vibe-coding-reference.html`
  - [x] SubTask 4.5: Update `ai-coding-agents.html` agent card link: `trae-solo-reference.html` → `trae-solo-overview.html`
  - [x] SubTask 4.6: Update `llm-eval-intro.html` "Previous" button: `vibe-coding.html` → `vibe-coding-reference.html`

- [x] Task 5: Update scripts.js — remove archived page references
  - [x] SubTask 5.1: Remove `trae-solo-reference.html`, `introduction.html`, `start-workshop.html`, `get-started.html` from both `getSectionName()` maps
  - [x] SubTask 5.2: Remove `vibe-coding.html` from `getSectionName()` maps (both copies)
  - [x] SubTask 5.3: Update `nestedChains` for `llm-eval-intro.html`: change link from `vibe-coding.html` to `vibe-coding-reference.html`

- [x] Task 6: Update tests for archived pages
  - [x] SubTask 6.1: Update test files to remove or adjust references to archived pages

- [x] Task 7: Verify archive integrity
  - [x] SubTask 7.1: Verify no broken links remain in active pages
  - [x] SubTask 7.2: Verify 5 files exist in archive/ directory
  - [x] SubTask 7.3: Verify server loads without errors

# Task Dependencies
- Task 2-5 depend on Task 1 (files moved first)
- Task 6 depends on Tasks 2-5
- Task 7 depends on all previous tasks
