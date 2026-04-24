# Tasks
- [x] Task 1: Remove "Advanced Topics" section from sidebar navigation in scripts.js
  - [x] SubTask 1.1: Remove the advanced-topics section object from the sections array in generateSidebar()
  - [x] SubTask 1.2: Remove breadcrumb mappings for agent-hooks.html, hook-configuration.html, hook-examples.html, advanced-steering.html, sub-agents.html, context-engineering.html from getSectionName()
  - [x] SubTask 1.3: Remove breadcrumb mappings from getSectionChain()
- [ ] Task 2: Delete all 6 HTML files belonging to this section
  - [ ] SubTask 2.1: Delete agent-hooks.html
  - [ ] SubTask 2.2: Delete hook-configuration.html
  - [ ] SubTask 2.3: Delete hook-examples.html
  - [ ] SubTask 2.4: Delete advanced-steering.html
  - [ ] SubTask 2.5: Delete sub-agents.html
  - [ ] SubTask 2.6: Delete context-engineering.html
- [ ] Task 3: Fix broken references in remaining HTML files
  - [ ] SubTask 3.1: Find all broken links to deleted pages in remaining HTML files
  - [ ] SubTask 3.2: Fix broken links (convert to plain text or update targets)
  - [ ] SubTask 3.3: Fix broken prev/next navigation buttons
  - [ ] SubTask 3.4: Fix hardcoded sidebars in static pages
- [ ] Task 4: Update test file
  - [ ] SubTask 4.1: Remove deleted pages from tests/all-pages.spec.js if present

# Task Dependencies
- [Task 2] depends on [Task 1] (navigation references must be removed before deleting files)
- [Task 3] depends on [Task 2] (can audit broken links after files are deleted)
