const numberIdentify = require('../src/number-indetify')

console.log("iniciando testes")
for(i=-1000000; i<1000000; i++){
    console.log(`Número: ${i} por extenso ${numberIdentify.identificar(i)}`)
}
console.log("finalizando testes")
