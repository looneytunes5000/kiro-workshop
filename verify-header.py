from playwright.sync_api import sync_playwright
import json

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    page.goto('http://localhost:8080/introduction.html')
    page.wait_for_load_state('networkidle')
    
    header_info = page.evaluate('''() => {
        const h1 = document.querySelector('.page-header h1');
        const header = document.querySelector('.page-header');
        const p = document.querySelector('.page-header p');
        
        return {
            h1: h1 ? {
                fontSize: window.getComputedStyle(h1).fontSize,
                fontWeight: window.getComputedStyle(h1).fontWeight,
                lineHeight: window.getComputedStyle(h1).lineHeight,
                letterSpacing: window.getComputedStyle(h1).letterSpacing,
                color: window.getComputedStyle(h1).color
            } : null,
            header: header ? {
                paddingTop: window.getComputedStyle(header).paddingTop,
                paddingBottom: window.getComputedStyle(header).paddingBottom,
                borderBottom: window.getComputedStyle(header).borderBottom,
                background: window.getComputedStyle(header).background?.substring(0, 100)
            } : null,
            p: p ? {
                fontSize: window.getComputedStyle(p).fontSize,
                marginTop: window.getComputedStyle(p).marginTop
            } : null,
            hasAccentLine: !!document.querySelector('.accent-line')
        };
    }''')
    
    print('=== UPDATED HEADER STYLES ===')
    print(json.dumps(header_info, indent=2))
    
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/verify-updated-header.png', full_page=True)
    print('\n✓ Updated header screenshot captured')
    
    browser.close()
