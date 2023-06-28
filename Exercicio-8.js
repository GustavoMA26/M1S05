/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

function calculadora(numero1, numero2, operacao) {
    if (operacao === "+") {
        return (numero1 + numero2)
    } else if (operacao === "-") {
        return (numero1 - numero2)
    } else if (operacao === "*") {
        return (numero1 * numero2)
    } else if (operacao ==="/") {
        return (numero1 / numero2)
    } else {
        console.log("Esta operação não é válida")
    }
};
console.log(calculadora (10,3,"*"))