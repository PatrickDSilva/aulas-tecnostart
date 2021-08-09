#Array '[]'

* Nem sempre é uma lista, mas pode ser enterpretado como uma lista.

------------------------------------
##Exemplos:

* _var frutas = ['maca'; 'banana'; 'abacate']_
console.log(frutas).

* _Para pegar um único elemento:_
console.log(banana[2]), ele irá printar somente o banana no node.

* _Adicionar itens:_ -
  frutas[4] = 'abacaxi';
  console.log(frutas[4])

  Como o indíce começa em **"0"**, o abacaxi ficaria na quinta posição da lista.

-------------------------------
  _Para colocar na última posição_:

  **frutas.push('uva');**
  ['maca', 'banana', 'abacate',_'uva'_]

-------------------------------
 _Para remover algo:_
  **futas[4]=null;** 
  ['maca', 'banana', 'abacate',_'null(**vazio**'_]

-------------------------------
_Para remover algo:_
**_fruta.pop():_** Remove o último objeto da lista.
 
-------------------------------
 _Tamanho:_
 **_console.log(fruta.length):_** Vai ser aparecer o tamanho da array.

-------------------------------
 **_fruta.sort():_** Vai tentar da melhor forma possível order, o conteúdo da array.

 Se for uma **string**, vai ordenar em ordem alfabetica.

 Se for **number**, vai organizar do menor para o maior.

--------------------------------
**_futas.indexOF('banana'):_** Ele retorna o indíce.

 ['maca', 'banana', 'abacate',_'uva'_]
**_2_** : indice retornado.

futas.indexOF([2]):
**_banana**_

----------------------------------
**Null:** Não existe espaço, está completamente vazio, existe a posição, mas não tem nada dentro.

**Empty:**Está vazio, porém pode haver algo ali.

----------------------------------

###JSON

* É a representação de um objeto, só que em forma de texto.

* Para dizer que uma var é um JSON, temos que colocar um [].

* Exemplo:

Para o JS é um objeto:

var carro = {
    "portas": 4,
    "potencia": 1.5,
    "valvulas": 16,
}

* No JSON, ele consegue quebrar o que e texto(string) do que valor pelo caracter **'':''**

* Sempre utilize **"**, para JSON dentro dos colchetes, para as (strings).

* Sempre será simples, um texto e um valor.

* Pode armazenar multiplos valores, é algo muito utilizado, tipo especial JSON.
-----------------------------------------

* Muitas vezes vai estar misturado inglês com português nma (string), é ele recebe os valores de **true e false** 

var carro = {
    "estaOcupada": true/sim or false/não
    
}

-----------------------------------------

####Function:

console.log(estacionamento)

function soma(){
    var a=2;
    var b=1;

    return a+b;
}

console.log(soma());

-----------------------------------------
* return: Retorna, os valores como soma.

 _return: a+b_

**return seria: soma = a+b**

function soma(){

    return a+b;
}

console.log(soma(3,2));


-----------------------------------------

####Switchcase: 

* case: Estou dizendo que caso algo, e sempre que trabalhar com **case**, colocar um break, se não ele irá executar todos os passos.

* break: Se não colocar os breaks, ele executa até achar um break, ou até terminar, isso pode acarretar um problema. **Então sempre colocar os breaks no switchcase.**

* Ele não executa linha por linha, então não tem uma ordem, pode ser em qualquer ordem.

-----------------------------------------

######Escopo:

function soma(){
    var a=2;
    var b=1;

    return a+b;
}

_Acima tudo é um escopo_. 

* Usamos * **let** no lugar de **var**, para que não ocupe tanta a memoria e a _let_ e idividual somente para um escopo exclusivo.


* const: É uma constante, aplicavel em valores que não irão mudar, usaremos sempre em maiusculo depois do const.

A const também é de forma global, sempre falamos de valores que não vão mudar, para que não se repita sempre no codígo, ele não é uma parte completa é somente uma parte.

**_const SOMA = '+'_**
**_const SOMA_PARA O LADO = '+'_**

-----------------------------------------





