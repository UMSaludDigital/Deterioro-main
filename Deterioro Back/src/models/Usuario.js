import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js"
import { Convivencia } from "./Convivencia.js";
import { Diagnostico_Medico } from './Diagnostico_Medico.js';
import { Cita } from './Cita.js';
import { Intento } from "./Intento.js";

export const Usuario = sequelize.define('usuario', {
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   nombre: {
    type: DataTypes.STRING
   },
   tipo_documento: {
    type:  DataTypes.STRING
   },
   numero_identificacion: {
    type:  DataTypes.STRING
   },
   fecha_nacimiento: {
    type: DataTypes.DATE
   },
   genero: {
    type: DataTypes.STRING
   },
   ips: {
    type: DataTypes.STRING
   },
   educacion: {
    type: DataTypes.STRING
   },
   estado_civil: {
    type: DataTypes.STRING
   },
   situacion_laboral: {
    type: DataTypes.STRING
   },
},
    {timestamps: false, // Desactiva createdAt y updatedAt}
    freezeTableName: true 
   
}
);

/* RELACIONES CON LAS LLAVES FORANEAS */

// Relación con convivencia
Usuario.hasMany(Convivencia, {
    foreignKey: 'idUsuario',
    sourceKey: 'id'
})

Convivencia.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetId: 'id'
})

// Relación con Diagnostico Medico
Usuario.hasMany(Diagnostico_Medico, {
    foreignKey: 'idUsuario',
    sourceKey: 'id',
    as: 'Diagnostico_Medico'
})

Diagnostico_Medico.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetId: 'id'
})

// Relación con Cita
Usuario.hasMany(Cita, {
    foreignKey: 'idUsuario',
    sourceKey: 'id'
})

Cita.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetId: 'id'
})

// Relación con Intento
Usuario.hasMany(Intento, {
    foreignKey: 'idUsuario',
    sourceKey: 'id',
})

Intento.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetId: 'id'
})
