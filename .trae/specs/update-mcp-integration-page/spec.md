# Update MCP Integration Page Spec

## Why
The MCP Integration page needs to be updated to reflect recent additions (Context7, Excel, Playwright MCP servers), clarify usage guidance, and add important warnings for the aiHackathon event.

## What Changes
- Add reference to official TRAE docs page about MCP servers
- Update "Common MCP Integrations" section to highlight Context7, Excel, and Playwright as included
- Add a tip callout about MCP being heavy on context window and should be used on need basis only
- Add a warning callout that MCP requiring premium subscriptions are not permitted in the aiHackathon event
- Update navigation buttons to point to correct adjacent pages

## Impact
- Affected file: `mcp-integration.html`
- Callout styles: Need to add "tip" and "warning" callout variants to styles.css

## ADDED Requirements
### Requirement: Context7, Excel, Playwright highlighted
The page SHALL highlight that Context7, Excel, and Playwright MCP servers have been added to the workshop environment.

### Requirement: TIP callout for context window usage
The page SHALL include a tip callout explaining that MCP is heavy on context window and should only be used on need basis.

### Requirement: WARNING callout for premium subscriptions
The page SHALL include a warning callout stating that MCP requiring premium subscriptions are not permitted in the aiHackathon event.

## MODIFIED Requirements
### Requirement: Navigation buttons
The Previous button SHALL link to "tool-panel.html" (not "hook-examples.html").
