import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js"
import { Formulario } from './Formulario.js';
import { OpcionRespuesta } from './opcion_respuesta.js';

export const Pregunta = sequelize.define('pregunta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pregunta: {
        type: DataTypes.STRING
    },
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
    freezeTableName: true 
});

// Relacion foranea con Opcion_Respuestas
Pregunta.hasMany(OpcionRespuesta, {
    foreignKey: 'idPregunta',
    sourceKey: 'id'
})

OpcionRespuesta.belongsTo(Pregunta, {
    foreignKey: 'idPregunta',
    targetId: 'id'
})