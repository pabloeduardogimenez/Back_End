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

async function conexao() {
  let db = await open(
    {
        filename :"sqlite.db",
        driver : sqlite3.Database
    });
  return db;
}
/**
 * 
 * @param {string} nome 
 * @param {string*} email 
 * @param {string*} cidade 
 * @param {string} telefone 
 * @param {number} idade 
 * @returns 
 */
export async function cadastrar(nome,email,cidade,telefone,idade) 
{
  let sql = 'INSERT INTO clientes' 
            +'(nome, cidade, email , telefone, idade)'
            + 'VALUES '
            + "(?, ?, ?, ?, ?)";
            /*+ nome +' , '
            + email +' , '
            + cidade +' , '
            + idade + ' , '
            + telefone + ' )';*/
        try {
          const db = await conexao();    
          let returno = await db.run(sql, nome, cidade, email, idade, telefone);
          return (returno.changes ==1)? true : false;

        } catch (erro)
        {
          console.log("erro na banco de dados")
          //console.log(erro);
          return false;
        }
  

    /*if (returno.changes == 1){
      return true;
    } 
    else
    {
      return false;
    }*/
    


}

function atulizar()
{

}
function Deletar()
{

}

export async function pesquisar(id)
{
    let sql = "SELECT * FROM clientes WHERE id ="+ id;
    const db = conexao();
      return await db.get(sql);


}
/**
 * 
 * @returns lista todos os clientes cadastrado ordenados pelo nome
 * @returns josn
 */

export async function listar()
{
  let sql = "SELECT * FROM clientes ORDER BY nome";

  const db = conexao();
    return await db.all(sql);
}



