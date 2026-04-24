# Tasks
- [x] Task 1: Remove "Hands-on Exercises" section from sidebar navigation in scripts.js
  - [x] SubTask 1.1: Remove the hands-on-exercises section object from the sections array in generateSidebar()
  - [x] SubTask 1.2: Remove breadcrumb mappings for steering.html, generate-steering.html, cancel-button.html, spec-driven.html, practice-mode-feature.html from getSectionName()
  - [x] SubTask 1.3: Remove breadcrumb mappings from getSectionChain()
- [x] Task 2: Delete HTML files belonging to Hands-on Exercises section (5 of 6 deleted; vibe-coding.html kept per user request)
  - [x] SubTask 2.1: Delete steering.html
  - [x] SubTask 2.2: Delete generate-steering.html
  - [-] SubTask 2.3: Delete vibe-coding.html - KEPT as per user request (will require separate cleanup of its breadcrumb mappings)
  - [x] SubTask 2.4: Delete cancel-button.html
  - [x] SubTask 2.5: Delete spec-driven.html
  - [x] SubTask 2.6: Delete practice-mode-feature.html

# Task Dependencies
- [Task 2] depends on [Task 1] (navigation references must be removed before deleting files)
