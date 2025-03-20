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
            /*if (returno.changes == 1) {return true;} else {return false; }*/
          return (returno.changes ==1)? true : false;

        } catch (erro)
        {
          console.log("erro na banco de dados")
          //console.log(erro);
          return false;
        } 
}
/**
 *  Alterar os dados de um clientes
 * @param {number} id 
 * @param {JSON} colunas 
 * @returns 
 */
export async  function atulizar(id, colunas)
{
  /*  Object.keys(colunas.)*/
  let set = [];

  if (colunas.telefone ) {
    set.push( "telefone = '" + colunas.telefone+ "'"); 
  }
  if (colunas.nome) {
     set.push( "nome = '" + colunas.nome+"'"); 
  }
  if (colunas.idade) {
    set.push( "idade = '" + colunas.idade + "'"); 
  }
  if (colunas.email) {
  set.push( "email = '" + colunas.email + "'"); 
  }
  if (colunas.cidade) {

  set.push( "cidade = '" + colunas.cidade + "'"); 
  }
  let sql = "UPDATE clientes "
      + "SET " + set.join(" , ") +
      " WHERE id = "+ id;
  

  const db = await conexao();

  const returno = await db.run(sql , id);
      
  return (returno.changes == 1)? true : false;
}
/**
 * Deletar um clinte da tabela
 * @param {number} id 
 * @returns {boolean}
 */
export async  function Deletar(id)
{
  let sql = 'DELETE FROM clientes  WHERE id = ? '; 

  const db = await conexao();

  const returno = await db.run(sql , id);
  
  return (returno.changes == 1)? true : false;

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



