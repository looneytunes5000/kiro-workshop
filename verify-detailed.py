from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    # Test scroll spy on introduction page
    page.goto('http://localhost:8080/introduction.html')
    page.wait_for_load_state('networkidle')
    
    # Check layout dimensions
    layout_info = page.evaluate('''() => {
        const content = document.querySelector('.content');
        const overview = document.querySelector('.overview');
        const container = document.querySelector('.container');
        
        return {
            content: content ? {
                width: content.offsetWidth,
                maxWidth: window.getComputedStyle(content).maxWidth,
                marginLeft: window.getComputedStyle(content).marginLeft,
                marginRight: window.getComputedStyle(content).marginRight
            } : null,
            overview: overview ? {
                width: overview.offsetWidth,
                position: window.getComputedStyle(overview).position,
                top: window.getComputedStyle(overview).top
            } : null,
            container: container ? {
                width: container.offsetWidth,
                display: window.getComputedStyle(container).display,
                gap: window.getComputedStyle(container).gap
            } : null
        };
    }''')
    
    print('=== Layout Dimensions ===')
    import json
    print(json.dumps(layout_info, indent=2))
    
    # Test scroll spy - scroll to different positions
    page.evaluate('window.scrollTo(0, 300)')
    page.wait_for_timeout(300)
    
    active_link_300 = page.evaluate('''() => {
        const activeLink = document.querySelector('.overview-link.active');
        return activeLink?.textContent || 'No active link';
    }''')
    print(f'\nActive link at 300px scroll: {active_link_300}')
    
    page.evaluate('window.scrollTo(0, 800)')
    page.wait_for_timeout(300)
    
    active_link_800 = page.evaluate('''() => {
        const activeLink = document.querySelector('.overview-link.active');
        return activeLink?.textContent || 'No active link';
    }''')
    print(f'Active link at 800px scroll: {active_link_800}')
    
    page.evaluate('window.scrollTo(0, 1500)')
    page.wait_for_timeout(300)
    
    active_link_1500 = page.evaluate('''() => {
        const activeLink = document.querySelector('.overview-link.active');
        return activeLink?.textContent || 'No active link';
    }''')
    print(f'Active link at 1500px scroll: {active_link_1500}')
    
    # Test smooth scroll
    first_link = page.querySelector('.overview-link')
    if first_link:
        first_link.click()
        page.wait_for_timeout(500)
        scroll_pos = page.evaluate('window.scrollY')
        print(f'\nAfter clicking first overview link, scroll position: {scroll_pos}px')
    
    # Take final screenshot
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/verify-final.png', full_page=True)
    print('\n✓ Final verification screenshot captured')
    
    browser.close()
