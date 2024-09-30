import { Router } from "express";
import { actualizarFormularios, crearFormulario, eliminarFormulario, obtenerFormulario, obtenerFormularios, obtenerPreguntasFormulario } from "../controllers/formulario.controller.js";


const router = Router()

// Obtener formulario
router.get('/formulario', obtenerFormularios)

// Crear formulario
router.post('/formulario', crearFormulario)

//Actualizar formulario por id
router.put('/formulario/:id', actualizarFormularios)

//Eliminar formulario por id
router.delete('/formulario/:id', eliminarFormulario)

// Obtener un solo formulario por id
router.get('/formulario/:id', obtenerFormulario)

// Obtener las preguntas de un formulario
router.get('/formulario/:id/pregunta', obtenerPreguntasFormulario)


export default router;