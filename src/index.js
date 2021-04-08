const express = require('express')
const app = express()
const numberIdentify = require('./number-indetify')
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    const numeroIdentificado = numberIdentify.identificar(req.query.number)
    let jsonFinal = ""
    if(numeroIdentificado && parseInt(req.query.number)){
        jsonFinal = JSON.stringify({"extenso": numeroIdentificado})
        res.status(200).send(jsonFinal)
    } else {
        jsonFinal = JSON.stringify({"erro": "Programa válido apenas para números entre -999999 e 999999"})
        res.status(400).send(jsonFinal)
    }
})
