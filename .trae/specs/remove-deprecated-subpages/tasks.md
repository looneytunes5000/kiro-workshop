# Tasks

- [x] Task 1: Remove sidebar links from HTML files
  - [x] SubTask 1.1: Remove Cloud Agent and Understanding Application links from free-practice-feature.html
  - [x] SubTask 1.2: Remove Cloud Agent and Understanding Application links from llm-eval-intro.html
  - [x] SubTask 1.3: Remove Understanding Application link from test-a-minimal.html
  - [x] SubTask 1.4: Check and remove any remaining sidebar links in other HTML files

- [x] Task 2: Clean up scripts.js references
  - [x] SubTask 2.1: Remove page entries from `pages` array in scripts.js
  - [x] SubTask 2.2: Remove page entries from `pageHierarchy` config in scripts.js

- [x] Task 3: Clean up e2e-test.py references
  - [x] SubTask 3.1: Remove page filenames from PAGE_FILES array
  - [x] SubTask 3.2: Remove navigation sequence tuples containing these pages
  - [x] SubTask 3.3: Remove page title mappings

- [x] Task 4: Clean up tests/all-pages.spec.js references
  - [x] SubTask 4.1: Remove page entries from allPages array

## Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 1
- Task 4 depends on Task 1
