// routes/fondos.js
const express = require('express');
const Fondo = require('../models/Fondo');

const router = express.Router();

router.get('/', async (req, res) => {
  const fondos = await Fondo.find();
  res.json(fondos);
});

router.post('/', async (req, res) => {
  const nuevoFondo = new Fondo(req.body);
  await nuevoFondo.save();
  res.json(nuevoFondo);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const fondoActualizado = await Fondo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(fondoActualizado);
});

module.exports = router;
