# O que é GitFlow e como ele é utilizado

O GitFlow é um **modelo de fluxo de trabalho para o controle de versão com o Git**.

Ele define uma estrutura e uma série de diretrizes para organizar o desenvolvimento de software em equipes colaborativas, seja qual for a ação de um projeto, como incluir uma nova funcionalidade, corrigir um simples bug ou até mesmo o etiquetamento de uma nova versão.

Abaixo, uma imagem de como funciona a estrutura de GitFlow.
![Estrutura de GitFlow](https://lh3.googleusercontent.com/70jaEZnESXQ6SssU5uI4yO62JBz6xq2sNrrz8bW_ap2CuWUaQlbKs3j6NyRJnvcvYwAugkW8WzNJX21dZ2SMd9O_1TTpKZT-FsBkYSPy4rUSpJSo2C-WPTaLc2jQ8ancyj1TetXQ)

O Git Flow utiliza diferentes branches para organizar o desenvolvimento de um projeto. Existem cinco branches principais no Git Flow:

1. Branch Main/Master: Essa é a branch principal do projeto e contém as versões de publicação. É a versão que está em produção e é acessível para facilitar a busca por versões antigas.

2. Branch Develop: Essa branch é uma cópia da branch principal e contém os últimos desenvolvimentos. É a base para o desenvolvimento de novas funcionalidades.

3. Branch Feature: Essa é uma branch temporária e auxiliar que contém uma nova funcionalidade específica para a aplicação. Cada nova feature começa e termina a partir da branch Develop.

4. Branch Hotfix: Essa também é uma branch auxiliar e temporária, utilizada para corrigir problemas no ambiente de produção. A correção é mesclada nas branches Main/Master e Develop para evitar a perda de código.

5. Branch Release: Essa é a branch de lançamento do programa. Nela, as funcionalidades prontas da branch de desenvolvimento são mescladas na branch principal. Também é criada uma nova versão etiquetada no projeto para registrar o histórico completo do desenvolvimento.