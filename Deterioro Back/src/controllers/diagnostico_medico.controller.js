import { where } from "sequelize";
import {Enfermedad} from "../models/Enfermedad.js"
import { Diagnostico_Medico } from "../models/Diagnostico_Medico.js";

// Función para obtener los diagnosticos medicos
export const obtenerDiagnosticosMedicos = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarDiagnosticos = await Diagnostico_Medico.findAll();
        res.json(buscarDiagnosticos)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener un Diagnostico medico por id
export const obtenerDiagnosticoMedico = async (req, res) => {
    const { id } = req.params
    try {
        const buscarDiagnosticoMedico = await Diagnostico_Medico.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        });
        res.json(buscarDiagnosticoMedico)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para crear diagnosticos medicos
export const crearDiagnosticoMedico = async (req, res) => {
    try {
        const { nombre_diagnostico, fecha_diagnostico, comentarios, idUsuario, idEnfermedad } = req.body

        const nuevoDiagnosticoMedico = await Diagnostico_Medico.create({
            nombre_diagnostico,
            fecha_diagnostico,
            comentarios,
            idUsuario,
            idEnfermedad
        });
        res.json(nuevoDiagnosticoMedico)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar diagnosticos medicos por id
export const actualizarDiagnosticosMedicos = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarDiagnosticoMedico = await Diagnostico_Medico.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarDiagnosticoMedico.set(req.body),
            await actualizarDiagnosticoMedico.save();
        return res.json(actualizarDiagnosticoMedico)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar un diagnostico medico por id
export const eliminarDiagnosticoMedico = async (req, res) => {
    const { id } = req.params
    try {
        const borrarDiagnosticoMedico = await Diagnostico_Medico.destroy({
            where: { id }
        });
        console.log(borrarDiagnosticoMedico)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener las enfermedades relacionadas con Diagnostico Medico
export const obtenerDiagnosticoEnfermedades = async (req, res) => {
    try {
        const {id} = req.params
        const DiagnosticoEnfermedad = await Diagnostico_Medico.findAll({
            where: {idEnfermedad: id}
        })
        res.json(DiagnosticoEnfermedad)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}