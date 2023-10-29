"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");
const ESTADOS_PERMITIDOS = require("../constants/estado.constants");

// Crea el esquema de la coleccion 'roles'
const estadosSchema = new mongoose.Schema(
  {
    estado: {
      type: String,
      enum: ESTADOS_PERMITIDOS,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

// Crea el modelo de datos 'Role' a partir del esquema 'roleSchema'
const Role = mongoose.model("Estados", estadosSchema);

module.exports = Role;
