/*

[x] Variáveis 
 - é um pedacinho da memória do computador, 
    - onde você pode armazenar informações,
    mas, temos que dar um nome para essa informação.
    let + um nome = variável
    
[x] Função 
 - pedacinho de código que só é, executado quando eu ordenar. 

 function + nome Da Funcao + () + {}
[x] "Tempo"
setinterval - ele chama um função de tempos em tempos
5 em 5 segundos.

[x] if & else
    se faça isso. 
    senão faça aquilo.

    = atribui ou coloca um valor dentro
    == compara duas coisas A com B 

let devclub = "guardartexto" 
let numerodacasa = 10
console.log("devclub")
console.log("numerodacasa")

function dizermeunome(){
console.log("meunoemevandro")
}

dizermeunome()
*/


let imagem = document.querySelector(".troca-imagem")
// document = html
// querySelector = selecionar alguma coisa

    function trocaImagem(){
        if(imagem.style.opacity == 0){
         imagem.style.opacity = 1
        } else  {
            imagem.style.opacity = 0
        } 
 // opacity = opacidade / 1 visivel. / 0 invisivel
}  

setInterval(trocaImagem, 3000)

