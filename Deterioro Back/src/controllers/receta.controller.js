import { Receta } from "../models/Receta.js";

// Función para obtener las recetas
export const obtenerRecetas = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarRecetas = await Receta.findAll();
        res.json(buscarRecetas)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener una receta por id
export const obtenerReceta = async (req, res) => {
    const { id } = req.params
    try {
        const buscarReceta = await Receta.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarReceta)

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

// Función para crear las recetas
export const crearReceta = async (req, res) => {
    try {
        const { nombre } = req.body;

        const nuevaReceta = await Receta.create({
            nombre
        });

        res.json(nuevaReceta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar una receta por id
export const actuarlizarRecetas = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarReceta = await Receta.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarReceta.set(req.body);
        await actualizarReceta.save();
        return res.json(actualizarReceta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar una receta por id
export const eliminarReceta = async (req, res) => {
    const { id } = req.params
    try {
        const borrarReceta = await Receta.destroy({
            where: { id }
        });
        console.log(borrarReceta)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
