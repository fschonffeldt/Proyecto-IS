import Proyec from '../models/proyec.model.js';

export const getProyecs = async (req, res) => {
    const proyecs = await Proyec.find();
    res.json(proyecs);
}

export const createProyec = async (req, res) => {
    const newProyec = new Proyec(req.body);
    const savedProyec = await newProyec.save();
    res.status(201).json(savedProyec);
}