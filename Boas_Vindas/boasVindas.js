var botao = document.querySelector('input#botao')

botao.addEventListener('click', registroNome)

function registroNome() {
    var nome = prompt("Qual o seu nome?")

    var idade = prompt(`${nome} qual a sua idade?`)

    alert(`Ola ${nome}, tu tem ${idade} anus`)
}
