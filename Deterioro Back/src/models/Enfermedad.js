import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";
import { Diagnostico_Medico } from './Diagnostico_Medico.js';

export const Enfermedad = sequelize.define('enfermedad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    disciplina: {
        type: DataTypes.STRING
    }
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
        freezeTableName: true 
});

/* RELACIONES LLAVES FORANEAS */

// Relación con Diagnostico medico
Enfermedad.hasMany(Diagnostico_Medico, {
    foreignKey: 'idEnfermedad',
    sourceKey: 'id'
})

Diagnostico_Medico.belongsTo(Enfermedad, {
    foreignKey: 'idEnfermedad',
    tragetId: 'id'
})