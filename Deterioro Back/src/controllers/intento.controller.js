import { Intento } from "../models/Intento.js";

// Función para obtener los intentos
export const obtenerIntentos = async (req, res) => {
    try {
        // findAll: Recorre las filas para generar un arreglo de busqueda
        const buscarIntentos = await Intento.findAll();
        res.json(buscarIntentos)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para obtener un intento por id
export const obtenerIntento = async (req, res) => {
    const { id } = req.params
    try {
        const buscarIntento = await Intento.findOne({
            where: { id },
            // Para retornar el nombre del familiar
            //attributes: ['nombre_familiar']
        })
        res.json(buscarIntento)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para crear los intentos
export const crearIntento = async (req, res) => {
    try {
        const { fecha_ingreso, tiempo_ejecucion, vista_recetas, cant_prod_error, cant_prod_acierto, 
            total_compra, idUsuario, idReceta } = req.body;

        const nuevoIntento = await Intento.create({
            fecha_ingreso,
            tiempo_ejecucion,
            vista_recetas,
            cant_prod_error,
            cant_prod_acierto,
            total_compra,
            idUsuario,
            idReceta
        });

        res.json(nuevoIntento)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para actualizar un intento por id
export const actualizarIntentos = async (req, res) => {
    try {
        // Extraer solamente el id
        const { id } = req.params;
        // Buscar por el id de una usuario
        const actualizarIntento = await Intento.findOne({
            where: { id }
        });
        // Metodo set permite actualizar una sola propiedad
        actualizarIntento.set(req.body);
        await actualizarIntento.save();
        return res.json(actualizarIntento)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Función para eliminar un intento por id
export const eliminarIntento = async (req, res) => {
    const { id } = req.params
    try {
        const borrarIntento = await Intento.destroy({
            where: { id }
        });
        console.log(borrarIntento)
        // 204 esta OK, pero no devuelve ningun dato
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
