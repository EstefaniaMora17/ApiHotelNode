import { ServicioHabitacion } from "../services/servicioHabitacion.js"
export class ControladorHabitacion{


    constructor(){}

    //metodos de una clase
  async buscarTodos(request,response){
        let servicio=new ServicioHabitacion( )// Se instancia la clase SERVICIO
        try{

            response.status(200).json({
                mensaje:"Exito en la busqueda",
                data:await servicio.buscarTodos(),
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss"+error,
                data:[],
                estado:false
            })
    
        }
    }

    async buscarPorId(request,response){
        let servicio = new ServicioHabitacion()
        let id = request.params.id
        try{

            response.status(200).json({
                mensaje:"Exito en la busqueda por id: "+id,
                data:await servicio.buscarPorId(id),
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss"+error,
                data:[],
                estado:false
            })
    
        }
    }

    async insertar(request,response){
        let servicio = new ServicioHabitacion()
        let datosPeticion=request.body
        console.log(datosPeticion)
        try{
            await servicio.crearServicio(datosPeticion)
            response.status(200).json({
                mensaje:"Exito registrando datos",
                data:datosPeticion,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss"+error,
                data:[],
                estado:false
            })
    
        }
    }

    async editar(request,response){
        let id = request.params.id
        let datosPeticion = request.body
        let servicio = new ServicioHabitacion()
        try{
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando datos",
                data:null,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss"+error,
                data:[],
                estado:false
            })
    
        }
    }

    async eliminar(request,response){
        let servicio = new ServicioHabitacion()
        let id = request.params.id
        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando datos",
                data:null,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss"+error,
                data:[],
                estado:false
            })
    
        }
    }

}