(async() => {
    //abrir o arquivo de dados (json)
    const response = await fetch('./criptomoedas.json');
    const data = await response.json();
    const container = document.querySelector('.container')

    //formatar os dados para enviar para o html

     //colocar no html
    for (let i = 0; i < data.length; i++) {
        let estruturaDiv = document.createElement('div');
        estruturaDiv.innerHTML =
            `<div class="">
                <h2>${data[i].criptomoeda}</h2>
                <h3>${data[i].preco}</h3>
            </div>`;
        container.append(estruturaDiv);
    }
}  )();
