import { Schema, model } from 'mongoose';

const formularioSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    rut: String,
    email:String,
    telefono: Number,
    
  },
  {
    timestamps: true,
  }
);

export default model('formulario', formularioSchema);