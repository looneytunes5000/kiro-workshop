from playwright.sync_api import sync_playwright
import sys

BASE_URL = 'http://localhost:8080'

# All expected workshop pages
WORKSHOP_PAGES = [
    'index.html',
    'introduction.html',
    'start-workshop.html',
    'get-started.html',
    'desktop-client.html',
    'setup-account.html',
    'trae-solo-overview.html',
    'dual-clients.html',
    'dual-modes.html',
    'cloud-agent.html',
    'understanding-application.html',
    'deploy-backend.html',
    'steering.html',
    'generate-steering.html',
    'vibe-coding.html',
    'cancel-button.html',
    'spec-driven.html',
    'commenting-feature.html',
    'deployment-troubleshooting.html',
    'agent-hooks.html',
    'hook-configuration.html',
    'hook-examples.html',
    'mcp-integration.html',
    'advanced-steering.html',
    'sub-agents.html',
    'context-engineering.html',
    'resource-cleanup.html',
    'wrapping-up.html',
]

# Expected navigation chain (prev -> current -> next)
NAVIGATION_CHAIN = [
    ('index.html', None, 'introduction.html'),
    ('introduction.html', 'index.html', 'start-workshop.html'),
    ('start-workshop.html', 'introduction.html', 'get-started.html'),
    ('get-started.html', 'start-workshop.html', 'desktop-client.html'),
    ('desktop-client.html', 'get-started.html', 'setup-account.html'),
    ('setup-account.html', 'desktop-client.html', 'trae-solo-overview.html'),
    ('trae-solo-overview.html', 'setup-account.html', 'dual-clients.html'),
    ('dual-clients.html', 'trae-solo-overview.html', 'dual-modes.html'),
    ('dual-modes.html', 'dual-clients.html', 'cloud-agent.html'),
    ('cloud-agent.html', 'dual-modes.html', 'understanding-application.html'),
    ('understanding-application.html', 'cloud-agent.html', 'deploy-backend.html'),
    ('deploy-backend.html', 'understanding-application.html', 'steering.html'),
    ('steering.html', 'deploy-backend.html', 'generate-steering.html'),
    ('generate-steering.html', 'steering.html', 'vibe-coding.html'),
    ('vibe-coding.html', 'generate-steering.html', 'cancel-button.html'),
    ('cancel-button.html', 'vibe-coding.html', 'spec-driven.html'),
    ('spec-driven.html', 'cancel-button.html', 'commenting-feature.html'),
    ('commenting-feature.html', 'spec-driven.html', 'deployment-troubleshooting.html'),
    ('deployment-troubleshooting.html', 'commenting-feature.html', 'agent-hooks.html'),
    ('agent-hooks.html', 'deployment-troubleshooting.html', 'hook-configuration.html'),
    ('hook-configuration.html', 'agent-hooks.html', 'hook-examples.html'),
    ('hook-examples.html', 'hook-configuration.html', 'mcp-integration.html'),
    ('mcp-integration.html', 'hook-examples.html', 'advanced-steering.html'),
    ('advanced-steering.html', 'mcp-integration.html', 'sub-agents.html'),
    ('sub-agents.html', 'advanced-steering.html', 'context-engineering.html'),
    ('context-engineering.html', 'sub-agents.html', 'resource-cleanup.html'),
    ('resource-cleanup.html', 'context-engineering.html', 'wrapping-up.html'),
    ('wrapping-up.html', 'resource-cleanup.html', 'index.html'),
]

results = {'passed': 0, 'failed': 0, 'errors': []}

def check(condition, message):
    if condition:
        results['passed'] += 1
        print(f"  ✅ {message}")
    else:
        results['failed'] += 1
        results['errors'].append(message)
        print(f"  ❌ {message}")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    
    # Capture console errors
    console_errors = []
    page.on('pageerror', lambda e: console_errors.append(str(e)))
    
    print("=" * 60)
    print("TRAE SOLO Workshop - E2E Test Suite")
    print("=" * 60)
    
    # Test 1: All pages load without 404
    print("\n📋 Test 1: Page Loading (28 pages)")
    for pg in WORKSHOP_PAGES:
        page.goto(f'{BASE_URL}/{pg}', wait_until='networkidle')
        status = page.evaluate('() => document.title')
        check(len(status) > 0, f"{pg} loads (title: {status[:50]}...)")
    
    # Test 2: No "Kiro" branding in main workshop pages
    print("\n📋 Test 2: Branding - No 'Kiro' references")
    for pg in WORKSHOP_PAGES:
        page.goto(f'{BASE_URL}/{pg}', wait_until='networkidle')
        body_text = page.evaluate('() => document.body.innerText')
        # Check for standalone "Kiro" (not part of "TRAE SOLO")
        has_kiro = 'Kiro' in body_text or 'kiro' in body_text
        check(not has_kiro, f"{pg} has no 'Kiro' references")
    
    # Test 3: TRAE SOLO branding present
    print("\n📋 Test 3: TRAE SOLO branding present")
    for pg in WORKSHOP_PAGES:
        page.goto(f'{BASE_URL}/{pg}', wait_until='networkidle')
        body_text = page.evaluate('() => document.body.innerText')
        check('TRAE SOLO' in body_text, f"{pg} contains 'TRAE SOLO'")
    
    # Test 4: Sidebar navigation exists on all pages
    print("\n📋 Test 4: Sidebar navigation")
    for pg in WORKSHOP_PAGES:
        page.goto(f'{BASE_URL}/{pg}', wait_until='networkidle')
        sidebar = page.locator('nav.sidebar')
        check(sidebar.count() > 0, f"{pg} has sidebar navigation")
    
    # Test 5: Active sidebar link matches current page
    print("\n📋 Test 5: Active sidebar link")
    for pg in WORKSHOP_PAGES:
        page.goto(f'{BASE_URL}/{pg}', wait_until='networkidle')
        active_link = page.locator('a.sidebar-link.active')
        active_href = active_link.get_attribute('href') if active_link.count() > 0 else ''
        check(pg in str(active_href), f"{pg} has active link pointing to itself")
    
    # Test 6: Navigation buttons (prev/next)
    print("\n📋 Test 6: Navigation buttons")
    for current, prev, next_pg in NAVIGATION_CHAIN:
        page.goto(f'{BASE_URL}/{current}', wait_until='networkidle')
        
        # Check previous button
        prev_btn = page.locator('a.btn:has-text("Previous")')
        if prev:
            check(prev_btn.count() > 0, f"{current} has Previous button")
            if prev_btn.count() > 0:
                prev_href = prev_btn.get_attribute('href')
                check(prev in str(prev_href), f"{current} Previous -> {prev}")
        else:
            # Homepage has no previous button
            check(prev_btn.count() == 0, f"{current} has no Previous button (homepage)")
        
        # Check next button
        next_btn = page.locator('a.btn:has-text("Next")')
        if next_pg:
            check(next_btn.count() > 0, f"{current} has Next button")
            if next_btn.count() > 0:
                next_href = next_btn.get_attribute('href')
                check(next_pg in str(next_href), f"{current} Next -> {next_pg}")
    
    # Test 7: Homepage specific content
    print("\n📋 Test 7: Homepage content")
    page.goto(f'{BASE_URL}/index.html', wait_until='networkidle')
    body = page.evaluate('() => document.body.innerText')
    check('dual clients' in body.lower() or 'web' in body.lower(), "Homepage mentions dual clients")
    check('MTC' in body or 'Code' in body, "Homepage mentions dual modes")
    check('Cloud Agent' in body or 'cloud agent' in body, "Homepage mentions cloud agent")
    
    # Test 8: New pages exist and have content
    print("\n📋 Test 8: New TRAE SOLO pages")
    new_pages = {
        'cloud-agent.html': 'cloud agent',
        'dual-clients.html': 'web',
        'dual-modes.html': 'MTC',
    }
    for pg, keyword in new_pages.items():
        page.goto(f'{BASE_URL}/{pg}', wait_until='networkidle')
        body = page.evaluate('() => document.body.innerText')
        check(keyword.lower() in body.lower(), f"{pg} contains expected content ('{keyword}')")
    
    # Test 9: No AWS-specific references
    print("\n📋 Test 9: No AWS-specific references")
    aws_terms = ['AWS Builder ID', 'Lambda function', 'DynamoDB', 'CloudFront']
    for pg in WORKSHOP_PAGES:
        page.goto(f'{BASE_URL}/{pg}', wait_until='networkidle')
        body = page.evaluate('() => document.body.innerText')
        for term in aws_terms:
            check(term not in body, f"{pg} has no '{term}' reference")
    
    # Test 10: Console errors
    print("\n📋 Test 10: Console errors check")
    page.goto(f'{BASE_URL}/index.html', wait_until='networkidle')
    check(len(console_errors) == 0, f"No console errors (found: {len(console_errors)})")
    
    # Test 11: Click through navigation chain
    print("\n📋 Test 11: Click-through navigation flow")
    page.goto(f'{BASE_URL}/index.html', wait_until='networkidle')
    for i, (current, prev, next_pg) in enumerate(NAVIGATION_CHAIN):
        if next_pg:
            next_btn = page.locator('a.nav-button:has-text("Next")')
            if next_btn.count() > 0:
                next_btn.click()
                page.wait_for_load_state('networkidle')
                current_url = page.url
                check(next_pg in current_url, f"Click Next from {current} -> {next_pg}")
    
    # Summary
    print("\n" + "=" * 60)
    print(f"RESULTS: {results['passed']} passed, {results['failed']} failed")
    print("=" * 60)
    
    if results['errors']:
        print("\n❌ Failed checks:")
        for err in results['errors']:
            print(f"  - {err}")
    
    browser.close()
    
    if results['failed'] > 0:
        sys.exit(1)
