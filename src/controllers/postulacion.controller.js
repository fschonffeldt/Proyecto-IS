const Joi = require("joi");
const { postulacionSchema } = require("../schema/postulacion.schema"); // Importa el esquema de validación

const RutRegex = /^(\d{7,8}(\-[\dkK])?|\d{6,7}[\dkK])$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const TelefonoRegex = /^\d{9}$/;

// Función de validación de esquema
function validarDatos(data, schema, res) {
  const { error, value } = schema.validate(data);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  return value;
}

// Crear una postulación
async function crearPostulacion(req, res) {
  try {
    const data = validarDatos(req.body, postulacionSchema, res); // Valida los datos

    const nuevaPostulación = new Postulaciones(data);
    await nuevaPostulación.save();
    res.status(201).json(nuevaPostulación);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear la postulación" });
  }
}

// Buscar una postulación por ID
async function buscarPostulacionPorId(req, res) {
  try {
    const postulacion = await Postulaciones.findById(req.params.id);
    if (!postulacion) {
      return res.status(404).json({ error: "Postulación no encontrada" });
    }
    res.json(postulacion);
  } catch (error) {
    res.status(500).json({ error: "No se pudo buscar la postulación" });
  }
}

// Listar todas las postulaciones por el rut del representante
async function listarPostulacionesPorRutRepresentante(req, res) {
  try {
    const postulaciones = await Postulaciones.find({ rutRepresentante: req.params.rutRepresentante });
    res.json(postulaciones);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron listar las postulaciones" });
  }
}

// Eliminar una postulación por ID
async function eliminarPostulacionPorId(req, res) {
  try {
    const postulacion = await Postulaciones.findByIdAndDelete(req.params.id);
    if (!postulacion) {
      return res.status(404).json({ error: "Postulación no encontrada" });
    }
    res.json({ message: "Postulación eliminada" });
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar la postulación" });
  }
}

// Actualizar el estado de una postulación
async function actualizarPostulacion(req, res) {
  try {
    const data = validarDatos(req.body, postulacionSchema, res); // Valida los datos

    const { estadoId, ...actualizacion } = data;

    // Actualiza la postulación
    const postulacion = await Postulaciones.findByIdAndUpdate(
      req.params.id,
      { ...actualizacion },
      { new: true }
    );

    if (!postulacion) {
      return res.status(404).json({ error: "Postulación no encontrada" });
    }

    // Si el estado se cambia a 'enviada', crea un nuevo estado
    if (estadoId && actualizacion.estados === "enviada") {
      const nuevoEstado = new Estado({
        id_postulacion: req.params.id,
        estado: "en proceso",
      });
      await nuevoEstado.save();
    }

    res.json(postulacion);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar la postulación" });
  }
}

module.exports = {
  crearPostulacion,
  buscarPostulacionPorId,
  listarPostulacionesPorRutRepresentante,
  eliminarPostulacionPorId,
  actualizarPostulacion,
};