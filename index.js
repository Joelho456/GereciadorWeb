const express = require("express");
const server = express();

server.get("/hello", (req, res) => {
    return res.json({title: "Hello world",
        message: "Oi meus amigos"
    });
});

server.listen(3000);
