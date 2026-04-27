// @ts-check
const { test, expect } = require('@playwright/test');
const { KiroWorkshopPage } = require('./pages/KiroWorkshopPage');

// All 21 production pages to test (5 archived pages removed)
const ALL_PAGES = [
  'index.html',
  'install-kiro.html',
  'take-kiro-home.html',
  'authenticate-builder-id.html',
  'kiro-overview.html',
  'deploy-backend.html',
  'commenting-feature.html',
  'deployment-troubleshooting.html',
  'mcp-integration.html',
  'opencode.html',
  'opencode-web-ui.html',
  'wrapping-up.html',
];

test.describe('All Pages Load Tests', () => {
  /** @type {KiroWorkshopPage} */
  let kiroPage;

  test.beforeEach(async ({ page }) => {
    kiroPage = new KiroWorkshopPage(page);
  });

  for (const pagePath of ALL_PAGES) {
    test(`${pagePath} loads with 200 status and page-header`, async ({ page }) => {
      // Track console errors
      const consoleErrors = [];
      page.on('pageerror', (error) => {
        consoleErrors.push(error.message);
      });
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      // Navigate to page
      const response = await page.goto(`/${pagePath}`, {
        waitUntil: 'domcontentloaded',
      });

      // Verify HTTP 200
      expect(response.status()).toBe(200);

      // Verify page-header element exists
      await expect(kiroPage.pageHeader).toBeVisible({ timeout: 5000 });

      // Verify page title is not empty
      const pageTitle = await kiroPage.getPageTitleText();
      expect(pageTitle).toBeTruthy();
      expect(pageTitle.length).toBeGreaterThan(0);

      // Verify progress bar exists
      await expect(kiroPage.progressBar).toBeVisible();

      // Report any console errors (but don't fail the test for warnings)
      if (consoleErrors.length > 0) {
        console.log(`  Console errors on ${pagePath}:`, consoleErrors);
      }
    });
  }

  test('all pages have sidebar navigation', async ({ page }) => {
    for (const pagePath of ALL_PAGES) {
      await kiroPage.navigateTo(pagePath);
      await expect(kiroPage.sidebar).toBeVisible({ timeout: 5000 });

      const sidebarHeader = page.locator('.sidebar-header h2');
      await expect(sidebarHeader).toBeVisible();
    }
  });

  test('all pages have footer navigation buttons', async ({ page }) => {
    // All pages have navigation buttons
    for (const pagePath of ALL_PAGES) {
      await kiroPage.navigateTo(pagePath);
      // Scroll to bottom to ensure navigation buttons are visible
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(300);
      await expect(kiroPage.navigationButtons).toBeVisible({ timeout: 5000 });
    }
  });

  test('all pages have consistent design system', async ({ page }) => {
    for (const pagePath of ALL_PAGES) {
      await kiroPage.navigateTo(pagePath);

      // Verify accent line
      await expect(kiroPage.accentLine).toBeVisible({ timeout: 5000 });

      // Verify body background color (Deep Navy)
      const bgColor = await page.evaluate(() => {
        return getComputedStyle(document.body).backgroundColor;
      });
      expect(bgColor).toMatch(/rgb\(11,\s*17,\s*32\)/);
    }
  });
});
