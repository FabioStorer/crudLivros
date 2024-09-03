const estudante_controller = require('../controllers/estudante_controller.js');
const livro_controller = require('../controllers/livro_controller.js');

let nextId = 1;

const model = (body, id = nextId++) => {

    if (livro_controller.show(body.livro_id) &&
        estudante_controller.show(body.esudante_id) &&
        dataAluguel != undefined &&
        dataAluguel != '' &&
        dataDevolucao != undefined &&
        dataDevolucao != '') {
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            dataAluguel: body.dataAluguel,
            dataDevolucao: body.dataDevolucao
        };
    }
};

module.exports = model;