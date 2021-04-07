const lib = require('numero-por-extenso')

exports.identify= function(req, res){
    console.log(req.query.number)
    const numeroExtenso= lib.porExtenso(req.query.number)
    const result = JSON.stringify({"extenso": numeroExtenso})
    res.send(result)
    

}