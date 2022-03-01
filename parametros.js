 function soma(num1, num2){
     return num1 + num2;
 }

// console.log(soma (2, 2));
// console.log(soma(245, 20));
// console.log(soma(-500, 60));

// function nomeIdade(nome, idade){
//     return `meu nome é ${nome} e minha idade é ${idade} anos.`
// }

// console.log(nomeIdade("Juliana", 40));

function multiplica(num1, num2){
    return num1 * num2;
}

//Declarando que a variável número recebe o valor de 1 evita erro no cálculo caso algum
//valor seja esquecido de declarar.
// function multiplica(num1 = 1, num2 = 1){
//     return num1 * num2;
// }

console.log(multiplica(soma(4,5), soma(3, 3)));

console.log(multiplica(soma(4,5)));