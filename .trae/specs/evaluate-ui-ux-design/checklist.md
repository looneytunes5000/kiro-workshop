# UI/UX Audit Checklist

## Accessibility
- [ ] All text meets WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text)
- [ ] All interactive elements have proper ARIA labels or accessible names
- [ ] Keyboard navigation works with visible focus indicators on all elements
- [ ] Heading hierarchy is logical (h1 → h2 → h3 without skipping levels)
- [ ] All images have meaningful alt text
- [ ] All form inputs have associated labels
- [ ] Skip navigation link is present and functional
- [ ] Semantic HTML elements are used correctly (nav, main, article, header, footer)

## Responsive Design
- [ ] Layout adapts properly at mobile breakpoints (375px, 768px)
- [ ] All touch targets meet minimum 44x44px size
- [ ] No horizontal scroll on narrow viewports
- [ ] Text remains readable at increased font sizes
- [ ] Sidebar navigation works correctly on mobile (hamburger menu)
- [ ] Navigation buttons stack properly on mobile

## Visual Design
- [ ] Color palette is consistent across all pages (uses CSS variables)
- [ ] Typography hierarchy is clear and intentional
- [ ] Spacing is consistent (uses design tokens)
- [ ] No AI-generated design anti-patterns (generic gradients, glassmorphism, etc.)
- [ ] Page footer exists and contains relevant information
- [ ] Visual hierarchy guides user attention appropriately

## Interaction Patterns
- [ ] Hover states provide clear feedback on all interactive elements
- [ ] Active/current page is clearly indicated in navigation
- [ ] Animations respect prefers-reduced-motion
- [ ] Search functionality provides clear feedback
- [ ] Theme toggle works correctly and persists preference
- [ ] Collapsible sidebar sections work smoothly

## Performance
- [ ] CSS is efficient (no redundant rules, minimal specificity)
- [ ] Web fonts load without blocking render
- [ ] No layout shift on page load
- [ ] Scroll performance is smooth
- [ ] Progress bar updates efficiently
