import { Router } from "express";
import { actualizarCitas, crearCita, eliminarCita, obtenerCita, obtenerCitas } from "../controllers/cita.controller.js";


const router = Router()

// Obtener citas
router.get('/cita', obtenerCitas)

// Crear cita
router.post('/cita', crearCita)

//Actualizar citas por id
router.put('/cita/:id', actualizarCitas)

//Eliminar citas por id
router.delete('/cita/:id', eliminarCita)

// Obtener una sola cita por id
router.get('/cita/:id', obtenerCita)

// Obtener los profesionales relacionados a cada cita
router.get('/cita/:id/profesionales')



export default router;
