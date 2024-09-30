import { Router } from "express";
import { actualizarDiagnosticosMedicos, crearDiagnosticoMedico, eliminarDiagnosticoMedico, obtenerDiagnosticoEnfermedades, obtenerDiagnosticoMedico, obtenerDiagnosticosMedicos } from "../controllers/diagnostico_medico.controller.js";


const router = Router();

// Obtener Diagnostico medico
router.get('/diagnosticoMedico', obtenerDiagnosticosMedicos)

// Crear Diagnostico medico
router.post('/diagnosticoMedico', crearDiagnosticoMedico)

//Actualizar Diagnostico medico por id
router.put('/diagnosticoMedico/:id', actualizarDiagnosticosMedicos)

//Eliminar Diagnostico medico por id
router.delete('/diagnosticoMedico/:id', eliminarDiagnosticoMedico)

// Obtener una solo diagnostico medico por id
router.get('/diagnosticoMedico/:id', obtenerDiagnosticoMedico)

// Obtener las enfermedades relacionadas al diagnostico medico
router.get('/diagnosticoMedico/:id/enfermedad', obtenerDiagnosticoEnfermedades)

export default router;