let botaoclick = document.getElementById("botaotemperatura")

botaotemperatura.addEventListener('click', temperaturaConvertida )

function temperaturaConvertida(){
    let temperatura = prompt("Digite uma temperatura em C (celsius)")

    let conversorKelvin = temperatura = 273.15

    let conversorFahre = (temperatura * 9 / 5) + 32

    var adicionandoTexto = document.getElementById("newText")

    newText.innerText = `A temperatura de ${temperatura}ºC, corresponde a... 
    ${conversorKelvin}ºK (Kelvin)
    ${conversorFahre}ºF (Fahrenheit)`

}
