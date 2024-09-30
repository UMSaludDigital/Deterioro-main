import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";
import { Cita } from "../models/Cita.js";
import { Usuario } from './Usuario.js';

export const Profesional = sequelize.define('profesional', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    tipo_documento: {
        type: DataTypes.STRING
    },
    numero_documento: {
        type: DataTypes.STRING
    },
    especializacion: {
        type: DataTypes.STRING
    },
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
        freezeTableName: true 
});

// Relaciones foraneas
// Relación con cita
Profesional.hasMany(Cita, {
    foreignKey: 'idProfesional',
    sourceKey: 'id'
})

Cita.belongsTo(Profesional, {
    foreignKey: 'idProfesional',
    targetId: 'id'
})

// Relación con Usuario
Profesional.hasOne(Usuario, {
    foreignKey: 'idProfesional',
    sourceKey: 'id'
})

Usuario.belongsTo(Profesional, {
    foreignKey: 'idProfesional',
    targetId: 'id'
})