from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    page.goto('http://localhost:8080/introduction.html')
    page.wait_for_load_state('networkidle')
    
    layout_info = page.evaluate('''() => {
        const content = document.querySelector('.content');
        const overview = document.querySelector('.overview');
        const wrapper = document.querySelector('.content-wrapper');
        
        return {
            content: content ? {
                width: content.offsetWidth,
                maxWidth: window.getComputedStyle(content).maxWidth
            } : null,
            overview: overview ? {
                width: overview.offsetWidth,
                position: window.getComputedStyle(overview).position
            } : null,
            wrapper: wrapper ? {
                width: wrapper.offsetWidth,
                gap: window.getComputedStyle(wrapper).gap
            } : null
        };
    }''')
    
    import json
    print(json.dumps(layout_info, indent=2))
    
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/verify-final-layout.png', full_page=True)
    print('✓ Final layout screenshot captured')
    
    browser.close()
