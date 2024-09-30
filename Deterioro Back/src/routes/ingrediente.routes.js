import { Router } from "express";
import { actualizarIngredientes, crearIngrediente, eliminarIngrediente, obtenerIngrediente, obtenerIngredientes, obtenerIngredientesRecetas } from "../controllers/ingrediente.controller.js";


const router = Router()

// Obtener citas
router.get('/ingrediente', obtenerIngredientes)

// Crear cita
router.post('/ingrediente', crearIngrediente)

//Actualizar citas por id
router.put('/ingrediente/:id', actualizarIngredientes)

//Eliminar citas por id
router.delete('/ingrediente/:id', eliminarIngrediente)

// Obtener una sola cita por id
router.get('/ingrediente/:id', obtenerIngrediente)

// Obtener el ingrediente de una receta
router.get('/ingrediente/:id/receta', obtenerIngredientesRecetas)


export default router;
