const Joi = require("joi");

/**
 * Esquema de validación para el cuerpo de la solicitud de estado.
 * @constant {Object}
 */
const estadoBodySchema = Joi.object({
  id_evaluacion: Joi.string().required().messages({
    "string.empty": "El campo 'id_evaluacion' no puede estar vacío.",
    "any.required": "El campo 'id_evaluacion' es obligatorio.",
  }),
  id_solicitud: Joi.string().required().messages({
    "string.empty": "El campo 'id_solicitud' no puede estar vacío.",
    "any.required": "El campo 'id_solicitud' es obligatorio.",
  }),
  estado: Joi.string()
    .valid("en proceso", "aceptado", "rechazado")
    .required()
    .messages({
      "string.empty": "El campo 'estado' no puede estar vacío.",
      "any.required": "El campo 'estado' es obligatorio.",
      "any.only": "El campo 'estado' debe ser 'en proceso', 'aceptado' o 'rechazado'.",
    }),
  puntos: Joi.number().optional().messages({
    "number.base": "El campo 'puntos' debe ser de tipo numérico.",
  }),
  fechaModificacion: Joi.date().optional().messages({
    "date.base": "El campo 'fechaModificacion' debe ser de tipo fecha.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { estadoBodySchema };