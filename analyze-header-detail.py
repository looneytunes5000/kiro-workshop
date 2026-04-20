from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    page.goto('https://docs.trae.ai/solo/what-is-trae-solo?_lang=en')
    page.wait_for_load_state('networkidle')
    
    # Get the actual page title text and styling
    title_info = page.evaluate('''() => {
        // Look for the main page title in the content area
        const allElements = document.querySelectorAll('*');
        const titles = [];
        
        for (const el of allElements) {
            const text = el.textContent?.trim();
            const rect = el.getBoundingClientRect();
            
            // Look for "What is TRAE SOLO?" text
            if (text && text.includes('What is TRAE SOLO') && rect.width > 100 && rect.height > 20 && rect.top > 50) {
                const style = window.getComputedStyle(el);
                // Only capture if it's a direct text container
                if (el.children.length < 3) {
                    titles.push({
                        tag: el.tagName,
                        className: el.className?.substring(0, 60),
                        fontSize: style.fontSize,
                        fontWeight: style.fontWeight,
                        lineHeight: style.lineHeight,
                        color: style.color,
                        marginBottom: style.marginBottom,
                        marginTop: style.marginTop,
                        paddingTop: style.paddingTop,
                        paddingBottom: style.paddingBottom,
                        rect: { top: Math.round(rect.top), height: Math.round(rect.height) }
                    });
                }
            }
        }
        
        return titles.slice(0, 5);
    }''')
    
    import json
    print('=== TRAE DOCS TITLE ELEMENTS ===')
    print(json.dumps(title_info, indent=2))
    
    # Screenshot the header area
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/trae-header-visual.png', clip={'x': 0, 'y': 0, 'width': 1440, 'height': 300})
    
    # Also check OpenCode
    page.goto('https://opencode.ai/docs/')
    page.wait_for_load_state('networkidle')
    
    opencode_title = page.evaluate('''() => {
        const h1 = document.querySelector('h1');
        if (!h1) return null;
        const style = window.getComputedStyle(h1);
        const parent = h1.closest('header, div[class*="header"], div[class*="title"]');
        
        return {
            h1: {
                text: h1.textContent?.substring(0, 80),
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                lineHeight: style.lineHeight,
                letterSpacing: style.letterSpacing,
                color: style.color,
                marginBottom: style.marginBottom,
                marginTop: style.marginTop
            },
            parent: parent ? {
                tag: parent.tagName,
                className: parent.className?.substring(0, 80),
                paddingTop: window.getComputedStyle(parent).paddingTop,
                paddingBottom: window.getComputedStyle(parent).paddingBottom,
                borderBottom: window.getComputedStyle(parent).borderBottom
            } : null
        };
    }''')
    
    print('\n=== OPENCODE DOCS TITLE ===')
    print(json.dumps(opencode_title, indent=2))
    
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/opencode-header-visual.png', clip={'x': 0, 'y': 0, 'width': 1440, 'height': 200})
    
    browser.close()
