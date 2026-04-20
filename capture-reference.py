from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    # Capture TRAE docs
    page.goto('https://docs.trae.ai/solo/what-is-trae-solo?_lang=en')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/tmp/trae-docs.png', full_page=True)
    print('Captured TRAE docs screenshot')
    
    # Capture OpenCode docs
    page.goto('https://opencode.ai/docs/')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/tmp/opencode-docs.png', full_page=True)
    print('Captured OpenCode docs screenshot')
    
    browser.close()
    print('Done!')
