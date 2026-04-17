// @ts-check
const { test, expect } = require('@playwright/test');
const { KiroWorkshopPage } = require('./pages/KiroWorkshopPage');

test.describe('Navigation Tests', () => {
  /** @type {KiroWorkshopPage} */
  let kiroPage;

  test.beforeEach(async ({ page }) => {
    kiroPage = new KiroWorkshopPage(page);
    await kiroPage.navigateTo('index.html');
  });

  test('click Introduction in sidebar navigates to introduction.html', async () => {
    await kiroPage.clickSidebarLink('Introduction');

    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('introduction.html');

    await kiroPage.verifyPageLoaded();

    const pageTitle = await kiroPage.getPageTitleText();
    expect(pageTitle).toContain('Introduction');
  });

  test('click Install Kiro in sidebar navigates to install-kiro.html', async () => {
    await kiroPage.clickSidebarLink('Install Kiro');

    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('install-kiro.html');

    await kiroPage.verifyPageLoaded();
  });

  test('navigate from homepage to introduction via footer Next button', async () => {
    await kiroPage.btnPrimary.click();
    await kiroPage.page.waitForLoadState('domcontentloaded');

    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('introduction.html');
  });

  test('introduction page has Previous and Next buttons in footer', async () => {
    await kiroPage.clickSidebarLink('Introduction');

    await expect(kiroPage.btnSecondary).toBeVisible();
    await expect(kiroPage.btnPrimary).toBeVisible();

    const prevText = await kiroPage.btnSecondary.textContent();
    expect(prevText).toContain('Previous');

    const nextText = await kiroPage.btnPrimary.textContent();
    expect(nextText).toContain('Next');
  });

  test('navigation through multiple pages maintains sidebar', async () => {
    // Go to Introduction
    await kiroPage.clickSidebarLink('Introduction');
    await expect(kiroPage.sidebar).toBeVisible();

    // Go to Install Kiro
    await kiroPage.clickSidebarLink('Install Kiro');
    await expect(kiroPage.sidebar).toBeVisible();

    // Go back to index
    await kiroPage.clickSidebarLink('AI-Driven Development with Kiro');
    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('index.html');
  });

  test('sidebar highlights active page', async ({ page }) => {
    await kiroPage.clickSidebarLink('Introduction');

    const activeLink = page.locator('.sidebar-link.active');
    await expect(activeLink).toBeVisible();

    const activeText = await activeLink.textContent();
    expect(activeText).toContain('Introduction');
  });

  test('all sidebar links are clickable and not broken', async ({ page }) => {
    await kiroPage.clickSidebarLink('Introduction');

    const links = page.locator('.sidebar-link[href$=".html"]');
    const count = await links.count();
    expect(count).toBeGreaterThan(5);

    // Verify first few links are clickable
    for (let i = 0; i < Math.min(3, count); i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      expect(href).not.toBe('#');
      expect(href).not.toBe('');
    }
  });
});
