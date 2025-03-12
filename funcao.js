// E -> P -> S
let n1 = 2 ;
let n2 = 3;
let n3 = 4;

function soma (n1, n2)
{
    let resultado = n1 + n2 ;
    return resultado;
}


function sub (n1, n2)
{
    let resultado = n1 - n2 ;
    return resultado;
}
let res = sub(3,5);
//console.log (res);

// função anomina 

let mult  = function(n1, n2)
{
    return n1 * n2;
} 

/*/
 * @param {number} n1 // 
 * @param {number} n2 
 * @param {function} op 
 * @returns  {number}
 /*/

function calc(n1 , n2 , op){
    return op( n1 , n2);
}

console.log(  calc(3,5 , mult));
console.log(  calc(3,5 , soma));
console.log(  calc(5,5 , sub));
