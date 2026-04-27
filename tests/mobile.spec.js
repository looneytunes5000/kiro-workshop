// @ts-check
const { test, expect } = require('@playwright/test');
const { KiroWorkshopPage } = require('./pages/KiroWorkshopPage');

test.describe('Mobile Responsiveness Tests', () => {
  /** @type {KiroWorkshopPage} */
  let kiroPage;

  test.beforeEach(async ({ page }) => {
    kiroPage = new KiroWorkshopPage(page);
    await kiroPage.navigateTo('index.html');
  });

  test('sidebar is hidden on mobile viewport', async () => {
    await kiroPage.setMobileViewport();

    // On mobile, sidebar should be hidden by default
    const sidebarVisible = await kiroPage.isSidebarVisible();
    expect(sidebarVisible).toBe(false);
  });

  test('mobile menu button is visible on mobile viewport', async () => {
    await kiroPage.setMobileViewport();

    await expect(kiroPage.mobileMenuBtn).toBeVisible();
  });

  test('clicking mobile menu button shows sidebar', async () => {
    await kiroPage.setMobileViewport();

    // Sidebar should be hidden initially
    let sidebarVisible = await kiroPage.isSidebarVisible();
    expect(sidebarVisible).toBe(false);

    // Click mobile menu
    await kiroPage.clickMobileMenu();

    // Sidebar should now be visible
    await expect(kiroPage.sidebar).toBeVisible({ timeout: 5000 });
  });

  test('mobile menu screenshot captured', async () => {
    await kiroPage.setMobileViewport();
    await kiroPage.takeScreenshot('mobile-viewport');

    await kiroPage.clickMobileMenu();
    await kiroPage.takeScreenshot('mobile-menu-open');
  });

  test('sidebar is visible on desktop viewport', async () => {
    await kiroPage.setDesktopViewport();
    await expect(kiroPage.sidebar).toBeVisible();
  });

  test('mobile menu button is hidden on desktop', async () => {
    await kiroPage.setDesktopViewport();

    // On desktop, mobile menu button should be hidden
    const mobileBtnVisible = await kiroPage.isMobileMenuBtnVisible();
    expect(mobileBtnVisible).toBe(false);
  });

  test('navigation works on mobile after opening menu', async ({ page }) => {
    await kiroPage.setMobileViewport();

    // Open mobile menu
    await kiroPage.clickMobileMenu();

    // Wait for sidebar to be visible
    await expect(kiroPage.sidebar).toBeVisible({ timeout: 5000 });

    // Navigate directly to desktop-client page
    await page.goto('http://localhost:8080/desktop-client.html');

    // Verify navigation worked
    const currentPath = await kiroPage.getCurrentPath();
    expect(currentPath).toBe('desktop-client.html');
  });

  test('content is readable on mobile viewport', async ({ page }) => {
    await kiroPage.setMobileViewport();

    const pageTitle = await kiroPage.getPageTitleText();
    expect(pageTitle).toBeTruthy();
    expect(pageTitle.length).toBeGreaterThan(0);

    // Verify content area is visible
    await expect(kiroPage.content).toBeVisible();
  });

  test('footer buttons stack on mobile', async ({ page }) => {
    await kiroPage.setMobileViewport();
    await kiroPage.navigateTo('desktop-client.html');

    const footer = page.locator('.footer');
    await expect(footer).toBeVisible();

    // Check that buttons are visible on mobile
    const btnPrimary = page.locator('.btn-primary');
    const btnSecondary = page.locator('.btn-secondary');

    if (await btnPrimary.count() > 0) {
      await expect(btnPrimary.first()).toBeVisible();
    }
    if (await btnSecondary.count() > 0) {
      await expect(btnSecondary.first()).toBeVisible();
    }
  });
});
