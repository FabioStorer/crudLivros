const aluguel_controller = require('../controllers/aluguel_controller.js');
const express = require('express');
const route = express.Router();

route.post('/', (req, res) => {
    const code = aluguel_controller.store(req.body);
    res.status(code).json();
});

route.get('/', (req, res) => {
    res.json(aluguel_controller.index());
});

route.get('/:id', (req, res) => {
    res.json(aluguel_controller.show(req.params.id));
});

route.put('/:id', (req, res) => {
    const code = aluguel_controller.update(req.params.id, body);
    res.status(code).json();
});

route.delete('/:id', (req, res) => {
    aluguel_controller.destroy(req.params.id);
    res.json();
});

module.exports = route;