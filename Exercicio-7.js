/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */

let produtos = ['teclado', 'tela', 'mouse', 'monitor', 'memoria'];

//Adiciona o elemento ao final do array
        function adicionarElemento() {
            produtos.push("headset");
        }

        //Remove o último elemento do array e retorna o removido
        function removerUltimoElemento() {
            produtos.pop();
        }

        //Remove os elementos compreendidos e retorna atualizado
        function removerElementosIntervalo() {
            let produtosSelecionados = produtos.slice(1, 4);
            return produtosSelecionados;
        }

    adicionarElemento();
    console.log(produtos);
    removerUltimoElemento();
    console.log(produtos);
    let produtosSelecionados = removerElementosIntervalo();
    console.log(produtosSelecionados);



