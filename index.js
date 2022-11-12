const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const pagosService = require("./PagosService.js")

const app = express()
const port = 8083


app.use(cors())
app.use(body_parse.json())

const pathName = "/pagos"


app.get(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req)
        res.send(pagosService.pagosgetExport())
    }
    )


app.post(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        let pagos = pagosService.pagosSetExport(req.body)
        res.send({"mensaje":"Pago Guardado","pagos":pagos})
}
)
app.delete(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        let id = req.query.id
        console.log(id)
        let pagos = pagosService.pagosDeleteExport(id)
        res.send({"mensaje":"pago Guardado","pagos":pagos})
}
)

app.put(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        res.send("Finalizada")
}
)

app.patch(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        res.send("Finalizada")
}
)

app.listen(port, 
    ()=>{
        console.log("Subio el app pago en el puerto "+port)
    }
)