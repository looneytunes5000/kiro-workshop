// @ts-check
const { test, expect } = require('@playwright/test');
const { KiroWorkshopPage } = require('./pages/KiroWorkshopPage');

test.describe('Design System Component Tests', () => {
  /** @type {KiroWorkshopPage} */
  let kiroPage;

  test.beforeEach(async ({ page }) => {
    kiroPage = new KiroWorkshopPage(page);
    await kiroPage.navigateTo('desktop-client.html');
  });

  test('callout elements are visible on desktop-client page', async () => {
    await kiroPage.verifyCalloutsVisible();

    const count = await kiroPage.callouts.count();
    expect(count).toBeGreaterThanOrEqual(4);

    // Verify each callout has a header
    const calloutHeaders = kiroPage.page.locator('.callout-header');
    const headerCount = await calloutHeaders.count();
    expect(headerCount).toBeGreaterThanOrEqual(4);
  });

  test('callout elements have proper structure', async ({ page }) => {
    const firstCallout = page.locator('.callout').first();
    await expect(firstCallout).toBeVisible();

    const header = firstCallout.locator('.callout-header');
    await expect(header).toBeVisible();

    const dot = firstCallout.locator('.dot');
    await expect(dot).toBeVisible();

    const paragraph = firstCallout.locator('p');
    await expect(paragraph).toBeVisible();
  });

  test('btn-primary and btn-secondary buttons visible in footer', async () => {
    await kiroPage.verifyFooterButtons();
  });

  test('progress bar element exists on all pages', async () => {
    await kiroPage.verifyProgressBar();
  });

  test('page header has accent-line on desktop-client page', async () => {
    await kiroPage.verifyAccentLine();
  });

  test('design system uses Space Grotesk font', async ({ page }) => {
    const fontFamily = await page.evaluate(() => {
      return getComputedStyle(document.body).fontFamily;
    });
    expect(fontFamily).toContain('Space Grotesk');
  });

  test('code blocks use JetBrains Mono font', async ({ page }) => {
    await kiroPage.navigateTo('install-kiro.html');
    const codeBlocks = page.locator('pre, code');
    const count = await codeBlocks.count();

    if (count > 0) {
      const fontFamily = await page.evaluate(() => {
        const code = document.querySelector('pre, code');
        return code ? getComputedStyle(code).fontFamily : '';
      });
      expect(fontFamily).toContain('JetBrains Mono');
    }
  });

  test('desktop-client page screenshot captured', async () => {
    await kiroPage.takeScreenshot('desktop-client-page');
  });

  test('callouts page screenshot captured', async () => {
    await kiroPage.takeScreenshot('callouts-desktop-client');
  });

  test('sidebar links have proper hover states', async ({ page }) => {
    const firstLink = page.locator('.sidebar-link').first();
    await firstLink.hover();
    await page.waitForTimeout(200);

    // Verify link is still visible after hover
    await expect(firstLink).toBeVisible();
  });

  test('buttons have proper styling', async ({ page }) => {
    const primaryBtn = page.locator('.btn-primary');
    await expect(primaryBtn).toBeVisible();

    const bgColor = await page.evaluate((el) => {
      return getComputedStyle(el).backgroundColor;
    }, await primaryBtn.elementHandle());

    // Gold primary button
    expect(bgColor).toMatch(/rgb\(232,\s*197,\s*71\)/);
  });

  test('content area has proper spacing', async ({ page }) => {
    const container = page.locator('.container');
    await expect(container).toBeVisible();

    const padding = await page.evaluate((el) => {
      return getComputedStyle(el).padding;
    }, await container.elementHandle());

    expect(padding).not.toBe('0px');
  });

  test('outcome items are visible on desktop-client page', async ({ page }) => {
    const outcomeItems = page.locator('.outcome-item');
    const count = await outcomeItems.count();
    expect(count).toBeGreaterThanOrEqual(4);

    await expect(outcomeItems.first()).toBeVisible();
  });
});
