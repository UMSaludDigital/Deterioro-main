import { Router } from "express";
import { actualizarProfesionales, crearProfesional, eliminarProfesional, obtenerProfesional, obtenerProfesionalUsuario, obtenerProfesionales } from "../controllers/profesional.controller.js";


const router = Router()

// Obtener profesionales
router.get('/profesional', obtenerProfesionales)

// Crear profesionales
router.post('/profesional', crearProfesional)

//Actualizar profesionales por id
router.put('/profesional/:id', actualizarProfesionales)

//Eliminar profesionales por id
router.delete('/profesional/:id', eliminarProfesional)

// Obtener una sola profesional por id
router.get('/profesional/:id', obtenerProfesional )

// Obtener los profesionales relacionados a cada usuario
router.get('/profesional/:id/usuario', obtenerProfesionalUsuario)


export default router;