// routes/concursos.js
const express = require('express');
const Concurso = require('../models/Concurso');

const router = express.Router();

router.get('/', async (req, res) => {
  const concursos = await Concurso.find();
  res.json(concursos);
});

router.post('/', async (req, res) => {
  const nuevoConcurso = new Concurso(req.body);
  await nuevoConcurso.save();
  res.json(nuevoConcurso);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const concursoActualizado = await Concurso.findByIdAndUpdate(id, req.body, { new: true });
  res.json(concursoActualizado);
});

module.exports = router;
