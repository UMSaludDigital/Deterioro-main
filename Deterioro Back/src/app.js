import express from 'express';
import usuariosRoutes from "./routes/usuario.routes.js";
import convivenciaRoutes from "./routes/convivencia.routes.js";
import enfermedadRoutes from './routes/enfermedad.routes.js';
import diagnosticoMedicoRoutes from './routes/diagnostico_medico.routes.js';
import profesionalRoutes from './routes/profesional.routes.js'
import citaRoutes from './routes/cita.routes.js'
import ingredienteRoutes from "./routes/ingrediente.routes.js";
import recetaRoutes from "./routes/receta.routes.js";
import intentoRoutes from "./routes/intento.routes.js";
import formularioRoutes from "./routes/formulario.routes.js";
import preguntaRoutes from "./routes/pregunta.routes.js"
import opcionRespuestasRoutes from "./routes/opcion_respuesta.routes.js"

const app = express();

// Añadir middlewares
app.use(express.json());

app.use(usuariosRoutes)
app.use(convivenciaRoutes)
app.use(enfermedadRoutes)
app.use(diagnosticoMedicoRoutes)
app.use(profesionalRoutes)
app.use(citaRoutes)
app.use(ingredienteRoutes)
app.use(recetaRoutes)
app.use(intentoRoutes)
app.use(formularioRoutes)
app.use(preguntaRoutes)
app.use(opcionRespuestasRoutes)

export default app;