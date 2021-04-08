const lib = require('numero-por-extenso')

function identificarUnidade(numero) {
   // console.log("A unidade é: ", numero)
    switch (numero) {
        case "1":
           return "um"
        case "2":
            return "dois"
        case "3":
            return "tres"
        case "4":
            return "quatro"
        case "5":
            return "cinco"
        case "6":
            return "seis"
        case "7":
            return "sete"
        case "8":
            return "oito"
        case "9":
            return "nove"
        default: 
            return ""
    }
} 

function identificarDezena(numero) {
    //console.log("A dezena é: ", numero)
    switch (numero) {
        case "1":
           return "dez"
        case "2":
            return "vinte"
        case "3":
            return "trinta"
        case "4":
            return "quarenta"
        case "5":
            return "cinquenta"
        case "6":
            return "sessenta"
        case "7":
            return "setenta"
        case "8":
            return "oitenta"
        case "9":
            return "noventa"
        default:
            return ""
    }
}

function identificarCentena(numero) {
  // console.log("A centena é: ", numero)
    switch (numero) {
        case "1":
           return "cento"
        case "2":
            return "duzentos"
        case "3":
            return "trezentos"
        case "4":
            return "quatrocentos"
        case "5":
            return "quinhentos"
        case "6":
            return "seiscentos"
        case "7":
            return "setecentos"
        case "8":
            return "oitocentos"
        case "9":
            return "novecentos"
        default:
            return ""
    }
}


function identificarMilhar(numero) {
   // console.log("O milhar é: ", numero)
   
    const milhar = identificarUnidade(numero)
    return `${milhar} mil`
   
}

// Buscar uma maneira de evitar essa gambiarra
function identificarDezenaDez(numero) {
    switch (numero) {
        case "1":
           return "onze"
        case "2":
            return "doze"
        case "3":
            return "treze"
        case "4":
            return "quatorze"
        case "5":
            return "quinze"
        case "6":
            return "dezesseis"
        case "7":
            return "dezessete"
        case "8":
            return "dezoito"
        case "9":
            return "dezenove"
        default:
            return "dez"
    }
}
exports.identificar = function(numero) {
    // Essa é nossa lógica própria
  
    // Corrigir para ir do mil, o milhar chama centena, centena chama dezena , dezenha chamada unidade
    


    const arrayDigitos = (""+numero).split("")
    const arrayDigitosLength = arrayDigitos.length
    let porExtenso = ""
    let dezenaDez = false
    for (let i = 0; i < arrayDigitosLength ; i++) {
        
        const casaDecimal = arrayDigitosLength - i 
        switch (casaDecimal) {
            case 6:
               // console.log("Centena de milhar: ", arrayDigitos[i])
                porExtenso=identificarCentena(arrayDigitos[i])
                break
            case 5:
              //  console.log("Dezena de milhar: ", arrayDigitos[i])
                porExtenso = porExtenso.length >= 1 ? `${porExtenso} e`: `${porExtenso}`
                porExtenso = `${porExtenso} ${identificarDezena(arrayDigitos[i])}`
                break
            case 4:
              //  console.log("milhar: ", arrayDigitos[i])
                porExtenso = `${porExtenso} ${identificarUnidade(arrayDigitos[i])} mil`

                break
            case 3:
              //  console.log("Centena: ", arrayDigitos[i])
                const centena = identificarCentena(arrayDigitos[i])
                porExtenso = `${porExtenso}${centena.length > 0 ? " ":""}${identificarCentena(arrayDigitos[i])}`
                break           
            case 2:
                let dezena = ""
                if (arrayDigitos[i] == "1" ) {
                    dezena = identificarDezenaDez(arrayDigitos[i+1])
                    porExtenso = porExtenso.length >= 1  && dezena.length > 0  ? `${porExtenso} e`: `${porExtenso}`
                    porExtenso = `${porExtenso}${dezena.length > 0 ? " ":""}${dezena}`
                    dezenaDez = true
                } else {
                    dezena = identificarDezena(arrayDigitos[i])
                    porExtenso = porExtenso.length >= 1  && dezena.length > 0  ? `${porExtenso} e`: `${porExtenso}`
                    porExtenso = `${porExtenso}${dezena.length > 0 ? " ":""}${dezena}`
                    dezenaDez = false
                }
                break
            case 1:
                if ( !dezenaDez ){
                    //console.log("Unidade: ", arrayDigitos[i])
                    const unidade = identificarUnidade(arrayDigitos[i])
                    porExtenso = porExtenso.length >= 1 && unidade.length > 0  ? `${porExtenso} e`: `${porExtenso}`
                    porExtenso = `${porExtenso} ${unidade}`
                }
                break         
        }
    }
    
   /*const unidade = numero % 10
    const centena = Math.floor(numero / 100)
    const milhar = Math.floor(numero / 1000)
    if(centena == 0 && dezena == 1 ){
        gambiarra(unidade)
    } else {
      //  return `${identificarMilhar(milhar)} ${identificarCentena(centena)} ${identificarDezena(dezena)} ${identificarUnidade(unidade)}`
      const resultado = `${identificarCentena(centena)} ${identificarDezena(dezena)} ${identificarUnidade(unidade)}`
      if (resultado.endsWith("dez um")
       || resultado.endsWith("dez dois")
       || resultado.endsWith("dez tres")
       || resultado.endsWith("dez quatro")
       || resultado.endsWith("dez cinco")
       || resultado.endsWith("dez seis")
       || resultado.endsWith("dez sete")
       || resultado.endsWith("dez oito")
       || resultado.endsWith("dez nove") ) {
          return  `${identificarCentena(centena)} ${gambiarra(unidade)} `
      } else {
          return resultado
      }
    
    }*/
    return porExtenso
    
    // Esta é a lib que faz nosso objetivo, descomente para usar
    // return lib.porExtenso(numero)

}


/**
 * 1 um
 * 2 dois
 * 10 dez
 * 100 cem
 * 200 duzentos
 * 1000 mil
 * 2000 dois mil
 * -1 menos 1
 **/