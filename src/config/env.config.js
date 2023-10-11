import { fileURLToPath } from 'node:url';
import path from 'node:path';
import dotenv from 'dotenv';

// Convierte la URL del archivo actual en una ruta de archivo
const filename = fileURLToPath(import.meta.url);

// Obtiene el directorio del archivo actual
const dirname = path.dirname(filename);

// Obtiene la ruta del archivo .env
const envFilePath = path.resolve(dirname, '.env');

// Carga las variables de entorno desde el archivo .env
dotenv.config({ path: envFilePath });

// Retorna un objeto con las variables de entorno
// o tambien retornar las variables de entorno directamente

export const Prueba = process.env.Prueba;
export const DB_URL = process.env.DB_URL;