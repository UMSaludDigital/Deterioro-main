import { Profesional } from "../models/Profesional.js";
import { Usuario } from "../models/Usuario.js";

// Función para obtener los profesionales
export const obtenerProfesionales = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarProfesionales = await Profesional.findAll();
        res.json(buscarProfesionales)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener un profesional por id
export const obtenerProfesional = async (req, res) => {
    const { id } = req.params
    try {
        const buscarProfesional = await Profesional.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarProfesional)

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

// Función para crear los profesionales 
export const crearProfesional = async (req, res) => {
    try {
        const { nombre, tipo_documento, numero_documento, especializacion } = req.body;

        const nuevoProfesional = await Profesional.create({
            nombre,
            tipo_documento,
            numero_documento,
            especializacion
        });

        res.json(nuevoProfesional)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar un profesional por id
export const actualizarProfesionales = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarProfesional = await Profesional.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarProfesional.set(req.body);
        await actualizarProfesional.save();
        return res.json(actualizarProfesional)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar un profesional por id
export const eliminarProfesional = async (req, res) => {
    const { id } = req.params
    try {
        const borrarProfesional = await Profesional.destroy({
            where: { id }
        });
        console.log(borrarProfesional)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

// Función para obtener los porfesionales de cada usuario
export const obtenerProfesionalUsuario = async (req, res) => {
    try {
        const {id} = req.params
        const ProfesionalUsuario = await Usuario.findAll({
            where: {idProfesional: id}
        })
        res.json(ProfesionalUsuario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}