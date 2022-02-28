// == (comparação implícita) - Só compara o valor do dado
// === (comparação explícita) - Compara o valor e o tipo de dado
// != (não igual) - !== (estritamente não igual)
// Boa prática utilizar o conversão explícita

const numero = 5;
const texto = "5";

console.log(numero === texto)

//typeof Descobre qual o tipo de dado que está sendo salvo na variável
console.log(typeof numero);
console.log(typeof texto);

//Converter os tipos de dados
//Number() - Converte string em número.
//String() - Converte número e booleano em String.