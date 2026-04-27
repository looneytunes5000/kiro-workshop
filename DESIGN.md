---
name: Trae Solo Workshop
description: A self-paced AI coding workshop for beginners — calm, clear, like a patient mentor at the drafting table.
colors:
  ink: "#0B1120"
  deep-ink: "#080E1A"
  surface: "#111C30"
  surface-elevated: "#162540"
  parchment: "#F0EDE6"
  parchment-secondary: "#B8B5AC"
  parchment-muted: "#7A8090"
  gold: "#E8C547"
  gold-rich: "#D4A017"
  structure: "#1E3A5F"
  code-green: "#00E59B"
  link-blue: "#60A5FA"
typography:
  display:
    fontFamily: "Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Caveat, Comic Sans MS, Segoe Print, cursive"
    fontSize: "1.4rem"
    fontWeight: 600
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.85em"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "20px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  xxl: "32px"
  section: "48px"
  hero: "56px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.gold}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.parchment-secondary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary-hover:
    textColor: "{colors.parchment}"
  callout:
    backgroundColor: "rgba(232, 197, 71, 0.03)"
    rounded: "{rounded.md}"
    padding: "24px 28px"
---

# Design System: Trae Solo Workshop

## 1. Overview

**Creative North Star: "The Drafting Table"**

The Trae Solo Workshop visual system embodies a maker's workspace — precise tools, clean surfaces, blueprints and annotations. Every element is crafted, intentional, hands-on. Users are beginners to AI coding, and the interface should feel like a patient mentor: generous whitespace, measured pacing, minimal noise. The system rejects SaaS-dashboard clichés, heavy animations, and generic AI marketing tropes.

The aesthetic philosophy is calm over clever. Content leads, decoration recedes. When visual elements appear, they serve comprehension — never the reverse. The draft, not the frame, earns attention.

**Key Characteristics:**
- Dark-first by default — deep navy surfaces reduce eye strain during long reading sessions
- Gold is the sole accent, used with precision for emphasis and interactivity
- Flat surfaces with border-defined structure — no shadows, no glass effects
- Monospace code on dark grounds, handwriting accent for human callout warmth
- Motion only for state feedback — no scroll choreography, no entrance drama

## 2. Colors: The Deep Ink Palette

The palette characterizes gold ink on dark drafting paper — warm, scholarly, archival. Less corporate premium, more artisan documentation.

### Primary
- **Drafting Gold** (#E8C547): The single accent color. Used for active states, primary buttons, emphasis in headings, navigation highlights, and any interactive element that must signal "this is available" or "this is current." Never more than 10% of any given screen's surface area.
- **Rich Gold** (#D4A017): A deeper, warmer variant used for hover borders, gradient stops, decorative accents, and the gold scrollbar thumb. Provides depth without introducing a second hue.

### Neutral
- **Ink** (#0B1120): The primary page background. A deep navy that reads as warm charcoal under screen light, not cold black.
- **Deep Ink** (#080E1A): Darker navy for code blocks, the sidebar, and the deepest layer of surfaces. Creates a sense of content sinking below the page.
- **Surface** (#111C30): Card and list-item background. A subtle step up from the page, providing a container for grouped information without lifting it.
- **Surface Elevated** (#162540): The lightest dark surface. Used for callout backgrounds, elevated panels, and secondary containers.

### Secondary
- **Parchment** (#F0EDE6): Primary text color. Warm off-white with gold undertones — never a cold gray or pure white.
- **Parchment Secondary** (#B8B5AC): Body text and list items. Muted but still legible on the navy ground at WCAG AA.
- **Parchment Muted** (#7A8090): Tertiary text, placeholder labels, section subtitles.

**The One Voice Rule.** Gold carries no more than 10% of any surface. Its rarity is the point. If gold is everywhere, nothing is emphasized.

### Functional
- **Code Green** (#00E59B): Inline code blocks, terminal text, and outcome markers. The brightest color on the page by design — code needs to stand out instantly.
- **Structure** (#1E3A5F): The structural blue used exclusively for borders, dividers, sidebar separators, and code block outlines. It defines layout without competing for attention.
- **Link Blue** (#60A5FA): Hyperlink color in body text. Changes to a deeper blue (#2563EB) in light theme for better contrast.

### Theme: Light vs. Dark

Dark by default, not light by safety. The physical scene: a developer reading workshop content on a monitor during focused work sessions, often in reduced ambient light. Dark first reduces eye strain and creates a sense of immersion appropriate for technical documentation.

Light theme exists as a toggle preference. All tokens invert with the same structural relationships preserved — navy becomes warm gray, gold deepens to brass, structure becomes light divider gray.

### Named Rules

**The One Voice Rule.** The primary accent (gold) is used on ≤10% of any given screen. Its rarity is the point.

**The Ink-and-Structure Rule.** Borders and dividers use the muted blue (`#1E3A5F`), never gold. Gold is for emphasis, structure is for layout.

**The No-Glass Doctrine.** No backdrop-filter, no frosted panels, no semi-transparent overlays as a design pattern. Every surface is opaque.

## 3. Typography

**Display Font:** Space Grotesk (with -apple-system, BlinkMacSystemFont, Segoe UI, Roboto fallbacks)
**Body Font:** Space Grotesk (same family — unified voice)
**Label/Accent Font:** Caveat (with Comic Sans MS, Segoe Print fallbacks)
**Label/Mono Font:** JetBrains Mono

**Character:** A single geometric sans-serif carries both body and headings, creating a unified, modern technical voice. Space Grotesk's slightly irregular geometry (noticeable in the lowercase 'a', 'g', and numerals) gives it warmth without losing professionalism. Caveat adds handwriting warmth for human-authored callout headers only — a reminder that there's a person behind these instructions. JetBrains Mono provides clear code distinction with ligatures.

### Hierarchy
- **Display** (700, 3.5rem, 1.15): Page H1 — only for page-level headers. Tight letter-spacing (-0.04em) creates a strong, authoritative presence. Used once per page.
- **Headline** (600, 1.35rem, 1.3): H2 and H3 section headers within content. The weight difference from normal body (600 vs 400) creates clear hierarchy even at similar sizes.
- **Title** (600, 1.25rem, 1.3): Card headers, navigation items, callout titles. Slightly smaller H3, used in constrained spaces.
- **Body** (400, 1.05rem, 1.7): Primary reading text. Constrained to max-width 65ch for comfortable line lengths. The 1.7 line-height provides generous vertical rhythm.
- **Label** (600, 1.4rem, normal): Callout header text in Caveat. Handwritten warmth for human-authored tips and warnings, used sparingly.
- **Mono** (400, 0.85em, normal): Code snippets, inline code, terminal text. Tighter than body to fit code on screen without scrolling.

### Light Theme Typography Mapping
- Display scales from 3.5rem → 2.25rem at responsive breakpoint (900px)
- Body scales from 1.05rem → 1rem at mobile breakpoint
- All sizes maintain the same weight and line-height ratios across breakpoints

### Named Rules

**The 65-Character Rule.** Body text never exceeds 65ch max-width. Wide containers mean more than wide text. Every paragraph paragraph constrained.

**The Single Voice Doctrine.** Space Grotesk for everything editorial. No secondary body font, no serif/sans pairing. Caveat exists only for callout titles — it's a label, never body text.

## 4. Elevation

This system is **flat by default, borders define depth**. No shadows are used anywhere in the component library. Depth is conveyed through three mechanisms: tonal layering (surface → surface-elevated → deep-ink), border presence (1px solid structure color), and spatial positioning (padding gaps, grid layouts). The physical drafting table has no shadows between papers — they sit on the surface, defined by their edges and relative position.

### Tonal Layering Vocabulary
- **Ink** (#0B1120): Base page — the surface everything sits on
- **Surface** (#111C30): Container level — cards, list items, active navigation
- **Surface Elevated** (#162540): Secondary container level — callouts, elevated panels
- **Deep Ink** (#080E1A): Sunken level — code blocks, sidebar background

### Border System
- **1px solid Structure** (#1E3A5F): Default border. Sidebar right edge, code block outlines, callout borders, component edges, dividers.
- **1px solid Gold** (#E8C547): Emphasis border. Active state borders, callout accent borders on specific types.
- **2px solid Parchment** (#F0EDE6): Sidebar active link left border — the single interactive border that signals "you are here."
- **3px solid Gold**: Callout left accent border for emphasis types (replacing side-stripe; callout has full border + left accent).

### Named Rules

**The Flat-By-Default Rule.** Surfaces never lift. No box-shadow, no translateZ, no hardware-accelerated shadows. The only "lift" is a 2px translateY on card hover — purely positional, never shadowed.

**The Border-Only Doctrine.** Every container has an outline. If content needs to be visually distinct from the background, it gets a border, not a shadow or backdrop-filter.

## 5. Components

### Buttons
- **Shape:** Slightly rounded corners (6px). Not pill-shaped, not sharp — a moderate radius that feels purposeful without softness.
- **Primary:** Gold background (#E8C547), ink text (#0B1120). No border. Padding `10px 20px`, min-height `44px` for accessibility. Font weight 600 at 0.9rem.
- **Hover / Focus:** Primary buttons brighten slightly (brightness 1.05) and lift 2px upward on hover. Focus-visible receives a 2px gold outline offset by 2px.
- **Secondary:** Transparent background, parchment-secondary text, 1px structure border. On hover: border becomes gold-rich (#D4A017), text becomes parchment-primary.

### Callout Boxes
- **Corner Style:** Rounded (8px radius)
- **Background:** `rgba(232, 197, 71, 0.03)` — a barely-perceptible gold wash. Just enough to distinguish from the surrounding surface without competing with content.
- **Border:** 1px gold border on all sides, creating a complete outline rather than just a left accent stripe.
- **Internal Padding:** `24px 28px` — taller vertical than horizontal to match reading rhythm.
- **Header:** Caveat font at 1.4rem for title, small gold dot (8px circle) as leading marker.
- **Body:** 1rem body text, max-width 65ch, secondary parchment color.
- **Variants:** `.callout.tip` uses code-green (#00E59B) for header and left border. `.callout.warning` uses gold as normal.

### Outcome Items
- **Corner Style:** Slightly rounded (6px radius).
- **Background:** Surface (#111C30) — subtle separation from page.
- **Border:** 1px solid structure color.
- **Hover / Focus:** Lifts 2px up, border color changes to gold-rich (#D4A017), adds subtle gold shadow (0 4px 12px rgba(201, 168, 76, 0.1)). The shadow is the ONLY shadow in the system — it's a tiny gold glow, not a lift effect.

### Cards (Agent Cards, Integration Cards, Skill Cards)
- **Corner Style:** Rounded (12px radius) — the largest radius, reserved for primary content containers.
- **Background:** Surface (#111C30) for agent cards; `rgba(255, 255, 255, 0.03)` for integration cards.
- **Border:** 1px solid structure color.
- **Hover / Focus:** Lifts 4px up, border changes to gold-primary, adds gold drop shadow (0 8px 24px rgba(232, 197, 71, 0.15) for agent cards).
- **Internal Padding:** `20px` standard for content areas.
- **Image Area:** Full-width top section with background `surface-elevated`, `220px` height, `16px` internal padding.

### Navigation — Sidebar
- **Width:** 240px fixed, sticky positioning on desktop.
- **Typography:** 0.85rem body links, gold header at 0.9rem/700 weight.
- **Default State:** Transparent background, secondary parchment text.
- **Hover State:** `rgba(255, 255, 255, 0.03)` background, text becomes primary parchment color.
- **Active State:** Surface background, primary text, left border 2px solid parchment.
- **Light Theme Inversion:** Gold text on dark background, warm ash background on light.

### Navigation — Breadcrumb
- **Background:** Deep Ink (#080E1A), full-width bar below page header.
- **Typography:** 0.85rem links, muted text default, becomes gold on hover.
- **Separator:** Small chevron (›) in muted text.

### Accordions / Prompt Reveals
- **Border:** 1px solid structure.
- **Header Background:** Surface-elevated.
- **Content Top Border:** 1px solid structure.
- **Icon:** Gold chevron that rotates 90° when open.

### Image Containers (Workflow Images, Doc Images)
- **Border:** 1px solid structure, 8px radius.
- **Shadow on doc images:** `0 4px 12px rgba(0, 0, 0, 0.3)` — the only significant shadow, used to create depth for documentation screenshots.

### Progress Bar
- **Position:** Fixed top of viewport, 3px height.
- **Color:** Gold-primary, left-aligned transform origin.

### Theme Toggle
- **Style:** Transparent background, 1px structure border, 6px radius.
- **Size:** 36px minimum for touch target accessibility.
- **Hover:** Gold text, gold-rich border, subtle gold background wash.

## 6. Do's and Don'ts

### Do:
- **Do** use gold on ≤10% of any screen surface. Its rarity gives it meaning.
- **Do** keep all body text at max-width 65ch — wide containers are not wide reading lines.
- **Do** use the flat-surface, border-only elevation strategy for all containers. Surfaces sit on the table; they don't float.
- **Do** use Space Grotesk as the single editorial voice. Caveat exists only for callout titles.
- **Do** provide 44px minimum touch targets for all interactive elements (buttons, links, toggles).
- **Do** respect `prefers-reduced-motion` — all animations reduce to 0.01ms effectively.
- **Do** maintain the warm undertone in text colors — parchment over pure white, never cold grays.
- **Do** use code-green for inline code, terminal snippets, and outcome markers — it needs to stand out instantly.
- **Do** include dark/light theme support with the same structural relationships preserved.

### Don't:
- **Don't** use `#000` or `#fff` anywhere in the system. Tint toward the brand hue.
- **Don't** use border-left greater than 1px as a colored accent stripe on cards, list items, callouts, or alerts. Rewrite with full borders or background tints.
- **Don't** use gradient text (`background-clip: text` with gradient). Use solid gold for emphasis, weight and size for hierarchy.
- **Don't** use glassmorphism, backdrop-filter, or frosted panels. Every surface is opaque.
- **Don't** use heavy animations, bouncing elements, or attention-grabbing effects. Motion only for state feedback.
- **Don't** use generic SaaS dashboard visual patterns, blue gradients and stock illustration clichés, or overly colorful or playful consumer app patterns.
- **Don't** use dense documentation walls with no visual breathing room. Generous whitespace, consistent rhythm, muted backgrounds.
- **Don't** rely on color alone to convey meaning. Use labels, icons, or patterns alongside color for accessibility.
- **Don't** add box-shadows to create depth. Use tonal layering and borders instead. The only exceptions are tiny gold hover glows on cards and documentation image shadow.
- **Don't** use gold for structural lines, borders, or dividers. Structure color (`#1E3A5F`) defines layout; gold emphasizes within it.
- **Don't** nest cards within cards. A card inside a card inside a card is always wrong.
