import mongoose from "mongoose";

const Schema = mongoose.Schema

let Reserva = new Schema({
    fechaIn:{
        type:Date,
        required:true
    },
    fechafinal:{
        type:Date,
        required:true
    },
    idHabitacion:{
        type:String,
        required:true
    },
    costo:{
        type:Number,
        required:true
    },
    idCliente:{
        type:Number,
        required:true
    },
    numeroPersona:{
        type:Number,
        required:true
    }
})
export let modeloReserva = mongoose.model('reservas',Reserva)