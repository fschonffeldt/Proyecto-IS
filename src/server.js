import express, { json } from 'express'
import { Prueba } from './config/env.config.js';
import { setupDB } from './config/db.config.js';
import formularioRoutes from './api/routes/formulario.routes.js';

const app = express()
const port = 5000


app.use(json());
app.use('/api/formulario',formularioRoutes),
app.get('/api', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`API en la url http://localhost:${port}`)
  console.log(`la API funciona: ${process.env.Prueba}`);
  setupDB()
})