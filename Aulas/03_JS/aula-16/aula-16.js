// let foo = 'patrick'

// // function batata(nome) {
// //     console.log(nome)

// // }


// // var exibirNomeNaTela = batata

// // exibirNomeNaTela(foo)

// let foo = 'patrick'

// var exibirMeuNomeNaTela = function(foo){
//     console.log(foo)
// }
// exibirMeuNomeNaTela(foo)


// let foo = 'patrick'

// var exibirMeuNomeNaTela = () => {
//     console.log(foo)
// }

// exibirMeuNomeNaTela()


// let foo = 'patrick'

// var exibirMeuNomeNaTela = () => console.log(foo)

// exibirMeuNomeNaTela()




// let foo = 'patrick'

// function nomeda(fooOptional){
//     console.log('nossoconteudo')

// }

// var minhaFuncao = nomeada

// var minhaFuncaoReduzida1 = function (fooOptional){
//     console.log('funcao anonima')
// }

// var minhaFuncaoReduzida2 = (functionOptional,footOptional2) =>{
//     console.log(' funcao por arrow function')
// }

// var minhaFuncaoReduzida3 = foo => console.log( 'funcao por arrow function, sem chaves para coteudo de uma linha com multiplos parametros')

// var minhaFuncaoReduzida4 = foo =>{
//     console.log('foo')
//     console.log( 'funcao por arrow function, sem chaves para conteudo de uma linha com unico parametros')
// }
// var minhaFuncaoReduzida5 = foo => ( 'funcao por arrow function, sem chaves para coteudo de uma linha com unico parametros')

// var minhaFuncaoReduzida6 = () => console.log('funcao por arrow sem chaves para conteudo de uma linha sem paramtros')



// var funcao1 = () => console.log('iniciou minha primeira funcao')
// var funcao2 = () => console.log('iniciou minha segunda funcao')

// funcao1()
// funcao2()

let contador = 0

// while(true){
//     console.log(contador)
//     contador++

// }

// while(contador < 10){
//     console.log(contador)
//     contador++

// }

// do {
//     console.log(contador)
//     contador++

// } while (contador < 10)

// for(let  i = 0; i < 10; i++)

var carro = {
    'portas': 4,
    'potencia': '80cv'
}

function pegarGasolina() {
    if (carro.gasolina == undefined) {
        throw new UserException('não tem gasolina');
    } else {
        return 3;
    }

}

try {
    pegarGasolina()

} catch (error) {
    console.log(error)

}