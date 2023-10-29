"use strict";
const mongoose = require("mongoose");
const ciudadSchema = new mongoose.Schema({
  Nombre: String,
});

const Ciudad = mongoose.model("Ciudad", ciudadSchema);
module.exports = Ciudad;
