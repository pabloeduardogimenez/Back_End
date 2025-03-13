console.log("Digita uma Data com Dia Mês Ano");

process.stdin.on('data', function(dados){
    var regex_data = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/gm;

    let data = dados.toString().trim();  
    let dia = 0;
    let mes = 0;
    let ano = 0;

    if (data == "" || regex_data.test(data) == false){
                console.log("data invalida");
               process.exit(); 
    } else if (dia <=31 ) {

    } 
    else {
        console.log("data é valida. " + data );
    }
    
});
