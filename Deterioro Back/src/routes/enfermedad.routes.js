import { Router } from 'express';
import { actualizarEnfermedades, crearEnfermedad, eliminarEnfermedad, obtenerEnfermedad, obtenerEnfermedades } from '../controllers/enfermedad.controller.js';


const router = Router();

// Obtener enfermedades
router.get('/enfermedad', obtenerEnfermedades)

// Crear enfermedades
router.post('/enfermedad', crearEnfermedad)

//Actualizar enfermedades por id
router.put('/enfermedad/:id', actualizarEnfermedades)

//Eliminar enfermedades por id
router.delete('/enfermedad/:id', eliminarEnfermedad)

// Obtener una sola enfermedad por id
router.get('/enfermedad/:id',obtenerEnfermedad)


export default router;