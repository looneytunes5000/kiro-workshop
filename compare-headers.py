from playwright.sync_api import sync_playwright
import json

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    # Analyze TRAE docs header more thoroughly
    page.goto('https://docs.trae.ai/solo/what-is-trae-solo?_lang=en')
    page.wait_for_load_state('networkidle')
    
    trae_header = page.evaluate('''() => {
        // Find all h1 elements
        const h1s = document.querySelectorAll('h1');
        const results = [];
        
        h1s.forEach(h1 => {
            const rect = h1.getBoundingClientRect();
            if (rect.width > 50 && rect.height > 10) {
                const style = window.getComputedStyle(h1);
                results.push({
                    text: h1.textContent?.substring(0, 80),
                    fontSize: style.fontSize,
                    fontWeight: style.fontWeight,
                    lineHeight: style.lineHeight,
                    color: style.color,
                    marginBottom: style.marginBottom,
                    marginTop: style.marginTop,
                    rect: { width: Math.round(rect.width), height: Math.round(rect.height), top: Math.round(rect.top) }
                });
            }
        });
        
        // Also check for page title area
        const titleArea = document.querySelector('[class*="title"], [class*="header"], [class*="heading"]');
        if (titleArea && titleArea.getBoundingClientRect().width > 100) {
            const ts = window.getComputedStyle(titleArea);
            results.push({
                element: 'titleArea',
                className: titleArea.className?.substring(0, 80),
                paddingTop: ts.paddingTop,
                paddingBottom: ts.paddingBottom,
                background: ts.background?.substring(0, 100)
            });
        }
        
        return results;
    }''')
    
    print('=== TRAE DOCS HEADER ===')
    print(json.dumps(trae_header, indent=2))
    
    # Check our current header for comparison
    page.goto('http://localhost:8080/introduction.html')
    page.wait_for_load_state('networkidle')
    
    our_header = page.evaluate('''() => {
        const h1 = document.querySelector('.page-header h1');
        const header = document.querySelector('.page-header');
        
        return {
            h1: h1 ? {
                fontSize: window.getComputedStyle(h1).fontSize,
                fontWeight: window.getComputedStyle(h1).fontWeight,
                lineHeight: window.getComputedStyle(h1).lineHeight,
                letterSpacing: window.getComputedStyle(h1).letterSpacing,
                color: window.getComputedStyle(h1).color,
                marginBottom: window.getComputedStyle(h1).marginBottom,
                marginTop: window.getComputedStyle(h1).marginTop
            } : null,
            header: header ? {
                paddingTop: window.getComputedStyle(header).paddingTop,
                paddingBottom: window.getComputedStyle(header).paddingBottom,
                paddingLeft: window.getComputedStyle(header).paddingLeft,
                paddingRight: window.getComputedStyle(header).paddingRight,
                borderBottom: window.getComputedStyle(header).borderBottom
            } : null
        };
    }''')
    
    print('\n=== OUR CURRENT HEADER ===')
    print(json.dumps(our_header, indent=2))
    
    browser.close()
