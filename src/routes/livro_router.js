const livro_controller = require('../controllers/livro_controller.js');
const express = require('express');
const route = express.Router();

route.post('/', (req, res) => {
    const code = livro_controller.store(req.body);
    res.status(code).json();
});

route.get('/', (req, res) => {
    res.json(livro_controller.index());
});

route.get('/:id', (req, res) => {
    res.json(livro_controller.show(req.params.id));
});

route.put('/:id', (req, res) => {
    const code = livro_controller.update(req.params.id, req.body);
    res.status(code).json();
});

route.delete('/:id', (req, res) => {
    livro_controller.destroy(req.params.id);
    res.json();
});

module.exports = route;