# Tasks
- [x] Task 1: Redesign home.html page structure
  - [x] Task 1.1: Remove redundant page-header and merge into unified hero-section
  - [x] Task 1.2: Reorganize HTML structure: hero → track-cards → roadmap → footer
  - [x] Task 1.3: Remove "Previous" navigation button from footer
  - [x] Task 1.4: Convert callout into a compact welcome banner within hero
- [x] Task 2: Enhance track cards with visual hierarchy
  - [x] Task 2.1: Update track card icons to use more distinctive emoji
  - [x] Task 2.2: Add color-coded tags to track cards (Training=green, Toolkits=gold, Survival=red)
  - [x] Task 2.3: Improve track card hover states and visual feedback
- [x] Task 3: Redesign roadmap as horizontal timeline
  - [x] Task 3.1: Replace vertical roadmap with horizontal scrollable timeline
  - [x] Task 3.2: Add collapsible/expandable detail views for each step
  - [x] Task 3.3: Maintain responsive design for vertical display on mobile
- [x] Task 4: Add scroll-triggered animations
  - [x] Task 4.1: Add CSS keyframe animations for fade-in and slide-up
  - [x] Task 4.2: Implement IntersectionObserver in scripts.js for scroll animations
  - [x] Task 4.3: Add animation data attributes to sections
- [x] Task 5: Polish responsive design and accessibility
  - [x] Task 5.1: Ensure horizontal timeline collapses to vertical on mobile
  - [x] Task 5.2: Add prefers-reduced-motion support
  - [x] Task 5.3: Verify touch targets are at least 44x44px
  - [x] Task 5.4: Test light/dark theme consistency

# Task Dependencies
- [Task 2] depends on [Task 1] (track cards need new structure)
- [Task 3] depends on [Task 1] (roadmap needs new structure)
- [Task 4] depends on [Task 1] (animations need final structure)
- [Task 5] depends on [Task 2, Task 3, Task 4] (polish needs all features)
