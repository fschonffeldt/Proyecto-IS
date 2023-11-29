import { Schema, model } from 'mongoose';

const proyecSchema = new Schema(
    {
    Tema: String,
    Descripcion: String,
    Monto: Number,
    Bases: String,
    fechaCreac: Date
    }, 
    { collection: 'proyectos',  versionKey: false, timestamps: true,});

export default model('Proyec', proyecSchema);