const mongoose = require('mongoose');
const Evaluacion = require('../models/evaluacion.model');  // Ajusta la ruta si es necesario


const API_KEY = require('../config/configEnv.js');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(API_KEY);
            const msg = {
                to: postulacion.email, //traer email de postulacion
                from: "municipalidad.francisco.de.sales@gmail.com",
                subject: "Resultado de evaluacion",
                text: "Comunicado", 
                html: <strong>${comentario}</strong>,
            };

            await sgMail.send(msg)
                .then(() => {
                    console.log('Correo enviado');
                })
                .catch((error) => {
                    console.error('Error al enviar el correo:', error);
                });


exports.createEvaluacion = async (req, res, next) => {
  try {
    const { id_postulacion, comentario, puntos } = req.body;

    const nuevaEvaluacion = new Evaluacion({
      id_postulacion,
      comentario,
      puntos,
    });

    const evaluacionCreada = await nuevaEvaluacion.save();

    res.status(201).json(evaluacionCreada);
  } catch (error) {
    next(error);
  }
};
exports.getEvaluacion = async (req, res, next) => {
  try {
    const evaluaciones = await Evaluacion.find();
    res.json(evaluaciones);
  } catch (error) {
    next(error);
  }
};

exports.updateEvaluacion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const evaluacionActualizada = await Evaluacion.findByIdAndUpdate(id, req.body, { new: true });
    if (!evaluacionActualizada) {
      return res.status(404).send();  // 404 Not Found
    }
    res.json(evaluacionActualizada);
  } catch (error) {
    next(error);
  }
};

exports.getEvaluacionById = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtén el ID de los parámetros
    const evaluacion = await Evaluacion.findById(id);
    
    if (!evaluacion) {
      return res.status(404).send({ message: 'No se encontró la evaluación especificada' });
    }

    res.json(evaluacion);
  } catch (error) {
    next(error);
  }
};

exports.deleteEvaluacion = async (req, res) => {
  const { id } = req.params;
  
  try {
    const evaluacion = await Evaluacion.findByIdAndDelete(id);
    if (!evaluacion) {
      return res.status(404).send({ message: 'Evaluación no encontrada' });
    }
    res.send({ message: 'Evaluación eliminada exitosamente', data: evaluacion });
  } catch (error) {
    res.status(400).send({ message: error.message || 'Error al eliminar la evaluación' });
  }
};


module.exports = exports;
