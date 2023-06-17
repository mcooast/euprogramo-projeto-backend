const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Mayara Costa',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyY6MpqTSvotguMKN0JvIZItOcR89f05lv-w&usqp=CAU',
        minibio: 'Estagiária em TI'
    }, 

    {
        nome: 'Mayara Costa',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyY6MpqTSvotguMKN0JvIZItOcR89f05lv-w&usqp=CAU',
        minibio: 'Estagiária em TI'
    }, 

    {
        nome: 'Mayara Costa',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyY6MpqTSvotguMKN0JvIZItOcR89f05lv-w&usqp=CAU',
        minibio: 'Estagiária em TI'
    }
]


function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)