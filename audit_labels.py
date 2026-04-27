#!/usr/bin/env python3
"""Audit button labels vs actual page h1 headers."""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))

PAGES = [
    ('training-reference.html', 'overview'),
    ('ai-coding-agents.html', 'AI Coding Agents'),
    ('vibe-coding-reference.html', 'Vibe Coding Basics'),
    ('llm-eval-intro.html', 'Demo: Integrating a Local LLM'),
    ('spec-driven-reference.html', 'SDD Basics'),
    ('free-practice-feature.html', 'Demo: Free Practice Feature'),
    ('skills.html', 'Skills Basics'),
    ('skills-reference.html', 'Skills in Action'),
    ('getting-started.html', 'Getting Started'),
    ('trae-solo-overview.html', 'Overview'),
    ('multitasking.html', 'Multitasking'),
    ('tool-panel.html', 'Tool Panel'),
    ('mcp-integration.html', 'MCP Integration'),
    ('deploy-backend.html', 'Deployment'),
    ('deployment-troubleshooting.html', 'Deployment Troubleshooting'),
    ('opencode.html', 'OpenCode Overview'),
    ('opencode-web-ui.html', 'OpenCode Web UI'),
    ('microsoft-copilot-studio.html', 'Overview'),
    ('copilot-studio-reference.html', 'E-Tutorials'),
    ('agent-integration.html', 'Agent Integration'),
    ('genai-portal.html', 'Overview'),
    ('genai-portal-reference.html', 'Browser Automation'),
    ('ollama.html', 'Ollama'),
    ('wrapping-up.html', 'The Next Chapter'),
]

# Build h1 map from actual files
h1_map = {}
for fname, _ in PAGES:
    fp = os.path.join(BASE, fname)
    if not os.path.exists(fp):
        continue
    with open(fp, 'r') as f:
        content = f.read()
    m = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if m:
        h1 = re.sub(r'<[^>]+>', '', m.group(1)).strip()
        h1_map[fname] = h1

# Now check each page's prev/next button labels
issues = []
for fname, sidebar_label in PAGES:
    fp = os.path.join(BASE, fname)
    if not os.path.exists(fp):
        continue
    with open(fp, 'r') as f:
        content = f.read()
    
    nav_match = re.search(r'<div class="navigation-buttons">(.*?)</div>', content, re.DOTALL)
    if not nav_match:
        continue
    
    nav_block = nav_match.group(1)
    
    # Get previous link
    prev_match = re.search(r'href="([^"]+)"[^>]*class="btn btn-secondary"[^>]*>(.*?)</a>', nav_block, re.DOTALL)
    next_match = re.search(r'href="([^"]+)"[^>]*class="btn btn-primary"[^>]*>(.*?)</a>', nav_block, re.DOTALL)
    
    for match, direction in [(prev_match, 'prev'), (next_match, 'next')]:
        if not match:
            continue
        target = match.group(1)
        label = re.sub(r'<[^>]+>', '', match.group(2)).strip()
        # Extract the "page name" part after "Previous:" or "Next:"
        label_part = re.sub(r'^(←\s*Previous:|←\s*Previous|Previous:|←\s*)\s*|^(→|→\s+Next:|→\s*Next:|Next:|→)\s*', '', label).strip()
        
        if target in h1_map:
            actual_h1 = h1_map[target]
            if label_part.lower() != actual_h1.lower() and label_part not in actual_h1 and actual_h1 not in label_part:
                issues.append(f"  {fname} {direction}: button says '{label_part}' but page title is '{actual_h1}'")

if issues:
    print(f"Found {len(issues)} label mismatches:")
    for issue in issues:
        print(issue)
else:
    print("ALL LABELS MATCH ✓")
