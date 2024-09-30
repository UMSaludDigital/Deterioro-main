import { where } from "sequelize";
import { Usuario } from "../models/Usuario.js"
import { Convivencia } from "../models/Convivencia.js";
import { Diagnostico_Medico } from "../models/Diagnostico_Medico.js";
import { Cita } from "../models/Cita.js";
import { Intento } from "../models/Intento.js";

// Función para obtener usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        //findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarUsuarios = await Usuario.findAll();
        console.log(buscarUsuarios,"Hola entre aca")
        res.json(buscarUsuarios);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Función para obtener usuario por ID
export const obtenerUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        //findOne: Permite buscar por un campo o varios en especifico
        const buscarUsuario = await Usuario.findOne({
            where: {
                id
            },
        });

        // No existe el usuario
        if (!buscarUsuario)
            return res.status(404).json({ message: "El usuario no existe" });

        res.json(buscarUsuario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Función para crear un usuario
export const crearUsuario = async (req, res) => {
    const { nombre, tipo_documento, numero_identificacion, fecha_nacimiento,
        genero, ips, educacion, estado_civil, situacion_laboral } = req.body;

    try {
        //  Objeto que representa la fila en la que se guarda en la tabla
        const nuevoUsuario = await Usuario.create({
            nombre,
            tipo_documento,
            numero_identificacion,
            fecha_nacimiento,
            genero,
            ips,
            educacion,
            estado_civil,
            situacion_laboral
        });

        res.json(nuevoUsuario);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Función para actualizar usuarios
export const actualizarUsuarios = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        const { nombre, tipo_documento, numero_identificacion, fecha_nacimiento,
            genero, ips, educacion, estado_civil, situacion_laboral } = req.body

        // Buscar por el id de un usuario
        const actualizarUsuario = await Usuario.findByPk(id)
        // Actualizar todos los datos del Usuario
        actualizarUsuario.nombre = nombre,
            actualizarUsuario.tipo_documento = tipo_documento,
            actualizarUsuario.numero_identificacion = numero_identificacion,
            actualizarUsuario.fecha_nacimiento = fecha_nacimiento,
            actualizarUsuario.genero = genero,
            actualizarUsuario.ips = ips,
            actualizarUsuario.educacion = educacion,
            actualizarUsuario.estado_civil = estado_civil,
            actualizarUsuario.situacion_laboral = situacion_laboral

        //Guardar dentro de la BD
        await actualizarUsuario.save()

        res.json(actualizarUsuario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Función para eliminar usuarios
export const eliminarUsuarios = async (req, res) => {
    try {
        // Constante para extraer solo el id
        const { id } = req.params;
        await Usuario.destroy({
            where: {
                id,
            }
        });

        res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Función para obtener los familiares del usuario
export const obtenerUsuariosConvivencia = async (req, res) => {
    try {
        const { id } = req.params
        const UsuarioConvivencia = await Convivencia.findAll({
            where: { idUsuario: id }
        })
        res.json(UsuarioConvivencia)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener los diagnosticos medicos del usuario
export const obtenerUsuarioDiagnostico = async (req, res) => {
    try {
        const {id} = req.params
        const UsuarioDiagnostico = await Diagnostico_Medico.findAll({
            where: {idUsuario: id}
        })
        res.json(UsuarioDiagnostico)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener las citas del usuario
export const obtenerUsuarioCita = async (req, res) => {
    try {
        const {id} = req.params
        const usuarioCita = await Cita.findAll({
            where: {idUsuario: id}
        })
        res.json(usuarioCita)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener los intentos del usuario
export const obtenerUsuarioIntento = async (req, res) => {
    try {
        const {id} = req.params
        const UsuarioIntento = await Intento.findAll({
            where: {idUsuario: id}
        })
        res.json(UsuarioIntento)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}