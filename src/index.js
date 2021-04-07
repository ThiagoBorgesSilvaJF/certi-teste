const express = require('express')
const app = express()
const numberIdentify = require('./number-indetify')
const port = 3000

app.get('/', (req, res) => {
   numberIdentify.identify(req, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})