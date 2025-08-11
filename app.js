// Lista para armazenar números já sorteados (evita repetição)
let listaDeNumerosSorteados = [];
let numeroLimite = 100; // Valor máximo para o sorteio
let numeroSecreto = gerarNumeroAleatorio(); // Número que o jogador precisa adivinhar
let tentativas = 1; // Contador de tentativas

// Exibe texto no HTML e também fala o texto usando a API ResponsiveVoice
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona elemento pela tag
    campo.innerHTML = texto; // Insere o texto no elemento
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // Fala o texto
}

// Exibe título e mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

// Chamada inicial para mostrar mensagem de boas-vindas
exibirMensagemInicial();

// Função chamada ao clicar no botão "Chutar"
function verificarChute() {
    let chute = document.querySelector('input').value; // Obtém valor digitado
    console.log(chute == numeroSecreto); // Log de depuração

    if (chute == numeroSecreto) { // Acertou
        exibirTextoNaTela('h1', 'Acertou.');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Plural ou singular
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita botão "Novo jogo"
    } else { // Errou
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor');
        } else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++; // Incrementa tentativas
        limparCampo(); // Limpa campo de entrada
    }
}

// Gera um número aleatório único, evitando repetição até atingir o limite
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Sorteia número entre 1 e numeroLimite
    let quantElemlista = listaDeNumerosSorteados.length;

    if (quantElemlista == numeroLimite) { // Se já sorteou todos os números possíveis
        listaDeNumerosSorteados = []; // Reinicia lista
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // Já foi sorteado antes
        return gerarNumeroAleatorio(); // Chama recursivamente para gerar outro
    } else { // Número novo
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados); // Log de depuração
        return numeroEscolhido;
    }
}

// Limpa o valor do campo de input
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// Reinicia o jogo com novo número e reset de variáveis
function reiniciarJogo(params) {
    numeroSecreto = gerarNumeroAleatorio(); // Novo número
    limparCampo(); // Limpa campo
    tentativas = 1; // Zera tentativas
    exibirMensagemInicial(); // Mostra mensagem inicial
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desativa botão "Novo jogo"
}
