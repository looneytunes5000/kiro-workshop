# Convert Kiro Workshop to TRAE SOLO Workshop Spec

## Why
The current website is a Kiro-focused workshop that needs to be converted to showcase TRAE SOLO's features, capabilities, and unique value proposition while preserving generic AI development concepts that apply to both platforms.

## What Changes
- Replace all "Kiro" branding with "TRAE SOLO" across all 32 HTML pages
- Update homepage and introduction to highlight TRAE SOLO's unique features: dual clients (web & desktop), dual modes (MTC & Code), cloud agent, diverse input types
- Remove all AWS-specific references (Builder ID, Lambda, DynamoDB, CloudFront) and replace with generic alternatives
- Keep generic AI development concepts: vibe coding, spec-driven development, prompting best practices, steering, agent hooks, MCP integration
- Add new pages for TRAE SOLO-specific features
- Update sidebar navigation to reflect TRAE SOLO structure
- Maintain existing design system, styling, and layout

## Impact
- Affected specs: All workshop pages (32 existing + 3 new)
- Affected code: All HTML files in the workshop directory
- No changes to CSS (styles.css) or JavaScript (scripts.js) unless needed for new features
- Test files may need updates to reflect new page titles and content

## ADDED Requirements

### Requirement: TRAE SOLO Homepage
The homepage SHALL introduce TRAE SOLO as an AI-native workspace with dual clients and dual modes.

#### Scenario: User visits homepage
- **WHEN** user opens index.html
- **THEN** they see TRAE SOLO branding, dual client explanation, dual mode explanation, and learning outcomes

### Requirement: TRAE SOLO Introduction Page
The introduction page SHALL explain TRAE SOLO's architecture, target audience, and core capabilities.

#### Scenario: User reads introduction
- **WHEN** user navigates to introduction.html
- **THEN** they understand TRAE SOLO's web/desktop clients, MTC/Code modes, cloud agent, and workshop structure

### Requirement: Cloud Agent Page
A new page SHALL explain TRAE SOLO's cloud agent feature with unified runtime environment.

#### Scenario: User learns about cloud agent
- **WHEN** user reads cloud-agent.html
- **THEN** they understand cloud execution benefits, environment isolation, and how to use it

### Requirement: Dual Clients Page
A new page SHALL explain the differences between web and desktop clients.

#### Scenario: User compares clients
- **WHEN** user reads dual-clients.html
- **THEN** they can choose the right client for their needs

### Requirement: Generic Setup Pages
Setup pages SHALL be platform-agnostic without AWS dependencies.

#### Scenario: User sets up TRAE SOLO
- **WHEN** user follows setup instructions
- **THEN** they can use either web client (no setup) or download desktop client

## MODIFIED Requirements

### Requirement: All Existing Pages
All 32 existing HTML pages SHALL have "Kiro" replaced with "TRAE SOLO" in titles, headers, navigation, and content.

#### Scenario: User browses any page
- **WHEN** user views any workshop page
- **THEN** all references are to TRAE SOLO, not Kiro

### Requirement: Hands-on Exercises
Exercise pages SHALL keep their structure but update terminology and remove AWS-specific steps.

#### Scenario: User completes exercises
- **WHEN** user follows exercise instructions
- **THEN** exercises work with any demo application, not just AWS-hosted ones

### Requirement: Cost Section
The estimated cost section SHALL be generic without AWS service mentions.

#### Scenario: User reads cost information
- **WHEN** user checks cost section
- **THEN** they see generic resource usage notes, not AWS-specific services

## REMOVED Requirements

### Requirement: AWS Builder ID Authentication
**Reason**: TRAE SOLO is platform-agnostic, not tied to AWS
**Migration**: Replace with generic account setup page

### Requirement: AWS Service Dependencies
**Reason**: Workshop should work with any backend setup
**Migration**: Replace Lambda/DynamoDB/API Gateway references with generic "backend services"

### Requirement: Kiro-Specific Branding
**Reason**: Converting to TRAE SOLO workshop
**Migration**: All instances replaced with TRAE SOLO
