import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";
import { Usuario } from './Usuario.js';

export const Diagnostico_Medico = sequelize.define('diagnostico_medico', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_diagnostico: {
        type: DataTypes.STRING,
    },
    fecha_diagnostico: {
        type: DataTypes.DATE,
    },
    comentarios: {
        type: DataTypes.STRING
    },
},
    {timestamps: false ,// Desactiva createdAt y updatedAt},
    freezeTableName: true 
});
