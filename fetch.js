(async() => {
    //abrir o arquivo de dados (json)
    const respose = await fetch('./criptomoedas.json');
    const data = await respose.json();

    //formatar os dados para enviar para o html
     let htmlList;
     htmlList = data.map((abv) => {
         return {abreviacaoCriptomoeda: abv, preco: 56};
     });


     //colocar no html
     document.querySelector('.container').innerHTML = htmlList;
}  )();
