let botaoConversor = document.getElementById("botaoConversao")

botaoConversor.addEventListener('click', convertendoMedidas)

function convertendoMedidas(){
    let numeroMedida = prompt("Digite uma distância em metros (m)")

    let textoNovo = document.getElementById("texto2")

    
    

    var convertToKM = numeroMedida / 1000
    
    var convertToHM = numeroMedida / 100
        
    var convertToDAM = numeroMedida / 10
        
    var convertToDM = numeroMedida * 10
            
    var convertToCM = numeroMedida * 100
        
    var convertToMM = numeroMedida * 1000

    var adicionandoText = document.getElementById("texto2")

    //texto2.innerText = `A distancia de ${numeroMedida} metros, corresponde a...
    textoNovo.innerHTML = `<h1>A distância de ${numeroMedida} corresponde a...</h1>
    <p>${convertToKM} quilômetros(km)</p> 
    <p>${convertToHM} hectômetros(hm)</p> 
    <p>${convertToDAM} decâmetros(dam)</p> 
    <p>${convertToDM} decímetros(dm)</p> 
    <p>${convertToCM} centímetros(cm)</p> 
    <p>${convertToMM} milímetros(mm)</p>` 
}



