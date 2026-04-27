---
name: AI-Driven Development with TRAE SOLO
description: Workshop documentation site with a premium dark console aesthetic — deep navy surfaces with warm gold accents and refined interactive precision.
colors:
  midnight-void: "#080E1A"
  deep-night-surface: "#0B1120"
  night-panel: "#111C30"
  raised-panel: "#162540"
  warm-workshop-gold: "#E8C547"
  burnished-gold: "#D4A017"
  deep-ocean-border: "#1E3A5F"
  cream-text: "#F0EDE6"
  warm-gray-text: "#B8B5AC"
  slate-muted: "#7A8090"
  bright-mint: "#00E59B"
  cloud-bg: "#F8F9FA"
  light-mist-bg: "#E9ECEF"
  white-surface: "#FFFFFF"
  light-frost-elevated: "#F1F3F5"
  dark-gold-primary: "#B8860B"
  dark-gold-rich: "#996515"
  charcoal-text: "#212529"
  silver-border: "#e5e7eb"
typography:
  display:
    fontFamily: "Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
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
    letterSpacing: "normal"
  label:
    fontFamily: "Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.06em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
  accent:
    fontFamily: "Caveat, Comic Sans MS, Segoe Print, cursive"
    fontSize: "1.4rem"
    fontWeight: 600
rounded:
  tight: "4px"
  standard: "6px"
  curved: "8px"
  relaxed: "12px"
spacing:
  content: "32px"
  sidebar: "240px"
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.warm-workshop-gold}"
    textColor: "{colors.deep-night-surface}"
    rounded: "{rounded.standard}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.burnished-gold}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.warm-gray-text}"
    rounded: "{rounded.standard}"
    border: "1px solid {colors.deep-ocean-border}"
    padding: "10px 20px"
  button-secondary-hover:
    textColor: "{colors.cream-text}"
    border: "1px solid {colors.burnished-gold}"
  sidebar-link:
    backgroundColor: "transparent"
    textColor: "{colors.warm-gray-text}"
    rounded: "{rounded.standard}"
    padding: "6px 12px"
  sidebar-link-active:
    backgroundColor: "{colors.night-panel}"
    textColor: "{colors.cream-text}"
  code-block:
    backgroundColor: "{colors.midnight-void}"
    rounded: "{rounded.curved}"
    padding: "20px"
    border: "1px solid {colors.deep-ocean-border}"
  card-default:
    backgroundColor: "{colors.night-panel}"
    rounded: "{rounded.relaxed}"
    border: "1px solid {colors.deep-ocean-border}"
    padding: "24px"
  callout-default:
    backgroundColor: "transparent"
    rounded: "{rounded.relaxed}"
    border: "3px solid {colors.warm-workshop-gold}"
    padding: "24px 28px"
---

# Design System: AI-Driven Development with TRAE SOLO

## 1. Overview

**Creative North Star: "The Workshop Console"**

The Workshop Console is a dark command center where learning happens through doing. It channels the feeling of sitting at a focused workstation — deep navy surfaces recede into the background, letting content and code take center stage. Warm gold accents aren't decorative; they're signals pointing toward the next action, the next step, the thing that matters right now.

The aesthetic is premium but never ostentatious. It respects the learner's intelligence: clear hierarchy, functional typography, interactive feedback that feels measured rather than theatrical. The dual-theme system honors both preference and context — dark by default for focused work, light for daytime readability and print.

This system explicitly rejects the corporate enterprise template, the playful cartoonish interface, and the dense wall-of-text documentation layout. It believes in showing over telling, in hierarchy over decoration, and in respecting the learner's time at every interaction.

**Key Characteristics:**
- Dark-first with a polished light theme — both feel intentional, not inverted
- Single warm gold accent carrying all emphasis and interactivity signals
- Tonal layering without shadows — depth through color shifts and precise borders
- Three typefaces, each earning its place: sans for structure, mono for code, handwritten for moments of human warmth
- Refined motion with exponential easing — subtle transforms, no choreography

## 2. Colors

A restrained palette where deep navy surfaces carry the body and warm gold speaks with emphasis — a premium console that signals without shouting.

### Primary
- **Warm Workshop Gold** (#E8C547 / oklch(85% 0.18 85°)): The single accent that carries emphasis, interactive focus, active states, and visual signals throughout the system. Used on ≤10% of any given screen — its rarity is the point.

### Secondary
- **Bright Mint** (#00E59B): Reserved exclusively for code syntax highlighting and tip callout indicators. Never used for general UI elements.

### Neutral
- **Midnight Void** (#080E1A): Background for code blocks and deep surfaces. Darker than the body background to create tonal depth.
- **Deep Night Surface** (#0B1120): Primary body background. Deep navy that reads as dark without being pure black.
- **Night Panel** (#111C30): Card and surface backgrounds. Elevated above the body to distinguish content areas.
- **Raised Panel** (#162540): Further elevated surfaces, modal-like content, or raised interactive elements.
- **Deep Ocean Border** (#1E3A5F): Border and divider color. Subtle enough to step back, visible enough to define structure.
- **Cream Text** (#F0EDE6): Primary body text. Warm off-white, never pure white.
- **Warm Gray Text** (#B8B5AC): Secondary text for body paragraphs and descriptions.
- **Slate Muted** (#7A8090): Tertiary text for breadcrumbs, captions, and less prominent labels.

### Light Theme Neutrals
- **Cloud BG** (#F8F9FA) → Light body background
- **Light Mist** (#E9ECEF) → Deep light surfaces
- **White Surface** (#FFFFFF) → Card and elevated surfaces
- **Silver Border** (#e5e7eb) → Light theme borders
- **Charcoal Text** (#212529) → Light theme primary text
- **Dark Gold Primary** (#B8860B) → Light theme gold (darker for contrast on light backgrounds)

### Named Rules

**The One Signal Rule.** Warm Workshop Gold is the sole accent. It appears on ≤10% of any screen. When gold is everywhere, it means nothing.

**The Mint Boundary.** Bright Mint (#00E59B) is code and tip indicators only. Never for buttons, links, or general emphasis.

**The Tonal Depth Rule.** Depth is conveyed through background color progression (#0B1120 → #111C30 → #162540) and 1px borders in deep ocean blue. Shadows are secondary.

## 3. Typography

**Body Font:** Space Grotesk (with -apple-system, BlinkMacSystemFont fallbacks)
**Mono Font:** JetBrains Mono (with standard mono fallbacks)
**Accent Font:** Caveat (with cursive fallbacks)

A committed single-family sans system where Space Grotesk carries body, headings, and UI labels with deliberate weight contrast. JetBrains Mono provides authority in code contexts. Caveat appears sparingly for callout titles — a handwritten signal that breaks the digital monotony for emphasis moments.

### Hierarchy
- **Display** (500, 1.625rem / 2.25rem mobile, 1.2 line-height, -0.02em tracking): Page header titles. The only place gold accent text appears in large form.
- **Headline** (600, 1.35rem, 1.3 line-height, -0.02em tracking): Section headings (h3). Clear weight contrast from body, same negative tracking.
- **Title** (600, 1.25rem, 1.3 line-height): Component titles within cards and feature blocks.
- **Body** (400, 1.05rem, 1.7 line-height): Main reading text. Color shifts from cream-text (primary) to warm-gray-text (secondary paragraphs). Max 75ch line length through content gap constraints.
- **Label** (600, 0.75rem, 0.06em tracking, uppercase): Overview section titles, badges, metadata. Small but commanding through weight and letter-spacing.
- **Mono** (400, 0.85em): Inline code and code blocks. Bright mint syntax color within a bright-mint context. Padded 2px 8px inline, 20px for blocks.
- **Accent** (600, 1.4rem, cursive): Callout headers only. Warm gold on dark.

### Named Rules

**The Grotesk Commitment.** Space Grotesk carries structure end-to-end. Weight (400→500→600→700) and size create hierarchy — no additional families for headings.

**The Accent Exception.** Caveat appears only in callout titles. It's a deliberate break from digital precision, signaling "pay attention here" in handwriting.

## 4. Elevation

This system is flat-by-default with tonal layering as the primary depth mechanism. Surfaces are differentiated through background color progression (deep night → night panel → raised panel) paired with precise 1px borders in deep ocean blue. Shadows appear only as targeted hover response on cards — a subtle gold-tinted glow at 0.15 opacity that signals interactivity without lifting from the plane.

### Elevation Layers (dark theme)
- **Level 0 — Body** (#0B1120): The floor. All content sits above this.
- **Level 1 — Cards/Surfaces** (#111C30): Content containers with deep ocean border.
- **Level 2 — Elevated** (#162540): Interactive elements, modals, raised components with matching border.
- **Level 3 — Hover Response**: Cards receive `box-shadow: 0 8px 24px rgba(232, 197, 71, 0.15)` on hover — a faint gold glow, 0.2s ease-out-quint transition.

### Named Rules

**The Flat-By-Default Rule.** No shadows at rest. The interface reads as a flat plane with color zones defining structure. Shadows emerge only as interactive feedback.

**The Hover Glow Rule.** Elevated shadows are gold-tinted, not black. `rgba(232, 197, 71, 0.15)` — the warm glow confirms the element responds to the user.

## 5. Components

Interactive components respond with measured precision. Transitions use the ease-out-quint curve (cubic-bezier(0.22, 1, 0.36, 1)) at 0.2–0.3s duration — noticeable but never theatrical.

### Buttons
- **Shape:** Standard radius (6px) — gently softened corners, not rounded.
- **Primary:** Warm Workshop Gold (#E8C547) background on Deep Night Surface (#0B1120) text. 10px 20px padding, 600 weight. Solid, confident.
- **Hover:** Transform translateY(-2px) with brightness increase (1.05). The button lifts and intensifies.
- **Secondary:** Transparent background, 1px Deep Ocean Border (#1E3A5F), warm gray text. Ghost variant that becomes solid on hover.
- **Hover:** Border shifts to Burnished Gold (#D4A017), text shifts to cream. Clear state without color fill.
- **Focus:** 2px gold outline with 2px offset, applied globally via `:focus-visible`.

### Navigation (Sidebar)
- **Style:** Fixed 240px width, full viewport height, sticky positioning. Night panel background with subtle right border.
- **Links:** 6px radius, transparent background, warm gray text (600 weight for active). Transition on hover to lighter text.
- **Active State:** Night panel background, cream text, 600 weight, left border in cream-text (2px). Clear visual lock to current page.
- **Sub-items:** Increased padding-left (36px and 52px for nested levels), smaller font (0.82rem).
- **Search Input:** 6px radius, 1px sidebar-input-border, 36px min-height. Focus shifts border to blue (#3b82f6) with 2px ring.
- **Mobile:** Sidebar slides off-screen left with `translateX(-100%)`. Hamburger button fixed at top-left, gold text on midnight void background.

### Callouts
- **Shape:** Relaxed radius (12px implied by content structure, though default is flat with gold left border).
- **Default/Warning:** 3px Warm Workshop Gold left border, 24px 28px padding, transparent background.
- **Tip Variant:** 3px Bright Mint left border. Header and bullet switch to mint.
- **Header:** Caveat font at 1.4rem, 600 weight, gold or mint depending on variant. Gold dot bullet marker.
- **Content:** Body text size (1.05rem), warm gray text, max 65ch width constraint.

### Cards
- **Corner Style:** Relaxed radius (12px) — the softest corner treatment in the system.
- **Background:** Night Panel (#111C30) with Deep Ocean Border (1px).
- **Agent Card Variant:** Same structure with image area at 220px height. Hover receives gold glow shadow.
- **Integration Card:** Transparent background with 3% white overlay and 10% white border. Highlighted variant gets 6% warm gold tint background and 25% gold border.

### Code Blocks
- **Style:** Midnight Void (#080E1A) background, Deep Ocean Border (1px), 8px radius, 20px padding.
- **Inline Code:** Same colors, 2px 8px padding, 4px radius, 0.85em font size.
- **Text:** Bright Mint (#00E59B) for syntax within blocks. Cream text for inline code without syntax context.

### Badges
- **Included Badge:** Bright Mint (#00E59B) background, Deep Night text. 20px radius (pill shape). 4px 10px padding, 0.75rem, 600 weight, uppercase with 0.05em tracking.
- **Mode Tags:** Warm Workshop Gold background, Deep Night text. Same pill shape.

### Progress Bar
- **Style:** 3px height, fixed at top, Warm Workshop Gold background. Width transitions linearly based on scroll position (minimum 2% width).

## 6. Do's and Don'ts

### Do:
- **Do** use Warm Workshop Gold (#E8C547) as the sole accent, limited to ≤10% of any screen area (The One Signal Rule).
- **Do** convey depth through tonal layering (#0B1120 → #111C30 → #162540) with 1px Deep Ocean Border before reaching for shadows.
- **Do** apply 2px gold outline offset by 2px on all interactive focus states — global `*:focus-visible` rule.
- **Do** use Space Grotesk weight contrast (400 body, 600 headline, 700 label) as the primary hierarchy mechanism.
- **Do** reserve Caveat font exclusively for callout titles — a handwritten break in digital precision.
- **Do** use ease-out-quint cubic-bezier(0.22, 1, 0.36, 1) for all transitions at 0.2–0.3s duration.
- **Do** provide a complete light-theme counterpart — both themes should feel equally intentional, not inverted.

### Don't:
- **Don't** use corporate enterprise templates with generic stock imagery, dry formatting, and generic iconography (PRODUCT.md anti-reference).
- **Don't** include playful or childish interfaces with cartoonish elements, excessive illustration, or casual/sticker styling (PRODUCT.md anti-reference).
- **Don't** create dense wall-of-text documentation with poor visual hierarchy, overwhelming information blocks, or no breathing room between sections (PRODUCT.md anti-reference).
- **Don't** use Bright Mint (#00E59B) for general UI elements outside of code syntax and tip callouts (The Mint Boundary).
- **Don't** introduce additional font families for headings or labels — Space Grotesk carries the entire structure with weight and size (The Grotesk Commitment).
- **Don't** apply shadows at rest on surfaces or cards. Shadows are hover/active response only (The Flat-By-Default Rule).
- **Don't** use pure black (#000000) or pure white (#FFFFFF) as text or background in the dark theme.
- **Don't** apply gold to more than ~10% of any screen. When gold is everywhere, nothing is important (The One Signal Rule).
- **Don't** animate CSS layout properties. Use transforms and opacity only.
- **Don't** use border-left greater than 3px as a colored stripe — the callout uses exactly 3px in gold or mint.
