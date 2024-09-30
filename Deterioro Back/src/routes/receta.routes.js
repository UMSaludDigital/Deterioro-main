import { Router } from "express";
import { actuarlizarRecetas, crearReceta, eliminarReceta, obtenerReceta, obtenerRecetas } from "../controllers/receta.controller.js";


const router = Router()

// Obtener recetas
router.get('/receta', obtenerRecetas)

// Crear receta
router.post('/receta', crearReceta)

//Actualizar recetas por id
router.put('/receta/:id', actuarlizarRecetas)

//Eliminar recetas por id
router.delete('/receta/:id', eliminarReceta)

// Obtener una sola receta por id
router.get('/receta/:id', obtenerReceta)


export default router;