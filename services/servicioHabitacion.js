import { modeloHabitacion } from '../models/HabitacionModelo.js'

export class ServicioHabitacion {
    constructor() { }

    async buscarTodos() {

        //esperar a que el modelo de datos hable con la base de datos y encuentre
        //la almaceno en una variable que seria habitaciones del modelo
        let habitaciones = await modeloHabitacion.find()
        return habitaciones


    }

    async buscarPorId(id) {

        let habitacion = await modeloHabitacion.findById(id)
        return habitacion

    }

    async registar(datosPeticion) {

        //garantizo que tengo un esquema asociado a lo que quiero poner 
        let habitacionRegistar = new modeloHabitacion(datosPeticion)
        //guardo los datos
        return (await habitacionRegistar.save())

    }

    async editar(id, datosPeticion) {
        return (await modeloHabitacion.findByIdAndUpdate(id, datosPeticion))

    }

    async eliminar(id) {

        return (await modeloHabitacion.findByIdAndDelete(id))

    }
}