const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://api-testnet.bybit.com/v2/public/tickers');

    await page.content();

    const jsonObject = await page.evaluate(() =>  {
            return JSON.parse(document.querySelector("body").innerText);
    })

    let bodyText = jsonObject.result[0].mark_price;
    console.log(bodyText)
    await browser.close();
})();