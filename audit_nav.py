#!/usr/bin/env python3
"""Audit all navigation buttons and mobile menu buttons across active HTML pages."""

import os
from html.parser import HTMLParser

BASE = os.path.dirname(os.path.abspath(__file__))

# Canonical sidebar order
SIDEBAR_ORDER = [
    'training-reference.html',
    'ai-coding-agents.html',
    'vibe-coding-reference.html',
    'llm-eval-intro.html',
    'spec-driven-reference.html',
    'free-practice-feature.html',
    'skills.html',
    '14-skills.html',
    'skills-reference.html',
    'getting-started.html',
    'trae-solo-overview.html',
    'multitasking.html',
    'tool-panel.html',
    'mcp-integration.html',
    'deploy-backend.html',
    'deployment-troubleshooting.html',
    'opencode.html',
    'opencode-web-ui.html',
    'microsoft-copilot-studio.html',
    'copilot-studio-reference.html',
    'agent-integration.html',
    'genai-portal.html',
    'genai-portal-reference.html',
    'ollama.html',
    'wrapping-up.html',
]

import re

errors = []
warnings = []

for i, page in enumerate(SIDEBAR_ORDER):
    filepath = os.path.join(BASE, page)
    if not os.path.exists(filepath):
        errors.append(f"  MISSING: {page}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    expected_prev = SIDEBAR_ORDER[i-1] if i > 0 else None
    expected_next = SIDEBAR_ORDER[i+1] if i < len(SIDEBAR_ORDER) - 1 else None
    
    # Find Previous button (btn btn-secondary)
    prev_match = re.search(r'href="([^"]+)"[^>]*class="btn btn-secondary"', content)
    actual_prev = prev_match.group(1) if prev_match else None
    
    # Find Next button (btn btn-primary) - exclude non-nav buttons
    # Look inside navigation-buttons div
    nav_match = re.search(r'<div class="navigation-buttons">(.*?)</div>', content, re.DOTALL)
    if nav_match:
        nav_block = nav_match.group(1)
        next_matches = re.findall(r'href="([^"]+)"[^>]*class="btn btn-primary"', nav_block)
        actual_next = next_matches[0] if next_matches else None
    else:
        next_matches = re.findall(r'href="([^"]+)"[^>]*class="btn btn-primary"', content)
        actual_next = next_matches[0] if next_matches else None
    
    # Check Previous
    if expected_prev and actual_prev != expected_prev:
        errors.append(f"  prev: expected '{expected_prev}', got '{actual_prev}'")
    elif expected_prev is None and actual_prev:
        warnings.append(f"  has prev button '{actual_prev}' but first page in sidebar")
    
    # Check Next
    if expected_next and actual_next != expected_next:
        errors.append(f"  next: expected '{expected_next}', got '{actual_next}'")
    elif expected_next is None and actual_next:
        warnings.append(f"  has next button '{actual_next}' but last page in sidebar")
    
    # Check mobile menu button
    if '<span class="hamburger-line">' in content:
        errors.append(f"  MOBILE_BTN: has invisible hamburger-line spans (should use &#9776; or &#9776;)")

print("=== NAVIGATION AUDIT ===")
print(f"Checking {len(SIDEBAR_ORDER)} active sidebar pages\n")

has_errors = False
for i, page in enumerate(SIDEBAR_ORDER):
    filepath = os.path.join(BASE, page)
    if not os.path.exists(filepath):
        print(f"ERROR: {page} - FILE NOT FOUND")
        has_errors = True
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    expected_prev = SIDEBAR_ORDER[i-1] if i > 0 else None
    expected_next = SIDEBAR_ORDER[i+1] if i < len(SIDEBAR_ORDER) - 1 else None
    
    # Find Previous button
    prev_match = re.search(r'href="([^"]+)"[^>]*class="btn btn-secondary"', content)
    actual_prev = prev_match.group(1) if prev_match else None
    
    # Find Next button in navigation-buttons div
    nav_match = re.search(r'<div class="navigation-buttons">(.*?)</div>', content, re.DOTALL)
    actual_next = None
    if nav_match:
        next_matches = re.findall(r'href="([^"]+)"[^>]*class="btn btn-primary"', nav_match.group(1))
        actual_next = next_matches[0] if next_matches else None
    
    # Check mobile button
    mobile_issue = '<span class="hamburger-line">' in content
    
    status_parts = []
    if expected_prev:
        if actual_prev == expected_prev:
            status_parts.append(f"PREV \u2713")
        else:
            status_parts.append(f"PREV \u2717 (expected '{expected_prev}', got '{actual_prev}')")
    else:
        if actual_prev:
            status_parts.append(f"PREV \u2717 (no prev expected, got '{actual_prev}')")
        else:
            status_parts.append(f"PREV \u2713 (none)")
    
    if expected_next:
        if actual_next == expected_next:
            status_parts.append(f"NEXT \u2713")
        else:
            status_parts.append(f"NEXT \u2717 (expected '{expected_next}', got '{actual_next}')")
    else:
        if actual_next:
            status_parts.append(f"NEXT \u2717 (no next expected, got '{actual_next}')")
        else:
            status_parts.append(f"NEXT \u2713 (none)")
    
    if mobile_issue:
        status_parts.append(f"MOBILE_BTN \u2717")
    else:
        status_parts.append(f"MOBILE_BTN \u2713")

    all_ok = all('\u2713' in s for s in status_parts)
    marker = '\u2705' if all_ok else '\u274c'
    
    print(f"{marker} {page}")
    for s in status_parts:
        print(f"     {s}")
    if not all_ok:
        has_errors = True

print("\n" + "="*50)
if has_errors:
    print("RESULT: ISSUES FOUND - needs fixes")
else:
    print("RESULT: ALL CLEAR \u2705")
