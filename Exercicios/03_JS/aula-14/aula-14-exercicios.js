// console.log("Exemplo1")
// for (var i = 0; i <= 10; i++) {
//     if (i % 3 == 0) {

//         console.log(i)

// console.log()

// console.log("Exemplo2")

// for (var i = 0; i <= 20; i++) {
//     if (i % 5 == 0) {
//         console.log(i)
//     }
// }
// console.log()

// console.log("Exemplo3")

// var valorA = 3;
// var valorB = -1;

// if (valorA < valorB) {
//     console.log('crescente')
//     for (var i = valorA; i <= valorB; i++)
//         console.log(i)
// } else {
//     console.log('decrescente')
//     for (var j = valorB; j <= valorA; j++)
//         console.log(j)
// }

// console.log()

// console.log("Exemplo5")
// var x = 3
// for (var i = 1; i <= 10; i++)
//     console.log(`${x} x ${i} = ${i*x}`)


// console.log()

// console.log("Exemplo6")

// var valor = 4

// if (valor < 0) {
//     console.log("valor invalido")
// } else if (valor == 0 || valor == 1) {
//     console.log('1');
// } else {
//     var acumula = 1;
//     for (var i = valor; i > 1; i--)
//     console.log(`${acumula} x ${i} = ${acumula * i}`)
//         acumula *- i;
// }
// consolo.log(acumula)



console.log("Exemplo5")

var a1 = {
    "nome": "A1",
    "estaOcupada": false,
}


var a2 = {
    "nome": "A2",
    "estaOcupada": true,
}


var a3 = {
    "nome": "A3",
    "estaOcupada": false,
}

var a4 = {
    "nome": "A4",
    "estaOcupada": true,
}

var a5 = {
    "nome": "A5",
    "estaOcupada": false,
}
var b1 = {
    "nome": "B1",
    "estaOcupada": true,
}
var b2 = {
    "nome": "B2",
    "estaOcupada": false,
}
var b3 = {
    "nome": "B3",
    "estaOcupada": true,
}
var b4 = {
    "nome": "B4",
    "estaOcupada": false,
}
var b5 = {
    "nome": "B5",
    "estaOcupada": true,
}
var c1 = {
    "nome": "C1",
    "estaOcupada": false,
}
var c2 = {
    "nome": "C2",
    "estaOcupada": true,
}
var c3 = {
    "nome": "C3",
    "estaOcupada": false,
}
var c4 = {
    "nome": "C4",
    "estaOcupada": true,
}
var c5 = {
    "nome": "C5",
    "estaOcupada": false,
}
var d1 = {
    "nome": "D1",
    "estaOcupada": true,
}
var d2 = {
    "nome": "D2",
    "estaOcupada": false,
}
var d3 = {
    "nome": "D3",
    "estaOcupada": true,
}
var d4 = {
    "nome": "D4",
    "estaOcupada": false,
}
var d5 = {
    "nome": "D5",
    "estaOcupada": true,
}

var estacionamento = [a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, d1, d2, d3, d4, d5]

console.log(estacionamento)

var resultado = 0;
const SOMA = '+';
const SUBTRACAO = '-';

function soma(a, b) {
    resultado = a + b
    return resultado
}

function subtracao(a, b) {
    return a - b
}

function calcular(valor1, funcao, valor2) {
    switch (funcao) {
        case SOMA:
            {
                return soma(valor1, valor2)
                break;
            }

        case SUBTRACAO:
            {
                return subtracao(valor1, valor2);
                break;
            }
        default:
            {
                return `A funcao [${funcao} escolhida é inválida, utilize os valores (\"+, -,\")]`
            }
    }
}

console.log(calcular(20, '-', 9));
console.log(calcular(20, '-', 10))