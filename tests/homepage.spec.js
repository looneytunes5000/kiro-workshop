// @ts-check
const { test, expect } = require('@playwright/test');
const { KiroWorkshopPage } = require('./pages/KiroWorkshopPage');

test.describe('Homepage Tests', () => {
  /** @type {KiroWorkshopPage} */
  let kiroPage;

  test.beforeEach(async ({ page }) => {
    kiroPage = new KiroWorkshopPage(page);
    await kiroPage.navigateTo('index.html');
  });

  test('homepage loads with correct title containing Kiro', async () => {
    const docTitle = await kiroPage.getDocumentTitle();
    expect(docTitle).toContain('Kiro');

    const pageTitle = await kiroPage.getPageTitleText();
    expect(pageTitle).toContain('Kiro');
  });

  test('sidebar navigation is visible', async () => {
    await expect(kiroPage.sidebar).toBeVisible();
    await expect(kiroPage.sidebarHeader).toBeVisible();

    const sidebarText = await kiroPage.sidebarHeader.textContent();
    expect(sidebarText).toContain('Kiro Workshop');
  });

  test('page header with AI-Driven Development with Kiro is visible', async () => {
    await expect(kiroPage.pageHeader).toBeVisible();

    const h1Text = await kiroPage.pageTitle.textContent();
    expect(h1Text).toContain('AI-Driven Development');
    expect(h1Text).toContain('Kiro');
  });

  test('accent-line element exists and is visible', async () => {
    await kiroPage.verifyAccentLine();
  });

  test('progress bar element exists', async () => {
    await kiroPage.verifyProgressBar();
  });

  test('main content area is visible', async () => {
    await expect(kiroPage.mainContent).toBeVisible();
    await expect(kiroPage.content).toBeVisible();
  });

  test('footer with next button is visible', async () => {
    await expect(kiroPage.navigationButtons).toBeVisible();
    await expect(kiroPage.btnPrimary).toBeVisible();

    const btnText = await kiroPage.btnPrimary.textContent();
    expect(btnText).toContain('Next');
  });

  test('sidebar contains expected navigation links', async () => {
    const links = await kiroPage.getSidebarLinkTexts();
    expect(links.some(l => l.includes('Introduction'))).toBe(true);
    expect(links.some(l => l.includes('Install Kiro'))).toBe(true);
    expect(links.some(l => l.includes('Kiro Overview'))).toBe(true);
    expect(links.some(l => l.includes('Steering'))).toBe(true);
    expect(links.some(l => l.includes('Agent Hooks'))).toBe(true);
  });

  test('homepage screenshot captured', async ({ page }) => {
    await kiroPage.takeScreenshot('homepage-desktop');
    await expect(kiroPage.pageHeader).toBeVisible();
  });

  test('skip navigation link is present for accessibility', async () => {
    await expect(kiroPage.skipNav).toBeVisible();
  });

  test('page uses Deep Navy + Gold design system colors', async ({ page }) => {
    const bgColor = await page.evaluate(() => {
      return getComputedStyle(document.body).backgroundColor;
    });
    // Deep Navy background: rgb(11, 17, 32)
    expect(bgColor).toMatch(/rgb\(11,\s*17,\s*32\)/);
  });
});
