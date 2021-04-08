const numberIdentify = require('../src/number-indetify')

console.log("iniciando testes")
for(i=1; i<10000; i++){
    console.log(`Número: ${i} por extenso ${numberIdentify.identificar(i)}`)
}
console.log("finalizando testes")
