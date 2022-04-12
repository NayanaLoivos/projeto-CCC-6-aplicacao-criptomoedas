const requireJS = require('./node_modules/requirejs/');
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.binance.com/pt-BR/markets/coinInfo');

   const listaAbreviacaoCriptomeda = await page.evaluate(() => {
       /*Toda a função se executa no navegador.*/

       //Pegar os nomes, abreviações e as cotações que virão da page já transformados em array
       const itens = document.getElementsByClassName('css-vlibs4');

       let arrayItens=[];

       for(let i = 0; i < itens.length; i++) {
           arrayItens[i] = document.getElementsByClassName('css-vlibs4')[0 + i].children[0].children[0].children[1].children[0].innerHTML;
       }

       let object = [];
       //Unindo as informações de nome, abreviação e cotação em um objeto
       for(let i = 0; i < arrayItens.length; i++) {
           object[i] = criptomoedas = {
               criptomoeda: arrayItens[i],
               preco: 56
           }
       }

       //Colocar para fora da função
       return (object);
    });

   //Escrever os dados num arquivo local (json)
   fs.writeFile('criptomoedas.json', JSON.stringify(listaAbreviacaoCriptomeda, null, 2), err => {
        if(err) throw new Error('Something went wrong');

        console.log('Well done!');
   })

   await browser.close();
})();
