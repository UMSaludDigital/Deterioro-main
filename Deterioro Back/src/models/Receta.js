import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js"
import { Intento } from './Intento.js'
import { Ingrediente } from './Ingrediente.js'

export const Receta = sequelize.define('receta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
        freezeTableName: true 
})

// Relación con Intento
Receta.hasMany(Intento, {
    foreignKey: 'idReceta',
    sourceKey: 'id'
})

Intento.belongsTo(Receta, {
    foreignKey: 'idReceta',
    targetId: 'id'
})

// Relación con Ingrediente
Receta.hasMany(Ingrediente, {
    foreignKey: 'idReceta',
    sourceKey: 'id'
})

Ingrediente.belongsTo(Receta, {
    foreignKey: 'idReceta',
    targetId: 'id'
})