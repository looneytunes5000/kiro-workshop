const { test, expect } = require('@playwright/test');

test.describe('Sidebar Visual Debug', () => {
  test('Take screenshots at each step', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    
    // Screenshot 1: Initial state
    await page.screenshot({ path: 'test-results/01-initial-state.png', fullPage: true });
    
    // Expand Training Session if collapsed
    const trainingSection = page.locator('.collapsible[data-section="training-session"]');
    const isCollapsed = await trainingSection.evaluate(el => el.classList.contains('collapsed'));
    if (isCollapsed) {
      await page.locator('.collapsible-header', { hasText: 'Training Session' }).click();
      await page.waitForTimeout(500);
    }
    
    // Screenshot 2: After expanding Training Session
    await page.screenshot({ path: 'test-results/02-training-expanded.png', fullPage: true });
    
    // Click Vibe Coding to expand
    await page.locator('.sidebar-link.has-subpages:not(a)', { hasText: 'Vibe Coding' }).click();
    await page.waitForTimeout(500);
    
    // Screenshot 3: After clicking Vibe Coding
    await page.screenshot({ path: 'test-results/03-vibe-coding-clicked.png', fullPage: true });
    
    // Get the HTML of the sidebar for debugging
    const sidebarHTML = await page.locator('.sidebar').innerHTML();
    console.log('\n=== Sidebar HTML Structure ===');
    console.log(sidebarHTML.substring(0, 2000)); // First 2000 chars
    console.log('\n=== End Sidebar HTML ===\n');
    
    // Now click Vibe Coding Basics
    await page.locator('.sidebar-link.sub-item', { hasText: 'Vibe Coding Basics' }).click();
    await page.waitForTimeout(1000);
    
    // Screenshot 4: After clicking Vibe Coding Basics
    await page.screenshot({ path: 'test-results/04-after-clicking-basics.png', fullPage: true });
    
    // Get the HTML again
    const sidebarHTMLAfter = await page.locator('.sidebar').innerHTML();
    console.log('\n=== Sidebar HTML After Navigation ===');
    console.log(sidebarHTMLAfter.substring(0, 2000));
    console.log('\n=== End ===\n');
    
    console.log('Current URL:', page.url());
  });
});