import { Router } from 'express';
import { actualizarUsuarios, crearUsuario, eliminarUsuarios, obtenerUsuario, obtenerUsuarioCita, obtenerUsuarioDiagnostico, obtenerUsuarioIntento, obtenerUsuarios, obtenerUsuariosConvivencia } from "../controllers/usuario.controller.js";

const router = Router()

// Obtener usuarios
router.get('/usuario', obtenerUsuarios)

// Crear Usuarios
router.post('/usuario', crearUsuario)

// Actualizar usuario segun un id
router.put('/usuario/:id', actualizarUsuarios)

// Eliminar usuario segun un id
router.delete('/usuario/:id', eliminarUsuarios)

// Para obtener un solo id
router.get('/usuario/:id', obtenerUsuario)

// Para obtener todos los usuarios que tienen familiares
router.get('/usuario/:id/convivencia', obtenerUsuariosConvivencia)

// Para obtener todos los usuarios que tienen diagnostico medico
router.get('/usuario/:id/diagnostico', obtenerUsuarioDiagnostico)

// Para obtener todos los usuarios que tienen cita
router.get('/usuario/:id/cita', obtenerUsuarioCita)

// Para obtener todos los usuarios que tienen intentos
router.get('/usuario/:id/intento', obtenerUsuarioIntento)





export default router