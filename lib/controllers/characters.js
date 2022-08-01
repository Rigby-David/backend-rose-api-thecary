const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', async (req, res) => {
    console.log(req.params.id, 'moira');
    const characters = await Character.getAll(req.params.id);
    console.log(characters);
    res.json(characters);
  });
