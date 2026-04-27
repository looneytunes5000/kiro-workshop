# Update "Vibe Mode" to "Vibe Coding" Terminology

## Why
Across multiple pages, the term "Vibe Mode" is used incorrectly. There is no "Vibe Mode" feature — the correct term is "Vibe Coding," which refers to the technique of using AI to write code through natural language prompts. This inconsistency creates confusion for readers following the workshop.

## What Changes
- Replace all instances of "Vibe mode" with "Vibe coding" across HTML pages
- Update references in headings, paragraphs, and list items
- The file `vibe-coding-reference.html` needs special care as it uses "Vibe mode" throughout as the primary reference page

## Impact
- Affected specs: None (terminology update only)
- Affected code:
  - `14-skills.html`
  - `spec-driven-reference.html`
  - `llm-eval-intro.html`
  - `vibe-coding-reference.html`
  - `deployment-troubleshooting.html`
  - `archive/vibe-coding.html`

## ADDED Requirements
### Requirement: Consistent Terminology
The project SHALL use "Vibe coding" (not "Vibe mode") when referring to the AI-assisted coding technique.

#### Scenario: User reads any workshop page
- **WHEN** user reads content about AI-assisted coding
- **THEN** the term "Vibe coding" is used consistently

## MODIFIED Requirements
### Requirement: Vibe Coding Reference Page
The "When to Use Vibe Coding" section SHALL refer to the technique as "Vibe coding," not "Vibe mode."

## REMOVED Requirements
### Requirement: "Vibe mode" terminology
**Reason**: Incorrect term. There is no "Vibe Mode" feature — it's "Vibe Coding."
**Migration**: All text references updated to "Vibe coding."
