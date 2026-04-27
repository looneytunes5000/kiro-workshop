# Tighten Home Layout Spec

## Why
The home page currently has excessive vertical spacing, particularly in the hero section (min-height: 70vh) and between major sections. As a contestant reference hub, density matters more than marketing-page breathing room. Users need to scan and find information quickly, not experience an immersive scroll. The current layout wastes 2-3 full viewport heights on whitespace before reaching substantive content.

## What Changes
- Reduce hero min-height from 70vh → 55vh (content fits without excessive padding)
- Reduce unified-hero vertical padding: 72px → 48px top, 80px → 40px bottom
- Reduce section gap between hero and "Choose Your Path" from ~80px → 32px
- Reduce roadmap section top padding from 48px → 32px
- Reduce compact-track padding from 20px 24px → 12px 20px
- Remove unnecessary gap between track cards and roadmap section
- Tighten overall rhythm: vary spacing intentionally instead of large uniform gaps
- Apply impeccables "vary spacing for rhythm" and "don't wrap everything in a container" rules

## Impact
- Affected specs: home page layout, spacing system
- Affected code: home.html (inline CSS), potentially styles.css for shared spacing tokens

## ADDED Requirements
### Requirement: Density-First Layout
The home page SHALL prioritize information density over immersive scrolling. All hero and section spacing SHALL be reduced to the minimum that maintains readability and visual hierarchy.

#### Scenario: User lands on home page
- **WHEN** user first views the home page
- **THEN** the hero, "Choose Your Path", and "Reference Roadmap" sections are visible or near-visible on a single desktop viewport

### Requirement: Intentional Spacing Rhythm
Spacing between sections SHALL vary based on content relationship. Adjacent sections (hero → path selection) SHALL have tighter gaps. Major section transitions (path selection → roadmap) SHALL have moderate separation.

#### Scenario: Visual scanning
- **WHEN** user scans the page vertically
- **THEN** the eye recognizes natural breaks without excessive scrolling

## MODIFIED Requirements
### Requirement: Hero Section Spacing (from polish-home-landing)
The hero section vertical padding and min-height ARE MODIFIED to reduce wasted space while maintaining visual presence. The aiHackathon logo and headline remain prominent but occupy less viewport area.

## REMOVED Requirements
### Requirement: Immersive Hero Experience
**Reason**: The 70vh min-height hero was designed for a marketing-page feel. As a reference hub, the page should serve utility over immersion.
**Migration**: Hero content reorganized to be visually complete in a tighter space. Logo and H2 move closer together. CTA buttons shift up accordingly.
