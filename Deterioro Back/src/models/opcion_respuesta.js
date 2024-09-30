import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js"
import { Usuario } from './Usuario.js';

export const OpcionRespuesta = sequelize.define('opcion_respuesta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    opcion: {
        type: DataTypes.STRING
    },
    respuesta: {
        type: DataTypes.STRING
    },
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
    freezeTableName: true 
});


// Relación de foreaneas

// Relación con usuario
OpcionRespuesta.hasMany(Usuario, {
    foreignKey: 'idRtaCuestionario',
    sourceKey: 'id'
})

Usuario.belongsTo(OpcionRespuesta, {
    foreignKey: 'idRtaCuestionario',
    targetId: 'id'
})
