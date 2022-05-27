import mongoose from "mongoose";

const Schema = mongoose.Schema

let Habitacion = new Schema({
    idHabitacion:{
        type:Number,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    foto:{
        type:String,
        required:true
    }
})

//creo finalmente el modelo de datos 
export let modeloHabitacion = mongoose.model('habitaciones',Habitacion)