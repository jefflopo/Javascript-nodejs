const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1248.99,
    desconto: 0.15
}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), err => {
    console.log(err || "Arquivo Salvo!!")
})