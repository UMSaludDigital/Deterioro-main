import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js"
import { Usuario } from './Usuario.js';


export const Intento = sequelize.define('intento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_ingreso: {
        type: DataTypes.DATE
    },
    tiempo_ejecucion: {
        type: DataTypes.TIME
    },
    vista_recetas: {
        type: DataTypes.INTEGER
    },
    cant_prod_error: {
        type: DataTypes.INTEGER
    },
    cant_prod_acierto: {
        type: DataTypes.INTEGER
    },
    total_compra: {
        type: DataTypes.FLOAT
    },
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
    freezeTableName: true 
});

