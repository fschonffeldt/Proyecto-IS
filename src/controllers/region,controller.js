const RegionService = require("../services/region.service");

async function createRegion(req, res) {
  try {
    const regionData = req.body;
    const nuevaRegion = await RegionService.createRegion(regionData);
    return res.status(201).json(nuevaRegion);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function listRegiones(req, res) {
  try {
    const regiones = await RegionService.listRegiones();
    return res.status(200).json(regiones);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getRegionById(req, res) {
  try {
    const regionId = req.params.id;
    const region = await RegionService.getRegionById(regionId);
    if (!region) {
      return res.status(404).json({ error: "Región no encontrada" });
    }
    return res.status(200).json(region);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateRegionById(req, res) {
  try {
    const regionId = req.params.id;
    const regionData = req.body;
    const regionActualizada = await RegionService.updateRegionById(regionId, regionData);
    if (!regionActualizada) {
      return res.status(404).json({ error: "Región no encontrada" });
    }
    return res.status(200).json(regionActualizada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function deleteRegionById(req, res) {
  try {
    const regionId = req.params.id;
    const resultado = await RegionService.deleteRegionById(regionId);
    if (resultado.error) {
      return res.status(404).json({ error: "Región no encontrada" });
    }
    return res.status(200).json({ message: "Región eliminada correctamente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createRegion,
  listRegiones,
  getRegionById,
  updateRegionById,
  deleteRegionById,
};
