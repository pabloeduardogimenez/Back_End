//  novidade do Javascript
// experssoes indiomaticas

let  vetor = ["a", "b", "c"];

vetor.forEach( (item) => console.log(item));

let soma = function(a,b) {
    return a + b ;
}
// arrow function
export let mult = (a,b) => a+b;

export function abc(n1,n2){

}

console.log(mult(1,2));

let acordado = null;

let deitado = false;

if ( deitado == true)
{
    acordado= false;
} else
{
    acordado = true;
}
// if ternario
acordado = (deitado ==true) ? false : true;

// destructuring
let cidades = [ "curitiba", "colombo", "Pinhais"];
let a = cidades[0];
//quebrado
let [ b,c, ...resto] = cidades;
console.log(a , b , c, resto);
//mesclando array
let novo = [...cidades, ...vetor];
console.log(novo);

export let pessoa = {
    nome: "Maria",
    idade: 23,
    peso: 45.3
}
let maria = pessoa.nome;
console.log(maria, pessoa);
let {nome, idade} = pessoa;
nome = "joao";
console.log(nome, idade);


