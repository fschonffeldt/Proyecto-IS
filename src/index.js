import express, { json } from 'express'
import { Prueba } from './config/env.config.js';
import { setupDB } from './config/db.config.js';
const app = express()
const port = 3000


app.use(json());
app.get('/api', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`API en la url http://localhost:${port}`)
  console.log(`la API funciona: ${process.env.Prueba}`);
  setupDB()
})