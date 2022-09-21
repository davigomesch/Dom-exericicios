let botao = document.querySelector('input#botao')

botao.addEventListener('click', registroNome)

function registroNome() {
    let a = prompt("Qual é o valor de a?")
    let b = prompt("Qual é o valor de b?")
    let c = prompt("Qual é o valor de c?")

    document.getElementById("enunciado").style.visibility = "hidden";

    let equacaoAtualTexto = `${a}x^2 + ${b}x + ${c} = 0`
    let deltaTexto = `TRIANGULO = ${b}^2 - 4 . ${a} . ${c}`
    let delta = calculaDelta(a, b, c)

    insereTextoFinal(equacaoAtualTexto, deltaTexto, delta)

}

function calculaDelta(a, b, c) {
    return (b ** 2) - (4 * a * c)
}

function insereTextoFinal(equacaoAtualTexto, deltaTexto, delta) {

    const tag = document.createElement("p");

    const conteudo = document.createTextNode(
        `A equação atual é ${equacaoAtualTexto} 
        O calculo realizado será ${deltaTexto} 
        O valor calculado foi DELTA = ${delta}
        `
    );

    tag.appendChild(conteudo);

    document.getElementById("tagGeral").appendChild(tag);

}

// uni - U+25B2
// html - &#9650