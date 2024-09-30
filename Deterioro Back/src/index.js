// Encargado de correr la aplicación
import app from "./app.js";
import { sequelize } from "./database/database.js";

// Importación de los modelos para las tablas
/*import "./models/Usuario.js";
import "./models/Convivencia.js";
import "./models/Profesional.js"
import "./models/Cita.js"
import "./models/Formulario.js"
import "./models/Pregunta.js"
import "./models/opcion_respuesta.js"
import "./models/Intento.js"
import "./models/Receta.js"
import "./models/Ingrediente.js"
import "./models/Diagnostico_Medico.js"
import "./models/Enfermedad.js"*/


// Función asincronica que verifica la conexión
async function main(){
    try {
        await sequelize.sync({force: false})
        console.log("Connection has been established successfulluy.");
        app.listen(4000)
        console.log('Server is listening on port', 4000)       
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

main();
