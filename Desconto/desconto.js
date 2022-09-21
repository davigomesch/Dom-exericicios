let botaoclick = document.getElementById("botao")

botaoclick.addEventListener('click', descontandoValor)

function descontandoValor(){
    let produtoNome = prompt("Qual é o produto que você está comprando?")

    let valorProduto = prompt(`Qual o preço do ${produtoNome}?`)

    var calculoPorcentagem = valorProduto / 10

    var descontoCalculado = valorProduto - calculoPorcentagem

    let adicionandoText = document.getElementById("textoNovo")

    textoNovo.innerText = `Você pagou ${valorProduto} no ${produtoNome}, e com desconto ele ficou ${descontoCalculado} reais`

}