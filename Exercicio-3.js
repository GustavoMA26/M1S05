/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

let ehPrimo;

do {
    let numero1 = 7;

    if (numero1 > 0 && Number.isInteger(numero1)) {

        if (numero1 === 1) {
            let ehPrimo = false;
        } else {
            let ehprimo = true;
        }

        for (i=2; i < numero1; i++) {
            if (numero1 % i === 0) {
                console.log(numero1," > Não é um número primo!")
                break;
            } else {
                console.log(numero1," > É um número primo!")
                break;
            }
        }
    } else {
        console.log("O número deve ser inteiro e positivo para realizar a verificação.")
    }
} while (ehPrimo =false);


























