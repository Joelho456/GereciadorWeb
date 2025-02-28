const express = require("express");
const server = express();

//Query params =?nome=Carlos&idade=22

server.get("/hello", (req, res) => {
    const {nome, idade} = req.query;

    return res.json({
        title: "Hello world",
        message: `Ola ${nome} tudo certo?`,
        idade: idade
    });
});


//Route params = /hello/:nome

server.get("/hello/:nome/:idade", (req, res) => {
    const { nome } = req.params;

    return res.json({
        tittle: "Hello World",
        message: `Ola ${nome} tudo certo?`
    });
});

server.listen(3000);
