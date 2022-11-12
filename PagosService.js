let pagos = require("./pagos.json")
let request = require("axios")

const pagosGet = () =>{
    return pagos
}

const pagosSet = (pago) =>{
    if(pago.estado === "Aprobado"){
        const reserva = request.patch(
            "localhost:8084/reservas/estado",
            {"idreserva":pago.idreserva,"estadoReserva":"Confirmado"}

        ).then(
            console.log("RESERVA CONFIRMADA")
        )
        
    }
    pagos.push(pago)
    return pagos
}
const pagosDelete = (id) =>{
    console.log(pagos)
    pagos = pagos.filter((vuel)=>{
        return vuel.id != id
    }
    )
    console.log(pagos)
    return pagos
}

const pagosgetidExport = (id) =>{

    let pagos = pagos.find(

        (elemento)=>{
            return elemento.id === id
        }
    )

    return pagos
}

module.exports.pagosgetExport = pagosGet;
module.exports.pagosSetExport = pagosSet;
module.exports.pagosDeleteExport = pagosDelete;
module.exports.pagosgetidExport = pagosgetid;