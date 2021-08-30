const tabuleiro = document.querySelector('#Tabuleiro');
const linhas = tabuleiro.querySelectorAll('tr');


linhas.forEach((linha, indiceL) => {

    const colunas = linha.querySelectorAll('td');


    colunas.forEach((td, indiceC) => {

        const campo = td.querySelectorAll('.campo')[0];

        atribuirBombasAosCampos({
            campo,
            indiceL,
            indiceC,
        });

        campo.addEventListener('click', () => {
            alert("")
            if (!campo.className.includes("aberto")) {
                if (campo.className.includes("aberto")) {
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
                    campo.className = campo.className.replace(' marcado', '')
                    campo.innerText = ""
                } else {
                    campo.className = "campo marcado"
                    campo.innerText = "🚩"
                }
            }

        })

    })

})


function atribuirBombasAosCampos(elemento) {
    Math.random();

    if (Math.random() > 0.67) {
        elemento.campo.innerText = "B"
        elemento.className = 'campo bomba'
    } else {
        elemento.campo.innerText = ""
        elemento.campo.className = 'campo'

    }

}