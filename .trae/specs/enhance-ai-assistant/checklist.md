# Checklist

- [x] `CHATBOT_CONTEXT.judgingCriteria` uses the four authoritative criteria from `faq.html`: Quality, Feasibility, Innovation & Creativity, Presentation with full descriptions
- [x] The FAQ entry about judging criteria in `CHATBOT_CONTEXT.faqEntries` is consistent with the updated criteria
- [x] 8 missing FAQ entries from `faq.html` are added to `CHATBOT_CONTEXT.faqEntries` (TRAE usage, stuck TRAE, high-risk commands, pre-existing code, presentation format, network issues, getting help, submission deadline)
- [x] System prompt includes event-scoped guardrail (off-topic questions are politely redirected)
- [x] System prompt includes a guide-don't-build guardrail (direct solution-building requests are redirected to architectural guidance)
- [x] System prompt explicitly permits code snippets for illustration, debugging help, and concept explanations
- [x] `buildSystemPrompt()` includes the current page filename in a CURRENT PAGE section of the system prompt
- [x] `callOpenRouterAPI()` passes the current page context to `buildSystemPrompt()`
- [x] `CHATBOT_PAGE_SUGGESTIONS` has unique, content-relevant suggestion chips for each page (no more identical 4-suggestion sets across all pages)
- [x] All active HTML pages in the sidebar navigation have a corresponding entry in `CHATBOT_PAGE_SUGGESTIONS`
- [x] `max_tokens` in `callOpenRouterAPI()` is set to 1500
- [x] The chatbot loads and displays correctly on all pages without JavaScript errors
