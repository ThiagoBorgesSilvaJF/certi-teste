const numberIdentify = require('../src/number-indetify')

console.log("iniciando testes")
for(i=-1100; i<101; i++){
    console.log(`Número: ${i} por extenso ${numberIdentify.identificar(i)}`)
}
console.log("finalizando testes")
