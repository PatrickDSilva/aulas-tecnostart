function criarTabuleiro(casas) {
    var tabuleiro = []
    for (var i = 1; i <= casas; i++) {
        tabuleiro.push({
            posicao: i,
            tipo: 'normal'
        })
    }
    return tabuleiro
}
var resultado = criarTabuleiro(5)
console.log(resultado)


function rolarDado() {
    return new Promise(function(resolvedor, rejeitador) {
        setTimeout(function() {
            console.log('A rolagem de dado foi' + dado);
            var dado = Match.floor(Math.random() * 6 + 1);
        }, 1000);
    })
}


function mover() {
    console.log('movendo' + quantidade + 'casas')
}

function jogar() {
    rolarDado(function(dado) {
        mover(dado)

    })
}

async function demonstrar() {
    console.log()



}

jogar()