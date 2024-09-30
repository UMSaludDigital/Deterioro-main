import { Router } from "express";
import { actualizarPreguntas, crearPregunta, eliminarPregunta, obtenerOpcionesPregunta, obtenerPregunta, obtenerPreguntas } from "../controllers/pregunta.controller.js";

const router = Router()

// Obtener preguntas
router.get('/pregunta', obtenerPreguntas)

// Crear preguntas
router.post('/pregunta', crearPregunta)

//Actualizar preguntas por id
router.put('/pregunta/:id', actualizarPreguntas)

//Eliminar preguntas por id
router.delete('/pregunta/:id', eliminarPregunta)

// Obtener una sola pregunta por id
router.get('/pregunta/:id', obtenerPregunta)

// Obtener las opciones de respuesta de una pregunta
router.get('/opcion_respuesta/:id/pregunta', obtenerOpcionesPregunta)


export default router;