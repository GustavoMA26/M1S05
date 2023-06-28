/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */
// let produtos = ['teclado', 'tela', 'mouse', 'monitor', 'memoria']

let produtos = [
    {
        componente: "Teclado",
        preço: 1.0
    },
    {
        componente: "Tela",
        preço: 2.0
    },
    {
        componente: "Mouse",
        preço: 3.0
    },
    {
        componente: "Monitor",
        preço: 4.0
    },
    {
        componente: "Memoria",
        preço: 5.0
    }
]

let result = 0;

produtos.forEach(produtos => {
    result += produtos.preço;
    console.log(`O produto ${produtos.componente} possui um preço de ${produtos.preço} reais.`)
});
console.log("A quantidade total de todos os produtos é: ", produtos.length)
console.log("O valor total em reais de todos os produtos é: ",result)