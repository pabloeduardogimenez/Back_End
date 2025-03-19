import { listar, pesquisar , cadastrar} from "./index.js";

async function teste()
{

    let res = await cadastrar("pablo", "aa", "Rio janeiro", "14-12258-2589",12);
    
    console.log(res);
}

teste();


async function teste1()
{

    let res = await pesquisar(5);
    
    console.log(res);
}

teste1();