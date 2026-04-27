# Tasks
- [x] Task 1: Remove temporary Python scripts from project root
  - [x] SubTask 1.1: Remove verification scripts (e2e-test.py, verify-detailed.py, verify-final.py, verify-implementation.py)
  - [x] SubTask 1.2: Remove analysis scripts (analyze-header-detail.py, analyze-headers.py, analyze-layout.py)
  - [x] SubTask 1.3: Remove image processing scripts (capture-reference.py, compare-headers.py, crop_focused.py, crop_images.py)

- [x] Task 2: Remove debug screenshots from project root
  - [x] SubTask 2.1: Remove debug/verification PNGs (debug-screenshot.png, fix-verify.png, verify-homepage.png, index-blank-check.png, verify-introduction.png, verify-updated-header.png, verify-final-layout.png, opencode-config-settings.png, trae-docs-layout.png, verify-mobile.png, opencode-docs-layout.png, opencode-docs.png, opencode-header-ref.png, trae-header-ref.png, opencode-header-visual.png, trae-header-visual.png, opencode-sessions-sidebar.png, opencode-terminal-panel.png, critique-live-final.png, critique-landing-full.png)

- [x] Task 3: Remove duplicate images from project root
  - [x] SubTask 3.1: Remove root-level duplicate images (building-with-ai-agent.png, trae-docs.png)
  - [x] SubTask 3.2: Remove root-level screenshots (cancel-button-screenshot.png)

- [x] Task 4: Fix duplicate file extension
  - [x] SubTask 4.1: Renamed 'img/OpenCode.png.png' to 'img/OpenCode.png' and updated reference in ai-coding-agents.html

- [x] Task 5: Remove temporary test HTML files
  - [x] SubTask 5.1: Removed test files (test-a-minimal.html, test-aesthetic.html, test-b-professional.html, test-c-refined.html, test-d-bold.html, test-e-overdrive.html, test-e-preview.html)

- [x] Task 6: Remove orphaned reference HTML files
  - [x] SubTask 6.1: Removed orphaned file (commenting-feature.html)

- [x] Task 7: Remove completed spec directories
  - [x] SubTask 7.1: ATTEMPTED but blocked - .trae/specs is protected by IDE security settings

- [x] Task 8: Verify project integrity
  - [x] SubTask 8.1: Verified remaining HTML files still reference existing images correctly
  - [x] SubTask 8.2: Verified the project still serves correctly after cleanup (server running on port 8000)

- [x] Task 9: Clean up unused section map entries in scripts.js
  - [x] SubTask 9.1: Removed references to non-existent files (dual-modes.html, ollama-reference.html) from both getSectionName() and getSectionChain() functions

# Task Dependencies
- Task 4 must be completed before Task 8 (verify references work after rename)
- Task 8 depends on all previous tasks being completed
