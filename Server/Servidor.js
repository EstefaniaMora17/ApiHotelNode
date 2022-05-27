//importaciones necesarias:

//importando express
//const express = require('express')
import express from 'express'   

//importar ruta
import {rutas} from "../routes/rutas.js"

import { conectar} from '../Database/conexion.js' 

//programar la clase servidor

export class Servidor{
    constructor()
    {
        //express es el que permite gacer todo, entrutar,peticones etc
        this.app = express()
        this.conectarConBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()
    
    }
    //metodos del servidor (¿que hace?)

    despertarServidor()
    {
       this.app.listen(process.env.PORT, function(){
            console.log("servidor encendido")
        })
    }
    enrutarPeticiones()
    {
        //use significa habiliar - usar 
      this.app.use('/',rutas)

    }
    //nos permite recibir los datos por el body
    llamarAuxiliares()
    {
        this.app.use(express.json())
    }
    conectarConBD()
    {
        conectar()
    }
}