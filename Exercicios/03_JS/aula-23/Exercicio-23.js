const listaDePessoas = [{
        nome: "Tânia Hadassa Carolina Monteiro",
        idade: 39,
        data_nasc: "13-05-1982",
        sexo: "Feminino",
        estado: "RS",
        telefone_fixo: "(54) 2827-1357",
        celular: "(54) 98393-6669"
    },
    {
        nome: "Antonio Gael Rodrigo Pires",
        idade: 43,
        data_nasc: "27-06-1978",
        sexo: "Masculino",
        estado: "SE",
        telefone_fixo: "(79) 3872-4267",
        celular: "(79) 99752-1168"
    },
    {
        nome: "Mário Murilo Bernardes",
        idade: 41,
        data_nasc: "02-01-1980",
        sexo: "Masculino",
        estado: "PB",
        telefone_fixo: "(83) 3648-3860",
        celular: "(83) 99438-4140"
    },
    {
        nome: "Jéssica Maya Carolina Castro",
        idade: 37,
        data_nasc: "23-11-1984",
        sexo: "Feminino",
        estado: "RS",
        telefone_fixo: "(51) 3520-6213",
        celular: "(51) 99905-2574"
    },
    {
        nome: "Levi Martin da Cunha",
        idade: 51,
        data_nasc: "08-11-1970",
        sexo: "Masculino",
        estado: "PA",
        telefone_fixo: "(93) 2881-8795",
        celular: "(93) 99387-8246"
    },
    {
        nome: "Renato Mateus da Rocha",
        idade: 28,
        data_nasc: "05-04-1993",
        sexo: "Masculino",
        estado: "AP",
        telefone_fixo: "(96) 2973-1018",
        celular: "(96) 99580-6925"
    },
    {
        nome: "Esther Elaine Nunes",
        idade: 64,
        data_nasc: "15-05-1957",
        sexo: "Feminino",
        estado: "AP",
        telefone_fixo: "(96) 3718-0280",
        celular: "(96) 98622-3617"
    },
    {
        nome: "Sueli Julia Sara Ferreira",
        idade: 54,
        data_nasc: "25-01-1967",
        sexo: "Feminino",
        estado: "SC",
        telefone_fixo: "(48) 2918-2581",
        celular: "(48) 98719-3195"
    },
    {
        nome: "André Cauã Theo da Cruz",
        idade: 77,
        data_nasc: "10-09-1944",
        sexo: "Masculino",
        estado: "PR",
        telefone_fixo: "(42) 3838-7280",
        celular: "(42) 98775-6271"
    },
    {
        nome: "Danilo Thales Giovanni Baptista",
        idade: 45,
        data_nasc: "09-12-1976",
        sexo: "Masculino",
        estado: "SC",
        telefone_fixo: "(47) 2670-4176",
        celular: "(47) 99849-2199"
    }
]


// let listaTelefonica = [];
// for (let i = 0; i < listaDePessoas.length; i++) {
//     let lista = listaDePessoas[i];

//     let pessoas = {
//         "nome": lista.nome,
//         "telefone_fixo": lista.telefone_fixo,
//         "celular": lista.celular,
//     }

//     listaTelefonica.push(pessoas)
// }


// console.log(listaTelefonica)


// Lista Telefonica //
// listaTelefonica = listaDePessoas.map(lista => {
//     return {
//         "nome": lista.nome,
//         "telefone_fixo": lista.telefone_fixo,
//         "celular": lista.celular,
//     }
// })

// console.log(listaTelefonica);



// Feminino //

//listaGeneroFeminino = listaDePessoas.filter(genero => genero.sexo === "Feminino") 
//console.log(listaGeneroFeminino);


// Masculino //

//listaGeneroMasculino = listaDePessoas.filter(genero => genero.sexo === "Masculino")
//console.log(listaGeneroMasculino);


// Nome da Pessoa //

// listaDePessoas.forEach(pessoa => console.log(pessoa.nome))


// Primeira Pessoa RS //

//primeiraPessoaRs = listaDePessoas.find(pessoa => pessoa.estado === "RS");
//console.log(primeiraPessoaRs);



// Removendo Ultimo Elemento // // Vai alterar a lista //

// listaDePessoas.pop();
// console.log(listaDePessoas);

// let listaDePessoaMenosUm = listaDePessoas
// listaDePessoaMenosUm.pop()
// console.log(listaDePessoaMenosUm)



// Inserindo Pessoa //

// listaDePessoas.push({ // Vai alterar a lista //
//     nome: "Alana Vera Assis",
//     idade: 68,
//     data_nasc: "01-05-1953",
//     sexo: "Feminino",
//     estado: "PB",
//     telefone_fixo: "(83) 2837-2032",
//     celular: "(83) 99413-4852"
// })

// console.log(listaDePessoas)

// const pessoaExtra = {
//     nome: "Alana Vera Assis",
//     idade: 68,
//     data_nasc: "01-05-1953",
//     sexo: "Feminino",
//     estado: "PB",
//     telefone_fixo: "(83) 2837-2032",
//     celular: "(83) 99413-4852"
// }

// let listaDePessoaMaisUm = listaDePessoas
// listaDePessoaMaisUm.push(pessoaExtra)

// console.log(listaDePessoaMaisUm)



// Lista para Estado //

// let listaDeEstado = []

// listaDePessoas.forEach(pessoa => {
//     const mecanismoDeBusca = (pessoaEstado) => pessoaEstado.estado === pessoa.estado

//     if (!listaDeEstado.find(elemento => elemento.estado === pessoa.estado)) {
//         listaDeEstado.push({
//             estado: pessoa.estado,
//             pessoa: listaDePessoas.filter(mecanismoDeBusca)
//         })



//     }
// })

// listaDeEstado.forEach(estado => console.log(estado))


// let listaDeEstado = []

// listaDePessoas.forEach(pessoa => {
//     const mecanismoDeBusca = (pessoaEstado) => pessoaEstado.estado === pessoa.estado

//     if (!listaDeEstado.find(mecanismoDeBusca)) {
//         listaDeEstado.push({
//             estado: pessoa.estado,
//             pessoa: listaDePessoas.filter(mecanismoDeBusca)
//         })



//     }
// })

// listaDeEstado.forEach(estado => console.log(estado))