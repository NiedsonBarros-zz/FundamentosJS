//Declaração de função

// function apresentar(nome){
//     return `meu nome é ${nome}`;
// }

//Arrow function
// const apresentarArrow = nome => `meu nome é ${nome}`
// console.log(apresentarArrow("Niedson"))

//Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 0 && num1 < 10 || num2 > 0 && num2 < 10) {
        return num1 + num2;
    } else {
        return "somente números de 1 a 9"
    }
}

console.log(somaNumerosPequenos(15, 16))