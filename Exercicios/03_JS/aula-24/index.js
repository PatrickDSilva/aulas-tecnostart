var a, b, rest; // Não é possível fazer const por conta do valor//



// Desestruturação de Array //

// CASO 1 //

// [a, b] = ['valor1', 'valor2']

// console.log('variavel a:' + a)
// console.log('variavel b:' + b)


// CASO 2 //

// [a, b] = ['valor1', 'valor2', 'valor3']

// console.log('variavel a:' + a)
// console.log('variavel b:' + b)




// CASO 3 //

// [, a, b] = ['valor1', 'valor2', 'valor3']

// console.log('variavel a:' + a)
// console.log('variavel b:' + b)


// CASO 4 // => Exemplo mais comum //

// var foo = ['valor1', 'valor2', 'valor3']
// var [a, b] = foo

// console.log('variavel a:' + a)
// console.log('variavel b:' + b)




// CASO 5 //

// var foo = ['valor1', 'valor2', 'valo3'] // a1x1
//     // var [a, ...rest]// b3x9 // = foo // Conteúdo de rest tem o conteúdo de foo//

// rest = foo // Conteúdo de rest e igual do foo //


// if (rest === foo) {
//     // rest = foo => assim seriam iguais por que apontam para o mesmo endereço de memória.//
//     console.log("iguais por que apontam para o mesmo endereço")


// } else {

// console.log('variavel a:' + a)
// console.log('variavel b:' + b)
// console.log('variavel rest' + rest)
// }


// foo.forEach( f =>{ // Comparar arrays //
//     rest.forEach(r => {
//         f === r  
//     })

// })




// // CASO 6 //

// var foo = {
//     a: 23,
//     b: "Patrick",
//     c: "Diniz"

// }

// rest = {...foo } // Recebe o conteudo da Desestruturação //

// console.log('variavel a: ' + a)
// console.log('variavel b: ' + b)
// console.log(rest)



// // CASO 7 //

// var foo = {
//     a: 23,
//     b: "Patrick",
//     c: "Diniz"

// }

// var a, b, rest;

// ({ a, ...rest } = foo)

// console.log('variavel a: ' + a)
// console.log('variavel b: ' + b)
// console.log(rest)



////////////////////////////////////////////////////
// Desestruturação de Objeto // => Bastante utilizado nas linguagem //


// CASO 1 //

// var foo = {
//     idade: 23,
//     nome: "Patrick",
// }

// var { idade, nome } = foo

// console.log('variavel a:' + idade)
// console.log('variavel b:' + nome)




// CASO 2 //

// var foo = {
//     idade: 23,
//     nome: "Patrick",
//     sobrenome: "Diniz",

// }

// var { idade, nome } = foo // Não importa a ordem, ele vai pelo nome e não pelo valor. //

// console.log('variavel idade:' + idade)
// console.log('variavel nome:' + nome)




// CASO 3 //

// var foo = {
//     age: 23,
//     name: "Patrick",
//     lastName: "Diniz",

// }

// var { age: idade, name: nome } = foo
// console.log('variavel idade:' + idade)
// console.log('variavel nome:' + nome)




//  CASO 4 //

// var foo = {
//     a: 23,
//     b: "Patrick",
//     c: "Diniz"


// }

// var a, b // Precisa estar aqui para funcionar //


// ({ a, b } = foo)
// console.log(a)
// console.log(b)




// // CASO 5 //

// ({ a, b } = {
//     a: 23,
//     b: "Patrick",
//     c: "Diniz"

// })

// console.log(a) 
// console.log(b)



/////////////////////////////////////////////////////////////////////
// Desestruturação de Função //



// CASO 1 // => Forma mais simples de retornar vários valores//

// function foo(valor) {
//     return [valor, "ciclano"] // dois tipos de retorno., "objeto" //
// }

// [a, b] = foo(29) // Formato mais usado em React //

// console.log('variavel a:' + a)
// console.log('variavel b:' + b)




// CASO 2 //

// function foo() {
//     return {
//         idade: 23,
//         nome: "Patrick",

//     }
// }

// ({ idade, nome } = foo())

// console.log(idade)
// console.log(nome)






// var a, b, rest;

// var [,a, b, ...rest] = [25, 'jackson', '09-08-1990', 'Full-stack', ['cwi', 'tecnostart']]


// console.log('variavel a: ' + a)
// console.log('variavel b: ' + b)
// console.log('variavel rest: ' + rest)





// Exercicios //


// var a, b, rest;

// var empresa = {
//     nomeFantasia: 'Batata expresso',
//     razaoSocial: 'Batata Silva', //A
//     cnpj: '00.000.000.00/0000.00', //B
//     funcionario: [{ //REST
//         idFuncionario: 1,
//         nomeFuncionario: 'zé',
//         salario: 1000.00

//     }]


// }

// var a, b, rest;

// ({ razaoSocial: a, cnpj: b, funcionario: rest } = empresa)

// console.log('variavel a: ' + a)
// console.log('variavel b: ' + b)
// console.log(rest)