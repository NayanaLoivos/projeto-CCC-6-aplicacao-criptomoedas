const puppeteer = require('puppeteer');
const requireJS = require('./node_modules/requirejs/');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.binance.com/pt-BR/markets/coinInfo');

    // await page.content();

   const listaAbreviacaoCriptomeda = await page.evaluate(() => {
        /*Toda a função se executa no navegador.*/
        //Pegar os nomes e as cotações que virão da page já transformado em string
        const abreviacaoCriptomeda = document.getElementsByClassName('css-vlibs4')[0].children[0].children[0].children[1].children[0].innerHTML;
        console.log(abreviacaoCriptomeda);
        //Transformando em array
       const listaAbreviacaoCriptomeda = [...abreviacaoCriptomeda];
       console.log(listaAbreviacaoCriptomeda);
        //Colocar para fora da função
       return listaAbreviacaoCriptomeda;
    });

})();
