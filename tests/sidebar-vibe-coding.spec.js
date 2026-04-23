const { test, expect } = require('@playwright/test');

test.describe('Sidebar Vibe Coding Tree', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/');
    
    // Expand the Training Session section first
    const trainingSessionHeader = page.locator('.collapsible-header', { hasText: 'Training Session' });
    const trainingSection = page.locator('.collapsible[data-section="training-session"]');
    
    // Check if section is collapsed and expand if needed
    const isCollapsed = await trainingSection.evaluate(el => el.classList.contains('collapsed'));
    if (isCollapsed) {
      await trainingSessionHeader.click();
    }
  });

  test('Vibe Coding category should toggle subpages on click', async ({ page }) => {
    // Find the Vibe Coding category header
    const vibeCodingHeader = page.locator('.sidebar-link.has-subpages:not(a)', { hasText: 'Vibe Coding' });
    
    // Subpages should be hidden initially
    const basicsLink = page.locator('.sidebar-link.sub-item', { hasText: 'Vibe Coding Basics' });
    const demoLink = page.locator('.sidebar-link.sub-item', { hasText: 'Demo: Integrating a Local LLM' });
    
    await expect(basicsLink).toBeHidden();
    await expect(demoLink).toBeHidden();
    
    // Click to expand
    await vibeCodingHeader.click();
    
    // Subpages should now be visible
    await expect(basicsLink).toBeVisible();
    await expect(demoLink).toBeVisible();
    
    // Arrow should be rotated
    await expect(vibeCodingHeader).toHaveClass(/expanded/);
    
    // Click again to collapse
    await vibeCodingHeader.click();
    
    // Subpages should be hidden again
    await expect(basicsLink).toBeHidden();
    await expect(demoLink).toBeHidden();
  });

  test('Vibe Coding Basics link should navigate to correct page', async ({ page }) => {
    const vibeCodingHeader = page.locator('.sidebar-link.has-subpages:not(a)', { hasText: 'Vibe Coding' });
    await vibeCodingHeader.click();
    
    const basicsLink = page.locator('.sidebar-link.sub-item', { hasText: 'Vibe Coding Basics' });
    await basicsLink.click();
    
    // Should navigate to vibe-coding-reference.html
    await expect(page).toHaveURL(/vibe-coding-reference\.html$/);
    
    // Basics link should be highlighted as active
    await expect(basicsLink).toHaveClass(/active/);
  });

  test('Demo link should navigate to correct page', async ({ page }) => {
    const vibeCodingHeader = page.locator('.sidebar-link.has-subpages:not(a)', { hasText: 'Vibe Coding' });
    await vibeCodingHeader.click();
    
    const demoLink = page.locator('.sidebar-link.sub-item', { hasText: 'Demo: Integrating a Local LLM' });
    await demoLink.click();
    
    // Should navigate to llm-eval-intro.html
    await expect(page).toHaveURL(/llm-eval-intro\.html$/);
    
    // Demo link should be highlighted as active
    await expect(demoLink).toHaveClass(/active/);
  });

  test('Subpages should remain visible when on subpage', async ({ page }) => {
    const vibeCodingHeader = page.locator('.sidebar-link.has-subpages:not(a)', { hasText: 'Vibe Coding' });
    await vibeCodingHeader.click();
    
    const basicsLink = page.locator('.sidebar-link.sub-item', { hasText: 'Vibe Coding Basics' });
    await basicsLink.click();
    
    // After navigation, the active subpage should be visible
    await expect(basicsLink).toBeVisible();
    
    // Parent should show as expanded
    await expect(vibeCodingHeader).toHaveClass(/expanded/);
    
    // Basics link should be highlighted as active
    await expect(basicsLink).toHaveClass(/active/);
  });
});
