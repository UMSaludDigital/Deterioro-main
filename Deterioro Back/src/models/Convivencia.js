import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";

export const Convivencia = sequelize.define('convivencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_familiar:{
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
},
    {timestamps: false // Desactiva createdAt y updatedAt}
});