import { Convivencia } from "../models/Convivencia.js";

// Función para Obtener los familiares con los que convive
export const obtenerConvivencias = async (req, res) => {
    try {
        const buscarConvivencia = await Convivencia.findAll();
        res.json(buscarConvivencia)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Función para obtener un familiar por id
export const obtenerConvivencia = async (req, res) => {
    const { id } = req.params
    try {
        const buscarConvivencia = await Convivencia.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarConvivencia)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Función para crear los familiares con los que convive
export const crearConvivencia = async (req, res) => {
    try {
        const { nombre_familiar, telefono, direccion, idUsuario } = req.body

        const nuevaConvivencia = await Convivencia.create({
            nombre_familiar,
            telefono,
            direccion,
            idUsuario
        })

        res.json(nuevaConvivencia)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Funcion para actualizar un familiar por id
export const actualizarConvivencias = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de un usuario
        const actualizarConvivencia = await Convivencia.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarConvivencia.set(req.body);
        await actualizarConvivencia.save();
        return res.json(actualizarConvivencia)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Función para eliminar un familiar por id
export const eliminarConvivencia = async (req, res) => {
    const { id } = req.params
    try {
        const borrarConvivencia = await Convivencia.destroy({
            where: { id }
        })
        console.log(borrarConvivencia)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};