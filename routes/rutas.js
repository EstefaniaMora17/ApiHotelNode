//Importando express
import express from 'express'

//Importo los controladores
import {ControladorHabitacion} from '../controller/controladorHabitacion.js'
import {ControladorReserva} from '../controller/controladorReserva.js'
//Creamos el objeto para poder utilizar la clase Controlador
let controladorHabitacion= new ControladorHabitacion()
let controladorReserva = new ControladorReserva()

//Una variable para almacenar
//la funcionalidad de express Router
//Que es la que me permite personalizar y separar RUTAS
export let rutas=express.Router()

//DEFINO MIS RUTAS
rutas.get('/API/v1/viernes', controladorHabitacion.buscarTodos)
rutas.get('/API/v1/viernes/:id', controladorHabitacion.buscarPorId)
rutas.post('/API/v1/viernes', controladorHabitacion.insertar)
rutas.put('/API/v1/viernes/:id', controladorHabitacion.editar)
rutas.delete('/API/v1/viernes/:id', controladorHabitacion.eliminar)

rutas.get('/API/v1/viernesReserva', controladorReserva.buscarTodos)
rutas.get('/API/v1/viernesReserva/:id', controladorReserva.buscarPorId)
rutas.post('/API/v1/viernesReserva', controladorReserva.crearServicio)
rutas.put('/API/v1/viernesReserva/:id', controladorReserva.editar)
rutas.delete('/API/v1/viernesReserva/:id', controladorReserva.eliminar)