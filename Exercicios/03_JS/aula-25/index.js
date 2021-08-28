const tabuleiro = document.querySelector('#Tabuleiro');
const linhas = tabuleiro.querySelectorAll('tr');


linhas.forEach((linha, indiceL) => {

    const colunas = linha.querySelectorAll('td');


    colunas.forEach((td, indiceC) => {

        const campo = td.querySelectorAll('.campo')[0];

        campo.addEventListener('click', () => {
            if (!campo.className.includes("aberto")) {
                if (campo.className.includes("marcado")) {
                    campo.className = "campo"
                    campo.innerText = ""
                } else {
                    campo.className = "campo aberto"
                    campo.innerText = ""
                }
            }

        })

        campo.addEventListener('contextmenu', () => {


            if (!campo.className.includes("aberto")) {
                if (campo.className.includes("marcado")) {
                    campo.className = "campo"
                    campo.innerText = ""
                } else {
                    campo.className = "campo marcado"
                    campo.innerText = "M"
                }
            }




        })



    })

})

function marcar() {

}