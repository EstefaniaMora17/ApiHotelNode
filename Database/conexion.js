//importo mogoose encargado de cerrar la conexion
import mongoose from "mongoose";

//esto es una funcon asincronica, donde haya un await tiene que ir un async
//
export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("EXITO conectados con BD")

    }catch(error){
        console.log("fallamos en la conexion con BD");
    }
}   