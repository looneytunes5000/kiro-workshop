# Tasks

- [x] Task 1: Remove sidebar search component
  - [x] SubTask 1.1: Remove the sidebar search HTML template from the `buildSidebar()` function in `scripts.js` (the `<div class="sidebar-search">` block around line 284-286)
  - [x] SubTask 1.2: Remove the `initSidebarSearch()` function entirely from `scripts.js` (lines ~556-631)
  - [x] SubTask 1.3: Remove the `initSidebarSearch()` call from `DOMContentLoaded`
  - [x] SubTask 1.4: Remove all sidebar search-related CSS from `styles.css`: `.sidebar-search`, `.sidebar-search-input`, `.sidebar-search-clear`, `.search-highlight`, and related rules
  - [x] SubTask 1.5: Remove any `search.match`, `.hidden` on sidebar sections, and `data-original-text` logic that was search-specific
- Also removed from hardcoded HTML in `llm-eval-intro.html` and `free-practice-feature.html`

- [x] Task 2: Convert "Clear" button to "New Chat" and improve its behavior
  - [x] SubTask 2.1: Rename the button label from "Clear" to "New Chat" in the chatbot header HTML
  - [x] SubTask 2.2: Add a confirmation prompt ("Start a new chat? This will clear the current conversation.") before clearing
  - [x] SubTask 2.3: Rename the button class/id references consistently (e.g., from `chatbot-clear` to `chatbot-new-chat`)
  - [x] SubTask 2.4: Rename CSS class from `.chatbot-clear-btn` to `.chatbot-new-chat-btn` in `styles.css`

- [x] Task 3: Cap conversation history to last 10 messages
  - [x] SubTask 3.1: Before sending messages to the API in `callOpenRouterAPI()`, trim `chatbotConversationHistory` to the last 10 messages (preserving the system prompt, only trimming the conversation array)
  - [x] SubTask 3.2: Full conversation may still be saved in `localStorage` (only API payload is capped)

- [x] Task 4: Enable clickable links in AI responses
  - [x] SubTask 4.1: Update `renderMarkdown()` in `scripts.js` to convert `[text](url)` markdown syntax into `<a href="url" class="chatbot-link">text</a>` HTML anchor tags
  - [x] SubTask 4.2: Add CSS styling for links within chatbot message bubbles (`.chatbot-link`) with the gold accent color
  - [x] SubTask 4.3: Update the system prompt in `buildSystemPrompt()` to instruct the AI to include clickable markdown links to relevant pages and sections when applicable

- [x] Task 5: Handle in-chat link clicks with navigation and auto-scroll
  - [x] SubTask 5.1: Add event delegation in `bindChatbotEvents()` to intercept clicks on `.chatbot-link` elements inside chatbot messages
  - [x] SubTask 5.2: If the link points to another page in the survival kit (e.g., `trae-solo-overview.html#section`), navigate and pass the anchor via URL hash
  - [x] SubTask 5.3: If the link points to the current page (same-page anchor), smooth-scroll to the target
  - [x] SubTask 5.4: After navigating to a new page with an anchor, on that page's load, `scrollToHashOnLoad()` scrolls to the target element

- [x] Task 6: Add AI assistant CTA below path cards on homepage
  - [x] SubTask 6.1: In `home.html`, add a new section below the simplified footer with an AI CTA card
  - [x] SubTask 6.2: Add CSS styling for the new CTA card in `home.html` inline styles
  - [x] SubTask 6.3: `bindAiCtaButton()` in `scripts.js` handles the CTA click to open the chatbot with a pre-filled question

# Task Dependencies
- Task 1 (remove search) is independent
- Task 2 (rename Clear to New Chat) is independent
- Task 3 (cap history) is independent
- Task 4 (clickable links) depends on the renderMarkdown update and system prompt change
- Task 5 (link click handling) depends on Task 4 (links must be clickable first)
- Task 6 (homepage CTA) is independent
