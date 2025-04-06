const express = require('express');
const loja = require('./util/loja');

const app = express();
const PORT = 8000;

app.get('/adicionar/:id/:nome/:qnt', (req, res) => {
    const { id, nome, qnt } = req.params;
    const msg = loja.adicionar(id, nome, parseInt(qnt));
    res.send(msg);
});

app.get('/listar', (req, res) => {
    const lista = loja.listar();
    res.json(lista);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    const msg = loja.remover(id);
    res.send(msg);
});

app.get('/editar/:id/:qnt', (req, res) => {
    const { id, qnt } = req.params;
    const msg = loja.editar(id, parseInt(qnt));
    res.send(msg);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
