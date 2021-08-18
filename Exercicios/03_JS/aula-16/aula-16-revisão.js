// function lembrete(pessoa) {
//     console.log(pessoa.nome + ": " + pessoa.idade + " = " + pessoa.hobby)
// }


// const p = {
//     nome: "Patrick",
//     idade: 33,
//     hobby: "futebol"

// }

// lembrete(p)

// function cadastroAluno(aluno){
//     console.log('cadastrando om aluno de id' + aluno.id)
//     console.log('enviando email de verificação para' + aluno.email)
// }

// const aluno = {
//     id: 1
//     nome: "Patrick"
//     email: "patrick10diniz@hotmail.com"
// }


// var celular = {
//     tela: 4.7,
//     memoria: "64gb",
//     marca: "samsung",
//     cameras: [{
//         resolucao: '64px',
//         zoom: 8,

//     }, {
//         resolucao: '50px',
//         zoom: 11,
//     }]
// }


// var iphone = {
//     tela: 4.7,
//     memoria: "64gb",
//     marca: "iphone",
//     cameras: [{
//         resolucao: '200px',
//         zoom: 80,
//     }]
// }

// function demonstrar(produto) {
//     console.log('demonstrando o produto ' + produto.marca)

//     for (let i = 0; i < produto.cameras.length; i++) {
//         console.log('demonstrar as cameras ' + produto.cameras[i].resolucao + '/' + produto.cameras[i].zoom);

//     }

// }

// demonstrar(celular)
// demonstrar(iphone)


// function rolarDados(max) {
//     var aleatorio = Math.floor(Math.random() * max + 1)
//     return aleatorio
// }
// var resultado = rolarDados(6)
// console.log(resultado)
// var resultado = rolarDados(10)
// console.log(resultado)

// function criarTabuleiro(casas) {
//     var tabuleiro = []
//     for (var i = 1; i <= casas; i++) {
//         tabuleiro.push(i)
//     }
//     return tabuleiro
// }
// var resultado = criarTabuleiro(5)
// console.log(resultado)


// function criarTabuleiro(casas) {
//     var tabuleiro = []
//     for (var i = 1; i <= casas; i++) {
//         tabuleiro.push({
//             posicao: i,
//             tipo: 'normal'
//         })
//     }
//     return tabuleiro
// }
// var resultado = criarTabuleiro(5)
// console.log(resultado)

// function criarTabuleiro(casas) {
//     var tabuleiro = []
//     for (var i = 1; i <= casas; i++) {
//         tabuleiro.push({
//             posicao: i,
//             tipo: 'normal'
//         })
//     }
//     return tabuleiro
// }
// var resultado = criarTabuleiro(5)
// console.log(resultado)

// function geraCasasAleatorias() {

//     var casas = ['avança', 'recua', 'espera', 'dado', 'normal'][Math.floor(Math.random() * 5)]
//     for (var i = 0; i < 1; i++) {

//     }
//     return casas;
// }

// var chamadaAleatoria = geraCasasAleatorias()
// console.log(chamadaAleatoria);


// var tiposCasas = ['avança', 'recua', 'espera', 'dado', 'normal']

// function geraCasasAleatorias(max) {

//     return Math.floor(Math.random() * max)
// }


// function gerar(){
//     var
// }


// function gerarNumeroAleatorio(min, max){
//     return Math.floor(Math.random() * (max - min))

// }
// gerarNumeroAleatorio(0, 4)
// console.log(gerarNumeroAleatorio(0, 4))

// function rolarDados(){
//     return gerarNumeroAleatorio
// }


// function exibirAtraso(esperar){
//   setTimeout(esperar, 5000)


// }

// function ola(){
//   console.log('Olá mundo', new Date())
// } 

// function tchau(){
//   console.log('Tchau amigos', new Date())

// }


// exibirAtraso(ola)
// exibirAtraso(tchau)


// function converterParaDolar(valorEmReais){
//   return valorEmReais * 5.25
// }
// var valor = 100 + 37 * 2 - 90
// var valorEmDolar = converterParaDolar(valor)


// console.log(valorEmDolar)

// callback:
// function consultarCotacaoDolar(algoQueVaiAcontecerNoFuturo) {
//     console.log('consultarCotacaoDolar: Iniciando consulta da cotação')
//     setTimeout(function() {
//         console.log('consultarCotacaoDolar: Finalizada consulta da cotação')
//         algoQueVaiAcontecerNoFuturo(5.25)
//     }, 5000)

// }


// function converterParaDolar(valorEmReais, algoQueVaiAcontecerNoFuturo/ aqui poderia ser callback) {
//     consultarCotacaoDolar(function(cotacao) {
//         console.log('converterParaDolar: Fui avisado que a consulta foi feita', cotacao)
//         var valorEmDolar = valorEmReais * cotacao
//         algoQueVaiAcontecerNoFuturo(valorEmDolar)

//     })
// }
// var valor = 100 + 37 * 2 - 90
// converterParaDolar(valor, function(resultado) {
//     console.log('Principal: Fui avisado que meu calculo está pronto', resultado)
// })


// function consultarCotacaoDolar(callback) {
//   setTimeout(function() {
//       callback(5.25)
//   }, 5000);
// }

// consultarCotacaoDolar(function(cotacao) {
//   console.log(cotacao)
// }) 



// promise:

// function rolarDado(){
//   return new Promise (function(resolvedor, rejeitador){

//   setTimeout(function()  {
//     console.log('A rolagem de dado foi' + dado);
//     var dado = Match.floor(Math.random() * 6 + 1);
//     callback(dado)
//   }, 1000);
// }

// function mover(){
//   console.log('movendo' + quantidade + 'casas')
// }

// function jogar(){
//   rolarDado(function(dado) {
//     mover(dado)

//   })
// }
// jogar()


// function exibirAtraso(esperar){
//   setTimeout(esperar, 5000)


// }

// function ola(){
//   console.log('Olá mundo', new Date())
// } 

// function tchau(){
//   console.log('Tchau amigos', new Date())

// }


// exibirAtraso(ola)
// exibirAtraso(tchau)