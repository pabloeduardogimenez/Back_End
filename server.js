// servidor 

const express = require("express");
const app = express();
const fs = require("fs");
const { loadEnvFile } = require("process");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/contato", function(req , res){      
    let valores = req.query;
    res.json(valores);
});

app.get("/contato", function(req, rec){
    fs.readFile("alunos.cvs", utf8Encode,function(erro, dados){
        let linha = dados.split("\n");
        let html = "<ul>";
        linha.forEach(function(item){
            html = html +  "<li>" + item + "</li>"               
        });
        html += "</lu>";
        res.send(html);
    });
    

});
app.post("/calc", function(req, res){
    let resultado = 0 ;
    resultado = parseInt(req.body.num1) + parseInt(req.body.num2);
    res.send("resultado = " + resultado);
});

app.post("/contato", function(req, res){   
    let val = req.body.nome + "," + req.body.email + "\n";

    let options  = {
        flag: "a"
    };
    fs.writeFile("alunos.cvs", val, options,function () {
        res.send("email cadastrado");
    })
    
});

app.get("/", function(req, res){
    res.send("Enviar formulario");
});


app.listen(3000, function(erro){
    console.log(erro);
    console.log("servidor iniciado");

});