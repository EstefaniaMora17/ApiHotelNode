import { ServicioReserva } from "../services/servicioReserva.js"
import { ServicioHabitacion } from "../services/servicioHabitacion.js"
export class ControladorReserva {


    constructor() { }




    //metodos de una clase
    async buscarTodos(request, response) {

        let servicio = new ServicioReserva()
        try {

            response.status(200).json({
                mensaje: "Exito en la busqueda",
                data: await servicio.buscarTodos(),
                estado: true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "upss" + error,
                data: [],
                estado: false
            })

        }
    }

    async buscarPorId(request, response) {

        let servicio = new ServicioReserva()
        let id = request.params.id
        try {

            response.status(200).json({
                mensaje: "Exito en la busqueda por id: " + id,
                // data:await servicio.buscarPorId(id),
                data: await servicio.buscarPorId(id),
                estado: true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "upss" + error,
                data: [],
                estado: false
            })

        }
    }

    async crearServicio(request, response) {

        let servicio = new ServicioReserva()
        let servicioHabitacion = new ServicioHabitacion();
        let peticionCliente = request.body
      
        try {
            //capturo el id que de la habitacion 
            let habitacion = await servicioHabitacion.buscarPorId(peticionCliente.idHabitacion);
            let fechaIn = new Date(peticionCliente.fechaIn);
            let fechafinal = new Date(peticionCliente.fechafinal);
            
            let diferencia = Math.abs(fechafinal - fechaIn );
            let dias= diferencia / (1000 * 3600 * 24);
            let costo = dias * habitacion.precio

            peticionCliente.costo = costo
            //enviar la respuesta del cliente al metodo registar
            let datosrespuesta =  await servicio.crearServicio(peticionCliente)
            console.log(peticionCliente)

            await servicio.crearServicio(peticionCliente),
                response.status(200).json({
                    mensaje: "Exito registrando datos",
                    data: datosrespuesta,
                    estado: true
                })

        } catch (error) {

            response.status(400).json({
                mensaje: "upss" + error,
                data: [],
                estado: false
            })

        }
    }

    async editar(request, response) {
        let id = request.params.id
        let datosPeticion = request.body
        let servicio = new ServicioReserva()
        try {
            await servicio.editar(id, datosPeticion)
            response.status(200).json({
                mensaje: "Exito editando datos",
                data: null,
                estado: true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "upss",
                data: [],
                estado: false
            })

        }
    }

    async eliminar(request, response) {
        let id = request.params.id
        let servicio = new ServicioReserva()
        try {
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje: "Exito eliminando datos",
                data: null,
                estado: true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "upss",
                data: [],
                estado: false
            })

        }
    }

}