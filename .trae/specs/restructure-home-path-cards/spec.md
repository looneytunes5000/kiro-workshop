# Restructure Home Path Cards Spec

## Why
The two path cards on `home.html` have stale, inaccurate page lists that don't reflect what readers actually need for each solution type. Path A includes pages that confuse the "Workflow Automation" focus. Path B's page ordering is random. The cards should give readers a clear, logical picture of the development knowledge for each of the two solution types.

## What Changes
- **Path A (Workflow Automation)**: Keep current list but remove "14 Must-Install Skills" and "Deployment Troubleshooting". Fix label spelling.
- **Path B (AI-Powered Solutions)**: Reorder pages into a specific order provided by the owner: Copilot Studio → Ollama → Agent Integration → GenAI Portal → TRAE Overview.
- **Remove `.section-label` CSS and HTML**: No more visual section dividers. All nav links use the exact same font, size, weight, and color.

## Impact
- Affected spec: `polish-home-landing` (home page path cards)
- Affected code: `home.html` (CSS + HTML for path-card-nav lists)

---
## MODIFIED Requirements

### Path A — Suggested Workflow Automation
The path card lists pages in this order:
1. Getting Started (`getting-started.html`)
2. Vibe Coding Basics (`vibe-coding-reference.html`)
3. Spec-Driven Basics (`spec-driven-reference.html`)
4. Skills Basics (`skills.html`)
5. TRAEO Agent Overview (`trae-solo-overview.html`)
6. Tool Panel (`tool-panel.html`)
7. Multitasking (`multitasking.html`)
8. Deploy Backend (`deploy-backend.html`)

### Path B — Suggested AI-Powered Solutions
The path card lists pages in this order:
1. Copilot Studio Overview (`microsoft-copilot-studio.html`)
2. Ollama (`ollama.html`)
3. Agent Integration (`agent-integration.html`)
4. GenAI Portal Overview (`genai-portal.html`)
5. GenAI Portal Browser Automation (`genai-portal-reference.html`)
6. TRAE Overview (`trae-solo-overview.html`)
