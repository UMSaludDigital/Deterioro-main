import { Router } from "express";
import { actualizarIntentos, crearIntento, eliminarIntento, obtenerIntento, obtenerIntentos } from "../controllers/intento.controller.js";


const router = Router()

// Obtener Intentos
router.get('/intento', obtenerIntentos)

// Crear intento
router.post('/intento', crearIntento)

//Actualizar intentos por id
router.put('/intento/:id', actualizarIntentos)

//Eliminar intentos por id
router.delete('/intento/:id', eliminarIntento)

// Obtener un solo intento por id
router.get('/intento/:id', obtenerIntento)



export default router;