const { ciudadSchema } = require("../schema/ciudad.schema");
const CiudadService = require("../services/ciudad.service");

// Crear una nueva ciudad
async function createCiudad(req, res) {
  try {
    const ciudadData = req.body;

    // Validar los datos con el esquema
    const { error } = ciudadSchema.validate(ciudadData);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const nuevaCiudad = await CiudadService.createCiudad(ciudadData);
    return res.status(201).json(nuevaCiudad);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// Obtener la lista de ciudades
async function listCiudades(req, res) {
  try {
    const ciudades = await CiudadService.listCiudades();
    return res.status(200).json(ciudades);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Obtener una ciudad por ID
async function getCiudadById(req, res) {
  try {
    const ciudadId = req.params.id;
    const ciudad = await CiudadService.getCiudadById(ciudadId);
    if (!ciudad) {
      return res.status(404).json({ error: "Ciudad no encontrada" });
    }
    return res.status(200).json(ciudad);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Actualizar una ciudad por ID
async function updateCiudadById(req, res) {
  try {
    const ciudadId = req.params.id;
    const ciudadData = req.body;

    // Validar los datos con el esquema
    const { error } = ciudadSchema.validate(ciudadData);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const ciudadActualizada = await CiudadService.updateCiudadById(ciudadId, ciudadData);
    if (!ciudadActualizada) {
      return res.status(404).json({ error: "Ciudad no encontrada" });
    }
    return res.status(200).json(ciudadActualizada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// Eliminar una ciudad por ID
async function deleteCiudadById(req, res) {
  try {
    const ciudadId = req.params.id;
    const resultado = await CiudadService.deleteCiudadById(ciudadId);
    if (resultado.error) {
      return res.status(404).json({ error: "Ciudad no encontrada" });
    }
    return res.status(200).json({ message: "Ciudad eliminada correctamente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createCiudad,
  listCiudades,
  getCiudadById,
  updateCiudadById,
  deleteCiudadById,
};
