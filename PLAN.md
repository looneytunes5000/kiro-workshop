# Sidebar Navigation Hierarchy Improvement Plan

## Problem
The left sidebar lacks clear visual hierarchy. Section titles, links, and sub-items all look similar. There's no clear indication of which sections are expanded, and the active page state is too subtle.

## Implementation Steps

### Step 1: Enhance Section Title Hierarchy
**File**: `styles.css`
- Increase `.sidebar-section-title` font size from `0.7rem` to `0.75rem`
- Change color from `--text-muted` to `--gold-primary` for section headers
- Add `padding: 10px 20px` for more breathing room
- Add a subtle background tint to section headers: `background: rgba(201, 168, 76, 0.04)`
- Add `margin-top: 4px` between sections for visual separation

### Step 2: Add Expanded Section Visual Indicators
**Files**: `styles.css`, `scripts.js`
- CSS: Add `.collapsible:not(.collapsed) > .collapsible-header` styles:
  - Background highlight: `background: rgba(201, 168, 76, 0.08)`
  - Larger chevron: increase `.collapse-icon` font size to `0.75rem`
  - Add left gold border: `border-left: 2px solid var(--gold-primary)`
- CSS: Add `.collapsible:not(.collapsed) > .sidebar-section-content` styles:
  - Subtle background tint: `background: rgba(17, 28, 48, 0.3)`
- JS: No changes needed — the `.collapsed` class is already toggled

### Step 3: Improve Sub-item Visual Distinction
**File**: `styles.css`
- Keep `.sidebar-link.sub-item` at `font-size: 0.8rem` (already set)
- Change sub-item color to `--text-muted` (lighter than regular links)
- Add a subtle dot prefix using `::before` pseudo-element:
  ```css
  .sidebar-link.sub-item::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--text-muted);
    margin-right: 8px;
    opacity: 0.5;
  }
  ```
- Add a faint vertical guide line on the left side of sub-items using a left border on the content container

### Step 4: Strengthen Active Page State
**File**: `styles.css`
- Increase `.sidebar-link.active` left border from `2px` to `3px`
- Increase background opacity from `0.12` to `0.18`
- Ensure text is `font-weight: 700` (currently 600)
- Add a subtle glow: `box-shadow: inset 0 0 8px rgba(232, 197, 71, 0.05)`

### Step 5: Improve Visited Checkmark Visibility
**File**: `styles.css`
- Increase `.sidebar-link.visited::after` font size from `0.75rem` to `0.85rem`
- Increase opacity from `0.7` to `0.9`
- Add a subtle background pill:
  ```css
  .sidebar-link.visited::after {
    background: rgba(0, 229, 155, 0.1);
    padding: 1px 5px;
    border-radius: 3px;
  }
  ```

### Step 6: Add Section Spacing and Dividers
**File**: `styles.css`
- Add `margin-bottom: 8px` to `.sidebar-section` for consistent spacing
- Remove the hardcoded `.sidebar-divider` (redundant with section spacing)
- Add `border-radius: 4px` to section headers for a more polished look

## Files to Modify
- `styles.css` — all visual changes
- `scripts.js` — no changes needed (existing collapse logic is sufficient)

## Testing
- Verify in both dark and light themes
- Verify at desktop width (sidebar visible) and mobile width (hamburger menu)
- Verify collapse/expand animations still work smoothly
- Verify search filtering still works correctly
