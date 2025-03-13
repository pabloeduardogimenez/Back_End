let M = "bom dia" ;
let V = "boa tarde";
let N = "boa noite";

function letra (n1){
    if (n1 == "M"){
        console.log(M);
    } else if (n1 == "V"){
        console.log(V);
    }
    else if (n1 == "N"){
        console.log(N);
    }
}


letra("M");
letra("V");
letra("N");

let a = 4 ;
let b = 3 ;
let c = 2 ;

let delta = ((4*a) *c);

    if (a == 0 ){
    console.log(" a equação não é do segundo grau e o programa");
    } else if ( delta  < 0 ) {
    console.log( "a equação possui apenas uma raiz real");
    } else if ( delta > 0) {
        console.log( "a equação possui duas raiz reais");
    }


function raízes ( a,b,c){

    let valor1 = (-b - Math.sqrt((4*a) *c ))/2*a;
    let valor2 = (+b + Math.sqrt((4*a) *c ))/2*a;
    let valor3 = valor1 + valor2;

    console.log(valor1);
    console.log(valor2);
    
}

raízes(3,6,9);  
