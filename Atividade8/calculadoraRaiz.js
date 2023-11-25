
const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', (req, res) => {
    res.sendFile('calculadora.html', { root: 'views' });
});

router.post('/calcular', calculadoraController.calcular);

module.exports = router;
