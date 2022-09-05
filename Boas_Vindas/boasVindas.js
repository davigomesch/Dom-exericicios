var botao = document.querySelector('input#botao')

botao.addEventListener('click',registroNome )


function registroNome(){

    var nome = prompt("Qual o seu nome?")



    var botao2 = document.querySelector('input#botao')

    botao2.addEventListener('click',registroIdade) 


    
}

function registroIdade(){

    var idade = (prompt(`Olá ${nome}, qual a sua idade?`))

}