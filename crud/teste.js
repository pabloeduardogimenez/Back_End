import { listar, pesquisar , cadastrar, Deletar, atualizar} from "./model/clientes.js";

/*async function teste()
{
    let valores = {
        telefone: "(12)21212-212",
        idade: 23,
        nome: "abc@abc.com"
    }
    let res = await atualizar(8,valores);
    
    console.log(res);
}

teste();


async function teste1()
{

    let res = await Deletar(8);
    
    console.log(res);
}

teste1();*/


async function teste1()
{

    let res = await listar();
    
    console.log(res);
}

teste1();