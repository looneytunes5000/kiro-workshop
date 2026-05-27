# Tasks

- [x] Task 1: Fix judging criteria and enrich FAQ knowledge base
  - Update `CHATBOT_CONTEXT.judgingCriteria` in `scripts.js` to use the authoritative criteria from `faq.html`: Quality, Feasibility, Innovation & Creativity, Presentation with their full descriptions
  - Update the corresponding FAQ entry about judging criteria in `CHATBOT_CONTEXT.faqEntries` to match
  - Add 8 missing FAQ entries from `faq.html` to `CHATBOT_CONTEXT.faqEntries`: "Must I use TRAE?", "TRAE seems stuck", "High-risk command approval", "Pre-existing code", "PowerPoint for presentation", "Network issues", "Where to get help", "Submission deadline"
- [x] Task 2: Add content guardrails to system prompt
  - Update `buildSystemPrompt()` in `scripts.js` to add a CONTENT BOUNDARIES section with three rules:
    1. Event-scoped only: politely decline off-topic questions with a friendly redirect
    2. Guide, don't build: when asked to build a solution directly, offer architecture guidance, tool recommendations, and step outlines instead of generating full code
    3. Allowed assistance: code snippets for illustration, debugging help, concept explanations, and tool usage guidance are permitted
- [x] Task 3: Add page-aware context to system prompt
  - Modify `buildSystemPrompt()` to accept the current page filename and insert a "CURRENT PAGE" section into the system prompt that tells the assistant which page the user is viewing and what that page covers
  - Update `callOpenRouterAPI()` to pass the current page context into `buildSystemPrompt()`
- [x] Task 4: Replace identical page suggestions with contextual ones
  - Rewrite `CHATBOT_PAGE_SUGGESTIONS` in `scripts.js` so each page has unique, relevant suggestion chips (4 per page) tailored to that page's content:
    - `home.html` / `index.html`: General event questions
    - `training-reference.html`: Training-specific topics
    - `getting-started.html`: Setup and onboarding questions
    - `vibe-coding-reference.html`: Vibe Coding specific questions
    - `spec-driven-reference.html`: SDD specific questions
    - `skills.html` / `14-skills.html` / `skills-reference.html`: Skills specific questions
    - `trae-solo-overview.html`: TRAE feature questions
    - `multitasking.html`: Multitasking questions
    - `tool-panel.html`: Tool panel questions
    - `mcp-integration.html`: MCP integration questions
    - `deploy-backend.html` / `deployment-troubleshooting.html`: Deployment questions
    - `opencode.html` / `opencode-web-ui.html`: OpenCode questions
    - `microsoft-copilot-studio.html` / `copilot-studio-reference.html`: Copilot Studio questions
    - `agent-integration.html`: Agent integration questions
    - `genai-portal.html` / `genai-portal-reference.html`: GenAI Portal questions
    - `ollama.html`: Local LLM questions
    - `faq.html`: FAQ navigation questions
- [x] Task 5: Increase max_tokens in API configuration
  - Change `max_tokens` from 800 to 1500 in the `callOpenRouterAPI()` function in `scripts.js`

# Task Dependencies
- Task 2 (guardrails), Task 3 (page-aware context), and Task 5 (max_tokens) are independent and can proceed in parallel
- Task 4 (contextual suggestions) is independent of all other tasks
- Task 1 (criteria + FAQ data) is independent of all other tasks
