import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js"

export const Cita = sequelize.define('cita', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    nombre_cita: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
},
    {timestamps: false // Desactiva createdAt y updatedAt}
})

