import { Ingrediente } from "../models/Ingrediente.js";

// Función para obtener los ingredientes
export const obtenerIngredientes = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarIngredientes = await Ingrediente.findAll();
        res.json(buscarIngredientes)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener un ingrediente por id
export const obtenerIngrediente = async (req, res) => {
    const { id } = req.params
    try {
        const buscarIngrediente = await Ingrediente.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarIngrediente)

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

// Función para crear los ingredientes
export const crearIngrediente = async (req, res) => {
    try {
        const { nombre_ingrediente, precio, idReceta } = req.body;

        const nuevoIngrediente = await Ingrediente.create({
            nombre_ingrediente,
            precio,
            idReceta
        });

        res.json(nuevoIngrediente)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar un ingrediente por id
export const actualizarIngredientes = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarIngrediente = await Ingrediente.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarIngrediente.set(req.body);
        await actualizarIngrediente.save();
        return res.json(actualizarIngrediente)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar un ingrediente por id
export const eliminarIngrediente = async (req, res) => {
    const { id } = req.params
    try {
        const borrarIngrediente = await Ingrediente.destroy({
            where: { id }
        });
        console.log(borrarIngrediente)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

// Función para obtener los ingredientes de una receta
export const obtenerIngredientesRecetas = async (req, res) => {
    try {
        const {id} = req.params
        const RecetaIngrediente = await Ingrediente.findAll({
            where: {idReceta: id}
        })
        res.json(RecetaIngrediente)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}