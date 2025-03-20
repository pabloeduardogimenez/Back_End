import { listar, pesquisar , cadastrar, Deletar, atulizar} from "./index.js";

async function teste()
{
    let valores = {
        telefone: "(12) 21212-212",
        idade: 23
    }
    let res = await atulizar(6,valores);
    
    console.log(res);
}

teste();

/*
async function teste()
{

    let res = await Deletar(6);
    
    console.log(res);
}

teste();
/*

async function teste1()
{

    let res = await pesquisar(5);
    
    console.log(res);
}

teste1();*/