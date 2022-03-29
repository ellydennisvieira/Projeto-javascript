
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const skills = document.getElementById("skills");
const msg = document.getElementById("msg");

function evento(){
    if (nome.value == 0 || idade.value == 0 || skills ==0){
        msg.innerHTML= 'Erro, Preencha todos os campos.'
    }
    
    else{
        msg.innerHTML = `<strong>
            Olá praser em conhecer voce ${nome.value},
            você tem ${idade.value} está estudando ${skills.value}.
            Bem vindo a familha Dev!!! 
        </strong>`

    }

}

const valrEntrada = document.getElementById("valrEntrada")
const valorProduto = document.getElementById("valorProduto")
const msg_troco = document.getElementById("msg_troco")

function troco(){
    if ( valrEntrada.value == 0 || valorProduto.value == 0){
        msg_troco.innerHTML = `valor do produto ${valorProduto.value} e valor de entrada ${valrEntrada.value} zero troco.`

    }
    else{
        if (valrEntrada.value !=0 || valorProduto.value != 0){
            troco = valrEntrada.value - valorProduto.value 
            msg_troco.innerHTML = ` seu troco vai ser R$: ${troco}`
        }if (troco <=0 ) {
            msg_troco.innerHTML = `ERRO, valores incorretos ` 
        }
         
    }
}
