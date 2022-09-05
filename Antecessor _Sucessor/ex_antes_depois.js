 var botao = document.querySelector('input#botao')

botao.addEventListener('click', calcular)

 function calcular(){
    var numero =  Number(prompt("Digite um Número"))

    let antecessor = numero - 1 
    let sucessor =  numero + 1

    let resposta = alert (`Antes do ${numero}, temos o ${antecessor}.
Depois do ${numero}, temos o ${sucessor}.`) 
 }