const { test, expect } = require('@playwright/test');

test.describe('Sidebar Vibe Coding Debug', () => {
  test('Check rendered HTML structure', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    
    // Expand the Training Session section
    const trainingSection = page.locator('.collapsible[data-section="training-session"]');
    const isCollapsed = await trainingSection.evaluate(el => el.classList.contains('collapsed'));
    if (isCollapsed) {
      await page.locator('.collapsible-header', { hasText: 'Training Session' }).click();
    }
    
    // Click Vibe Coding to expand
    await page.locator('.sidebar-link.has-subpages:not(a)', { hasText: 'Vibe Coding' }).click();
    
    // Get the HTML structure of subpages
    const subpageContainer = page.locator('.sidebar-link.sub-item').first();
    
    // Get all sub-item elements with their text and href
    const subpages = await page.evaluate(() => {
      const items = document.querySelectorAll('.sidebar-link.sub-item');
      return Array.from(items).map(el => ({
        text: el.textContent.trim(),
        href: el.getAttribute('href'),
        display: el.style.display
      }));
    });
    
    console.log('Subpages found:', JSON.stringify(subpages, null, 2));
    
    // Now click Vibe Coding Basics
    await page.locator('.sidebar-link.sub-item', { hasText: 'Vibe Coding Basics' }).click();
    
    // Check URL
    console.log('Current URL:', page.url());
    
    // Get page title
    const title = await page.title();
    console.log('Page title:', title);
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Check the sidebar again
    const subpagesAfterNav = await page.evaluate(() => {
      const items = document.querySelectorAll('.sidebar-link.sub-item');
      return Array.from(items).map(el => ({
        text: el.textContent.trim(),
        href: el.getAttribute('href'),
        display: el.style.display
      }));
    });
    
    console.log('Subpages after navigation:', JSON.stringify(subpagesAfterNav, null, 2));
    
    // Verify
    expect(page.url()).toContain('vibe-coding-reference.html');
  });
});