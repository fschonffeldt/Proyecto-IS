"use strict";
const mongoose = require("mongoose");
const cuidadSchema = new mongoose.Schema({
  Nombre: String,
});

const Cuidad = mongoose.model("Cuidad", cuidadSchema);
module.exports = Cuidad;
