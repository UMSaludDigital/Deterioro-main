import { Formulario } from "../models/Formulario.js";
import { Pregunta } from "../models/Pregunta.js";

// Función para obtener los formularios
export const obtenerFormularios = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarFormularios = await Formulario.findAll();
        res.json(buscarFormularios)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener un formulario por id
export const obtenerFormulario = async (req, res) => {
    const { id } = req.params
    try {
        const buscarFormulario = await Formulario.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarFormulario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para crear los formularios
export const crearFormulario = async (req, res) => {
    try {
        const { nombre_formulario } = req.body;

        const nuevoFormulario = await Formulario.create({
            nombre_formulario
        });

        res.json(nuevoFormulario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar un formulario por id
export const actualizarFormularios = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarFormulario = await Formulario.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarFormulario.set(req.body);
        await actualizarFormulario.save();
        return res.json(actualizarFormulario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar un formulario por id
export const eliminarFormulario = async (req, res) => {
    const { id } = req.params
    try {
        const borrarFormulario = await Formulario.destroy({
            where: { id }
        });
        console.log(borrarFormulario)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener las preguntas de un formulario
export const obtenerPreguntasFormulario = async (req, res) => {
    try {
        const {id} = req.params
        const PreguntaFormulario = await Pregunta.findAll({
            where: {idFormulario: id}
        })
        res.json(PreguntaFormulario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}