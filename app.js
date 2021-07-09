
// Três passos padões para levantar o servidor

// Importando o módulo Express

const express = require('express');

//Criando a varíavel resposável por executar a funcção principal
// Nota: O servidor está nessa variável... Incrível 

const app = express();

// Rotas


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get('/manutencao', (req, res) => {
    res.sendFile(__dirname + "/views/manutencao.html")
})

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/views/blog.html")
})

// Usando o método que definirá em que porta o servidor ouvirá(receber as req e responde-las)
// O método recebe como parametros o número da porta(obrigatório) e um callback(opcional) 

app.listen(3030, () => console.log("Server no ar!"))