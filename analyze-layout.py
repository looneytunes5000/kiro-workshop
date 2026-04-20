from playwright.sync_api import sync_playwright
import json

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    # Analyze TRAE docs layout
    page.goto('https://docs.trae.ai/solo/what-is-trae-solo?_lang=en')
    page.wait_for_load_state('networkidle')
    
    # Get layout structure
    layout_info = page.evaluate('''() => {
        const body = document.body;
        const children = Array.from(body.children).map(el => ({
            tag: el.tagName,
            className: el.className,
            id: el.id,
            width: el.offsetWidth,
            height: el.offsetHeight,
            left: el.offsetLeft,
            right: el.offsetLeft + el.offsetWidth
        }));
        
        // Look for right sidebar / TOC
        const rightSideElements = Array.from(document.querySelectorAll('*')).filter(el => {
            const rect = el.getBoundingClientRect();
            return rect.right > 1200 && rect.width > 150 && rect.height > 100;
        }).slice(0, 10);
        
        return {
            bodyWidth: body.offsetWidth,
            children: children,
            rightSideHints: rightSideElements.map(el => ({
                tag: el.tagName,
                className: el.className,
                id: el.id,
                text: el.textContent?.substring(0, 100),
                rect: {
                    left: Math.round(el.getBoundingClientRect().left),
                    right: Math.round(el.getBoundingClientRect().right),
                    width: Math.round(el.getBoundingClientRect().width),
                    top: Math.round(el.getBoundingClientRect().top),
                    height: Math.round(el.getBoundingClientRect().height)
                }
            }))
        };
    }''')
    
    print('=== TRAE DOCS LAYOUT ===')
    print(json.dumps(layout_info, indent=2))
    
    # Take screenshot and save to project dir
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/trae-docs-layout.png', full_page=True)
    print('\nScreenshot saved to traе-docs-layout.png')
    
    # Analyze OpenCode docs layout
    page.goto('https://opencode.ai/docs/')
    page.wait_for_load_state('networkidle')
    
    layout_info2 = page.evaluate('''() => {
        const body = document.body;
        const children = Array.from(body.children).map(el => ({
            tag: el.tagName,
            className: el.className,
            id: el.id,
            width: el.offsetWidth,
            height: el.offsetHeight,
            left: el.offsetLeft,
            right: el.offsetLeft + el.offsetWidth
        }));
        
        const rightSideElements = Array.from(document.querySelectorAll('*')).filter(el => {
            const rect = el.getBoundingClientRect();
            return rect.right > 1200 && rect.width > 150 && rect.height > 100;
        }).slice(0, 10);
        
        return {
            bodyWidth: body.offsetWidth,
            children: children,
            rightSideHints: rightSideElements.map(el => ({
                tag: el.tagName,
                className: el.className,
                id: el.id,
                text: el.textContent?.substring(0, 100),
                rect: {
                    left: Math.round(el.getBoundingClientRect().left),
                    right: Math.round(el.getBoundingClientRect().right),
                    width: Math.round(el.getBoundingClientRect().width),
                    top: Math.round(el.getBoundingClientRect().top),
                    height: Math.round(el.getBoundingClientRect().height)
                }
            }))
        };
    }''')
    
    print('\n=== OPENCODE DOCS LAYOUT ===')
    print(json.dumps(layout_info2, indent=2))
    
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/opencode-docs-layout.png', full_page=True)
    print('\nScreenshot saved to opencode-docs-layout.png')
    
    browser.close()
