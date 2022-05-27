import {modeloReserva} from '../models/reservaModelo.js '

export class ServicioReserva{
    constructor(){}

    async buscarTodos() {

        //esperar a que el modelo de datos hable con la base de datos y encuentre
        //la almaceno en una variable que seria habitaciones del modelo
        let reservas = await modeloReserva.find()
        return reservas


    }

    async buscarPorId(id)
    {
       
            let reserva = await modeloReserva.findById(id)
            return reserva
        
    }
    async crearServicio(datosPeticion){
            
        let creacionServicio = modeloReserva(datosPeticion)
            return(await creacionServicio.save())
            
    }
    async editar(id, datosPeticion) {
      
            return (await modeloReserva.findByIdAndUpdate(id, datosPeticion))
       
    }

    async eliminar(id) {
      
            return (await modeloReserva.findByIdAndDelete(id))
      
    }
}