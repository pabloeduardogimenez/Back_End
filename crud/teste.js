import { listar, pesquisar } from "./index.js";

/*ync function teste()
{

    let res = await listar();
    
    console.log(res);
}

teste();
*/

async function teste()
{

    let res = await pesquisar(5);
    
    console.log(res);
}

teste();