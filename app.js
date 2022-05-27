
import 'dotenv/config'

//despertar Servidor

//1. importar la clase servidor
import{Servidor} from './Server/Servidor.js'

//2. utilixo la calse servidor (creo un objeto)
let servidorViernes = new Servidor()
//3. llamando del d metodo despertar
servidorViernes.despertarServidor()

