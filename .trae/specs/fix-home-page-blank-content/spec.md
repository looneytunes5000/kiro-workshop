# Fix Home Page Blank Content Spec

## Why
当访问网站首页 (index.html) 时，侧边栏可见但主页内容区域显示为空白。这是因为 `scripts.js` 中的 `generateOverview()` 函数对 content 元素进行了包装和重新布局操作，可能导致内容丢失或未正确显示。

## What Changes
- **诊断问题**：找出导致 index.html 页面内容不显示的根本原因
- **修复布局问题**：确保 main content 区域正确显示内容
- **保持现有功能**：确保侧边栏、主题切换、动画等功能正常工作

## Impact
- Affected specs: Home page rendering, Overview generation
- Affected code: `index.html` (可能简化结构), `scripts.js` (修改 generateOverview), `styles.css` (确保 .content-wrapper 正确显示)

## ADDED Requirements
### Requirement: Visible Main Content
The system SHALL display all content from index.html when visiting the root page, including the header, article content, and navigation buttons.

#### Scenario: User visits homepage
- **WHEN** user opens index.html or root URL (/)
- **THEN** they see the page header with title, the article content with learning outcomes, and navigation buttons

### Requirement: Content Wrapper Works Correctly
The system SHALL ensure that generateOverview() correctly wraps and displays content without hiding it.

#### Scenario: Overview sidebar generates
- **WHEN** page loads with 2+ headings
- **THEN** the content wrapper displays the article content on the left and overview on the right

## REMOVED Requirements
### Requirement: None
