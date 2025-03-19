// CRUD 
// C -> create -> Criar
// R -> Read -> Ler
// U -> Up Date -> Atualizar 
// D -> Delete

// DB Banco de Dados
// SQL -> relacional -> estruturado -> Mysql, sqlserver, oracle, postgres
// NoSQL -> Monodb, redis, cassandra, dinamo

import  { open} from "sqlite";
import sqlite3  from "sqlite3";

function cadastrar() 
{

}

function atulizar()
{

}
function Deletar()
{

}

export async function pesquisar(id)
{
    let sql = "SELECT * FROM clientes WHERE id ="+id;
    const db = await open(
      {
          filename :"clientes.db",
          driver : sqlite3.Database
      });
      return await db.get(sql);


}
/**
 * 
 * @returns lista todos os clientes cadastrado ordenados pelo nome
 * @returns josn
 */

export async function listar()
{
  let sql = "SELECT * FROM clientes ORDEY BY nome";
  const db = await open(
    {
        filename :"clientes.db",
        driver : sqlite3.Database
    });
    return await db.all(sql);
}



