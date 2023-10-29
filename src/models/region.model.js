"use strict";
const mongoose = require("mongoose");
const regionSchema = new mongoose.Schema({
  Nombre: String,
});
const Region = mongoose.model("Region", regionSchema);
module.exports = Region;
