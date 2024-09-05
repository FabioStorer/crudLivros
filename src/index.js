const express = require('express');
const aluguel_router = require('./routes/aluguel_router.js');
const estudante_router = require('./routes/estudante_router.js');
const livro_router = require('./routes/livro_router.js');
const app = express();
const port = 5000;

app.use(express.json());

app.use('/aluguel', aluguel_router);
app.use('/estudante', estudante_router);
app.use('/livro', livro_router);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});