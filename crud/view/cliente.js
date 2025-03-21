$document.ready(function(){

    $.getJOSN("http://localhost:3000/clientes",function(dados){
        console.log(dados);
        dados.forEacch((item)=>{
            let html = '<tr>'                
                +'<td>'+item.id+'</td>'  
                +'<td>'+item.nome+'</td>'  
                +'<td>'+item.email+'</td>'  
                +'<td>'+item.telefone+'</td>'  
                +'<td>'+item.cidade+'</td>'  
                +'<td>'+item.idade+'</td>' 
           +' </tr>' 
            $("#lista").append(html); 
        });    
    });
    $("#bt-salvar").click(() => {
        let nome = $("#nome").val();
        let email = $("#email").val();
        let cidade = $("#cidade").val();
        let telefone = $("#telefone").val();
        let idade = $("#idade").val();

        let temErro = false;

        $("input").removeClass('is-invalid');
        if (nome.trin() == '')
        {
            $("#nome").addClass('is-invalid');
            temErro = true;
        }
        if (nome.trin() == '')
        {
            $("#email").addClass('is-invalid');
            temErro = true;
        }
        if (temErro == false){
            let dados = {
                nome,
                email,
                cidade,
                idade,
                telefone
            }
 
            $.post("http://localhost:3000/clientes/novo", dados, (retorno) => {
                console.log(retorno);
            })
        }

    });
});