let botao = document.querySelector('input#botao')

botao.addEventListener('click', devolveDinheiroTrocado)


function devolveDinheiroTrocado (){
    
    var produto = prompt("Que produto você esta comprando?")
    
    var valorProduto = prompt(`Quanto custa o ${produto} que você está comprando?`)

    var valorPago = prompt(`Qual foi o valor que você deu para pagar o ${produto}`)

    var troco = valorPago - valorProduto

    alert(`Você comprou o ${produto} que custou R$${valorProduto}, Pagou R$${valorPago} e vai receber R$${troco} de troco.`)

}