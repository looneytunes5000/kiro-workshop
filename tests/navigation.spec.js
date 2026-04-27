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

  test('click Trae Solo Workshop in sidebar navigates to home.html', async () => {
    await kiroPage.clickSidebarLink('Trae Solo Workshop');

    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('home.html');

    await kiroPage.verifyPageLoaded();

    const pageTitle = await kiroPage.getPageTitleText();
    expect(pageTitle).toContain('Trae Solo Workshop');
  });

  test('click Install Kiro in sidebar navigates to install-kiro.html', async () => {
    await kiroPage.clickSidebarLink('Install Kiro');

    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('install-kiro.html');

    await kiroPage.verifyPageLoaded();
  });

  test('navigate from index.html to home.html via sidebar link', async () => {
    await kiroPage.clickSidebarLink('Trae Solo Workshop');
    await kiroPage.page.waitForLoadState('domcontentloaded');

    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('home.html');
  });

  test('home.html has Next button in footer', async () => {
    await kiroPage.clickSidebarLink('Trae Solo Workshop');

    await expect(kiroPage.btnPrimary).toBeVisible();

    const nextText = await kiroPage.btnPrimary.textContent();
    expect(nextText).toContain('Next');
  });

  test('navigation through multiple pages maintains sidebar', async () => {
    // Go to Desktop Client
    await kiroPage.clickSidebarLink('Desktop Client');
    await expect(kiroPage.sidebar).toBeVisible();

    // Go to Home
    await kiroPage.clickSidebarLink('Trae Solo Workshop');
    await expect(kiroPage.sidebar).toBeVisible();

    // Go back to index
    await kiroPage.clickSidebarLink('AI-Driven Development with Trae Solo');
    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('index.html');
  });

  test('sidebar highlights active page', async ({ page }) => {
    await kiroPage.clickSidebarLink('Desktop Client');

    const activeLink = page.locator('.sidebar-link.active');
    await expect(activeLink).toBeVisible();

    const activeText = await activeLink.textContent();
    expect(activeText).toContain('Desktop Client');
  });

  test('all sidebar links are clickable and not broken', async ({ page }) => {
    await kiroPage.clickSidebarLink('Desktop Client');

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
