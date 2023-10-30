const Joi = require("joi");

const regionSchema = Joi.object({
    nombre: Joi.string()
        .required()
        .regex(/^[A-Za-z]+$/)
        .messages({
            "string.empty": "El nombre de la ciudad no puede estar vacío.",
            "any.required": "El nombre de la ciudad es obligatorio.",
            "string.base": "El nombre de la ciudad debe ser de tipo string.",
            "string.pattern.base": "El nombre de la ciudad solo puede contener letras.",
        }),
});


module.exports = { regionSchema };


