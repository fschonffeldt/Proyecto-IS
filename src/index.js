import express, { json } from 'express'
const app = express()
const port = 3000
import 'dotenv/config';
app.use(json());
app.get('/api', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`API en la url http://localhost:${port}`)
  console.log(`la API funciona: ${process.env.SALUDO}`);
})