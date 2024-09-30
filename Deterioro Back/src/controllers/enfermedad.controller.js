import { Enfermedad } from "../models/Enfermedad.js";

// Función para Obtener las enfermdades
export const obtenerEnfermedades = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarEnfermedades = await Enfermedad.findAll();
        res.json(buscarEnfermedades)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener una enfermedad por id
export const obtenerEnfermedad = async (req, res) => {
    const {id} = req.params
    try {
        const buscarEnfermedad = await Enfermedad.findOne({
            where: {id},
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarEnfermedad)
        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para crear las enfermedades
export const crearEnfermedad = async (req, res) => {
    try {
        const { nombre, disciplina } = req.body;

        const nuevaEnfermedad = await Enfermedad.create({
            nombre,
            disciplina
        });

        res.json(nuevaEnfermedad)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar una enfermedad por id
export const actualizarEnfermedades = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarEnfermedad = await Enfermedad.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarEnfermedad.set(req.body);
        await actualizarEnfermedad.save();
        return res.json(actualizarEnfermedad)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar una enfermedad por id
export const eliminarEnfermedad = async (req, res) => {
    const {id} = req.params
    try {
        const borrarEnfermedad = await Enfermedad.destroy({
            where: {id}
        });
        console.log(borrarEnfermedad)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}