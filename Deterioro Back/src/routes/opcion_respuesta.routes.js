import { Router } from "express";
import { actualizarOpcionesRespuestas, crearOpcionRespuesta, eliminarOpcionRespuesta, obtenerOpcionRespuesta, obtenerOpcionRespuestas, obtenerRespuestasFormulario } from "../controllers/opcion_respuesta.controller.js";


const router = Router()

// Obtener Opciones de respuestas
router.get('/opcion_respuesta', obtenerOpcionRespuestas)

// Crear opciones de respuesta
router.post('/opcion_respuesta', crearOpcionRespuesta )

//Actualizar opciones de respuesta por id
router.put('/opcion_respuesta/:id', actualizarOpcionesRespuestas )

//Eliminar opciones de respuesta por id
router.delete('/opcion_respuesta/:id', eliminarOpcionRespuesta )

// Obtener una sola opcion de respuesta por id
router.get('/opcion_respuesta/:id', obtenerOpcionRespuesta)

// Obtener las respuestas del formulario de un usuario
router.get('/opcion_respuesta/:id/usuario', obtenerRespuestasFormulario)


export default router;