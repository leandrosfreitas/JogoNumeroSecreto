# 🎲 Jogo do Número Secreto

Este documento descreve o funcionamento do script em JavaScript que implementa um jogo simples chamado "Jogo do Número Secreto".

## 📌 Descrição

O jogo gera um número secreto aleatório e desafia o jogador a adivinhá-lo. A cada tentativa, o jogo informa se o número secreto é maior ou menor que o número escolhido pelo jogador. O jogo continua até que o número correto seja descoberto.

## 🚀 Funcionalidades

- Gera um número secreto aleatório entre 1 e um número limite.
- Permite ao jogador inserir tentativas para adivinhar o número.
- Fornece dicas sobre se o número secreto é maior ou menor.
- Conta o número de tentativas até o acerto.
- Utiliza síntese de voz para exibir mensagens ao usuário.
- Reinicia o jogo automaticamente quando o jogador vence.

## 🛠️ Explicação do Funcionamento

O jogo começa exibindo uma mensagem inicial com instruções para o jogador. Em seguida, ele gera um número aleatório dentro de um limite pré-definido e aguarda que o usuário insira um número na caixa de entrada.

Cada vez que o jogador faz uma tentativa, o jogo verifica se o número inserido corresponde ao número secreto:

- Se o jogador acertar, o jogo exibe uma mensagem de vitória informando o número de tentativas usadas e habilita o botão para reiniciar o jogo.
- Se o número for maior que o número secreto, o jogo informa que o número correto é menor.
- Se o número for menor, o jogo informa que o número correto é maior.

O jogo também mantém um histórico dos números já sorteados para evitar repetições. Caso todos os números possíveis tenham sido utilizados, a lista é resetada.

Quando o jogador decide reiniciar o jogo, um novo número aleatório é gerado e as tentativas são zeradas, permitindo uma nova rodada.

## 🎮 Como Jogar

1. Insira um número na caixa de entrada.
2. Pressione o botão para verificar sua tentativa.
3. O jogo informará se o número é maior ou menor.
4. Continue tentando até acertar!
5. Ao vencer, clique no botão para reiniciar o jogo.

## 📌 Conclusão

Este jogo é uma implementação simples de lógica de programação utilizando JavaScript e manipulação do DOM. Ele pode ser aprimorado com mais funcionalidades, como níveis de dificuldade e cronômetro.

🚀 Divirta-se jogando! 🎯
