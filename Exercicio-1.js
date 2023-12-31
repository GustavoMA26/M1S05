/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */

let idade = 15;

if (idade <= 12) {
    console.log("Categoria: Criança")
} else if (idade >= 13 && idade <= 17) {
    console.log("Categoria: Adolescente")
} else if (idade >= 18 && idade <= 59) {
    console.log("Categoria: Adulto")
} else {
    console.log("Categoria: Idoso")
}