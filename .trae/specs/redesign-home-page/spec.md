# Redesign Home Page Spec

## Why
当前 home.html 页面存在以下问题：
- **信息层级混乱**：页面有三个重复的导航入口（roadmap、track-grid、callout），用户不清楚该从哪里开始
- **重复内容**：page-header 和 hero-section 都有欢迎语和标题，造成视觉冗余
- **结构不一致**：home.html 是着陆页，但底部出现了 "Previous: Vibe Coding Basics" 导航，不符合逻辑
- **视觉密度不均**：roadmap 占据了太多垂直空间（8个步骤），用户需要大量滚动才能看到 track cards
- **缺少明确的行动引导**：CTA 按钮被埋在 hero 中，缺少视觉优先级

## What Changes
- **重组页面结构**：将页面分为明确的三个区域 — Hero（标题+CTA）、Workshop Tracks（学习路径）、Roadmap（进度总览）
- **优化 Hero 区域**：移除冗余的 page-header，将标题和描述整合到一个统一的 hero 区域
- **增强 Track Cards**：使用 Emoji 图标 + 颜色编码标签，让三个路径更易于区分
- **折叠 Roadmap**：将 8 步 roadmap 改为水平时间线，减少垂直空间占用
- **移除不恰当的导航**：删除底部 "Previous" 按钮（home 是入口页，不应有前置页面）
- **添加视觉分隔元素**：改进各区域之间的视觉过渡
- **提升动画效果**：加入滚动触发的淡入动画，增强交互体验

## Impact
- Affected specs: Home page, Navigation flows
- Affected code: `home.html` (主要重写结构), `styles.css` (添加新样式和动画)

## ADDED Requirements
### Requirement: Unified Hero Section
The system SHALL present a single, clear hero section that serves as the page's primary entry point, combining the title, description, and CTA buttons.

#### Scenario: User lands on home page
- **WHEN** user opens home.html
- **THEN** they see a centered hero with the title "TRAE SOLO Workshop", a clear one-sentence description, and two prominent CTA buttons ("Start Workshop" and "View Roadmap")

### Requirement: Track Cards with Visual Hierarchy
The system SHALL display three learning paths as cards with distinct visual identity (icon + tag), making the choice clear and intuitive.

#### Scenario: User browses workshop tracks
- **WHEN** user scrolls past the hero
- **THEN** they see three cards: Training Session, Agents Toolkits, Survival Kit — each with an icon, title, description, and action link

### Requirement: Collapsible Roadmap Timeline
The system SHALL present the workshop roadmap in a horizontal or collapsible format to save vertical space while still showing the full progression.

#### Scenario: User views roadmap
- **WHEN** user clicks "View Roadmap" or scrolls to roadmap section
- **THEN** they see a compact horizontal timeline or an expandable/collapsible roadmap showing all 8 steps

### Requirement: Simplified Footer Navigation
The system SHALL only show a "Next: Start Workshop" forward button at the bottom, since this is the entry page.

#### Scenario: User reaches bottom of page
- **WHEN** user scrolls to the bottom
- **THEN** they see only a single "Next: Start Workshop" button, no "Previous" button

### Requirement: Scroll-triggered Animations
The system SHALL animate sections as they enter the viewport, creating a polished experience without being distracting.

#### Scenario: Sections appear on scroll
- **WHEN** a section enters the viewport
- **THEN** it fades in and slides up using IntersectionObserver

## MODIFIED Requirements
### Requirement: Page Structure Consistency
**Previous**: Page had page-header + hero-section + roadmap + track-grid + callout + navigation-buttons
**Modified**: Page has hero-section (unified) → track-cards → roadmap → simplified-footer

**Reason**: Reduces visual clutter and creates clear information hierarchy.

## REMOVED Requirements
### Requirement: Redundant Page Header
**Reason**: The page-header was duplicating the hero-section content.

### Requirement: Previous Navigation Button
**Reason**: Home page is the entry point — there is no "previous" page.

### Requirement: Verbose 8-Step Vertical Roadmap
**Reason**: Too much vertical space for a landing page. Migration: Convert to horizontal/collapsible format.
