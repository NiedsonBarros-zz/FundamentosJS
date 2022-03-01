// const idadeMinima = 18;
// const idadeCliente = 16;

// // if (idadeCliente >= idadeMinima){
// //     console.log("cerveja")
// // } else{
// //     console.log("suco")
// // }

// //If com operador ternário (Não é muito recomendado utilizar o operador ternário pela dificuldade
// //em ler e interpretar o código e pode prejudicar a agilidade da manutenção)
// console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
//-------------------------------------------------------------------

// const nome = "Niedson";
// const idade = 17;
// const bebidaMaior = "cerveja";
// const bebidaMenor = "Suco";

// const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
// console.log(pedido)

//Exemplo de código que usa o operador ternário ao invés do IF
// const nome = "Raisa";
// const nomeAnimal = "gato";
// const idade = 0.5;
const idadeLimite = 1;
const racaoGatoCastrado = "Ração Gato Castrado"
const racaoGatoFilhote = "Ração Gato Filhote"

// const tipoRacao = `${nome}, a racao mais indicada pro seu ${nomeAnimal} é a ${idade >= 1 ? racaoGatoCastrado : racaoGatoFilhote}.`;
// console.log(tipoRacao);

//function + operador ternário
// function racao(nome, nomeAnimal, idade){
//     return `${nome}, a ração mais indicada para ${nomeAnimal} é a ${idade >= `${idadeLimite}` ? racaoGatoCastrado : racaoGatoFilhote}. `;
// }

//Expressão de função + operador ternário
// const racao = function(nome, nomeAnimal, idade){
//     return `${nome}, a ração mais indicada para ${nomeAnimal} é a ${idade >= `${idadeLimite}` ? racaoGatoCastrado : racaoGatoFilhote}. `;
// }

//Arrow Function + operador ternário
// const racao = (nome, nomeAnimal, idade) =>{
//          return `${nome}, a ração mais indicada para ${nomeAnimal} é a ${idade >= `${idadeLimite}` ? racaoGatoCastrado : racaoGatoFilhote}. `;
// }

// console.log(racao("Raisa", "Gamora", 0.9))


