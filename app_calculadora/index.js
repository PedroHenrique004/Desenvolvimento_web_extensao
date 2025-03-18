const calc = require('./calculadora');
const express = require('express');

// console.log(calc)

const app = express();

app.get('/', (req, res) => {
    res.send('Olá mundo');
});

app.get('/ola/:nome', (req,res) => {
    res.send(`Olá ${req.params.nome}`)
})

const PORT = 1000;
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
});