let botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    var nome = prompt("Qual é o seu nome?");

    var idade = prompt(`${nome} qual é a sua idade?`);

    alert(`Acabei de conhecer ${nome} que tem ${idade} anos de idade!`);
});