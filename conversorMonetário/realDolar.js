let botaozinho = document.getElementById("botaozinho")

botaozinho.addEventListener('click', convertendoMoedas)

function convertendoMoedas(){
    let valorMoeda = prompt("Quantos R$ você tem na carteira, pobre?")

    let dolarHoje = 0.19

    let contaReal = valorMoeda * dolarHoje

    var adicionandoTexto = document.getElementById("textomoeda")

    textomoeda.innerText = `HOJE VOCÊ CONSEGUE COMPRAR ${contaReal}$ DOLARES`

}