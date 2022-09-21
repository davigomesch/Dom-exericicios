// let botao = document.getElementById("botao");

// botao.addEventListener("click", () => {
//     var nome = prompt("Qual é o seu nome?");

//     var idade = prompt(`${nome} qual é a sua idade?`);

//     alert(`Acabei de conhecer ${nome} que tem ${idade} anos de idade!`);
// });

let botao1 = document.getElementById("botao1")
let botao2 = document.getElementById("botao2")
let botao3 = document.getElementById("botao3")

botao1.addEventListener("click",clicarPrimeiro)
botao2.addEventListener("click",clicarSegundo)
botao3.addEventListener("click",clicarTerceiro)

function clicarPrimeiro (){
     alert("Você clicou no primeiro botão")
}

function clicarSegundo (){
     alert("Você clicou no segundo botão")
}

function clicarTerceiro(){     
     alert("você clicou no terceiro botão")
}
