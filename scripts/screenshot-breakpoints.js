const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const outDir = 'screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const breakpoints = [375, 390, 430, 768, 1024, 1366, 1440];
  const url = 'http://localhost:3000/';

  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();

    for (const w of breakpoints) {
      const height = Math.max(800, Math.round(w * 1.6));
      await page.setViewport({ width: w, height, deviceScaleFactor: 2 });
      // set mobile-like user agent for small widths
      if (w <= 430) {
        await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1');
      } else {
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
      }

      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      // scroll a bit to ensure lazy content loads
      await page.evaluate(() => window.scrollTo(0, 200));
      // Puppeteer versions vary; prefer waitForTimeout if available, else fallback
      if (typeof page.waitForTimeout === 'function') {
        await page.waitForTimeout(500);
      } else {
        await new Promise((r) => setTimeout(r, 500));
      }

      const file = `${outDir}/home-${w}.png`;
      await page.screenshot({ path: file, fullPage: true });
      console.log('Saved', file);
    }
  } catch (err) {
    console.error('Error capturing screenshots:', err);
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
})();