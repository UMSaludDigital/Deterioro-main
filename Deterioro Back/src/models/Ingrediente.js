import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";

export const Ingrediente = sequelize.define('ingrediente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre_ingrediente: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.FLOAT
    },
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
    freezeTableName: true 
});