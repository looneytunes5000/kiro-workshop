# Enhanced AI Hackathon Assistant Spec

## Why
The current AI assistant lacks content guardrails (it may build contestants' solutions or answer off-topic questions), serves identical suggestion chips on every page, and has inconsistent judging criteria data. Contestants need a mentor-style assistant that guides rather than does the work, while staying tightly scoped to the event context.

## What Changes
- Redefine the assistant's system prompt to enforce a **balanced mentor role** with clear boundary rules: stay within event scope AND guide rather than build solutions directly
- Add **page-aware context** so the assistant knows which page the user is viewing and tailors responses accordingly
- Replace identical per-page suggestion chips with **contextual suggestions** relevant to each page's content
- **Fix judging criteria** in `CHATBOT_CONTEXT` to match the authoritative FAQ page (Quality, Feasibility, Innovation & Creativity, Presentation)
- **Enrich FAQ knowledge base** with additional entries from `faq.html` that are currently missing from `CHATBOT_CONTEXT`
- Increase `max_tokens` from 800 to 1500 for more thorough responses

## Impact
- Affected specs: None (new feature enhancement)
- Affected code: `scripts.js` (chatbot system prompt, context data, page suggestions, API call configuration)

## ADDED Requirements

### Requirement: Content Guardrails (Mentor Role)
The system SHALL enforce a balanced mentor role through the system prompt with these rules:
1. **Event-scoped only**: Politely decline questions unrelated to the hackathon event, tools, workflows, and contestant experience. For off-topic requests, respond with a brief, friendly redirect (e.g., "I'm here to help with aiHackathon topics — feel free to ask me about tracks, tools, judging criteria, or how to use the workshop resources!").
2. **Guide, don't build**: When a contestant asks the assistant to directly build their competition solution or write complete code for their project, the assistant shall instead offer structured guidance — suggest an architecture, recommend tools, outline steps, or point to relevant workshop pages. It should not generate end-to-end project code.
3. **Allowed assistance**: The assistant MAY provide code snippets for illustration, debugging help, explanations of concepts, tool usage guidance, and workflow recommendations. The line is between *teaching how* (allowed) and *doing it for them* (declined).

#### Scenario: Contestant asks to build their solution
- **WHEN** a user asks "Build me a chatbot for my hackathon project"
- **THEN** the assistant responds with guidance: suggest using Microsoft Copilot Studio (Step 7), outline the key design decisions, point to `agent-integration.html`, and offer to help plan the architecture — but does not generate the full implementation code

#### Scenario: Contestant asks an off-topic question
- **WHEN** a user asks "What's the capital of France?" or "Help me with my homework"
- **THEN** the assistant politely redirects to event-relevant topics

#### Scenario: Contestant asks for debugging help
- **WHEN** a user pastes an error message and asks for help understanding it
- **THEN** the assistant explains the error, suggests debugging approaches, and points to relevant documentation — this is allowed

### Requirement: Page-Aware Context
The system SHALL pass the current page URL/filename to the system prompt so the assistant can tailor its responses to the page the user is currently viewing.

#### Scenario: User on Vibe Coding page asks a question
- **WHEN** the user is on `vibe-coding-reference.html` and asks "Give me an example"
- **THEN** the assistant provides a Vibe Coding example relevant to that page's content

### Requirement: Contextual Page Suggestions
The system SHALL provide unique suggestion chips per page that are relevant to that page's specific content, replacing the current identical 4-suggestion set across all pages.

#### Scenario: User on Skills page
- **WHEN** the user opens the chatbot on `skills.html`
- **THEN** suggestion chips might include "What skills are available?", "How do I activate a skill?", "Show me frontend-design skill", "Best skills for UI work"

#### Scenario: User on Copilot Studio page
- **WHEN** the user opens the chatbot on `microsoft-copilot-studio.html`
- **THEN** suggestion chips might include "What is Copilot Studio?", "How do I build a chatbot?", "Agent integration steps", "Available after the event?"

### Requirement: Corrected Judging Criteria
The system SHALL update `CHATBOT_CONTEXT.judgingCriteria` to match the authoritative criteria from `faq.html`:
- **Quality** — Completeness of Functionality and User Experience
- **Feasibility** — Potential Technical Feasibility and Practical Implementation of the Prototype or Proof-of-Concept
- **Innovation and Creativity** — Brand-new Ideas or Creative Solutions
- **Presentation** — Clarity, Fluency and Effective Communication

Note: The "My Favourite AI Solution Award" is exempt from these criteria (it uses audience vote).

### Requirement: Enriched FAQ Knowledge Base
The system SHALL add the following missing FAQ entries from `faq.html` to `CHATBOT_CONTEXT.faqEntries`:
- "Must I use TRAE for this project?" — No, any allowed tools are fine
- "TRAE seems stuck. What should I do?" — Check terminal, press Escape, restart session
- "TRAE is asking me to approve a high-risk command. Should I approve?" — Yes, sandboxed environment
- "Can I use pre-existing code or templates?" — Yes, but keep enhancing
- "Do we need a PowerPoint for the presentation?" — No fixed format, convince the judges
- "What should I do if I experience network issues?" — Contact on-site technical support
- "Where can I get help if I am stuck?" — On-site support for tools only; use TRAE agent and survival kit for project guidance
- "Is there a deadline for project submission?" — 14:40 sharp

## MODIFIED Requirements

### Requirement: Increased Token Limit
The API call configuration in `callOpenRouterAPI()` SHALL increase `max_tokens` from 800 to 1500 to allow more thorough responses, especially for factual queries that require structured formatting.

## REMOVED Requirements

### Requirement: Old Judging Criteria Data
**Reason**: The criteria in `CHATBOT_CONTEXT` (Innovation/Technical Implementation/Business Value/Presentation at 25% each) do not match the authoritative FAQ page.
**Migration**: Replace with the FAQ-aligned criteria (Quality/Feasibility/Innovation & Creativity/Presentation) and update the corresponding FAQ entry about judging criteria.
