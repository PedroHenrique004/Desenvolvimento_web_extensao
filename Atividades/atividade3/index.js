const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 8000;


app.get('/:operacao/:a/:b', (req, res) => {
    const { operacao, a, b } = req.params;
    res.json({ resultado: calculadora[operacao](Number(a), Number(b)) });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
