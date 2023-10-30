const Joi = require("joi");

/**
 * Esquema de validación para el cuerpo de la solicitud de evaluación.
 * @constant {Object}
 */
const evaluacionBodySchema = Joi.object({
  id_postulacion: Joi.string().required().messages({
    "string.empty": "El campo 'id_formulario' no puede estar vacío.",
    "any.required": "El campo 'id_formulario' es obligatorio.",
  }),
  comentario: Joi.string().optional().allow("").messages({
    "string.empty": "El campo 'comentario' no puede estar vacío.",
  }),
  id_estado: Joi.string().required().messages({
    "string.empty": "El campo 'id_estado' no puede estar vacío.",
    "any.required": "El campo 'id_estado' es obligatorio.",
  }),
  puntos: Joi.number()
    .integer() // Asegura que sea un número entero
    .min(0) // El mínimo es 0
    .max(100) // El máximo es 100
    .messages({
      "number.base": "El campo 'puntos' debe ser de tipo numérico.",
      "number.min": "El campo 'puntos' no puede ser menor que 0.",
      "number.max": "El campo 'puntos' no puede ser mayor que 100.",
    }),
  fechaModificacion: Joi.date().optional().messages({
    "date.base": "El campo 'fechaModificacion' debe ser de tipo fecha.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

