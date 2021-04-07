const lib = require('numero-por-extenso')

function identificarUnidade(numero) {
    console.log("A unidade é: ", numero)
    switch (numero) {
        case 1:
           return "um"
        case 2:
            return "dois"
        case 3:
            return "tres"
        case 4:
            return "quatro"
        case 5:
            return "cinco"
        case 6:
            return "seis"
        case 7:
            return "sete"
        case 8:
            return "oito"
        case 9:
            return "nove"
        default: 
            return ""
    }
} 

function identificarDezena(numero) {
    console.log("A dezena é: ", numero)
    switch (numero) {
        case 1:
           return "dez"
        case 2:
            return "vinte"
        case 3:
            return "trinta"
        case 4:
            return "quarenta"
        case 5:
            return "cinquenta"
        case 6:
            return "sessenta"
        case 7:
            return "setenta"
        case 8:
            return "oitenta"
        case 9:
            return "noventa"
        default:
            return ""
    }
}

exports.identificar = function(numero) {
    // Essa é nossa lógica própria
    const dezena = Math.floor(numero / 10)
    const unidade = numero % 10
    if( dezena == 1 ){
        switch (unidade) {
            case 1:
               return "onze"
            case 2:
                return "doze"
            case 3:
                return "treze"
            case 4:
                return "quatorze"
            case 5:
                return "quinze"
            case 6:
                return "dezesseis"
            case 7:
                return "dezessete"
            case 8:
                return "dezoito"
            case 9:
                return "dezenove"
            default:
                return "dez"
        }
    } else {
        return `${identificarDezena(dezena)} ${identificarUnidade(unidade)}`
    }
    
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