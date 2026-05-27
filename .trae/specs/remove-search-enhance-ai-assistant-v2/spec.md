# AI Assistant as Primary Discovery - Spec

## Why
Contestants who don't yet know what solution they're building won't know which reading path to follow on the homepage. The sidebar search (Ctrl+K) is under-discoverable. Instead, we should promote the AI assistant as the primary way to discover content, and enhance it to provide clickable links that scroll to specific sections on relevant pages.

## What Changes
- **Remove the sidebar search** component (input field, clear button, related JS event handlers, CSS, and keyboard shortcut)
- **Enhance the AI assistant's system prompt** so that when it references a page, section, or concept, it returns a clickable anchor link (not just text)
- **Handle in-chat link clicks** — when a user clicks an AI-provided link, navigate to that page and auto-scroll to the target section
- **Add a "New Chat" / reset button** in the chatbot header
- **Cap conversation history** to the last 10 messages (trim oldest when limit is exceeded)
- **On the homepage**, below the two path cards, add an AI assistant CTA card that encourages contestants who aren't sure which path to choose to ask the AI assistant

## Impact
- Affected specs: `enhance-ai-assistant` (overlaps but this is a distinct new feature set)
- Affected code: `scripts.js` (remove search logic, add new chat button, cap history, handle click on AI links), `styles.css` (remove search-related styles, add new card styles), `home.html` (add AI assistant CTA card)

## ADDED Requirements

### Requirement: AI Assistant as Primary Discovery
The homepage SHALL display a prominent card below the path selector that encourages contestants who are unsure which path to follow to use the AI assistant for guidance.

#### Scenario: Contestant lands on homepage without a clear path
- **WHEN** a user views the homepage and is unsure which reading path to follow
- **THEN** they see a card that says something like "Not sure which path? Ask the AI assistant!" with a button or link that opens the chatbot

#### Scenario: User opens the AI assistant from the homepage CTA
- **WHEN** the user clicks the CTA to open the AI assistant
- **THEN** the chatbot window opens and the user can immediately start asking questions about tools, workflows, or what to build

### Requirement: Smart Link Generation in AI Responses
The system prompt SHALL instruct the AI assistant to include clickable anchor links (e.g., `[Vibe Coding Basics](vibe-coding-reference.html#what-is-vibe-coding)`) when referencing pages or sections that are relevant to the user's question.

#### Scenario: User asks about Vibe Coding
- **WHEN** a user asks "How do I start coding quickly?"
- **THEN** the assistant's response includes a link like: "Check out the Vibe Coding Basics page - [Vibe Coding Basics](vibe-coding-reference.html#what-is-vibe-coding)"

#### Scenario: User asks about deployment
- **WHEN** a user asks "How do I deploy?"
- **THEN** the assistant's response includes links like: "Start with [Getting Started](getting-started.html) and then follow the [Deployment guide](deploy-backend.html#deployment-workflow)"

### Requirement: In-Chat Link Navigation with Auto-Scroll
When a user clicks a link inside an AI chatbot message that points to a page/section within the survival kit, the system SHALL:
- Navigate to the target page
- Automatically scroll to the target anchor/section
- If the link has no anchor, scroll to the top of the target page
- If the link points to the current page, smooth-scroll to the anchor in-place

#### Scenario: User clicks a cross-page link
- **WHEN** the user clicks a link in the chatbot that points to `trae-solo-overview.html#key-features`
- **THEN** the browser navigates to `trae-solo-overview.html` and scrolls to the element with id `key-features`

#### Scenario: User clicks a same-page anchor link
- **WHEN** the user clicks a link in the chatbot that points to `#step-1` on the current page
- **THEN** the page smooth-scrolls to the element with id `step-1`

### Requirement: New Chat / Reset Button
The chatbot header SHALL include a button (e.g., a "+" or "reset" icon) that clears the current conversation and starts fresh.

#### Scenario: User starts a new conversation
- **WHEN** the user clicks the "New Chat" button in the chatbot header
- **THEN** the conversation history is cleared, messages are removed, and the welcome screen is restored

### Requirement: Conversation History Cap
The chatbot SHALL cap the conversation history sent to the API at the most recent 10 messages. When the limit is exceeded, the oldest messages are trimmed (preserving the system prompt).

#### Scenario: Long conversation exceeds limit
- **WHEN** a user sends their 12th message in a conversation
- **THEN** only the most recent 10 messages (5 user + 5 assistant, or whatever the last 10 are) are sent to the API

## MODIFIED Requirements

### Requirement: System Prompt for Smart Links
The system prompt in `buildSystemPrompt()` SHALL be updated to include an instruction about generating clickable links. The AI shall:
- Always use markdown link syntax when referencing pages or sections covered in the survival kit
- Use anchor links when a specific section is relevant (e.g., `deploy-backend.html#deployment-workflow`)
- Include 2-3 relevant links per response when applicable
- Not fabricate page names or sections — only reference pages/sections that exist in the provided context

## REMOVED Requirements

### Requirement: Sidebar Search
**Reason**: The sidebar search (Ctrl+K) is under-discoverable and redundant when the AI assistant provides contextual, conversational discovery. Contestants are more likely to ask questions naturally than use a search bar with a keyboard shortcut.
**Migration**: Remove the sidebar search input, clear button, CSS styles, JS event handlers, and keyboard shortcut binding from `scripts.js` and `styles.css`.
