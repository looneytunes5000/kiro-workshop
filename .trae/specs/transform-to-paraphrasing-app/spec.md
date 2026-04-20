# Transform Workshop Use Case to Paraphrasing Mentoring App Spec

## Why
The current workshop uses a micro-blogging application as the hands-on exercise vehicle. The use case needs to change to a paraphrasing mentoring app for students, with two new feature exercises: local LLM evaluation (Vibe Coding) and free practice mode (Spec-Driven Development).

## What Changes
- Update all workshop documentation pages to reference a paraphrasing mentoring app instead of a micro-blogging app
- Replace "create post" and "add comment" exercises with "integrate local LLM evaluation" and "add free practice mode"
- Update architecture diagrams, validation checklists, and example prompts to match the new domain
- Keep all TRAE SOLO teaching concepts intact (Vibe Coding, SDD, Steering, Hooks, MCP)
- Maintain existing design system, styling, and page structure

## Impact
- Affected specs: Workshop content, Exercise narratives, Example prompts
- Affected code: understanding-application.html, vibe-coding.html, cancel-button.html, spec-driven.html, commenting-feature.html, deployment-troubleshooting.html, and related content pages
- No changes to CSS (styles.css) or JavaScript (scripts.js)
- Test files may need updates to reflect new page content

## ADDED Requirements

### Requirement: Paraphrasing App Architecture
The workshop SHALL describe a paraphrasing mentoring application for students with the following architecture:

**Backend (Already Deployed):**
- Serverless functions for API endpoints (paraphrasing, evaluation, practice sessions)
- NoSQL database tables for user data, practice history, and evaluations
- API Gateway for HTTP routing
- Authentication service for student accounts

**Frontend (Local):**
- React + TypeScript + Vite application
- Pre-built paraphrasing tool interface
- Runs locally during workshop, connects to deployed backend

#### Scenario: Student understands the app
- **WHEN** student reads the architecture section
- **THEN** they see a paraphrasing app with text input, paraphrase output, evaluation panel, and practice mode

### Requirement: Vibe Coding Exercise - Local LLM Integration
The Vibe Coding exercise SHALL guide students to integrate a local LLM (via Ollama) for evaluating paraphrase quality.

#### Scenario: Student completes Vibe Coding exercise
- **WHEN** student follows the Vibe Coding module
- **THEN** they add a feature that sends paraphrased text to local Ollama LLM
- **AND** the LLM returns quality scores and improvement suggestions
- **AND** the results are displayed in the UI alongside the paraphrase

#### Scenario: Student writes effective Vibe prompts
- **WHEN** student learns prompt examples
- **THEN** they see good vs. poor examples for LLM integration tasks
- **AND** examples include: "Add an evaluation panel that calls Ollama API at localhost:11434", not vague prompts

### Requirement: SDD Exercise - Free Practice Mode
The Spec-Driven Development exercise SHALL guide students to plan and implement a free practice mode with unlimited attempts.

#### Scenario: Student completes SDD exercise
- **WHEN** student follows the Spec-Driven module
- **THEN** they use Spec mode to plan a practice mode feature
- **AND** the feature allows unlimited paraphrasing practice sessions
- **AND** practice sessions track attempts and show progress over time
- **AND** students go through requirements → design → tasks → implementation workflow

#### Scenario: Student reviews practice mode spec
- **WHEN** student reviews the generated requirements.md
- **THEN** they see user stories for starting practice, tracking attempts, viewing history
- **AND** edge cases are covered (session timeouts, empty submissions, rate limiting)

### Requirement: Updated Validation Checklists
All validation checklists SHALL reference paraphrasing app functionality instead of blog functionality.

#### Scenario: Student validates setup
- **WHEN** student completes the setup validation
- **THEN** checklist includes: "Can submit text for paraphrasing", "Can view paraphrased output", "Can see evaluation scores" (after LLM exercise)
- **AND** checklist includes: "Can start free practice mode", "Can track practice attempts" (after SDD exercise)

## MODIFIED Requirements

### Requirement: Understanding the Application Page
The application overview page SHALL describe a paraphrasing mentoring tool instead of a micro-blogging app.

**Before:** "Create 2-3 test posts", "New Post" button, "feed"
**After:** "Submit 2-3 test texts for paraphrasing", "Paraphrase" button, "practice dashboard"

#### Scenario: Student reads app overview
- **WHEN** student opens understanding-application.html
- **THEN** they see paraphrasing app architecture and setup instructions
- **AND** test data instructions say "Submit sample paragraphs to paraphrase"

### Requirement: Vibe Coding Module
The Vibe Coding introduction SHALL explain that students will integrate local LLM evaluation, not add a cancel button.

**Before:** "Add a Cancel button to the New Post page"
**After:** "Add an LLM evaluation panel to the paraphrase results page"

#### Scenario: Student starts Vibe Coding
- **WHEN** student opens vibe-coding.html
- **THEN** they learn about integrating Ollama for paraphrase quality evaluation
- **AND** example prompts reference LLM API integration, not UI buttons

### Requirement: Spec-Driven Development Exercise
The SDD exercise SHALL use the free practice mode as the example feature, not the commenting system.

**Before:** "Add a commenting feature to blog posts"
**After:** "Add a free practice mode for unlimited paraphrasing exercises"

#### Scenario: Student starts SDD exercise
- **WHEN** student opens commenting-feature.html (renamed to practice-mode-feature.html)
- **THEN** they see a multi-component feature involving practice session management, attempt tracking, and progress display
- **AND** the task breakdown includes: Practice model, API endpoints, PracticeForm component, PracticeHistory component, progress tracking

### Requirement: Example Prompts
All example prompts throughout the workshop SHALL reference paraphrasing app features.

**Before examples:**
- "Add a cancel button to the new post page"
- "The form doesn't clear after submitting a post"

**After examples:**
- "Add an evaluation panel next to the paraphrase output that calls Ollama API"
- "The practice session doesn't save attempts to history"
- "Make the evaluation score display with color coding (green for good, red for needs improvement)"

## REMOVED Requirements

### Requirement: Blog Post Creation Exercise
**Reason**: Replaced with paraphrasing app use case
**Migration**: Vibe Coding exercise now focuses on LLM integration; SDD exercise focuses on practice mode

### Requirement: Commenting Feature Exercise
**Reason**: Replaced with free practice mode feature
**Migration**: commenting-feature.html becomes practice-mode-feature.html with SDD workflow for practice mode

### Requirement: Cancel Button Exercise
**Reason**: No longer relevant to paraphrasing app workflow
**Migration**: Replaced with LLM evaluation panel integration exercise in cancel-button.html
