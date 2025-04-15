const express = require('express')
const mustacheExpress = require ('mustache-express')
const app = express()

app.engine('html', mustacheExpress())
app.set('views engine', 'html')
app.set('views', __dirname + '/views')

app.get('/ola/:nome', (req,res) => {
    let nome = req.params.nome
    res.render('index.html', {nome})
})

const PORT = 8000
app.listen(PORT)
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT)
})


