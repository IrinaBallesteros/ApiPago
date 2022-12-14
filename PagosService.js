let request = require("axios")
const getMongo = require("./mongodb.js")


async function getConexiones() {
    const nameDb = "aerolineaG1y2"
    const client = await getMongo.getClientnExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}

const pagosGet = async (idclient) =>{
    const {collection, client} = await getConexiones()
    const pagos = collection.find({"idclient":idclient})
    const pagosList = await pagos.toArray()
    await getMongo.closeClientExport(client)
    return pagosList
}

const pagosSet = async (pago) =>{
    const {collection, client } = await getConexiones()
    if(pago.estado==="Aprobado"){
        const reserva= request.patch(
            "localhost:8084/reservas/estado",
            {"idreserva":pago.idreserva,"estadoReserva":"Confirmado"}
        ).then(
            console.log("RESERVA CONFIRMADA")
        )
    }
    await collection.insertOne(pago).then(
        (resp)=>{
            console.log("PAGO REGISTRADO")
        }
    )
    await getMongo.closeClientExport(client)
        return pago
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



module.exports.pagosgetExport = pagosGet;
module.exports.pagosSetExport = pagosSet;
module.exports.pagosDeleteExport = pagosDelete;
