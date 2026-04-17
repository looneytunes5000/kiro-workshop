// @ts-check
const { expect } = require('@playwright/test');

/**
 * Page Object Model for Kiro Workshop website
 * Encapsulates all page interactions and assertions
 */
class KiroWorkshopPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Core elements
    this.pageHeader = page.locator('.page-header');
    this.pageTitle = page.locator('h1');
    this.accentLine = page.locator('.accent-line');
    this.progressBar = page.locator('.progress-bar');
    this.skipNav = page.locator('.skip-nav');
    this.mobileMenuBtn = page.locator('.mobile-menu-btn');

    // Sidebar elements
    this.sidebar = page.locator('.sidebar');
    this.sidebarHeader = page.locator('.sidebar-header h2');
    this.sidebarLinks = page.locator('.sidebar-link');
    this.sidebarBackdrop = page.locator('.sidebar-backdrop');

    // Content elements
    this.content = page.locator('.content');
    this.container = page.locator('.container');
    this.callouts = page.locator('.callout');
    this.mainContent = page.locator('#main-content');

    // Footer elements
    this.navigationButtons = page.locator('.navigation-buttons');
    this.btnPrimary = page.locator('.btn-primary');
    this.btnSecondary = page.locator('.btn-secondary');

    // Code elements
    this.codeBlocks = page.locator('pre, code');
  }

  /**
   * Navigate to a specific page
   * @param {string} pagePath - e.g., 'index.html'
   */
  async navigateTo(pagePath) {
    await this.page.goto(`/${pagePath}`, { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Get the current page URL pathname
   */
  async getCurrentPath() {
    const url = this.page.url();
    return new URL(url).pathname.split('/').pop();
  }

  /**
   * Get the page title text
   */
  async getPageTitleText() {
    return await this.pageTitle.textContent();
  }

  /**
   * Get the document title
   */
  async getDocumentTitle() {
    return await this.page.title();
  }

  /**
   * Click a sidebar link by its text content
   * @param {string} linkText
   */
  async clickSidebarLink(linkText) {
    const link = this.sidebarLinks.filter({ hasText: linkText }).first();
    // On mobile, the backdrop might intercept clicks, so force click
    await link.click({ force: true });
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Click the mobile menu button
   */
  async clickMobileMenu() {
    await this.mobileMenuBtn.click();
    await this.page.waitForTimeout(500);
  }

  /**
   * Check if sidebar is visible
   */
  async isSidebarVisible() {
    return await this.sidebar.isVisible();
  }

  /**
   * Check if mobile menu button is visible
   */
  async isMobileMenuBtnVisible() {
    return await this.mobileMenuBtn.isVisible();
  }

  /**
   * Resize viewport to mobile dimensions
   */
  async setMobileViewport() {
    await this.page.setViewportSize({ width: 375, height: 667 });
    await this.page.waitForTimeout(200);
  }

  /**
   * Reset to desktop viewport
   */
  async setDesktopViewport() {
    await this.page.setViewportSize({ width: 1280, height: 720 });
    await this.page.waitForTimeout(200);
  }

  /**
   * Take a screenshot
   * @param {string} name
   */
  async takeScreenshot(name) {
    await this.page.screenshot({
      path: `test-results/screenshots/${name}.png`,
      fullPage: true,
    });
  }

  /**
   * Get console errors from the page
   */
  async getConsoleErrors() {
    const errors = [];
    this.page.on('pageerror', (error) => {
      errors.push(error.message);
    });
    this.page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    return errors;
  }

  /**
   * Verify page loaded successfully
   */
  async verifyPageLoaded() {
    await expect(this.pageHeader).toBeVisible();
    await expect(this.pageTitle).toBeVisible();
  }

  /**
   * Verify accent line exists
   */
  async verifyAccentLine() {
    await expect(this.accentLine).toBeVisible();
  }

  /**
   * Verify progress bar exists
   */
  async verifyProgressBar() {
    await expect(this.progressBar).toBeVisible();
  }

  /**
   * Verify callouts are visible
   */
  async verifyCalloutsVisible() {
    const count = await this.callouts.count();
    expect(count).toBeGreaterThan(0);
    await expect(this.callouts.first()).toBeVisible();
  }

  /**
   * Verify footer buttons are visible
   */
  async verifyFooterButtons() {
    const primaryCount = await this.btnPrimary.count();
    const secondaryCount = await this.btnSecondary.count();
    // At least one of the buttons should be visible
    if (primaryCount > 0) {
      await expect(this.btnPrimary.first()).toBeVisible();
    }
    if (secondaryCount > 0) {
      await expect(this.btnSecondary.first()).toBeVisible();
    }
  }

  /**
   * Get all sidebar link texts
   */
  async getSidebarLinkTexts() {
    return await this.sidebarLinks.allTextContents();
  }

  /**
   * Check if a specific sidebar link exists
   * @param {string} text
   */
  async hasSidebarLink(text) {
    const count = await this.sidebarLinks.filter({ hasText: text }).count();
    return count > 0;
  }
}

module.exports = { KiroWorkshopPage };
