console.log("Qual o valor de saque ?");

process.stdin.on('data', function(valor){
    if (valor >= 601 || valor <= 10){
        console.log("Valor de saque não poder ser menor R$ 10,00 ou maior  R$ 600,00.");
        process.exit(); 
        }   

    let cem = 0;
    let cinq = 0;
    let dez = 0;
    let cinco = 0;
    let um = 0;
    let resto = 0;        
    cem = parseInt(valor / 100);
    resto = valor % 100;


    if (resto > 0 )
    {
        valor = resto;
        cinq = parseInt(valor / 50);
        resto = valor % 50;
        
        if (resto > 10){
            dez = parseInt(valor/ 10);
            resto = valor % 10;

        }
        if (resto > 5){
            valor =  resto - valor;
            cinco = parseInt(valor / 5);
            resto = valor % 5;
        }
        if ( resto >= 1){
            um = parseInt(valor / 1);
        }     
        
    }
    console.log(cem+" notas de 100 " );
    console.log(cinq +" notas de 50 " );
    console.log(dez +" notas de 10 ");
    console.log(cinco +" notas de 5 ");
    console.log(um + "notas de 1");
    
});