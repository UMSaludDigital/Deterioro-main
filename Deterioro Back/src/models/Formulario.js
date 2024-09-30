import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js"
import { Pregunta } from './Pregunta.js';

export const Formulario = sequelize.define('formulario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_formulario: {
        type: DataTypes.STRING
    },
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
        freezeTableName: true 
});

// Relación forenea con Pregunta
Formulario.hasMany(Pregunta, {
    foreignKey: 'idFormulario',
    sourceKey: 'id'
})

Pregunta.belongsTo(Formulario, {
    foreignKey: 'idFormulario',
    targetId: 'id'
})