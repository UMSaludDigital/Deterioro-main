import { Cita } from "../models/Cita.js";

// Función para obtener las citas
export const obtenerCitas = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarCita = await Cita.findAll();
        res.json(buscarCita)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener una cita por id
export const obtenerCita = async (req, res) => {
    const { id } = req.params
    try {
        const buscarCita = await Cita.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarCita)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para crear las citas
export const crearCita = async (req, res) => {
    try {
        const { nombre_cita, fecha, idUsuario, idProfesional } = req.body;

        const nuevaCita = await Cita.create({
            nombre_cita,
            fecha,
            idUsuario,
            idProfesional
        });

        res.json(nuevaCita)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar una cita por id
export const actualizarCitas = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarCita = await Cita.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarCita.set(req.body);
        await actualizarCita.save();
        return res.json(actualizarCita)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar una cita por id
export const eliminarCita = async (req, res) => {
    const { id } = req.params
    try {
        const borrarCita = await Cita.destroy({
            where: { id }
        });
        console.log(borrarCita)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener las citas relacionadas con los profesionales
export const obtenerCitasProfesionales = async (req, res) => {
    try {
        const {id} = req.params
        const CitasProfesional = await Cita.findAll({
            where: {idEnfermedad: id}
        })
        res.json(CitasProfesional)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}