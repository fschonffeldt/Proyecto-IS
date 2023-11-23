"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");
const ESTADO = require("../constants/estado.constants");

// Crea el esquema de la coleccion 'roles'
const estadoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ESTADO,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

// Crea el modelo de datos 'Role' a partir del esquema 'roleSchema'
const Estado = mongoose.model("Estado", estadoSchema);

module.exports = Estado;
