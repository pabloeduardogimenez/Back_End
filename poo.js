// caneta biq
class Caneta {
    //atributos -> adjetivos
    cor;
    quantTinta = 100;   
    constructor(cor = "Azul"){
        this.cor = cor;
    } 
    //metodo -> função -> ação
    escrever(palavra)
    {
        if (this.quantTinta > 0){
            console.log("Escreveu: " + palavra );
            this.quantTinta = this.quantTinta - palavra.length;
            console.log("Quantidade  de tinta :" + this.quantTinta);
        } else {
            console.log("acabou a tinta");
        }
        
    }
}

// Herança

class CanetaQuadro extends Caneta{
    quantTinta = 1000;

}

class CanetaLaser extends CanetaQuadro {
    LaserLigado = false;
}



// instância
let biq1 = new Caneta("Verde");
let biq2 = new Caneta("Pedro");
let biq3 = new CanetaLaser();

//biq1.cor = "preto";
//console.log(biq1 instanceof Caneta);
console.log(biq1);
console.log(biq2);
console.log(biq3);

biq1.escrever(" oi Turma");
biq3.escrever(" oi Turma");

