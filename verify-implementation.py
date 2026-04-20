from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    # Test homepage
    page.goto('http://localhost:8080/index.html')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/verify-homepage.png', full_page=True)
    print('✓ Homepage screenshot captured')
    
    # Check if overview column exists
    overview_exists = page.evaluate('''() => {
        const overview = document.querySelector('.overview');
        return {
            exists: !!overview,
            hasTitle: !!overview?.querySelector('.overview-title'),
            linkCount: overview?.querySelectorAll('.overview-link').length || 0,
            titleText: overview?.querySelector('.overview-title')?.textContent
        };
    }''')
    print(f'Homepage overview: {overview_exists}')
    
    # Test introduction page (has many sections)
    page.goto('http://localhost:8080/introduction.html')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/verify-introduction.png', full_page=True)
    print('✓ Introduction page screenshot captured')
    
    overview_exists2 = page.evaluate('''() => {
        const overview = document.querySelector('.overview');
        return {
            exists: !!overview,
            hasTitle: !!overview?.querySelector('.overview-title'),
            linkCount: overview?.querySelectorAll('.overview-link').length || 0,
            titleText: overview?.querySelector('.overview-title')?.textContent
        };
    }''')
    print(f'Introduction overview: {overview_exists2}')
    
    # Test scroll spy functionality
    page.evaluate('''() => {
        window.scrollTo(0, 500);
    }''')
    page.wait_for_timeout(500)
    
    active_link = page.evaluate('''() => {
        const activeLink = document.querySelector('.overview-link.active');
        return activeLink?.textContent || 'No active link';
    }''')
    print(f'Active link after scroll: {active_link}')
    
    # Test responsive behavior (mobile viewport)
    page.set_viewport_size({'width': 1024, 'height': 768})
    page.goto('http://localhost:8080/introduction.html')
    page.wait_for_load_state('networkidle')
    
    overview_hidden = page.evaluate('''() => {
        const overview = document.querySelector('.overview');
        if (!overview) return 'not found';
        const style = window.getComputedStyle(overview);
        return style.display;
    }''')
    print(f'Overview display at 1024px: {overview_hidden}')
    
    page.screenshot(path='/Users/clt-mbp-01/Documents/trae_projects/Trae Workshop/kiro-workshop/verify-mobile.png', full_page=True)
    print('✓ Mobile viewport screenshot captured')
    
    browser.close()
    print('\n✓ All verification tests completed!')
