# Move MCP Integration Page Spec

## Why
The mcp-integration.html page should be moved from the Advanced Topics section to the TRAE IDE section to improve content organization, as MCP Integration is logically related to the Tool Panel functionality within the TRAE IDE toolkit.

## What Changes
- Move `mcp-integration.html` from "Advanced Topics" section to "TRAE IDE" subsection under "Agents Toolkits"
- Place `mcp-integration.html` after `tool-panel.html` (before `deploy-backend.html`)
- Update navigation buttons on adjacent pages (`hook-examples.html`, `advanced-steering.html`)
- Update breadcrumb mappings in `scripts.js` to reflect the new section

## Impact
- Affected specs: None directly affected
- Affected code:
  - `scripts.js` - sidebar structure, breadcrumb mappings
  - `hook-examples.html` - navigation button update
  - `advanced-steering.html` - navigation button update
  - `deploy-backend.html` - may need navigation button update
  - `tool-panel.html` - may need navigation button update

## ADDED Requirements
None

## MODIFIED Requirements
None

## REMOVED Requirements
None
