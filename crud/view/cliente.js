$(document).ready(function(){

    function listarClientes(coluna, ord){

        let dados = {
            coluna,
            ord
        }
        $.getJSON("http://localhost:3000/clientes", ord,function(dados){



            console.log(dados);        
            dados.forEach((item) => {
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

    }
    listarClientes();
  
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

                if (retorno == true)
                {
                    $("#form-cadastro").model("hide");
                    let html = '<tr>'                
                    +'<td></td>'  
                    +'<td>'+item.nome+'</td>'  
                    +'<td>'+item.email+'</td>'  
                    +'<td>'+item.telefone+'</td>'  
                    +'<td>'+item.cidade+'</td>'  
                    +'<td>'+item.idade+'</td>' 
                    +' </tr>' 

                    $("#lista").append(html); 

                    
                }
            }); //fim do post
        }

    }); // fim do click
    $("ord").click(function(){
        let coluna = $(this).attr("coluna");
        let ord = $(this).attr("ord");
        ord (ord == "ASC") ? "DESC" : "ASC";
        $(this).attr("ord", ord);
       

        $(".ord").removeClass("link-secondary");
        $(".ord").addClass("link-primary");

        $(this).removeClass("link-primary");
        $(this).addClass("link-secondary");

        listarClientes(coluna, ord);
    }); // fim do click link

});