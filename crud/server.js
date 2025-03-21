//API
// Interfase de Acesso Programaticacle

import express from "express";
import { listar} from "./model/clientes.js";

const app = express();
//action ou route 
app.get("/clientes", async(req,res) => {
    let dados = await listar();
    res.json(dados);

    res.send("clientes");
})

app.listen(3000, ()=>{
    console.log("Servidor iniciado")
});