const express = require('express')
const app = express()
const numberIdentify = require('./number-indetify')
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    const numeroIdentificado = numberIdentify.identificar(req.query.number)
    const jsonFinal = JSON.stringify({"extenso": numeroIdentificado})
    res.send(jsonFinal)
})
