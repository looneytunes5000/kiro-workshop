# Tasks
- [x] Task 1: Add event tagline card with eye-catching visual design: Add a new `details.prompt-accordion` section after the "Choose Your Path" section containing the official aiHackathon tagline, subtitle, description, and key stats.
  - [x] Subtask 1.1: Create CSS for `.event-tagline-card` — larger bordered card with gold top-bar accent, summary shows "The aiHackathon Event" with right arrow
  - [x] Subtask 1.2: Create HTML structure with tagline title ("The 1st aiHackathon"), subtitle ("AI for All: Smarter Solutions, Smarter VTC"), description, and 5 stats displayed inline (HK$26,000+ Total Prizes, 7 Awards, 1 Day, 3-5 Team, 2+ OUs)
  - [x] Subtask 1.3: Ensure card is collapsed by default and expands on click using native <details> element

- [x] Task 2: Add judging criteria accordion: Add a `details.prompt-accordion` section below the tagline card with 4 criteria cards in a 2x2 grid layout.
  - [x] Subtask 2.1: Create summary text "Judging Criteria" with count badge (4)
  - [x] Subtask 2.2: Create 4 individual criterion cards with icon circles, gold-tinted backgrounds, English translations:
    - Innovation and Creativity: "Brand-new ideas or original, never-before-realized solutions"
    - Presentation: "Clarity, fluency and effective communication of project value"
    - Feasibility: "Technical feasibility and practical implementation capability"
    - Quality: "Completeness of functionality and user experience"
  - [x] Subtask 2.3: Add CSS for `.criteria-grid` (2-column grid) and `.criterion-card` styles

- [x] Task 3: Add schedule accordion: Add a `details.prompt-accordion` section below the criteria card with the full timeline.
  - [x] Subtask 3.1: Create summary text "Schedule — 5 June 2026" with venue subtitle
  - [x] Subtask 3.2: Create `.schedule-list` with all 12 time slots (09:00→17:15) using flex rows with time column + event name
  - [x] Subtask 3.3: Highlight key events (Opening Remarks, Official Start, Team Presentations, Prize Presentation, Closing Remarks) with gold left-border accent

- [x] Task 4: Mobile responsiveness: Ensure all three sections stack properly at 768px breakpoint with appropriate spacing reduction.
  - Criteria grid → single column, event stats stack, schedule items tighten, summary text sizes reduce

- [x] Task 5: Reduced-motion and light mode compatibility: Verify @media prefers-reduced-motion and body.light styles apply correctly to all new elements.
  - All new elements inherit global `body.light` CSS custom properties
  - Reduced-motion applies `animation: none` globally — new `animate-in` class already handled
