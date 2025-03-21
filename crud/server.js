//API
// Interfase de Acesso Programatico



import express from "express";
import cors from "cors";


import { listar, cadastrar} from "./model/clientes.js";

const app = express();

app.use(cors()); 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//action ou route 
app.get("/clientes", async(req,res) => {
    let dados = await listar();
    res.json(dados);

    res.send("clientes");
});
app.post("/clientes/novo", async (req,res)=>{
    let dados =req.body;
    let retorno = await cadastrar(dados.nome,
        dados.email,
        dados.cidade,
        dados.telefone,
        dados.idade
    )
    res.json(retorno);
});
//porta do servidor vai
app.listen(3000, ()=>{
    console.log("Servidor iniciado")
});