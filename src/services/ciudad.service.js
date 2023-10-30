const Ciudad = require("../models/ciudad.model");

async function createCiudad(ciudadData) {
  try {
    const nuevaCiudad = new Ciudad(ciudadData);
    return nuevaCiudad.save();
  } catch (error) {
    throw error;
  }
}

async function listCiudades() {
  return Ciudad.find();
}

async function getCiudadById(ciudadId) {
  return Ciudad.findById(ciudadId);
}

async function updateCiudadById(ciudadId, ciudadData) {
  return Ciudad.findByIdAndUpdate(ciudadId, ciudadData, { new: true });
}

async function deleteCiudadById(ciudadId) {
  const resultado = await Ciudad.findByIdAndRemove(ciudadId);
  if (!resultado) {
    return { error: "Ciudad no encontrada" };
  }
  return { message: "Ciudad eliminada correctamente" };
}

module.exports = {
  createCiudad,
  createCiudad,
  listCiudades,
  getCiudadById,
  updateCiudadById,
  deleteCiudadById,
};
