const Region = require("../models/region.model");

async function createRegion(regionData) {
  try {
    const existente = await Region.findOne({ Nombre: regionData.Nombre });
    if (existente) {
      throw new Error("Ya existe una región con ese nombre.");
    }
    const nuevaRegion = new Region(regionData);
    return nuevaRegion.save();
  } catch (error) {
    throw error;
  }
}

async function listRegiones() {
  return Region.find();
}

async function getRegionById(regionId) {
  return Region.findById(regionId);
}

async function updateRegionById(regionId, regionData) {
  return Region.findByIdAndUpdate(regionId, regionData, { new: true });
}

async function deleteRegionById(regionId) {
  const resultado = await Region.findByIdAndRemove(regionId);
  if (!resultado) {
    return { error: "Región no encontrada" };
  }
  return { message: "Región eliminada correctamente" };
}

module.exports = {
  createRegion,
  listRegiones,
  getRegionById,
  updateRegionById,
  deleteRegionById,
};
