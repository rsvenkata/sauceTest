const { chromium, firefox, webkit } = require('playwright');

(async () => {
  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('https://www.bbc.com');
  console.log(await page.title());
  // other actions...
  await browser.close();
})();