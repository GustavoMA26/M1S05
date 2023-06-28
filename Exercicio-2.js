/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

let cor = "Verde";

switch(cor) {
    case "Azul":
        console.log("Blue");
        break;
    case "Amarelo":
        console.log("Yellow");
        break;
    case "Marrom":
        console.log("Brown");
        break;
    case "Cinza":
        console.log("Grey");
        break;
    case "Laranja":
        console.log("Orange");
        break;
    case "Verde":
        console.log("Green")
        break;
    default:
        console.log("Não temos estas cor disponível na paleta!")
}