from playwright.sync_api import sync_playwright
import json

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    # Analyze TRAE docs header
    page.goto('https://docs.trae.ai/solo/what-is-trae-solo?_lang=en')
    page.wait_for_load_state('networkidle')
    
    trae_header = page.evaluate('''() => {
        const h1 = document.querySelector('h1');
        if (!h1) return null;
        const style = window.getComputedStyle(h1);
        const parent = h1.parentElement;
        const parentStyle = parent ? window.getComputedStyle(parent) : null;
        
        return {
            h1: {
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                lineHeight: style.lineHeight,
                letterSpacing: style.letterSpacing,
                color: style.color,
                marginBottom: style.marginBottom,
                marginTop: style.marginTop,
                textTransform: style.textTransform
            },
            parent: parentStyle ? {
                paddingTop: parentStyle.paddingTop,
                paddingBottom: parentStyle.paddingBottom,
                paddingLeft: parentStyle.paddingLeft,
                paddingRight: parentStyle.paddingRight,
                background: parentStyle.background
            } : null,
            breadcrumb: document.querySelector('[class*="breadcrumb"]')?.textContent?.substring(0, 100) || 'No breadcrumb found'
        };
    }''')
    
    print('=== TRAE DOCS HEADER ===')
    print(json.dumps(trae_header, indent=2))
    
    # Analyze OpenCode docs header
    page.goto('https://opencode.ai/docs/')
    page.wait_for_load_state('networkidle')
    
    opencode_header = page.evaluate('''() => {
        const h1 = document.querySelector('h1');
        if (!h1) return null;
        const style = window.getComputedStyle(h1);
        const parent = h1.parentElement;
        const parentStyle = parent ? window.getComputedStyle(parent) : null;
        
        return {
            h1: {
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                lineHeight: style.lineHeight,
                letterSpacing: style.letterSpacing,
                color: style.color,
                marginBottom: style.marginBottom,
                marginTop: style.marginTop,
                textTransform: style.textTransform
            },
            parent: parentStyle ? {
                paddingTop: parentStyle.paddingTop,
                paddingBottom: parentStyle.paddingBottom,
                paddingLeft: parentStyle.paddingLeft,
                paddingRight: parentStyle.paddingRight,
                background: parentStyle.background
            } : null
        };
    }''')
    
    print('\n=== OPENCODE DOCS HEADER ===')
    print(json.dumps(opencode_header, indent=2))
    
    # Take screenshots for visual comparison
    page.goto('https://docs.trae.ai/solo/what-is-trae-solo?_lang=en')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/trae-header-ref.png')
    
    page.goto('https://opencode.ai/docs/')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/opencode-header-ref.png')
    
    browser.close()
    print('\n✓ Header analysis complete')
