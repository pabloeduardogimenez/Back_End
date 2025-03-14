// servidor 

const express = require("express");

const app = express();

app.get("/", function(req , res){
    res.status(404).send("oi turma");
});


app.listen(3000, function(erro){
    console.log(erro);
    console.log("servidor iniciado");

});