console.log("Digite um número inteiro");
let lista=[];
let listaPar = [];
let listaImp  = [];
function VerParImp(n) {
    if (n & 1 == 1) {
        
        return listaImp.push(n);

    } else{
        
        return listaPar.push(n);
    }
    
}

process.stdin.on("data", function (valor) {

    let numero = Number.parseFloat(valor);

   
    if(Number.isInteger(numero) == false)  {
        console.log("Digite somente números interios.");  
        process.exit(); 
    }
   
     lista.push(numero);
     VerParImp(numero);

    
 
    if (lista.length >= 5){           
          
            console.log("quantidade maxima é 20 números;");

            console.log("Lista de númros pares: ");            
            listaPar.forEach(function(item){
                console.log(item);
            });
            console.log("Lista de númros ímpares: ");
            listaImp.forEach(function(item){                
                console.log(item);
                });
           process.exit();         
        
    } 
   
 
});