import { Router } from 'express';
import { obtenerConvivencias, crearConvivencia, actualizarConvivencias, eliminarConvivencia, obtenerConvivencia } from "../controllers/convivencia.controller.js";


const router = Router();

// Obtener familiares con los que convive
router.get('/convivencia', obtenerConvivencias)

// Crear familiares con los que convive
router.post('/convivencia', crearConvivencia)

//Actualizar familiares con los que convive
router.put('/convivencia/:id', actualizarConvivencias)

//Eliminar familiares con los que convive
router.delete('/convivencia/:id', eliminarConvivencia)

// Obtener un solo familiar por id
router.get('/convivencia/:id', obtenerConvivencia)


export default router;