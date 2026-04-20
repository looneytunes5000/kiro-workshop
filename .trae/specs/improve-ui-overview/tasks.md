# Tasks

- [ ] Task 1: Update CSS layout for reduced left margin and right overview column
  - [ ] SubTask 1.1: Reduce `--content-gap` from 48px to 32px for tighter layout
  - [ ] SubTask 1.2: Update `.container` padding to use reduced left margin
  - [ ] SubTask 1.3: Add `.overview` column styles with sticky positioning, width 240px, positioned at right edge
  - [ ] SubTask 1.4: Add `.overview-link` styles for section links with hover/active states
  - [ ] SubTask 1.5: Add responsive breakpoint at 1200px to hide overview column
  - [ ] SubTask 1.6: Update `.content` max-width to 720px for optimal readability (matching TRAE/OpenCode pattern)

- [ ] Task 2: Add JavaScript for dynamic overview column generation
  - [ ] SubTask 2.1: Create function to scan page for h2/h3 headings
  - [ ] SubTask 2.2: Generate overview column HTML with anchor links
  - [ ] SubTask 2.3: Add scroll spy to highlight current section in overview
  - [ ] SubTask 2.4: Add smooth scroll when clicking overview links

- [ ] Task 3: Update all HTML pages to include overview column container
  - [ ] SubTask 3.1: Add `<aside class="overview">` container to index.html
  - [ ] SubTask 3.2: Add overview container to introduction.html
  - [ ] SubTask 3.3: Add overview container to all remaining HTML pages (30+ pages)

- [ ] Task 4: Verify layout and functionality
  - [ ] SubTask 4.1: Verify overview column appears correctly on desktop
  - [ ] SubTask 4.2: Verify overview column hides on mobile (< 1200px)
  - [ ] SubTask 4.3: Verify scroll spy highlights current section
  - [ ] SubTask 4.4: Verify all overview links scroll to correct sections
  - [ ] SubTask 4.5: Verify content readability is maintained

# Task Dependencies
- Task 2 depends on Task 1 (CSS must exist before JS references classes)
- Task 3 depends on Task 1 (HTML structure must match CSS classes)
- Task 4 depends on Tasks 1, 2, 3 (all changes must be in place)
- Task 3 sub-tasks can be done in parallel
