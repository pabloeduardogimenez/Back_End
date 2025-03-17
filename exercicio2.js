console.log("Digita uma Data com Dia Mês Ano no formato dd/mm/aaaa");

process.stdin.on('data', function(valor){
    var regex_data = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/gm;
    let data = valor.toString().trim(); 
    let dia = data.slice(0,1);
    let mes = data.slice(3,4);
    if (data.length != 10) {
        console.log("A data esta em formato invalido.");
    }
    if (data.charAt(2) != "/" || data.charAt(5) != "/" ){
        console.log("A data esta em formato invalido.");
    }
    if (dia  > 31 ) {
        console.log("data possuir dia maior que 31 dias. " + data );
    }
    if (mes  > 12 ) {
        console.log("data possuir mês maior que 12." + data );
    } 
    console.log(data);

    
});
