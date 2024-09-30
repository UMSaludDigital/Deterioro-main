import { OpcionRespuesta } from "../models/opcion_respuesta.js";
import { Usuario } from "../models/Usuario.js";

// Función para obtener las opciones de respuesta
export const obtenerOpcionRespuestas = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarOpcionRespuestas = await OpcionRespuesta.findAll();
        res.json(buscarOpcionRespuestas)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener las opciones de respuesta por id
export const obtenerOpcionRespuesta = async (req, res) => {
    const { id } = req.params
    try {
        const buscarOpcionRespuesta = await OpcionRespuesta.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarOpcionRespuesta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para crear las opciones de respuesta
export const crearOpcionRespuesta = async (req, res) => {
    try {
        const { opcion, respuesta, idPregunta } = req.body;

        const nuevaOpcionRespuesta = await OpcionRespuesta.create({
            opcion,
            respuesta,
            idPregunta
        });

        res.json(nuevaOpcionRespuesta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar las opciones de respuesta por id
export const actualizarOpcionesRespuestas = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarOpcionRespuesta = await OpcionRespuesta.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarOpcionRespuesta.set(req.body);
        await actualizarOpcionRespuesta.save();
        return res.json(actualizarOpcionRespuesta)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar una opcion de respuestas por id
export const eliminarOpcionRespuesta = async (req, res) => {
    const { id } = req.params
    try {
        const borrarOpcionRespuesta = await OpcionRespuesta.destroy({
            where: { id }
        });
        console.log(borrarOpcionRespuesta)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener las respuestas del formulario de un usuario
export const obtenerRespuestasFormulario = async (req, res) => {
    try {
        const {id} = req.params
        const RespuestasFormulario = await Usuario.findAll({
            where: {idRtaCuestionario: id}
        })
        res.json(RespuestasFormulario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}