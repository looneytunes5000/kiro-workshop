# Design System Reference — Deep Navy + Gold

This document defines the visual design system used across the Kiro Workshop pages. All agents redesigning or creating new pages MUST follow these tokens, patterns, and conventions.

---

## 1. Color Palette

### CSS Custom Properties (define in `:root`)

```css
:root {
    --bg-primary: #0B1120;       /* Main page background — deep navy */
    --bg-deep: #080E1A;          /* Darker navy for code blocks, sidebar */
    --surface: #111C30;          /* Card/surface background */
    --surface-elevated: #162540; /* Elevated surfaces (callouts) */
    --gold-primary: #E8C547;     /* Primary accent — sharp, luminous gold */
    --gold-rich: #D4A017;        /* Richer gold for accents, borders */
    --blue-accent: #1E3A5F;      /* Muted blue for borders, dividers */
    --text-primary: #F0EDE6;     /* Primary text — warm off-white */
    --text-secondary: #B8B5AC;   /* Secondary text — muted warm gray */
    --text-muted: #7A8090;       /* Tertiary text — cool gray */
    --code-green: #00E59B;       /* Inline code and markers */
}
```

### Usage Guidelines

| Token | Use For |
|-------|---------|
| `--bg-primary` | Page body background |
| `--bg-deep` | Code blocks, sidebar background, inline code background |
| `--surface` | Outcome cards, list items, subtle containers |
| `--surface-elevated` | Callout boxes, elevated panels |
| `--gold-primary` | Active nav links, headings emphasis, primary buttons, accent dots, decorative elements |
| `--gold-rich` | Accent lines, gradient stops, hover glow effects |
| `--blue-accent` | Borders, dividers, sidebar separator, code block borders |
| `--text-primary` | Headings, strong text, active states |
| `--text-secondary` | Body paragraphs, list items, labels |
| `--text-muted` | Section titles, tertiary text, placeholder |
| `--code-green` | Inline code text, outcome markers (`→`) |

### Hover State Colors

- Sidebar link hover background: `rgba(201, 168, 76, 0.08)`
- Sidebar link active background: `rgba(201, 168, 76, 0.12)`
- Outcome item hover shadow: `0 4px 12px rgba(201, 168, 76, 0.1)`
- Page header radial glow: `rgba(201, 168, 76, 0.15)` at 600px radius

---

## 2. Typography

### Font Families

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@500;600;700&display=swap" rel="stylesheet">
```

| Font | Purpose | Weights |
|------|---------|---------|
| **Space Grotesk** | Primary body and heading font | 400, 500, 600, 700 |
| **JetBrains Mono** | Code snippets, inline code, markers | 400, 500 |
| **Caveat** | Handwriting accent (callout headers only) | 500, 600, 700 |

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Page H1 | `3.5rem` | 700 | 1.15 | `-0.04em` | `--text-primary` |
| H1 accent word | same | same | same | same | `--gold-primary` |
| H3 heading | `1.35rem` | 600 | 1.3 | `-0.02em` | `--text-primary` |
| Body paragraph | `1.05rem` | 400 | 1.7 | normal | `--text-secondary` |
| Strong/emphasis | inherit | 500 | inherit | normal | `--text-primary` |
| List item | `1rem` | 400 | 1.65 | normal | `--text-secondary` |
| List item strong | inherit | 500 | inherit | normal | `--text-primary` |
| Inline code | `0.85em` | 400 | normal | normal | `--code-green` |
| Sidebar header | `0.9rem` | 700 | normal | `0.01em` | `--gold-primary` |
| Sidebar link | `0.85rem` | 400 | normal | normal | `--text-secondary` |
| Sidebar link active | `0.85rem` | 600 | normal | normal | `--gold-primary` |
| Sidebar sub-item | `0.8rem` | 400 | normal | normal | `--text-secondary` |
| Sidebar section title | `0.7rem` | 600 | normal | `0.06em` uppercase | `--text-muted` |
| Callout header | `1.4rem` | 600 | normal | normal | `--gold-primary` (Caveat) |
| Outcome label | `0.95rem` | 400 | 1.55 | normal | `--text-secondary` |
| Outcome marker | `0.85rem` | 700 | normal | normal | `--code-green` |
| Button | `0.9rem` | 600 | normal | normal | varies |

### Body Text Constraints

- All body paragraphs: `max-width: 65ch` for readable line lengths
- Callout paragraphs: `max-width: 65ch`
- Paragraph margin-bottom: `24px`

### Font Rendering

```css
font-kerning: normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

---

## 3. Layout Structure

### Page Shell

```
┌─────────────────────────────────────────────────┐
│  Sidebar (240px fixed)  │  Main Content         │
│  ┌───────────────────┐  │  ┌─────────────────┐  │
│  │ Header            │  │  │ Page Header     │  │
│  ├───────────────────┤  │  ├─────────────────┤  │
│  │ Nav Sections      │  │  │ Container       │  │
│  │ - Getting Started │  │  │   Content       │  │
│  │ - Core Concepts   │  │  │   Callouts      │  │
│  │ - Hands-on        │  │  │   Outcomes      │  │
│  │ - Advanced        │  │  │   Footer        │  │
│  │ - Wrap Up         │  │  │                 │  │
│  └───────────────────┘  │  └─────────────────┘  │
└─────────────────────────┴───────────────────────┘
```

### Sidebar

```css
.sidebar {
    width: 240px;
    padding: 24px 0;
    border-right: 1px solid var(--blue-accent);
    position: fixed;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    background: var(--bg-deep);
    z-index: 10;
}
```

- Sidebar header: `padding: 0 20px 20px`, bottom border `1px solid var(--blue-accent)`
- Section margin-bottom: `8px`
- Section title: `padding: 8px 20px`
- Link: `padding: 8px 20px`, `min-height: 44px` (accessibility)
- Sub-item link: `padding-left: 36px`
- Active link: left border `2px solid var(--gold-primary)`

### Main Content Area

```css
.main {
    margin-left: 240px;
    flex: 1;
    min-width: 0;
}
```

### Container

```css
.container {
    max-width: min(1440px, calc(100% - 304px));
    padding: 48px 48px 48px 64px;
    width: 100%;
}
```

- Dynamic width: caps at 1440px, shrinks proportionally accounting for 240px sidebar + 64px left padding
- Left padding (64px) is larger than right (48px) for visual balance

### Page Header

```css
.page-header {
    padding: 96px 48px 72px;
    border-bottom: 1px solid var(--blue-accent);
    position: relative;
    overflow: hidden;
}
```

---

## 4. Component Patterns

### 4.1 Callout Box

```css
.callout {
    background: var(--surface-elevated);
    border: 1px solid var(--blue-accent);
    border-left: 3px solid var(--gold-primary);
    border-radius: 8px;
    padding: 24px 28px;
    margin: 28px 0;
    max-width: 720px;
}
```

Structure:
```html
<div class="callout">
    <div class="callout-header">
        <div class="dot"></div>
        <span>Header text</span>
    </div>
    <p>Body text...</p>
    <ul><li>...</li></ul>
</div>
```

- Header dot: `8px` circle, `--gold-primary`
- Header text: Caveat font, `1.4rem`, `--gold-primary`
- Paragraphs inside: `1rem`, line-height `1.7`, `max-width: 65ch`
- List items inside: `0.95rem`, line-height `1.65`

### 4.2 Outcome Items

```css
.outcomes {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 20px 0 24px;
}

.outcome-item {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding: 12px 16px;
    background: var(--surface);
    border: 1px solid var(--blue-accent);
    border-radius: 6px;
}
```

Structure:
```html
<div class="outcomes">
    <div class="outcome-item">
        <span class="marker">&rarr;</span>
        <span class="label"><strong>Title</strong> — description</span>
    </div>
</div>
```

### 4.3 Code Blocks

Inline code:
```css
.content code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85em;
    background: var(--bg-deep);
    padding: 2px 8px;
    border-radius: 4px;
    color: var(--code-green);
    border: 1px solid var(--blue-accent);
}
```

Block code:
```css
.content pre {
    background: var(--bg-deep);
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 20px 0 24px;
    border: 1px solid var(--blue-accent);
}

.content pre code {
    background: none;
    padding: 0;
    border: none;
}
```

### 4.4 Buttons

```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    min-height: 44px;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
}

.btn-primary {
    background: var(--gold-primary);
    color: var(--bg-primary);
    border: none;
}

.btn-secondary {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--blue-accent);
}
```

### 4.5 Footer Navigation

```css
.footer {
    margin-top: 56px;
    padding-top: 24px;
    border-top: 1px solid var(--blue-accent);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### 4.6 Skip Navigation (Accessibility)

```css
.skip-nav {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--gold-primary);
    color: var(--bg-primary);
    padding: 8px 16px;
    z-index: 100;
    font-weight: 600;
    min-height: 44px;
}

.skip-nav:focus {
    top: 0;
}
```

---

## 5. Atmospheric Effects

### 5.1 Cursor-Reactive Glow (Page Header)

```css
.page-header {
    background:
        radial-gradient(600px circle at var(--glow-x) var(--glow-y),
            rgba(201, 168, 76, 0.15) 0%,
            transparent 60%),
        var(--bg-primary);
}
```

JavaScript:
```js
document.addEventListener('mousemove', (e) => {
    const header = document.querySelector('.page-header');
    const rect = header.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    header.style.setProperty('--glow-x', x + '%');
    header.style.setProperty('--glow-y', y + '%');
});
```

### 5.2 SVG Noise Texture Overlay

```css
.page-header::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.5;
}
```

### 5.3 Dot Grid Pattern

```css
.page-header::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--blue-accent) 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.15;
    pointer-events: none;
}
```

### 5.4 Animated Accent Line

```css
.accent-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: var(--gold-rich);
    width: 0;
    transition: width 0.8s var(--ease-out-quint);
}

.accent-line.visible {
    width: 100%;
}
```

Triggered via IntersectionObserver at 50% threshold.

---

## 6. Animation System

### Easing Function

```css
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
```

Use this easing for ALL transitions and animations.

### Animation Classes

**Fade In** (headers):
```css
.animate-header {
    opacity: 0;
    animation: fadeIn 0.6s var(--ease-out-quint) forwards;
}

@keyframes fadeIn {
    to { opacity: 1; }
}
```

**Slide Up** (outcomes, callouts):
```css
.animate-outcome,
.animate-callout {
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s var(--ease-out-quint) forwards;
}

@keyframes slideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Staggered Delays

Apply inline `style="animation-delay: Xs"` for sequential reveals:

| Element | Delay |
|---------|-------|
| First outcome | `0.2s` |
| Second outcome | `0.3s` |
| Third outcome | `0.4s` |
| Fourth outcome | `0.5s` |
| Fifth outcome | `0.6s` |
| Callout | `0.8s` |

### Hover Transitions

All hover states use `0.2s` to `0.25s` with `--ease-out-quint`:

- Sidebar links: `0.2s` (color, background, border-color)
- Outcome items: `0.25s` (transform, border-color, box-shadow)
- Buttons: `0.2s` (transform, background, filter)
- Accent line: `0.8s` (width)

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    .animate-header, .animate-outcome, .animate-callout {
        opacity: 1;
        transform: none;
    }
    .accent-line { width: 100%; }
}
```

---

## 7. Responsive Breakpoints

### Breakpoint: `max-width: 900px`

```css
@media (max-width: 900px) {
    .sidebar { display: none; }
    .main { margin-left: 0; }
    .page-header { padding: 64px 24px 48px; }
    .page-header h1 { font-size: 2.25rem; letter-spacing: -0.03em; }
    .container { padding: 24px; }
    .content p { font-size: 1rem; }
    .content h3 { font-size: 1.2rem; margin: 36px 0 12px; }
}
```

### Responsive Rules

- Sidebar hides completely on narrow viewports
- Main content takes full width (no margin-left)
- Header padding reduces from `96px 48px 72px` to `64px 24px 48px`
- H1 scales from `3.5rem` to `2.25rem`
- Container padding reduces to uniform `24px`
- Body text scales from `1.05rem` to `1rem`
- H3 scales from `1.35rem` to `1.2rem`

---

## 8. Spacing System

| Token | Value | Use |
|-------|-------|-----|
| `4px` | Micro spacing | Code inline padding-x |
| `8px` | Small spacing | Dot size, link margin-bottom, section gaps |
| `12px` | Medium-small | Outcome gap, callout header margin-bottom |
| `16px` | Medium | Outcome padding-x, callout list margin-left |
| `20px` | Medium-large | Sidebar padding-x, code block padding |
| `24px` | Standard | Paragraph margin-bottom, callout padding-y, list margin-bottom |
| `28px` | Callout spacing | Callout padding-x, callout margin-y |
| `48px` | Section spacing | Container padding, header padding-x |
| `56px` | Large spacing | Footer margin-top |
| `64px` | Extra-large | Container left padding, header padding-bottom |
| `72px` | Header spacing | Header padding-bottom |
| `96px` | Hero spacing | Header padding-top |

---

## 9. Border Radius System

| Value | Use |
|-------|-----|
| `4px` | Inline code |
| `6px` | Outcome items, buttons |
| `8px` | Callout boxes, code blocks |

---

## 10. Border System

| Pattern | Use |
|---------|-----|
| `1px solid var(--blue-accent)` | Default borders (sidebar, dividers, code blocks, outcomes) |
| `2px solid transparent → var(--gold-primary)` | Sidebar active link left border |
| `3px solid var(--gold-primary)` | Callout left accent border |
| `2px` height | Accent line under page header |

---

## 11. Accessibility Requirements

- All interactive elements: `min-height: 44px` (touch target)
- Skip navigation link present and functional
- `prefers-reduced-motion` media query respected
- Color contrast: gold on navy passes WCAG AA for large text
- Focus states visible (skip-nav, buttons, links)
- Semantic HTML: `<nav>`, `<main>`, proper heading hierarchy

---

## 12. Quick Reference — Copy-Paste Starter

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-primary: #0B1120;
            --bg-deep: #080E1A;
            --surface: #111C30;
            --surface-elevated: #162540;
            --gold-primary: #E8C547;
            --gold-rich: #D4A017;
            --blue-accent: #1E3A5F;
            --text-primary: #F0EDE6;
            --text-secondary: #B8B5AC;
            --text-muted: #7A8090;
            --code-green: #00E59B;
            --glow-x: 50%;
            --glow-y: 50%;
            --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
        }
        /* Add remaining CSS from sections above */
    </style>
</head>
<body>
    <a href="#main-content" class="skip-nav">Skip to main content</a>
    <div class="layout">
        <nav class="sidebar">...</nav>
        <div class="main" id="main-content">
            <div class="page-header">
                <h1>Title with <span>Accent</span></h1>
                <div class="accent-line"></div>
            </div>
            <div class="container">
                <div class="content">
                    <p>Body text here.</p>
                </div>
                <div class="footer">
                    <a href="#" class="btn btn-secondary">Previous</a>
                    <a href="#" class="btn btn-primary">Next</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 13. Design Principles

1. **Dark first** — Deep navy background, not pure black. Creates depth and reduces eye strain.
2. **Gold is the hero** — Use gold sparingly for emphasis. It should draw attention, not overwhelm.
3. **Blue is the structure** — Borders, dividers, and separators use muted blue. It defines layout without competing.
4. **Text is warm** — Off-white text with warm undertones, not cold gray. Feels inviting on dark backgrounds.
5. **Code is green** --inline code and markers use bright green for clear distinction.
6. **Motion is purposeful** --Animations guide attention, never distract. Stagger reveals, don't flash everything at once.
7. **Lines are readable** --Max 65ch for body text. Wide containers don't mean wide text.
8. **Touch is generous** --44px minimum for all interactive elements.
9. **Atmosphere matters** --Noise texture, dot grid, and cursor glow create depth without clutter.
