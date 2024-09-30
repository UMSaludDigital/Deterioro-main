import { Formulario } from "../models/Formulario.js";
import { OpcionRespuesta as Opcion_Respuesta } from "../models/opcion_respuesta.js";
import { Pregunta } from "../models/Pregunta.js";

// Función para obtener las prguntas
export const obtenerPreguntas = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarPregunta = await Pregunta.findAll();
        res.json(buscarPregunta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener una pregunta por id
export const obtenerPregunta = async (req, res) => {
    const { id } = req.params
    try {
        const buscarPregunta = await Pregunta.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarPregunta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para crear las preguntas
export const crearPregunta = async (req, res) => {
    try {
        const { pregunta, idFormulario } = req.body;

        const nuevaPregunta = await Pregunta.create({
            pregunta,
            idFormulario
        });

        res.json(nuevaPregunta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar una pregunta por id
export const actualizarPreguntas = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarPregunta = await Pregunta.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarPregunta.set(req.body);
        await actualizarPregunta.save();
        return res.json(actualizarPregunta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar una pregunta por id
export const eliminarPregunta = async (req, res) => {
    const { id } = req.params
    try {
        const borrarPregunta = await Pregunta.destroy({
            where: { id }
        });
        console.log(borrarPregunta)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener las opciones de respuesta de una pregunta
export const obtenerOpcionesPregunta = async (req, res) => {
    try {
        const {id} = req.params
        const OpcionesPregunta = await Opcion_Respuesta.findAll({
            where: {idPregunta: id}
        })
        res.json(OpcionesPregunta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}