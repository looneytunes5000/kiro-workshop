const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const imgDir = path.join(__dirname, 'img');
  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1200, height: 900 } });
  const page = await context.newPage();
  
  console.log('Navigating to TRAE docs...');
  await page.goto('https://docs.trae.ai/ide/solo-mode?_lang=en', { waitUntil: 'load' });
  await page.waitForTimeout(5000);

  console.log('Taking light theme screenshots...');

  // Light: UI overview - viewport screenshot
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(imgDir, 'solo-mode-ui-overview-light.png') });
  console.log('Saved: solo-mode-ui-overview-light.png');

  // Light: DiffView section
  await page.evaluate(() => window.scrollTo(0, 2500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(imgDir, 'diffview-example-light.png') });
  console.log('Saved: diffview-example-light.png');

  // Light: Auto-fold collapsed
  await page.evaluate(() => window.scrollTo(0, 3500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(imgDir, 'auto-fold-collapsed-light.png') });
  console.log('Saved: auto-fold-collapsed-light.png');

  // Light: Auto-fold expanded - scroll a bit further and try to find expand button
  await page.evaluate(() => window.scrollTo(0, 3800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(imgDir, 'auto-fold-expanded-light.png') });
  console.log('Saved: auto-fold-expanded-light.png');

  // Try to switch to dark mode
  console.log('Switching to dark theme...');
  const darkToggle = await page.$('[class*="theme-toggle"], [class*="dark-toggle"], [data-state="light"]');
  if (darkToggle) {
    await darkToggle.click();
    await page.waitForTimeout(2000);
    console.log('Dark mode toggled');
  } else {
    console.log('No dark mode toggle found, using CSS injection');
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
      document.body.style.setProperty('background-color', '#0f0f0f')
      document.body.style.setProperty('color', '#e5e5e5');
    });
    await page.waitForTimeout(500);
  }

  // Dark screenshots
  console.log('Taking dark theme screenshots...');

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(imgDir, 'solo-mode-ui-overview-dark.png') });
  console.log('Saved: solo-mode-ui-overview-dark.png');

  await page.evaluate(() => window.scrollTo(0, 2500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(imgDir, 'diffview-example-dark.png') });
  console.log('Saved: diffview-example-dark.png');

  await page.evaluate(() => window.scrollTo(0, 3500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(imgDir, 'auto-fold-collapsed-dark.png') });
  console.log('Saved: auto-fold-collapsed-dark.png');

  await page.evaluate(() => window.scrollTo(0, 3800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(imgDir, 'auto-fold-expanded-dark.png') });
  console.log('Saved: auto-fold-expanded-dark.png');

  await browser.close();
  console.log('All screenshots complete!');
})();
