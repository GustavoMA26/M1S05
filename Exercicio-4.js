/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let inicial=0, penultimo=1, ultimo=0;
let numero = 35;

while (inicial < numero) {
    console.log(inicial)
    ultimo = inicial + penultimo;
    inicial = penultimo;
    penultimo = ultimo;
}
console.log("Sequência de Fibonacci até o nº:", numero)