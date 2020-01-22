const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

/* app.use((req, res, next) => {
    res.send({nome: 'Notebook', preco: 1234.59}) // Converte para JSOn
}) */

app.use(bodyParser.urlencoded({ extended : true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)

    res.send(produto) // JSON
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // retorna JSON
})


/* app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 1234.59}) // Converte para JSOn
}) */

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}!!!!`)
})
