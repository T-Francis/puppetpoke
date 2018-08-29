const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
    ]
});
const page = await browser.newPage();
await page.goto('https://example.com');
await page.screenshot({path: '/screenshots/get-started.png'});

await browser.close();

})();

console.log('seems this heavy app works');